const Park = function(name, price) {
    this.name = name;
    this.price = price;
    this.dinoCollection = [];
}

// Park.prototype.addDino = function (dinoName) {
//     this.dinoCollection.push(dinoName);
// }
Park.prototype.addToCollection = function (dinoName) {
    this.dinoCollection.push(dinoName);
  };

Park.prototype.removeFromCollection = function (dinoName) {
    this.dinoCollection.splice(this.dinoCollection.indexOf(dinoName), 1)
}

module.exports = Park