const http = require('http');
const database = require('./database');

const server = http.createServer((req, res) => {
  // Тут ви можете написати код для обробки запитів

  // Наприклад, щоб підключитися до бази даних, ви можете використовувати наступний код:
  const connection = mysql.createConnection(database);

  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.log(err);
      res.writeHead(500);
      res.end('Internal server error');
    } else {
      res.writeHead(200);
      res.end(JSON.stringify(results));
    }
  });

  connection.end();
});

server.listen(database.port);

console.log(`Сервер запущений на порту ${database.port}`);
