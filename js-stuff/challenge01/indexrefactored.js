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
    console.log(message);
  }

  sell(numCopiesSold = 1){
      this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5){
      this.numCopies += numCopiesStocked
  }
}

const HungerGames = new Book('Hunger Games','Suzanne Collins','123456',5);
HungerGames.getAvailability();
HungerGames.sell(5);
HungerGames.getAvailability();
HungerGames.restock(10);
HungerGames.getAvailability();
HungerGames.sell(1);
HungerGames.getAvailability();