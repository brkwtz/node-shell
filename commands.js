var fs = require('fs');
var chalk = require('./node_modules/chalk');

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
    //   process.stdout.write(process.env.PWD);
    // } else if(str === '$DISPLAY') {
    //   process.stdout.write(process.env.DISPLAY);
    // } else if(str === '$LD_LIBRARY_PATH') {
      // process.stdout.write(process.env.LD_LIBRARY_PATH);
    } else if(str === '$LANG') {
      process.stdout.write(process.env.LANG);
    // } else if(str === '$TZ') {
    //   process.stdout.write(process.env.TZ);
  }

    else {
      process.stdout.write(str);
    }
    process.stdout.write('\nprompt > ');
  }
}
