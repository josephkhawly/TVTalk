var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
// socket.on('user_join', function(username, room_number){
//     socket.username = username;
//     socket.room = room_number;
//     socket.join(room_number);
// });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);

  });
});

http.listen(4005, function(){
  console.log('listening on 4005');
});

// var server = app.listen(4005);
// server.listen(4005, function() {
//     console.log('Server listening at http://localhost:4005/');
// });
