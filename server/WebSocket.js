const ws = require("ws");

const wss = new ws.Server(
  {
    port: 5000,
  },
  () => console.log("server Started on port 5000")
);

wss.on("connection", function connection(ws) {
  ws.on("message", function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case "message":
        broadCaseMessage(message);
        break;
      case "connection":
        broadCaseMessage(message);
        break;
    }
  });
});

function broadCaseMessage(message, id) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}
