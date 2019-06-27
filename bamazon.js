var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_db"
});

connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    printAll();
  });

  function printAll() {

    connection.query("SELECT * FROM products", function (err, res) {
      if (err) throw err;

      var table = new Table({
        head: ["ID", "Product Name", "Department", "Price", "Stock Quantity"],
        colWidths: [10, 40, 20, 10, 20]
      })
      for (var i = 0; i < res.length; i++) {
        table.push([
          res[i].item_id,
          res[i].product_name,
          res[i].department_name,
          res[i].price,
          res[i].stock_quantity,
        ]);
      }
      console.log(table.toString());
    });
  }