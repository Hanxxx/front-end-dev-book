(function (window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddr);
    this.db.add(order.emailAddr, order);
  };

  Truck.prototype.deliverOrder = function (emailAddr) {
      console.log('Delivering order for ' + emailAddr);
      this.db.remove(emailAddr);
  };

  Truck.prototype.printOrders = function () {
    var customerIdArray = Object.keys(this.db.getAll());
    console.log('Truck: ' + this.truckId + ' has pending order: ');
    customerIdArray.forEach(function (id) {
      console.log(this.db.get(id));
    }.bind(this));
  };

  App.Truck = Truck;
  window.App = App;
}) (window);
