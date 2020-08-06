export class Book {
    public bookId: number;
	public bookName: string;
	public author: string;
	public price: number;
	public publishedYear: number;
	public bookCount: number;
    public pricePerDay: number; 
    
    constructor(bookId: number, bookName: string, author: string, price: number, publishedYear: number, bookCount: number, pricePerDay: number) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.price = price;
        this.publishedYear = publishedYear;
        this.bookCount = bookCount;
        this.pricePerDay = pricePerDay;
    }
}