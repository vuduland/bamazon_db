let mysql = require('mysql');
let inquirer = require('inquirer')
let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'bamazon_db'
});

connection.connect(function(err) {
  console.log("Welcome to the ama50n knockoff! Bamazzo!")
  // console.log("connected as  " + connection.threadId + "\n");
  console.log(`You are special. You are the ${grammar()} customer!`)
  // readProducts();
});



grammar = () => {
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
}
askCustomer = () => {
  inquirer.prompt('What are you going to buy with your Bitcoins? We only accept Bitcoin.')
}

// function createProduct() {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   logs the actual query being run
//   console.log(query.sql);
// }

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products updated!\n");
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
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM bamazon_db.bamazon;", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//   });
// }

connection.end();

