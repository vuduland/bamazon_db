var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  }
  loadStock();
});

const loadStock = () => {
  connection.query("SELECT * FROM bamazon", function(err, res) {
    if (err) throw err;

    console.table(res);
    ``;

    customPrompt(res);
  });
};

const customPrompt = stock => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "Which item IDs are you searching for? [Q to Quit]\n",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      exitCheck(val.choice);
      var choice_id = parseInt(val.choice);
      var product = invCheck(choice_id, stock);

      if (product) {
        customPromptQty(product);
        // return choice;
      } else {
        console.log("\nThat item is not in the inventory.");
        loadStock();
        // return choice;
      }
    });
};

const customPromptQty = product => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many? [Q to Quit]\n",
        validate: function(val) {
          return val > 0 || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      exitCheck(val.quantity);
      var quantity = parseInt(val.quantity);

      if (quantity > product.stock_quantity) {
        console.log("\nStock is insufficient!");
        loadStock();
      } else {
        buyTheThing(product, quantity);
      }
    });
};

const buyTheThing = (bamazon, quantity) => {
  connection.query(
    "UPDATE bamazon SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, bamazon.item_id],
    function(err, res) {
      if (err) throw err;
      loadStock();
      return bamazon.item_id < 4
        ? console.log(
            `\nPurchase successful: ${quantity} pair(s) of ${bamazon.product_name}`
          )
        : console.log(
            `\nPurchase successful: ${quantity} ${bamazon.product_name}('s)`
          );
    }
  );
};

const invCheck = (choice_id, stock) => {
  for (let i = 0; i < stock.length; i++) {
    if (stock[i].item_id === choice_id) {
      return stock[i];
    }
  }
  return null;
};

const exitCheck = choice => {
  if (choice.toLowerCase() === "q") {
    console.log("Later!");
    process.exit(0);
  }
};

/*
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price_retail DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key (item_id)
*/
