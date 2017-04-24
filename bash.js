var commands = require('./commands');
var chalk = require('chalk');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  var args = data.toString().trim();
  if(args.split(' ').length > 1) {
    var cmd = args.slice(0, args.indexOf(' '));
    var cmdArgs = args.slice(args.indexOf(' ')+1);
  } else {
    cmd = args;
  }

  if(cmd === 'pwd') {
    commands.pwd();
  }

  if(cmd === 'ls') {
    commands.ls();
  }

  if(cmd === 'echo') {
    commands.echo(cmdArgs);
  }

  if(cmd === 'date') {
    commands.date();
  }

});
