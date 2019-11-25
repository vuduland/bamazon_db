//display al items available for sale
//include their ids, names, and prices
//=> then prompt users with two messages:
//1.) ask user for the ID of the product they want to buy
//=> store in variable
//2.) ask user how many units they want to buy.
//=> store in variable
//conditional: if you have enough in stock to meet demand
//if there is sufficient stock, fulfill the order by:
// =>updating the SQL db to show remaining stock
// => after updating, show the user the total cost.
//if not log 'Insufficient quantity.' and stop order from going through.
//
//
//========================  BONUS:
// create bamazonManager.js which:
// =>views a set of menu options
// =>views low inventory (inv < 5)
// =>adds to inventory
// =>adds new product
//==conditionals==
//if manager selects 'View Products for Sale:
// =>list every available item: IDs, names, prices and stock
//if mgr selects 'View Low Inventory':
// =>list all items with inv < 5
//if mgr selects 'Add to Inventory':
// =>display a prompt that allows mgr to 'add more' of any item currently in store
//if mgr selects 'Add New Product':
// => allow manager to add a completely new product to store (db)
//
//============= BONUS #3:
// 1.) create new MySql table called 'departments':
// includes: department_id, department_name, over_head_cost(a dummy number you set for each department)
// 2.) Modify products table to have product_sales column
// 3.) Modify bamazonCustomer.js to add (price * quantity bought) to the product's product_sales column AND updates the stock listed in products column
// 4.) create 'bamazonSupervisor.js' to:
// => view product sales by deparment
// => create new department
// 5.) when a supervisor selects 'View Product Sales by Department':
// => display a summarized table in the terminal window (console.log) use below table as guide:
/*
department_id|department_name|over_head_costs|product_sales|total_profit
01           |Electronics	    |10000         |	20000	     |10000
etc.

 */

 //6.) total_profit column is calculated on the fly using the difference between over_head_costs and product_sales
// => hint: may need to look into aliases in MySql
// => hint: may need to look into GROUP BYs
// => hint: may need to look into JOINs
// => hint: may be an npm package that can log the table to the console. what is it?
