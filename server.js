
const http = require('http');
const express = require('express');
const app = express();
const exec = require('child_process').exec;
const port = 8040;

//app.get('/', (req, res) => {res.send('thing');});
app.use(express.static('public'));

app.get('/api/:commandName', (req, res) => {
	const commandName = req.params.commandName;

	function run(command) {
		console.log(`running the command: '${command}'`);
		exec(command, (error, stdout, stderr) => {
			console.log(`output of the command: '${stdout}'`);
			console.error(`errors of the command: '${stderr}'`);
		})
	}

	switch(commandName) {
		case 'power':
			run('irsend SEND_ONCE TV KEY_POWER');
			run('irsend SEND_ONCE TV KEY_POWER');
			break;
		case 'input':
			run('irsend SEND_ONCE TV KEY_0');
			break;
		case 'guide':
			run('irsend SEND_ONCE TV KEY_1');
			break;
		case 'volup':
			run('irsend SEND_ONCE TV KEY_2');
			break;
		case 'voldown':
			run('irsend SEND_ONCE TV KEY_3');
			break;
		case 'select':
			run('irsend SEND_ONCE TV KEY_4');
			break;
		case 'back':
			run('irsend SEND_ONCE TV KEY_5');
			break;
		case 'up':
			run('irsend SEND_ONCE TV KEY_6');
			break;
		case 'down':
			run('irsend SEND_ONCE TV KEY_7');
			break;
		case 'left':
			run('irsend SEND_ONCE TV KEY_8');
			break;
		case 'right':
			run('irsend SEND_ONCE TV KEY_9');
			break;
		case 'chanup':
			run('irsend SEND_ONCE TV KEY_A');
			break;
		case 'chandown':
			run('irsend SEND_ONCE TV KEY_B');
			break;
		case '1':
			run('irsend SEND_ONCE TV KEY_F1');
			break;
		case '2':
			run('irsend SEND_ONCE TV KEY_F2');
			break;
		case '3':
			run('irsend SEND_ONCE TV KEY_F3');
			break;
		case '4':
			run('irsend SEND_ONCE TV KEY_F4');
			break;
		case '5':
			run('irsend SEND_ONCE TV KEY_F5');
			break;
		case '6':
			run('irsend SEND_ONCE TV KEY_F6');
			break;
		case '7':
			run('irsend SEND_ONCE TV KEY_F7');
			break;
		case '8':
			run('irsend SEND_ONCE TV KEY_F8');
			break;
		case '9':
			run('irsend SEND_ONCE TV KEY_F9');
			break;
		case '0':
			run('irsend SEND_ONCE TV KEY_FN');
			break;
		default: res.send('aaaag');
			break;
	}

	
	res.status(200).send();
});
app.listen(port, () => console.log(`started server on port: ${port}`));
