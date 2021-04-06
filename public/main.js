var socket = io.connect('http://127.0.0.1:3000', {'forceNew':true});
socket.on('messages', function(data){
	document.body.innerHTML = JSON.stringify(data)
})

