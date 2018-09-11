angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({ 
            "code": $scope.code, 
            "name": $scope.name, 
            "coordinates": {
                "latitude": $scope.coordinates.latitude, 
                "longitude": $scope.coordinates.longitude
            }, 
            "address": $scope.address
        });
      $scope.code='';
      $scope.name='';
      $scope.coordinates.latitude='';
      $scope.coordinates.longitude='';
      $scope.address='';

    };
    $scope.deleteListing = function(name) {
      var k = -1;   
    var comArr = eval( $scope.listings );
    for( var i = 0; i < comArr.length; i++ ) {
      if( comArr[i].name === name ) {
        k = i;
        break;
      }
    }
    if( k === -1 ) {
      alert( "Something gone wrong" );
    }
    $scope.listings.splice(k, 1 );  
    };
    $scope.showDetails = function(name) {
      var k = -1;   
    var comArr = eval( $scope.listings );
    for( var i = 0; i < comArr.length; i++ ) {
      if( comArr[i].name === name ) {
        k = i;
        break;
      }
    }
    if( k === -1 ) {
      alert( "Something gone wrong" );
    }
    $scope.data_dis=comArr[k];
    $scope.code_dis=comArr[k].code;
    $scope.name_dis=comArr[k].name;
    if(comArr[k].address!=null)     $scope.address_dis=comArr[k].address;
    if(comArr[k].coordinates!=null){
      $scope.coordinates.latitude_dis=comArr[k].coordinates.latitude;
      $scope.coordinates.longitude_dis=comArr[k].coordinates.longitude;
    }
    

    };
  }
]);