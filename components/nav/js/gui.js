var gui = {};

gui.makeSearch = function(query){
	if(gui.externalMode){
		window.top.bridge(function(b){
			b.searchMapData(query.split(";"), function(res){
				gui.renderRoomResults(res);
			}); 
		});
	} else {
		// Internally we have jPeople access
		window.top.bridge(function(b){
			b.searchJPeople(query.split(";"), function(res){
				gui.renderPeopleResults(res); 
			});
		}); 
	}
}

gui.showRoom = function(id){
	window.top.bridge(function(b){
		b.renderRoomById(id); 
	});
}

gui.showPerson = function(data){
	//show person via bridge
	window.top.bridge(function(b){
		b.renderPerson(data); 
	});
}

gui.renderPeopleResults = function(people){

	if(!people){
		return gui.renderModeMessage(); 
	}

	var resultList = gui.clear(); 
	for(var i=0;i<people.length;i++){
		(function(person){
			$("<a href='#'>").addClass("list-group-item")
			.click(function(){gui.showPerson(person); return false; })
			.append(
				$("<h4>").addClass("list-group-item-heading pull-right").text(person["lname"]+", "+person["fname"])
				.click(function(){gui.showPerson(person); return false;  }), 
				$("<div>").addClass("list-group-item-text").append(
					$("<img>").attr("src",person.photo).width(42).height(56)
					.click(function(){
					gui.showRoom(person.room); 
					return false; 
				})
				)
				)
			.appendTo(resultList); 
		})(people[i]); 
	}
}

//render the room results
gui.renderRoomResults = function(rooms){
	if(!rooms){
		return gui.renderModeMessage(); 
	}

	var resultList = gui.clear(); 
	for(var i=0;i<rooms.length;i++){
		(function(room){
			$("<a href='#'>").addClass("list-group-item")
			.click(function(){
				gui.showRoom(room.id); 
				return false; 
			})
			.append(
				$("<h4>").addClass("list-group-item-heading pull-right").text(room.name), 
				$("<div>").addClass("list-group-item-text")
				.text(room.building+", "+room.floor)
				)
			.appendTo(resultList); 
		})(rooms[i]); 
	}
}


//Mode Switching
gui.renderModeMessage = function(){
	var m = $("<a href='#'>").addClass("list-group-item")
	.click(function(){
		return false; 
	})

	if(gui.externalMode && !gui.canInternalMode){

		m.append(
			$("<h4>").addClass("list-group-item-heading").text("External Mode"), 
			$("<div>").addClass("list-group-item-text").text("You are not in the Jacobs University network. You can only search for rooms. ")
		)
	} else if(gui.externalMode){
		m.append(
			$("<h4>").addClass("list-group-item-heading").text("Room search mode"), 
			$("<div>").addClass("list-group-item-text").text("click to switch to full search mode")
		).click(function(){
			gui.externalMode = false; 
			$("#peoplesearch").keyup(); //update searcg
		})
	} else {
		m.append(
			$("<h4>").addClass("list-group-item-heading").text("Full search mode"), 
			$("<div>").addClass("list-group-item-text").text("click to switch to room search mode")
		).click(function(){
			gui.externalMode = true; 
			$("#peoplesearch").keyup(); //update searcg
		})
	}
	return m.appendTo(gui.clear()); 
}


//Gerneral
gui.clear = function(){
	return $("#results").empty(); 
}

gui.setSearchString = function(str){
	$("#peoplesearch").val(str);

	gui.makeSearch($("#peoplesearch").val()); 
}

gui.init = function(ext){

	gui.externalMode = ext;
	gui.canInternalMode = !ext; 

	gui.renderModeMessage();

	$("#searchform").submit(function(){
		gui.makeSearch($("#peoplesearch").val()); 
		return false; 
	}); 

	$("#welcomeresult").click(function(){
		return false; 
	});

	$("#peoplesearch").bind("keyup input paste", util.debounce(function(){
		gui.makeSearch($("#peoplesearch").val()); 
	}, 250));
}