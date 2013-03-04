var program = require("commander"),
	ppJson = require("prettyjson"),
	color = require("colors");

program.version("0.0.1")
	.usage('[options] [parameters]')
	.option('-m, --module <module>', 'specify the analytic module to run', String)
	.option('    --params', 'params to the module', Array);

program
	.command("lists [listName]")
	.description("Analyze lists")
	.action(function(){
		console.log("Hi I am running the lists subcommand".green);
	});

program.parse(process.argv);