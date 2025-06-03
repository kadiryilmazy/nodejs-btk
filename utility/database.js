const mysql = require("mysql2");

// 🔁 Bağlantı havuzu (Connection Pool) oluşturuluyor
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "node-app",
    password: "mysql1234",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// ✨ Promise destekli bağlantı dışa aktarılıyor
module.exports = pool.promise();
