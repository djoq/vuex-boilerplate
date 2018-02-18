// node
const fs = require('fs')
const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const handleConflicts = (filename) => {
    console.log("\x1b[31m",'The file at '+filename+' is not setup correctly')
    console.log('\x1b[36m%s\x1b[0m', 'Comments with words like `Additions` reference text locations and must remain for scaffolding.')
    console.log('Try restoring your file to the initial configuration at https://github.com/djoq/vuex-boilerplate')
    process.exit();
}

exports.mainReplacers = (name) => {
    let filename = './src/main.js'

    let data = fs.readFileSync(filename).toString().split("\n");
    let compIndex = data.indexOf('// componentAdditions');
    console.log('data ->', data)
    if (compIndex === -1) return handleConflicts(filename)

    data.splice(compIndex, 0, `Vue.component('`+capitalize(name)+`', imported.`+name+`)`)
    var text = data.join("\n");

    fs.writeFile('./src/main.js', text, (err) => {
      if (err) return console.log(err);
    });
}

exports.deportReplacers = (name) => {
    let filename = './src/components/index.js'
    var data = fs.readFileSync(filename).toString().split("\n");

    var impIndex = data.indexOf('// importAdditions');
    var expIndex = data.indexOf('// exportAdditions');

    if (impIndex === -1 || expIndex === -1) return handleConflicts(filename)

    data.splice(impIndex, 0, `import `+capitalize(name)+` from './`+capitalize(name)+`'`);
    data.splice(expIndex+1, 0, `  `+name.toLowerCase()+`: `+capitalize(name)+`,`);
    var text = data.join("\n");

    fs.writeFile('./src/components/index.js', text, (err) => {
      if (err) return console.log(err);
    });
}

exports.createTemplate = (name) => {
    let input = fs.readFileSync('./src/templates/Sample.vue').toString()
    let output = input.split("REPLACE").join(name.toLowerCase())

    fs.writeFile('./src/components/'+capitalize(name)+'.vue', output, (err) => {
        if(err) return console.log(err)
    })
}

exports.createRoute = (name) => {
    let filename = './src/router/index.js'
    var data = fs.readFileSync(filename).toString().split("\n");

    var impIndex = data.indexOf('// importAdditions');
    var rtIndex = data.indexOf('// routeAdditions');

    if (impIndex === -1 || rtIndex === -1) return handleConflicts(filename)

    data.splice(impIndex, 0, `import `+capitalize(name)+` from '@/components/`+capitalize(name)+`'`);
    data.splice(rtIndex, 0, `  }, {\n\r` +
    `    path: '/`+name+`',
    title: '`+capitalize(name)+`',
    component: `+capitalize(name)+`,
    sourceUrl: 'components/`+capitalize(name)+`'`)
    var text = data.join("\n");

    fs.writeFile('./src/router/index.js', text, (err) => {
      if (err) return console.log(err);
    });

}

    // process.stdin.resume();
    // process.stdin.setEncoding('utf8');
    // var util = require('util');

    // process.stdin.on('data', function (text) {
    // 	switch(text){
    // 		case "quit\n":
    // 		case "q\n":
    // 		case "Q\n":
    // 		  console.log('quitting...')
    // 		  done()
    // 		  break;
    //     case "y\n":
    //     case "Y\n":
    //       console.log('create new route')
    //       tools.createRoute(state.name)
    //       done()
    //       break;
    //     case "n\n":
    //     case "N\n":
    //       console.log('dont create route')
    //       done()
    //       break;
    // 	}
    // });



// function done() {
//   console.log('Done.');
//   process.exit();
// }