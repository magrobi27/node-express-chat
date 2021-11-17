const mongoose = require('mongoose');

const schemaChat = mongoose.Schema({

  userId: {type: String, required: true},
  username: {type: String, required: true},
  sessionId: {type: String, required:true},
  text: { type: String, required: true },
  dateChat: { type: Date, required: true },

  
});

module.exports = mongoose.model('Chat', schemaChat);