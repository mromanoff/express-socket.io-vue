const sio = require("socket.io");
const logger = require("./logger");

let io = null;

//  Intstantiate socket io object
exports.initialize = function(server) {
  io = sio(server);
  io.on("connection", socket => {
    logger.debug(`A user connected with ${socket.id}`);

    socket.on("disconnect", socket => {
        logger.debug(`A user disconnected with ${socket.id}`);
      });

  });
};

exports.io = function() {
  return io;
};
