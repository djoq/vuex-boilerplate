// cli.js

const program = require('commander');
const tools = require('./tools/cli-tools')

program.version('0.1.0')
  .option('-c, --component [name]', 'Add new component with [name]', 'Sample')
  .option('-r, --route', 'Generate a route for the new component')
  .option('-d, --destroy', 'Remove a component').parse(process.argv)

if(program.args.length === 0 && program.rawArgs.length < 3) {
  console.log('no arguments, try passing --help.');
  process.exit();
}

// let state = {};

if (program.component) {
  console.log(program.component)
	tools.mainReplacers(program.component)
	tools.deportReplacers(program.component)
	tools.createTemplate(program.component)

}

if (program.route) {
	tools.createRoute(program.component)
}


if (program.destroy) {
	console.log('Todo: write methods to remove imports, exports and files.') 
}
