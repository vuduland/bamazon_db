// display al items available for sale
// include their ids, names, and prices
// => then prompt users with two messages:
// 1.) ask user for the ID of the product they want to buy
// => store in variable
// 2.) ask user how many units they want to buy.
// => store in variable
// conditional: if you have enough in stock to meet demand
// if there is sufficient stock, fulfill the order by:
// =>updating the SQL db to show remaining stock
// => after updating, show the user the total cost.
// if not log 'Insufficient quantity.' and stop order from going through.
//



var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'bamazon_db'
});

connection.connect(function(err) {
  if (err) throw err;

});

