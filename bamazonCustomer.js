let mysql = require('mysql');
let inquirer = require('inquirer')
let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'bamazon_db'
});
let response;
let newStock;
let id;
// id, product_name, department, price, in_stock


connection.connect(function(err) {
  // if (err) throw err
  // .catch()
  console.log("Welcome to the ama50n knockoff! Bamazzo!")
  // console.log("connected as  " + connection.threadId + "\n");
  console.log(`You are special. You are the ${grammar()} customer!`)
  // connection.query("SELECT * FROM stock", function(err, response, fields) {
  //   if (err) throw err;
  //   response = response
    readProducts();

  // })
});
const readProducts = () => {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM stock", function(err, response) {
    // if (err) throw err;
    console.log(response);
    askCustomer()
    // .catch()
  });
};
const grammar = () => {
  let cx = connection.threadId
  cxs = cx.toString()

  // console.log(cx)
  if(cxs[1] === '1' ) {
    cxs += 'st'
    // console.log(cxs[1])
  } else if (cxs[1] === '2') {
    cxs += 'nd'
    // console.log(cxs)
  } else if (cxs[1] === '3') {
    cxs += 'rd'
    // console.log(cxs)
  } else if (cxs[1] === '4', '5', '6', '7', '8', '9', '0' || cxs === '11') {
    cxs += "th"
    // console.log(cxs)
  }
  return cxs
};

const askCustomer = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'What item number (id) are you looking for? What are you going to buy with your Bitcoins? We only accept Bitcoins.'
      },
      {
        type: 'input',
        name: 'units',
        message: 'How many parts are you purchasing?!'
      }
    ])
    .then(function(input) {
      id = input.id - 1
    if (input.id.in_stock < input.units) {
      console.log('!!! BONUS WIN BIG BIG BIG BIG IN BONUS !!! \n You picked an item we no longer have in stock!')
      askCustomer()
      connection.end();
    } else {
      console.log(`Congratulations. Your item ${JSON.stringify(input)} is an awful choice, but you got it! ASAP!!`)
      updateStock(JSON.stringify(input))
      connection.end();
    }
    return id
  },
)};

const updateStock = () => {
  newStock = response[id].in_stock - input.units;
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        in_stock: newStock
      },
      {
        item_id: input.id
      }
    ]);

  let cost = input.units * response[id].price;
  // logs the actual query being run
  console.log(`Your total is $ ${cost}, now get outta my terminal based store!`)
}

// function createProduct() {
//   console.log("Inserting a new product...\n");
//   let query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, response) {
//       if (err) throw err;
//       console.log(response.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   logs the actual query being run
//   console.log(query.sql);
// }

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   let query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, response) {
//       if (err) throw err;
//       console.log(response.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, response) {
//       if (err) throw err;
//       console.log(response.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

