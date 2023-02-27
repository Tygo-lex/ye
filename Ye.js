
// Importeer de http module
const http = require('http');

// Maak een server object
const server = http.createServer(function (req, res) {
  // Schrijf een reactie naar de client
  res.write('Hallo wereld');
  // Beëindig de reactie
  res.end();
});

// De server luistert op poort 3000
server.listen(3000);
