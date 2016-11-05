var talib = require("talib");
var _ = require( "underscore") ;
var deasync = require("deasync") ;

module.exports = {
	
	functions: talib.functions,

	version: talib.version,

	_callback: function(params, cb) {
		talib.execute(params, function (data) {
			if ( _.has(data, "error")) {
				cb(data["error"], null) ;
			} else {
				cb(null, data) ;
			}
		});
	},
	execute: function (params) {

		var _callback = function ( params, cb) {
			talib.execute( params, function(data) {
				if ( _.has ( data, "error")) {
					cb ( data["error"], []) ;
				} else {
					cb ( null, data) ;
				}
			})
		} ;

		return deasync(_callback)(params) ;
	},
	explain: function(func) {
		return new Promise ( function( resolve, reject) {
			var explain = talib.explain( func) ;
			resolve ( explain) ;
		}) ;
	}
} ;