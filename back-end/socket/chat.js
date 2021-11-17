const sChat = require('../models/chat')

module.exports = function (io) {

  io.on('connection', (socket) => {
    console.log(`Connecté au client ${socket.id}`)
    io.emit('notification', { type: 'new_user', data: socket.id });

    // Listener sur la déconnexion
    socket.on('disconnect', () => {
      console.log(`user ${socket.id} disconnected`);
      io.emit('notification', { type: 'removed_user', data: socket.id });
    });

    socket.on('...', (msg) => {

    });

    socket.on('plus-one-chat', (msg,id ) => {
      // Création de l'objet "click" de Mongoose (schéma)
      const chat = new sChat({
        userId: id,
        username: "nothing",
        sessionId: socket.id,
        text: msg,
        dateChat: Date.now(),
      });
  
      // Sauvegarde dans la base de données
      chat.save().then(() => {
      }).catch((error) => {
          console.log(error)
      })
      
  });
  })


  
}