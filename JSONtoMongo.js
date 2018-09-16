'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://Xinxin0407:Wxx123456789@ds111496.mlab.com:11496/xinxin0407');
var db = mongoose.connection;
  db.on( 'error', console.error.bind( console, 'connection error:' ) );
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 db.once("open", function(callback) {
     console.log("Connection succeeded.");
     var listingData = require( './listings.json' );
     Listing.find().remove();
     console.log("Hello world");
     var data = fs.readFileSync('listings.json', 'utf8');
     data = JSON.parse(data);
     console.log(data.entries.length);
     for(var i = 0; i < data.entries.length; i++) {
      //console.log("Hello world");
      new Listing(data.entries[i]).save();
    }
});
  
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */