/* Fill out these functions using Mongoose queries*/
var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne({name: "Library West"}, function (err, Listing) {
   	if (err) return handleError(err);
   	console.log("\nLibrary West's Data:\n"+Listing+"\n");
});
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({code:'CABL'},  function (err, Listing){
  	if (err) return handleError(err);
   	console.log("Deleted document :\n"+Listing+"\n");
   });
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.update({name: "Phelps Laboratory"}, {address: "1953 Museum Rd, Gainesville, FL 32603, United States"}, {multi: true}, function(err, Listing){
    if(err) console.log(err);
    console.log('Update Succeed:\n');
    });
     Listing.findOne({address: "1953 Museum Rd, Gainesville, FL 32603, United States"}, function (err, Listing) {
   	if (err) return handleError(err);
   	console.log(Listing+"\n");
   });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    Listing.find(function (err, results) {
        //assert.equal(null, err);
        //invoke callback with your mongoose returned result
        console.log("All Listings:\n"+results+"\n");
      });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
