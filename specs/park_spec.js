const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  beforeEach(function () {
  park = new Park('Jurassic Park', 30);
  dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, 30)
  });
    
  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, []);
  });
  
  it('should be able to add a dinosaur to its collection', function() {
    park.addToCollection(dinosaur1);
    const actual = [dinosaur1];
    assert.deepStrictEqual(actual, park.dinoCollection);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeFromCollection(dinosaur1);
    const actual = [];
    assert.deepStrictEqual(actual, park.dinoCollection);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
