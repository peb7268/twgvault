
var express  = require('express');
var path     = require('path')

var rets     = require('rets-client');
var through2 = require('through2');
var Promise  = require('bluebird');

var app      = express();

//Middleware
app.use(express.static(path.resolve(__dirname, "www")));
app.set('port', process.env.PORT || 8100);

//Configs
//http://gamls.rets.reinsightmls.com/RetsServer/Login/index.rails
// un: dartnell
// pw: kks365
var clientSettings = {
    loginUrl: 'https://gamls-rets.paragonrels.com/rets/fnisrets.aspx/GAMLS/login?rets-version=rets/1.7.2',
    username: 'WHITMIRE',
    password: 'K5KS36',
    version: 'RETS/1.7.2',
    userAgent: 'RETS node-client/4.x',
    method: 'GET'  // this is the default, or for some servers you may want 'POST'
};

//Helpers
function outputFields(obj, opts) {
    if (!obj) {
      console.log("      "+JSON.stringify(obj))
    } else {
      if (!opts) opts = {};
  
      var excludeFields;
      var loopFields;
      if (opts.exclude) {
        excludeFields = opts.exclude;
        loopFields = Object.keys(obj);
      } else if (opts.fields) {
        loopFields = opts.fields;
        excludeFields = [];
      } else {
        loopFields = Object.keys(obj);
        excludeFields = [];
      }
      for (var i = 0; i < loopFields.length; i++) {
        if (excludeFields.indexOf(loopFields[i]) != -1) {
          continue;
        }
        if (typeof(obj[loopFields[i]]) == 'object') {
          console.log("      " + loopFields[i] + ": " + JSON.stringify(obj[loopFields[i]], null, 2).replace(/\n/g, '\n      '));
        } else {
          console.log("      " + loopFields[i] + ": " + JSON.stringify(obj[loopFields[i]]));
        }
      }
    }
    console.log("");
  }


  // this function doesn't do much, it's just a placeholder for whatever you want to do with the results 
function doAsyncProcessing(row, index, callback) {
  console.log("-------- Result " + index + " --------");
  outputFields(row);
  // must be sure callback is called when this is done
  callback();
}

app.route('/rets')
.get((req, res) => {
    console.log('fetching rets data');

    // establish connection to RETS server which auto-logs out when we're done
    rets.getAutoLogoutClient(clientSettings, function (client) {
        // in order to have the auto-logout function work properly, we need to make a promise that either rejects or
        // resolves only once we're done processing the stream
        return new Promise(function (resolve, reject) {
        console.log("====================================");
        console.log("========  Streamed Results  ========");
        console.log("====================================");
        
        //https://www.flexmls.com/developers/rets/tutorials/dmql-tutorial/
        var count = 0;
        var streamResult = client.search.stream.query("Property", "SD_1", "(ListDate=1990-01-01+)", {limit:10, offset:4});
        var processorStream = through2.obj(function (event, encoding, callback) {
            switch (event.type) {
            case 'headerInfo':
                console.log('   ~~~~~~~~~ Header Info ~~~~~~~~~');
                outputFields(event.payload);
                callback();
                break;
            case 'data':
                // event.payload is an object representing a single row of results
                // make sure callback is called only when all processing is complete
                count++;
                doAsyncProcessing(event.payload, count, callback);
                break;
            case 'done':
                // event.payload is an object containing a count of rows actually received, plus some other things
                // now we can resolve the auto-logout promise
                resolve(event.payload.rowsReceived);
                callback();
                break;
            case 'error':
                // event.payload is an Error object
                console.log('Error streaming RETS results: '+event.payload);
                streamResult.retsStream.unpipe(processorStream);
                processorStream.end();
                // we need to reject the auto-logout promise
                reject(event.payload);
                callback();
                break;
            default:
                // ignore other events
                callback();
            }
        });
        streamResult.retsStream.pipe(processorStream);
        });
    
    }).catch(function (errorInfo) {
        var error = errorInfo.error || errorInfo;
        console.log("   ERROR: issue encountered:");
        outputFields(error);
        console.log('   '+(error.stack||error).replace(/\n/g, '\n   '));
        res.status(400).json(error)
    });
});


//Bind to port
app.listen(app.get('port'), function() {
    console.log('listening to Port', app.get('port'));
});