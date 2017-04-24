var fs = require('fs');
var chalk = require('chalk');

module.exports = {
  pwd: function() {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  },

  ls: function() {
    process.stdout.write(fs.readdirSync(process.cwd(), 'utf8').toString());
    process.stdout.write('\nprompt > ');
  },

  echo: function(str) {
    if(str === '$PATH') {
      process.stdout.write(process.env.PATH);
    } else if(str === '$HOME') {
      process.stdout.write(process.env.HOME);
    } else if(str === '$PWD') {
      process.stdout.write(process.env.PWD);
    } else if(str === '$LANG') {
      process.stdout.write(process.env.LANG);
    } else {
      process.stdout.write(str);
    }
    process.stdout.write('\nprompt > ');
  },

  date: function() {
    var d = new Date;
    var months = ['Jan','Feb','Mar','Apr','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    process.stdout.write(days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' ' + 'EDT' + ' ' + d.getFullYear());
    process.stdout.write('\nprompt > ');
  }
}
