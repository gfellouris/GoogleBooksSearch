# GoogleBooksSearch

- [GitHub repo](https://github.com/gfellouris/GoogleBooksSearch.git)
- [Heroku]()

## Motivation - The **Why**
React-based Google Books Search app. requires you to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. Also use Node, Express and MongoDB so that users can save books to review or purchase later.

## Technologies used and why
<b>Built with</b>
- REACT - create-react-app client
- axios
- react-router-dom
- express
- mongodb
- mongoose

## Features
Search and save books found on google.

## Screenshots / Video


## Code Example
### Process Flow
![Process Flow]()

### The main functions are:
* queryAllProducts - selects all the products from the database and lists it in a table
* getProductInfo - using inquirer to ask the user which product and the qty they want to purchase
* checkquantity - check that 1) inventory exists 2) we have enough in inventory, if yes, then it processes the order
* continueShopping - Is used multiple times to see if the user wants to continue shopping or exit.

## How to use?
### install npm packages:
- create-react-app client
- axios
- react-router-dom
- express
- mongodb
- mongoose

### Run the program by type:
* node bamazonCustomer.js

## Credits
- Shout-out to **Hetal** for showing us the console.table function which gives the CLI a much nicer look with less code!
- Thanks to **Vanessa** for telling me about cloudconvert to convert my screencastify to a gif!

MIT © [George Fellouris]()
