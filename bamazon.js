var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "password",
  database: "bamazon_db"
});


connection.query("SELECT * FROM products", function (err, res) {
  console.log("connected as id " + connection.threadId);
  if (err) throw err;
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

    inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "What is the ID of the Item you would like to purchase?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
    ])
  
      .then(function (answer) {
  
        for (var j = 0; j < res.length; j++) {
          if (answer.id === productId) {
            var productId = res[i].id;
            var stockQuantity = res[i].stock_quantity;
          } if (answer.quantity <= stockQuantity && rstockQuantity > 0) {

            var newStock = res[i].stock_quantity - answer.quantity;
            updateProduct(newStock, productId)

          } else {
            console.log("We do not have enough of your item in stock");
          }
        }
      }
      )
      // updateProduct(newStock, productId)
  });
}


  function updateProduct(newStock, productId) {
    connection.query(

      "UPDATE products SET ? WHERE ?", 
      [
        {
          stock_quantity: newStock
        },
        {
          item_id: productId
        }
      ],
  function(err) {
         if (err) throw err;
  printAll();
  }
      );
  }



  // connection.query(

  //   console.log(answer),

  //   "UPDATE products SET ? WHERE ?",
  //   [
  //     {
  //       stock_quantity: newStock
  //     },
  //     {
  //       item_id: answer.id
  //     }
  //   ],
  //   function (err) {
  //     if (err) throw err;
  //     printAll();
  //   }
  // );


  // function userPrompt() {
//   inquirer.prompt([
//     {
//       name: "id",
//       type: "input",
//       message: "What is the ID of the Item you would like to purchase?",
//       validate: function (value) {
//         if (isNaN(value) === false) {
//           return true;
//         }
//         return false;
//       }
//     },
//     {
//       name: "quantity",
//       type: "input",
//       message: "How many would you like to purchase?",
//       validate: function (value) {
//         if (isNaN(value) === false) {
//           return true;
//         }
//         return false;
//       }
//     },
//   ])

//     .then(function (answer) {



//       newStock = stock_quantity - answer.quantity

//       updateProduct(newStock)

//     }
//     )

// }