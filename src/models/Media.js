

//http://localhost:8100/rets/media

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var MediaSchema = new Schema({
    listing_id: { type: String },   //L_ListingID
    media_url: {type: String},      //MED_media_url,
    lattitude: {type: String},      //LMD_MP_Latitude
    longitude: {type: String},      //LMD_MP_Longitude
    zoom_level: {type: String},     //LMD_MP_ZoomLevel
    properties: [{type: Schema.Types.ObjectId, ref: 'Property'}] 
});

var Media = mongoose.model('Media', MediaSchema);

module.exports = Media;