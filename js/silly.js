var SILLY = (function(module){

	module.DoIt = function(resultObj){
		resultObj.prepend(Date() + '<br/>');
		
	};
	return module;
}(SILLY || {}));
