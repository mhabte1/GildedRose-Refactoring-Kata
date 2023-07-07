const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("normal item - quality decreases by one" , function() {
    const gildedRose = new Shop([new Item("normal", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(29);
  });

  it("Aged Brie - quality increases by one", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(31);
  });

  it("Backstage passes to a TAFKAL80ETC concert - quality increases by TWO", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(32);
  });

  it("Backstage passes to a TAFKAL80ETC concert - quality increases by THREE", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(33);
  });

  it("Conjured - quality increases by TWO", function() {
    const gildedRose = new Shop([new Item("Conjured", 5, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(28);
  });

  it("Normal item - with SellIn negative and qualtiy greater than zero", function() {
    const gildedRose = new Shop([new Item("Normal", -3, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(28);
  });
  
  it("Backstage passes to a TAFKAL80ETC concert - SellIn Negative", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -7, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie - SellIn Negative", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -9, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(32);
  });

});