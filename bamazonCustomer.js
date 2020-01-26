var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table()");

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
  connection.query("SELECT * FROM product_name", function(err, res) {
    if (err) throw err;

    console.table(res);

    customPrompt();
  });
};

const customPrompt = stock => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "Which item IDs are you searching for? [Q to Quit]\n"
      }
    ])
    .then(function(val) {
      exitCheck(val.choice);
      var choiceMade = parseInt(val.choice);
      var product = invCheck(choiceMade, stock);

      if (product) {
        customPromptQty(product);
      } else {
        console.log("\nThat item is not in the inventory.");
        loadStock();
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
      console.log(
        `\nPurchase successful: ${quantity} of ${bamazon.product_name}`
      );
    }
  );
};

invCheck = (choiceMade, stock) => {
  for (let i = 0; i < stock.length; i++) {
    if (stock[i].item_id === choiceMade) {
      return stock[i];
    }
  }
  return null;
};

exitCheck = () => {
  if (choiceMade.toLowerCase() === "q") {
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
