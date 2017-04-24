var commands = require('./commands');
var chalk = require('./node_modules/chalk');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  var args = data.toString().trim();
  var cmd = args.slice(0, args.indexOf(' '));
  var cmdArgs = args.slice(args.indexOf(' ')+1);

  if(cmd === 'pwd') {
    commands.pwd();
  }

  if(cmd === 'ls') {
    commands.ls();
  }

  if(cmd === 'echo') {
    commands.echo(cmdArgs);
  }

});
