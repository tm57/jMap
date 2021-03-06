var gui = {}; //namespace

gui.renderer = undefined; //The renderer
gui.renderData = undefined; //The render data

//state
gui.buildingId = 0; 
gui.blockId = 0; 
gui.floorId = 0; 
gui.roomFlash = undefined; 


gui.refreshMenu = function(){

	//refresh the menu
	var renderData = gui.renderData; 
	
	//build buildings menu
	var ul_buildings = 
	$('<ul class="dropdown-menu" role="menu">').appendTo(
		$("#buildings").find("ul").remove().end()
	);

	//for each of the buildings, add a menu item
	renderData.iterateBuildings(function(building){
		$('<li role="presentation">')
		.append(
			$('<a role="menuitem" tabindex="-1" href="#">')
			.text(building.getName())
			.click(function(){
				gui.buildingId = building.getIndex(); 
				gui.blockId = 0; 
				gui.floorId = 0; 
				gui.renderFloor(); 
			})
		).appendTo(ul_buildings); 
	}); 

	//get the current building
	var currentBuilding = gui.renderData.buildings[gui.buildingId]; 
	$("#buildingstitle").text(currentBuilding.getName()); 
	ul_buildings.find("li").eq(gui.buildingId).addClass("disabled").find("a").click(function(){return false; });

	//build blocks menu
	var ul_blocks = 
	$('<ul class="dropdown-menu" role="menu">').appendTo(
		$("#blocks").find("ul").remove().end()
	);


	//add the blocks for the current building
	currentBuilding.iterateBlocks(function(block){
		$('<li role="presentation">')
		.append(
			$('<a role="menuitem" tabindex="-1" href="#">')
			.text(block.getName())
			.click(function(){
				gui.blockId = block.getIndex(); 
				gui.floorId = 0; 
				gui.renderFloor(); 
			})
		).appendTo(ul_blocks); 
	}); 

	//get the current block
	var currentBlock = currentBuilding.blocks[gui.blockId]; 
	$("#blockstitle").text(currentBlock.getName()); 
	ul_blocks.find("li").eq(gui.blockId).addClass("disabled").find("a").click(function(){return false; });

	//add the floors for the current block
	var ul_floors = 
	$('<ul class="dropdown-menu" role="menu">').appendTo(
		$("#floors").find("ul").remove().end()
	);

	//add the current floors
	currentBlock.iterateFloors(function(floor){
		$('<li role="presentation">')
		.append(
			$('<a role="menuitem" tabindex="-1" href="#">')
			.text(floor.getName())
			.click(function(){
				gui.floorId = floor.getIndex(); 
				gui.renderFloor(); 
			})
		).appendTo(ul_floors); 
	}); 

	//render the current floor
	var currentFloor = currentBlock.floors[gui.floorId]; 
	$("#floorstitle").text(currentFloor.getName()); 
	ul_floors.find("li").eq(gui.floorId).addClass("disabled").find("a").click(function(){return false; });

	//show everything
	gui.renderer.showAll(); 
}; 



gui.renderFloor = function(floor){
	//render a given floor

	if(typeof floor == "undefined"){
		var floor = gui.renderData.getFloorByState(gui.buildingId, gui.blockId, gui.floorId);
	}

	//stores new data
	var pos = floor.getPosition(); 
	gui.buildingId = pos.building; 
	gui.blockId = pos.block; 
	gui.floorId = pos.floor; 
	gui.flushRenderState(); 

	var buildingName = floor.getBuilding().getMName(); 

	var rawRenderData = floor.rooms.map(function(r){
		var item = r.toArray(); 

		return [item[0], item[1], item[2], item[3], item[5], {
			"pureRoom": item, 
			"label": item[4], 
			"class": "box "+buildingName+" "+item[6], 
			"active-class": "active"
		}]; 
	}); 

	rawRenderData.className = floor.getBuilding().getMName(); 

	window.parent.bridge(function(b){

		gui.renderer
		.render(rawRenderData, false)
		.draw()
		.canvas
		.off("gridersize.click")
		.on("gridersize.click", function(evt, box, id){

			var room = box.data("gridersize.original")[5]["pureRoom"]; 
			var roomObj = gui.renderData.findRoomById((typeof id == "string")?id:id[0]); 


			//do stuff here
			if(room[6] !== "student" && room[6] !== "common" && room[6] !== "kitchen" && room[7] !== true){
				//only handle click event for these room types
				return; 
			}

			if(typeof id == "string" || typeof id == "undefined"){
				b.setSearchString(id); 
			} else {
				b.setSearchString(id.join("; ")); 
			}
		});
	
		gui.refreshMenu(); //refresh the menu

	}); 
}; 

gui.flashRoom = function(room){
	//renders (flashes a room)
	var room = room || gui.renderData.findRoomById(gui.roomFlash); 
	if(typeof room == "undefined"){
		return false; 
	}

	gui.renderFloor(room.getFloor());


	var id = room.id[0]; 

	console.log(id); 

	//Toggle the room
	gui.renderer
	.activateElementById(id); 


	gui.roomFlash = id; 
	return true; 
}

gui.clearFlash = function(){
	//clears flashed room

	gui.renderer
	.deactivateAll()


	gui.roomFlash = undefined; 
	gui.flushRenderState(); 
}

gui.renderRoomById = function(id){
	//renders a room via its id
	//also flashes it
	var room = gui.renderData.findRoomById(id); 

	if(typeof room !== "undefined"){
		gui.flashRoom(room); 
		return true;
	} else {
		gui.showNotFoundMsg(); 
		return false; 
	}
}


gui.showNotFoundMsg = function(){
	//shows the not found message
	$(".activatable").removeClass("active"); 
	$(".notfound").remove(); 
	$("<div>")
	.hide()
	.appendTo("body")
	.addClass("notfound")
	.text("That room does not exist on the map. ")
	.fadeIn(500, function(){
		$(this).fadeOut(2000, function(){
			$(this).remove(); 
		})
	});

	gui.clearFlash(); //unflash stuff
}

gui.showPerson = function(person){
	//renders a person
	//uses loadRemote
	var state = gui.getRenderState(); 
	window.loadRemote("people-renderer", function(win){
		win.render.prevRenderState = state; 
		win.render.renderPerson(person); 
	}); 
}

//render state!
gui.flushRenderState = function(){
	//gets the current Render state and flushes it to the bridge

	var state = {
		"building": gui.buildingId, 
		"block": gui.blockId, 
		"floor": gui.floorId, 
		"flash": gui.roomFlash
	}; 

	window.parent.bridge(function(b){
		b.setMapRenderState(state); 
	})
}

gui.setRenderState = function(state){
	//sets the render state
	
	var state  = (typeof state == "undefined")?{"building": 0, "block": 0, "floor": 0, "flash": undefined}:state;

	if(typeof state.flash !== "undefined"){
		gui.renderRoomById(id); 
	} else {
		gui.clearFlash();
		var f = gui.renderData.getFloorByState(state.building, state.block, state.floor);
		gui.renderFloor(f); 
	}

	//show everything
	gui.renderer.showAll(); 
}