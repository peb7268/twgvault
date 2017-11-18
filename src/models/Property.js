
////http://localhost:8100/rets/property

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PropertySchema = new Schema({
  listing_id: { type: String },     //L_ListingID
  asking_price: {type: String},     //L_AskingPrice
  street_number: {type: String},    //L_AddressNumber
  street_name: {type: String},      //L_AddressStreet
  address_2: {type: String},        //L_Address2
  city: {type: String},             //L_City
  state: {type: String},            //L_State
  zip: {type: String},              //L_Zip
  status: {type: String},           //L_StatusCatID
  list_date: {type: String},        //L_ListingDate
  original_price: {type: String},   //L_OriginalPrice
  year_built: {type: Number },      //LM_Int2_1
  full_baths: {type: Number},       //LM_Int4_5
  half_baths: {type: Number},       //LM_Int4_6
  beds: {type: Number },            //LM_Int4_7
  class: {type: String},            //L_Class - single family dwelling ect..
  media: [{type: Schema.Types.ObjectId, ref: 'Media'}]  //Populate it with matching media documents - is the type going to be the media listing_ID or the media ObjectId?
});


var Property = mongoose.model('Property', PropertySchema);

module.exports = Property;

/**
 * 
SystemName	StandardName	Description	Type	Length	Lookup
L_ListingID Searchable Field Key Field	ListingID	System ID	Int	10	
L_Class		Class	Small	3	Values
L_Type_ Searchable Field	Type	Property Type	Small	5	Values
L_Area Searchable Field	ListingArea	Area	Small	5	Values
L_SystemPrice Searchable Field		Search Price	Int	10	
L_AskingPrice Searchable Field	ListPrice	List Price	Int	10	
L_AddressNumber Searchable Field	StreetNumber	Address Number	Character	15	
L_AddressSearchNumber Searchable Field		Address Search Number	Int	10	
L_AddressDirection Searchable Field	StreetDirPrefix	Address Direction	Character	2	
L_AddressStreet Searchable Field	StreetName	Address Street	Character	50	
L_Address2 Searchable Field	UnitNumber	Unit/Lot Number	Character	50	
L_City Searchable Field	City	City	Character	50	
L_State Searchable Field	State	State	Character	2	Values
L_Zip Searchable Field	PostalCode	Zip	Character	20	
L_StatusCatID Searchable Field	ListingStatus	Status Category	Small	3	Values
L_StatusID		Status Detail	Character	1	
L_SaleRent Searchable Field		Sale/Rent	Character	1	Values
L_NumAcres Searchable Field	LotSizeArea	Acreage	Decimal	19	
L_ListAgent1 Searchable Field		List Agent	Int	10	
L_ListOffice1 Searchable Field		Listing Office	Small	5	
L_ListAgent2 Searchable Field		List Agent 2	Int	10	
L_ListOffice2 Searchable Field		List Office 2	Small	5	
L_ListingDate Searchable Field	ListDate	List Date	Date	10	
L_ExpirationDate Searchable Field	ExpirationDate	Expire Date	Date	10	
L_OriginalPrice Searchable Field	OriginalListPrice	Original List Price	Int	10	
L_HowSold		Financing Type	Small	3	Values
L_ContractDate Searchable Field	ContractDate	Contract Date	Date	10	
L_ClosingDate Searchable Field	CloseDate	Closed Date	Date	10	
L_SoldPrice Searchable Field	ClosePrice	Sold Price	Int	10	
L_SellingAgent1 Searchable Field		Selling Agent	Int	10	
L_SellingOffice1 Searchable Field		Selling Office	Small	5	
L_HotSheetDate Searchable Field		HotSheet Date	Date	10	
L_StatusDate Searchable Field	StatusChangeDate	Status Date	Date	10	
L_PriceDate Searchable Field		Price Date	Date	10	
L_InputDate Searchable Field		LDR	DateTime	19	
L_UpdateDate Searchable Field	ModificationTimestamp	Update Date	DateTime	19	
L_PictureCount Searchable Field		Photo Count	Int	10	
L_Last_Photo_updt Searchable Field		PhotoTimestamp	DateTime	19	
L_OffMarketDate Searchable Field		Off Market Date	Date	10	
L_listings_associated_doc_count		Associated Document Count	Int	10	
L_DisplayId Searchable Field		Listing #	Character	15	
LMD_MP_Latitude Searchable Field	Latitude	Geo Latitude	Decimal	18	
LMD_MP_Longitude Searchable Field	Longitude	Geo Longitude	Decimal	19	
LMD_MP_Quality Searchable Field		Geo Quality	Decimal	12	
LMD_MP_ZoomLevel Searchable Field		Geo Zoom Level	Decimal	2	
LMD_MP_AddressLine Searchable Field		Geo Address Line	Character	255	
LMD_MP_PrimaryCity Searchable Field		Geo Primary City	Character	100	
LMD_MP_SecondaryCity Searchable Field		Geo Secondary City	Character	100	
LMD_MP_Subdivision Searchable Field		Geo Subdivision	Character	2	
LMD_MP_PostalCode Searchable Field		Geo Postal Code	Character	10	
LMD_MP_MatchCode Searchable Field		Geo Match Code	Small	3	
LMD_MP_MatchedMethod Searchable Field		Geo Matched Method	Small	3	
LMD_MP_UpdateDate Searchable Field		Geo Update Timestamp	DateTime	19	
L_FirstPhotoAddDt Searchable Field		First Photo Add Timestamp	DateTime	19	
L_ListingsOffMarketStatusDate Searchable Field		Off Market Status Date	Date	10	
L_LvtDate Searchable Field		LVT Date	Date	10	
L_Address		Address	Character	100	
L_Status Searchable Field		Status	Character	5	Values
L_DOM	DaysOnMarket	DOM	Int	10	
L_DOMLS		DOMLS	Int	10	
L_PricePerSQFT		Price Per SQFT	Decimal	11	
LM_Char1_1 Searchable Field		BuyerAgencyCompType	Character	1	Values
LM_Char1_3 Searchable Field		BILW	Character	1	
LM_Char1_14 Searchable Field		ES Bus	Character	1	Values
LM_Char10_3 Searchable Field	County	County	Character	10	Values
LM_Char10_4 Searchable Field		Update Source	Character	10	Values
LM_Char10_5 Searchable Field		Deed Book	Character	10	
LM_Char10_6 Searchable Field		Deed Page	Character	10	
LM_Char10_7 Searchable Field		List Agreement Type	Character	10	Values
LM_Char10_8 Searchable Field		MATCH_CODE	Character	10	
LM_Char10_9 Searchable Field		Market Code	Character	10	Values
LM_Char10_11 Searchable Field		Plat Page	Character	10	
LM_Char10_12 Searchable Field		Plat Book	Character	10	
LM_Char10_14 Searchable Field		Acreage Source	Character	10	Values
LM_Char10_15 Searchable Field		Variable Rate Commission	Character	10	Values
LM_Char10_17 Searchable Field		Construction Status	Character	10	Values
LM_Char10_18 Searchable Field		SQFT Source	Character	10	Values
LM_Char10_19 Searchable Field	ElementarySchool	Elem School	Character	10	Values
LM_Char10_20 Searchable Field	HighSchool	High School	Character	10	Values
LM_Char10_21 Searchable Field	MiddleSchool	Middle School	Character	10	Values
LM_Char10_22 Searchable Field		Home Warranty Paid	Character	10	Values
LM_Char10_24 Searchable Field		Ownership	Character	10	Values
LM_Char25_1 Searchable Field	ListingKey	REInsightKey	Character	25	
LM_Char25_3 Searchable Field		ER 1 ID	Character	25	
LM_Char25_4 Searchable Field		ER 1 Source	Character	25	
LM_Char25_5 Searchable Field		ER 2 ID	Character	25	
LM_Char25_6 Searchable Field		ER 2 Source	Character	25	
LM_Char25_9 Searchable Field	LotSizeDim	Lot Dimensions	Character	25	
LM_Char25_11 Searchable Field		Latitude	Character	25	
LM_Char25_12 Searchable Field		Longitude	Character	25	
LM_Char50_1 Searchable Field		REInsight FIPS	Character	50	
LM_Char50_2 Searchable Field		Owner Phone	Character	50	
LM_Char50_3 Searchable Field	ParcelNumber	Tax ID	Character	50	
LM_Char50_5 Searchable Field	Subdivision	Subdivision	Character	50	
LM_Int1_1 Searchable Field	Fireplaces	Total Fireplaces	Small	3	
LM_Int1_2 Searchable Field		BAF Lower	Small	3	
LM_Int1_3 Searchable Field		BAF Main	Small	3	
LM_Int1_4 Searchable Field		BAF Upper	Small	3	
LM_Int1_5 Searchable Field		BAH Lower	Small	3	
LM_Int1_6 Searchable Field		BAH Main	Small	3	
LM_Int1_7 Searchable Field		BAH Upper	Small	3	
LM_Int1_8 Searchable Field		BR Lower	Small	3	
LM_Int1_9 Searchable Field		BR Main	Small	3	
LM_Int1_10 Searchable Field		BR Upper	Small	3	
LM_Int2_1 Searchable Field	YearBuilt	Year Built	Small	5	
LM_Int2_2 Searchable Field		Tax Year	Small	5	
LM_Int4_1 Searchable Field		Selling Agent License	Int	10	
LM_Int4_2 Searchable Field		Selling Office License	Int	10	
LM_Int4_3 Searchable Field		Sellers Contribution	Int	10	
LM_Int4_4 Searchable Field	AssociationFee	Annual Association Fee	Int	10	
LM_Int4_5 Searchable Field	BathsFull	Baths Full	Int	10	
LM_Int4_6 Searchable Field	BathsHalf	Baths Half	Int	10	
LM_Int4_7 Searchable Field	Beds	Bedrooms	Int	10	
LM_Int4_9 Searchable Field		Total Finished Area	Int	10	
LM_Int4_10 Searchable Field	WaterFront	Waterfront Footage	Int	10	
LM_Int4_11 Searchable Field		Above Grade Finished	Int	10	
LM_Int4_12 Searchable Field		Below Grade Finished	Int	10	
LM_Int4_13 Searchable Field		Below Grade Unfinished	Int	10	
LM_Dec_7 Searchable Field		Initiation Fee	Decimal	18	
LM_Dec_8 Searchable Field		Taxes	Decimal	18	
LM_Dec_10 Searchable Field		BuyerAgencyCompensation	Decimal	18	
LM_DateTime_1 Searchable Field		Due Diligence Date	Date	10	
LM_DateTime_3 Searchable Field		GEO_UPDATE_DATE	Date	10	
LM_char1_25 Searchable Field		HS Bus	Character	1	Values
LM_char1_26 Searchable Field		MS Bus	Character	1	Values
LM_char1_28 Searchable Field		Photo Available	Character	1	Values
LM_char1_44 Searchable Field		Virtual Tour Available	Character	1	Values
LM_char1_45 Searchable Field		Input Source	Character	1	Values
LM_char1_47 Searchable Field		Photo	Character	1	Values
LM_char5_1 Searchable Field		Unit	Character	5	
LM_char5_7 Searchable Field		Block	Character	5	
LM_char5_11 Searchable Field		District	Character	5	
LM_char5_19 Searchable Field		HOW_CODED	Character	5	
LM_char5_25 Searchable Field		Land Lot	Character	5	
LM_char5_26 Searchable Field		Lot	Character	5	
LM_char5_31 Searchable Field		Quadrant	Character	5	
LM_char5_33 Searchable Field		Section	Character	5	
LM_char30_1 Searchable Field		Owner Name	Character	30	
LM_char255_1 Searchable Field		Private URL	Character	255	
LM_DateTime_6 Searchable Field		Return To Market Date	Date	10	
VT_VTourURL		Virtual Tour (Unbranded)	Character	255	
VT_ExtVTourURL1		Virtual Tour (Branded)	Character	255	
T_tax_db_id		Tax Database ID	Small	3	
T_list_tax_property_id		Tax Property ID	Character	50	
LFD_Accessibility_1 Searchable Field		Accessibility	Int	10	Values
LFD_Amenities_2 Searchable Field		Amenities	Int	10	Values
LFD_Basement_3 Searchable Field	Basement	Basement	Int	10	Values
LFD_BoathouseDock_4 Searchable Field		Boathouse/Dock	Int	10	Values
LFD_Construction_5 Searchable Field		Construction	Int	10	Values
LFD_CoolingSource_6 Searchable Field		Cooling Source	Int	10	Values
LFD_CoolingType_7 Searchable Field	Cooling	Cooling Type	Int	10	Values
LFD_DateofPossession_8 Searchable Field		Date of Possession	Int	10	Values
LFD_EnergyRelated_9 Searchable Field		Energy Related	Int	10	Values
LFD_Equipment_10 Searchable Field		Equipment	Int	10	Values
LFD_Exterior_11 Searchable Field	Exterior	Exterior	Int	10	Values
LFD_FeesInclude_12 Searchable Field	OwnerPays	Fees Include	Int	10	Values
LFD_FireplaceLocation_13 Searchable Field		Fireplace Location	Int	10	Values
LFD_FireplaceType_14 Searchable Field		Fireplace Type	Int	10	Values
LFD_HeatingSource_15 Searchable Field		Heating Source	Int	10	Values
LFD_HeatingType_16 Searchable Field	Heating	Heating Type	Int	10	Values
LFD_Interior_17 Searchable Field	InteriorFeatures	Interior	Int	10	Values
LFD_KitchenEquipment_18 Searchable Field		Kitchen Equipment	Int	10	Values
LFD_KitchenBreakfast_19 Searchable Field		Kitchen/Breakfast	Int	10	Values
LFD_LaundryType_20 Searchable Field	Laundry	Laundry Type	Int	10	Values
LFD_LotDescription_21 Searchable Field		Lot Description	Int	10	Values
LFD_LotSize_22 Searchable Field		Lot Size	Int	10	Values
LFD_Parking_23 Searchable Field	OpenParking	Parking	Int	10	Values
LFD_PossibleFinancing_24 Searchable Field		Possible Financing	Int	10	Values
LFD_PropertySetting_25 Searchable Field	View	Property Setting	Int	10	Values
LFD_RoofType_26 Searchable Field	Roof	Roof Type	Int	10	Values
LFD_Rooms_27 Searchable Field		Rooms	Int	10	Values
LFD_ShowingInstructions_28 Searchable Field	ShowingInstructions	Showing Instructions	Int	10	Values
LFD_SpecialConditions_29 Searchable Field		Special Conditions	Int	10	Values
LFD_Stories_30 Searchable Field	Stories	Stories	Int	10	Values
LFD_Style_31 Searchable Field	Style	Style	Int	10	Values
LFD_WaterDescription_32 Searchable Field		Water Description	Int	10	Values
LFD_WaterSewer_33 Searchable Field		Water/Sewer	Int	10	Values
LFD_LaundryLocation_217 Searchable Field		Laundry Location	Int	10	Values
LR_remarks11	Directions	Directions	Character	256	
LR_remarks22		Office Remarks	Character	192	
LR_remarks33		Private Remarks	Character	320	
LR_remarks55	PublicRemarks	Public Remarks	Character	768	
LR_remarks66		Feature Name	Character	255	
LA1_LoginName Searchable Field		LA1Agent Logon Name	Character	20	
LA1_HiddenUsCID Searchable Field		LA1Agent Type	Small	3	Values
LA1_UserFirstName Searchable Field		LA1Agent First Name	Character	50	
LA1_UserLastName Searchable Field		LA1Agent Last Name	Character	50	
LA1_UserMI Searchable Field		LA1Agent Middle Initial	Character	1	
LA1_AddressStreet Searchable Field		LA1AgentAddressStreetName	Character	50	
LA1_Address2 Searchable Field		LA1Agent Address2	Character	50	
LA1_City Searchable Field		LA1Agent City	Character	50	
LA1_State Searchable Field		LA1Agent State	Character	2	Values
LA1_Zip Searchable Field		LA1Agent Zip	Character	20	
LA1_PhoneNumber1Desc Searchable Field		LA1AgentPhone1Description	Character	5	
LA1_PhoneNumber1CountryCodeId  Searchable Field		LA1Agent Phone1 CountryId	Small	10	Values
LA1_PhoneNumber1 Searchable Field		LA1Agent Phone1 Number	Character	30	
LA1_PhoneNumber1Ext Searchable Field		LA1Agent Phone1 Extension	Character	5	
LA1_PhoneNumber2Desc Searchable Field		LA1AgentPhone2Description	Character	5	
LA1_PhoneNumber2CountryCodeId  Searchable Field		LA1Agent Phone2 CountryId	Small	10	Values
LA1_PhoneNumber2 Searchable Field		LA1Agent Phone2 Number	Character	30	
LA1_PhoneNumber2Ext Searchable Field		LA1Agent Phone2 Extension	Character	5	
LA1_PhoneNumber3Desc Searchable Field		LA1AgentPhone3Description	Character	5	
LA1_PhoneNumber3CountryCodeId  Searchable Field		LA1Agent Phone3 CountryId	Small	10	Values
LA1_PhoneNumber3 Searchable Field		LA1Agent Phone3 Number	Character	30	
LA1_PhoneNumber3Ext Searchable Field		LA1Agent Phone3 Extension	Character	5	
LA1_PhoneNumber4Desc Searchable Field		LA1AgentPhone4Description	Character	5	
LA1_PhoneNumber4CountryCodeId  Searchable Field		LA1Agent Phone4 CountryId	Small	10	Values
LA1_PhoneNumber4 Searchable Field		LA1Agent Phone4 Number	Character	30	
LA1_PhoneNumber4Ext Searchable Field		LA1Agent Phone4 Extension	Character	5	
LA1_PhoneNumber5Desc Searchable Field		LA1AgentPhone5Description	Character	5	
LA1_PhoneNumber5CountryCodeId  Searchable Field		LA1Agent Phone5 CountryId	Small	10	Values
LA1_PhoneNumber5 Searchable Field		LA1Agent Phone5 Number	Character	30	
LA1_PhoneNumber5Ext Searchable Field		LA1Agent Phone5 Extension	Character	5	
LA1_Email Searchable Field		LA1Agent Email	Character	50	
LA1_WebPage Searchable Field		LA1Agent Url	Character	80	
LA1_Status Searchable Field		LA1Agent Status	Character	1	Values
LA1_AgentID Searchable Field		LA1User Code	Character	20	
LA1_Char10_1 Searchable Field		LA1Member Number	Character	10	
LA1_Char50_1 Searchable Field		LA1Office Number	Character	50	
LA2_LoginName Searchable Field		LA2Agent Logon Name	Character	20	
LA2_HiddenUsCID Searchable Field		LA2Agent Type	Small	3	Values
LA2_UserFirstName Searchable Field		LA2Agent First Name	Character	50	
LA2_UserLastName Searchable Field		LA2Agent Last Name	Character	50	
LA2_UserMI Searchable Field		LA2Agent Middle Initial	Character	1	
LA2_AddressStreet Searchable Field		LA2AgentAddressStreetName	Character	50	
LA2_Address2 Searchable Field		LA2Agent Address2	Character	50	
LA2_City Searchable Field		LA2Agent City	Character	50	
LA2_State Searchable Field		LA2Agent State	Character	2	Values
LA2_Zip Searchable Field		LA2Agent Zip	Character	20	
LA2_PhoneNumber1Desc Searchable Field		LA2AgentPhone1Description	Character	5	
LA2_PhoneNumber1CountryCodeId  Searchable Field		LA2Agent Phone1 CountryId	Small	10	Values
LA2_PhoneNumber1 Searchable Field		LA2Agent Phone1 Number	Character	30	
LA2_PhoneNumber1Ext Searchable Field		LA2Agent Phone1 Extension	Character	5	
LA2_PhoneNumber2Desc Searchable Field		LA2AgentPhone2Description	Character	5	
LA2_PhoneNumber2CountryCodeId  Searchable Field		LA2Agent Phone2 CountryId	Small	10	Values
LA2_PhoneNumber2 Searchable Field		LA2Agent Phone2 Number	Character	30	
LA2_PhoneNumber2Ext Searchable Field		LA2Agent Phone2 Extension	Character	5	
LA2_PhoneNumber3Desc Searchable Field		LA2AgentPhone3Description	Character	5	
LA2_PhoneNumber3CountryCodeId  Searchable Field		LA2Agent Phone3 CountryId	Small	10	Values
LA2_PhoneNumber3 Searchable Field		LA2Agent Phone3 Number	Character	30	
LA2_PhoneNumber3Ext Searchable Field		LA2Agent Phone3 Extension	Character	5	
LA2_PhoneNumber4Desc Searchable Field		LA2AgentPhone4Description	Character	5	
LA2_PhoneNumber4CountryCodeId  Searchable Field		LA2Agent Phone4 CountryId	Small	10	Values
LA2_PhoneNumber4 Searchable Field		LA2Agent Phone4 Number	Character	30	
LA2_PhoneNumber4Ext Searchable Field		LA2Agent Phone4 Extension	Character	5	
LA2_PhoneNumber5Desc Searchable Field		LA2AgentPhone5Description	Character	5	
LA2_PhoneNumber5CountryCodeId  Searchable Field		LA2Agent Phone5 CountryId	Small	10	Values
LA2_PhoneNumber5 Searchable Field		LA2Agent Phone5 Number	Character	30	
LA2_PhoneNumber5Ext Searchable Field		LA2Agent Phone5 Extension	Character	5	
LA2_Email Searchable Field		LA2Agent Email	Character	50	
LA2_WebPage Searchable Field		LA2Agent Url	Character	80	
LA2_Status Searchable Field		LA2Agent Status	Character	1	Values
LA2_Char10_1 Searchable Field		LA2Member Number	Character	10	
LA2_Char50_1 Searchable Field		LA2Office Number	Character	50	
SA1_LoginName Searchable Field		SA1Agent Logon Name	Character	20	
SA1_HiddenUsCID Searchable Field		SA1Agent Type	Small	3	Values
SA1_UserFirstName Searchable Field		SA1Agent First Name	Character	50	
SA1_UserLastName Searchable Field		SA1Agent Last Name	Character	50	
SA1_UserMI Searchable Field		SA1Agent Middle Initial	Character	1	
SA1_AddressStreet Searchable Field		SA1AgentAddressStreetName	Character	50	
SA1_Address2 Searchable Field		SA1Agent Address2	Character	50	
SA1_City Searchable Field		SA1Agent City	Character	50	
SA1_State Searchable Field		SA1Agent State	Character	2	Values
SA1_Zip Searchable Field		SA1Agent Zip	Character	20	
SA1_PhoneNumber1Desc Searchable Field		SA1AgentPhone1Description	Character	5	
SA1_PhoneNumber1CountryCodeId  Searchable Field		SA1Agent Phone1 CountryId	Small	10	Values
SA1_PhoneNumber1 Searchable Field		SA1Agent Phone1 Number	Character	30	
SA1_PhoneNumber1Ext Searchable Field		SA1Agent Phone1 Extension	Character	5	
SA1_PhoneNumber2Desc Searchable Field		SA1AgentPhone2Description	Character	5	
SA1_PhoneNumber2CountryCodeId  Searchable Field		SA1Agent Phone2 CountryId	Small	10	Values
SA1_PhoneNumber2 Searchable Field		SA1Agent Phone2 Number	Character	30	
SA1_PhoneNumber2Ext Searchable Field		SA1Agent Phone2 Extension	Character	5	
SA1_PhoneNumber3Desc Searchable Field		SA1AgentPhone3Description	Character	5	
SA1_PhoneNumber3CountryCodeId  Searchable Field		SA1Agent Phone3 CountryId	Small	10	Values
SA1_PhoneNumber3 Searchable Field		SA1Agent Phone3 Number	Character	30	
SA1_PhoneNumber3Ext Searchable Field		SA1Agent Phone3 Extension	Character	5	
SA1_PhoneNumber4Desc Searchable Field		SA1AgentPhone4Description	Character	5	
SA1_PhoneNumber4CountryCodeId  Searchable Field		SA1Agent Phone4 CountryId	Small	10	Values
SA1_PhoneNumber4 Searchable Field		SA1Agent Phone4 Number	Character	30	
SA1_PhoneNumber4Ext Searchable Field		SA1Agent Phone4 Extension	Character	5	
SA1_PhoneNumber5Desc Searchable Field		SA1AgentPhone5Description	Character	5	
SA1_PhoneNumber5CountryCodeId  Searchable Field		SA1Agent Phone5 CountryId	Small	10	Values
SA1_PhoneNumber5 Searchable Field		SA1Agent Phone5 Number	Character	30	
SA1_PhoneNumber5Ext Searchable Field		SA1Agent Phone5 Extension	Character	5	
SA1_Email Searchable Field		SA1Agent Email	Character	50	
SA1_WebPage Searchable Field		SA1Agent Url	Character	80	
SA1_Status Searchable Field		SA1Agent Status	Character	1	Values
SA1_Char10_1 Searchable Field		SA1Member Number	Character	10	
SA1_Char50_1 Searchable Field		SA1Office Number	Character	50	
LO1_HiddenOrgID Searchable Field		LO1Office Identifier	Int	10	
LO1_BranchOfOrgID Searchable Field		LO1Main Office ID	Int	10	
LO1_HiddenOtyID Searchable Field		LO1Office Type	Small	3	Values
LO1_ShortName Searchable Field		LO1Office Abbreviation	Character	25	
LO1_OrganizationName Searchable Field		LO1Office Name	Character	100	
LO1_OrgAddressStreet Searchable Field		LO1OffceAddressStreetName	Character	50	
LO1_OrgAddress2 Searchable Field		LO1Office Address2	Character	50	
LO1_OrgCity Searchable Field		LO1Office City	Character	50	
LO1_OrgState Searchable Field		LO1Office State	Character	2	Values
LO1_OrgZip Searchable Field		LO1Office Zip	Character	20	
LO1_PhoneNumber1Desc Searchable Field		LO1OfficePhone1Descriptin	Character	10	
LO1_PhoneNumber1CountryCodeId  Searchable Field		LO1OfficePhone1CountryId	Small	10	Values
LO1_PhoneNumber1 Searchable Field		LO1Office Phone1 Number	Character	30	
LO1_PhoneNumber1Ext Searchable Field		LO1OfficePhone1Extension	Character	5	
LO1_EMail Searchable Field		LO1Office Email	Character	50	
LO1_WebPage Searchable Field		LO1Office Url	Character	80	
LO1_board_id Searchable Field		LO1Board ID	Int	10	
LO1_Char10_1 Searchable Field		LO1Office Number	Character	10	
LO1_Char50_1 Searchable Field		LO1Corporate License	Character	50	
LO1_Int4_1 Searchable Field		LO1Firm ID	Int	10	
LO2_HiddenOrgID Searchable Field		LO2Office Identifier	Int	10	
LO2_BranchOfOrgID Searchable Field		LO2Main Office ID	Int	10	
LO2_HiddenOtyID Searchable Field		LO2Office Type	Small	3	Values
LO2_ShortName Searchable Field		LO2Office Abbreviation	Character	25	
LO2_OrganizationName Searchable Field		LO2Office Name	Character	100	
LO2_OrgAddressStreet Searchable Field		LO2OffceAddressStreetName	Character	50	
LO2_OrgAddress2 Searchable Field		LO2Office Address2	Character	50	
LO2_OrgCity Searchable Field		LO2Office City	Character	50	
LO2_OrgState Searchable Field		LO2Office State	Character	2	Values
LO2_OrgZip Searchable Field		LO2Office Zip	Character	20	
LO2_PhoneNumber1Desc Searchable Field		LO2OfficePhone1Descriptin	Character	10	
LO2_PhoneNumber1CountryCodeId  Searchable Field		LO2OfficePhone1CountryId	Small	10	Values
LO2_PhoneNumber1 Searchable Field		LO2Office Phone1 Number	Character	30	
LO2_PhoneNumber1Ext Searchable Field		LO2OfficePhone1Extension	Character	5	
LO2_EMail Searchable Field		LO2Office Email	Character	50	
LO2_WebPage Searchable Field		LO2Office Url	Character	80	
LO2_board_id Searchable Field		LO2Board ID	Int	10	
LO2_Char10_1 Searchable Field		LO2Office Number	Character	10	
LO2_Char50_1 Searchable Field		LO2Corporate License	Character	50	
LO2_Int4_1 Searchable Field		LO2Firm ID	Int	10	
SO1_HiddenOrgID Searchable Field		SO1Office Identifier	Int	10	
SO1_BranchOfOrgID Searchable Field		SO1Main Office ID	Int	10	
SO1_HiddenOtyID Searchable Field		SO1Office Type	Small	3	Values
SO1_ShortName Searchable Field		SO1Office Abbreviation	Character	25	
SO1_OrganizationName Searchable Field		SO1Office Name	Character	100	
SO1_OrgAddressStreet Searchable Field		SO1OffceAddressStreetName	Character	50	
SO1_OrgAddress2 Searchable Field		SO1Office Address2	Character	50	
SO1_OrgCity Searchable Field		SO1Office City	Character	50	
SO1_OrgState Searchable Field		SO1Office State	Character	2	Values
SO1_OrgZip Searchable Field		SO1Office Zip	Character	20	
SO1_PhoneNumber1Desc Searchable Field		SO1OfficePhone1Descriptin	Character	10	
SO1_PhoneNumber1CountryCodeId  Searchable Field		SO1OfficePhone1CountryId	Small	10	Values
SO1_PhoneNumber1 Searchable Field		SO1Office Phone1 Number	Character	30	
SO1_PhoneNumber1Ext Searchable Field		SO1OfficePhone1Extension	Character	5	
SO1_EMail Searchable Field		SO1Office Email	Character	50	
SO1_WebPage Searchable Field		SO1Office Url	Character	80	
SO1_board_id Searchable Field		SO1Board ID	Int	10	
SO1_Char10_1 Searchable Field		SO1Office Number	Character	10	
SO1_Char50_1 Searchable Field		SO1Corporate License	Character	50	
SO1_Int4_1 Searchable Field		SO1Firm ID	Int	10	
LV_vow_include Searchable Field		Share with Public Sites	Character	1	Values
LV_vow_address		Send Address to Public	Character	1	Values
LV_vow_comment		Allow additional comments	Character	1	Values
LV_vow_avm		Include in AVMs	Character	1	Values
L_IdxInclude Searchable Field		IDX Include	Character	1	Values
L_LastDocUpdate Searchable Field		Doc Timestamp	DateTime	19	
 */