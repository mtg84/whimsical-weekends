class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability(){
      return this.getAvailability();
  }

  getAvailability() {
    let message = "";
    if (this.numCopies == 0) {
      message = "out of stock";
    } else {
      message = this.numCopies < 10 ? "low stock" : "in stock";
    }
    return message;
  }

  sell(numCopiesSold = 1){
      this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5){
      this.numCopies += numCopiesStocked
  }
}

class TechnicalBook extends Book{
  constructor(title,author,ISBN,numCopies, edition) {
    super(title,author,ISBN,numCopies);
    this.edition =edition;
  }

  getEdition(){
    return `The current edition of this book is ${this.edition}`;
  }
}

const crackingTheCodingInterview = new TechnicalBook(
  'Cracking the coding interview',
  'Gail Laanchman',
  '789456',
  11,
  '2.1'
);

console.log(crackingTheCodingInterview.availability);
console.log(crackingTheCodingInterview.getEdition());