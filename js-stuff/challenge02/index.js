class Movie{
    

    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverView(){
        return `${this.title}, is a typical  ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }

}

const Spiderman = new Movie('Spiderman', 'Sam Raimi', 'action', 2002, 7.5 );
const Batman = new Movie('Batman', 'Nolan', 'action', 2008, 8.3)

console.log(Spiderman.getOverView());
console.log(Batman.getOverView());