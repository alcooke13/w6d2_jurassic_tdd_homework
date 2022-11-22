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
// used for in instead of for of
Park.prototype.mostVisitors = function () {
    let dinoMostVisitorCount = 0;
    let dinoMostVisitor;
    for (let dino of this.dinoCollection) {
        if (dinoMostVisitorCount < dino.guestsAttractedPerDay) {
            dinoMostVisitorCount = dino.guestsAttractedPerDay;
            dinoMostVisitor = dino;
        }
    return (dinoMostVisitor);
    }
};
module.exports = Park