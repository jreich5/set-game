class Card {
  constructor(id, color, shape, number, pattern, img) {
    this.id = id;
    this.color = color;
    this.shape = shape;
    this.number = number;
    this.pattern = pattern;
    this.img = img;
  }

  // from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  static shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  static createCards(arr) {
    return arr.map(({id, color, shape, number, pattern, img}) => new Card(id, color, shape, number, pattern, img));
  }
}

export default Card;