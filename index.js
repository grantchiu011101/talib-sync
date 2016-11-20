var talib = require('talib') ;

module.exports = {
	execute : function (param) {
		var done = false ;
		var response ;
		talib.execute(param, function cb(res){
			response = res;
			done = true ;
		}) ;
		require('deasync').loopWhile(function(){ return !done ; }) ;
		return response ;
	},
	version: talib.version,
	functions: talib.functions
}