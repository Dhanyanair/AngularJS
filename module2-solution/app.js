(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.items = ShoppingListCheckOffService.gettobuyItems();
  tobuy.errorMessage = "Everything is bought!";

  tobuy.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.buyitem(itemIndex);
  };



}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var albought = this;
  albought.errorMessage = "Nothing bought yet!";
  albought.items = ShoppingListCheckOffService.getboughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyitems = [
    {
      name: "Biscuits",
      quantity: 10
    },
    {
      name: "Chips",
      quantity: 5
    },
    {
      name: "Coke",
      quantity: 5
    },
    {
      name: "Potato wedges",
      quantity: 6
    },
    {
      name: "Cookies",
      quantity: 20
    }
  ];

  var boughtitems = [];


  service.buyitem = function (itemIndex) {
    boughtitems.push(tobuyitems[itemIndex]);
    tobuyitems.splice(itemIndex, 1);

  };


  service.gettobuyItems = function () {
    return tobuyitems;
  };

  service.getboughtItems = function () {
    return boughtitems;
  };
}

})();
