const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  beforeEach(function () {
  park = new Park('Jurassic Park', 30);
  dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
  dinosaur2 = new Dinosaur('triceratops', 'herbivore', 40);
  dinosaur3 = new Dinosaur('pterodactyl', 'carnivore', 45);
  dinosaur4 = new Dinosaur('triceratops', 'herbivore', 40);
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

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    park.addToCollection(dinosaur3);
    const actual = park.mostVisitors();
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    park.addToCollection(dinosaur3);
    park.addToCollection(dinosaur4);
    const actual = park.findSpecies('triceratops');
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur4]);
  });
    
  it('should be able to calculate the total number of visitors per day', function () {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    const actual = park.totalVisitorsDay();
    assert.strictEqual(actual, 90);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    actual = park.totalVisitorsYear();
    assert.strictEqual(actual, (90 * 365));
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addToCollection(dinosaur1);
    park.addToCollection(dinosaur2);
    actual = park.totalRevenueYear();
    assert.strictEqual(actual, park.totalVisitorsYear() * park.price)
  });

});
