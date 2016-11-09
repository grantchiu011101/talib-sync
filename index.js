var talib = require("talib");
var _ = require( "underscore") ;
var sync = require('synchronize')

module.exports = {
	
	functions: talib.functions,

	version: talib.version,

	
	execute: function (params) {

		sync.fiber( function () {

			function _callback ( params, callback) {
				talib.execute(params, function (result) {
					
					if ( _.has( result, 'error')) {
						callback ( result['error'], null)
					} else {
						callback ( null, result) ;
					}
				});
			}

			var data = sync.await(_callback(params, sync.defer())) ;
			console.log ( "get data from sync.fiber") ;
			return data ;
		}) ;

	},
	explain: function(func) {
		var explain = talib.explain( func) ;
		return explain ;
	}
} ;