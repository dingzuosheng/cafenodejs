const mysql = require('mysql2');
require('dotenv').config();

var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    authPlugins: {
        mysql_native_password: () => () =>
          new Promise((resolve, reject) => {
            // 处理身份验证逻辑
            resolve();
          }),
      },
});

connection.connect((err) => {
    if (!err){
        console.log("Connected");
    } else {
        console.log(err);
    }
});

module.exports = connection;