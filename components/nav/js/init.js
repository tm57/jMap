$(function(){

	window.parent.bridge(function(b){
		b.checkIfExternal(function(s){
			var s = !s; 
			gui.init(s);
		});
	}); 

}); 