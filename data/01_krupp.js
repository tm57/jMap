var KP = (function(){
	var floor1 = [
		//A-Block
		[0, 1, 12, 8, "KA 101/102/103", ["KA-101","KA-102","KA-103"], "student"],
		[7, 9, 5, 3, "KA Stairs", undefined, "stairs"],
		[0, 9, 5, 3, "KA1 Entrance", undefined, "cor"],			

		[0, 12, 5, 8, "KA 136/137", ["KA-136","KA-137"], "student"],
		[0, 20, 5, 8, "KA 132/133", ["KA-132","KA-133"], "student"],
		[0, 28, 5, 8, "KA 128/129", ["KA-128","KA-129"], "student"],
		[0, 36, 5, 8, "KA 124/125", ["KA-124","KA-125"], "student"],
		[0, 44, 5, 2, "KA1 Stairs", undefined, "stairs"],
		
		[5, 9, 2, 40, "KA1 Corridor", undefined, "cor"],

		[7, 12, 5, 8, "KA 108/109", ["KA-108","KA-109"], "student"],
		[7, 20, 5, 8, "KA 112/113", ["KA-112","KA-113"], "student"],
		[7, 28, 5, 8, "KA 116/117", ["KA-116","KA-117"], "student"],
		[7, 36, 5, 8, "KA 120/121", ["KA-120","KA-121"], "student"],
		[7, 44, 5, 2, "KA1 Kitchen", undefined, "kitchen"],

		//B-Block
		[24, 1, 12, 8, "KB 101/102/103", ["KB-101","KB-102","KB-103"], "student"],
		[31, 9, 5, 3, "KB Stairs", undefined, "stairs"],
		[24, 9, 5, 3, "KB1 Entrance", undefined, "cor"],			
		
		[24, 12, 5, 8, "KB 136/137", ["KB-136","KB-137"], "student"],
		[24, 20, 5, 8, "KB 132/133", ["KB-132","KB-133"], "student"],
		[24, 28, 5, 8, "KB 128/129", ["KB-128","KB-129"], "student"],
		[24, 36, 5, 8, "KB 124/125", ["KB-124","KB-125"], "student"],
		[24, 44, 5, 2, "KB1 Stairs", undefined, "stairs"],
		
		[29, 9, 2, 40, "KB1 Corridor", undefined, "cor"],

		[31, 12, 5, 8, "KB 108/109", ["KB-108","KB-109"], "student"],
		[31, 20, 5, 8, "KB 112/113", ["KB-112","KB-113"], "student"],
		[31, 28, 5, 8, "KB 116/117", ["KB-116","KB-117"], "student"],
		[31, 36, 5, 8, "KB 120/121", ["KB-120","KB-121"], "student"],
		[31, 44, 5, 2, "KB1 Kitchen", undefined, "kitchen"],

		//C-Block
		[48, 1, 12, 8, "KC 101/102/103", ["KC-101","KC-102","KC-103"], "student"],
		[55, 9, 5, 3, "KC Stairs", undefined, "stairs"],
		[47, 9, 5, 3, "KC1 Entrance", undefined, "cor"],			

		[48, 12, 5, 8, "KC 136/137", ["KC-136","KC-137"], "student"],
		[48, 20, 5, 8, "KC 132/133", ["KC-132","KC-133"], "student"],
		[48, 28, 5, 8, "KC 128/129", ["KC-128","KC-129"], "student"],
		[48, 36, 5, 8, "KC 124/125", ["KC-124","KC-125"], "student"],
		[48, 44, 5, 2, "KC1 Stairs", undefined, "stairs"],
		
		[53, 9, 2, 40, "KC1 Corridor", undefined, "cor"],

		[55, 12, 5, 8, "KC 108/109", ["KC-108","KC-109"], "student"],
		[55, 20, 5, 8, "KC 112/113", ["KC-112","KC-113"], "student"],
		[55, 28, 5, 8, "KC 116/117", ["KC-116","KC-117"], "student"],
		[55, 36, 5, 8, "KC 120/121", ["KC-120","KC-121"], "student"],
		[55, 44, 5, 2, "KC1 Kitchen", undefined, "kitchen"],

		//D-Block
		[24, 46, 36, 2, "KD1 Corridor", [undefined, "cor"]
	];

	var floor2 = [
		//A-Block
		[0, 1, 12, 8, "KA 202/203", ["KA-202","KA-203"], "student"],
		[0, 4, 5, 8, "KA 240/241", ["KA-240","KA-241"], "student"],
		[7, 9, 5, 3, "KA Stairs", undefined, "stairs"],

		[0, 12, 5, 8, "KA 236/237", ["KA-236","KA-237"], "student"],
		[0, 20, 5, 8, "KA 232/233", ["KA-232","KA-233"], "student"],
		[0, 28, 5, 8, "KA 228/229", ["KA-228","KA-229"], "student"],
		[0, 36, 5, 8, "KA 224/225", ["KA-224","KA-225"], "student"],
		[0, 44, 5, 2, "KA2 Stairs", undefined, "stairs"],
		
		[5, 9, 2, 40, "KA2 Corridor", undefined, "cor"],

		[7, 12, 5, 8, "KA 208/209", ["KA-208","KA-209"], "student"],
		[7, 20, 5, 8, "KA 212/213", ["KA-212","KA-213"], "student"],
		[7, 28, 5, 8, "KA 216/217", ["KA-216","KA-217"], "student"],
		[7, 36, 5, 8, "KA 220/221", ["KA-220","KA-221"], "student"],
		[7, 44, 5, 2, "KA2 Kitchen", undefined, "kitchen"],

		//B-Block
		[24, 1, 12, 8, "KB 202/203", ["KB-202","KB-203"], "student"],
		[24, 4, 5, 8, "KB 240/241", ["KB-240","KB-241"], "student"],
		[31, 9, 5, 3, "KB Stairs", undefined, "stairs"],

		[24, 12, 5, 8, "KB 236/237", ["KB-236","KB-237"], "student"],
		[24, 20, 5, 8, "KB 232/233", ["KB-232","KB-233"], "student"],
		[24, 28, 5, 8, "KB 228/229", ["KB-228","KB-229"], "student"],
		[24, 36, 5, 8, "KB 224/225", ["KB-224","KB-225"], "student"],
		[24, 44, 5, 2, "KB2 Stairs", [undefined, "stairs"],
		
		[29, 9, 2, 40, "KB2 Corridor", undefined, "cor"],

		[31, 12, 5, 8, "KB 208/209", ["KB-208","KB-209"], "student"],
		[31, 20, 5, 8, "KB 212/213", ["KB-212","KB-213"], "student"],
		[31, 28, 5, 8, "KB 216/217", ["KB-216","KB-217"], "student"],
		[31, 36, 5, 8, "KB 220/221", ["KB-220","KB-221"], "student"],
		[31, 44, 5, 2, "KB2 Kitchen", undefined, "kitchen"],

		//C-Block
		[48, 1, 12, 8, "KC 202/203", ["KC-202","KC-203"], "student"],
		[48, 4, 5, 8, "KC 240/241", ["KC-240","KC-241"], "student"],
		[55, 9, 5, 3, "KC Stairs", undefined, "stairs"],

		[48, 12, 5, 8, "KC 236/237", ["KC-236","KC-237"], "student"],
		[48, 20, 5, 8, "KC 232/233", ["KC-232","KC-233"], "student"],
		[48, 28, 5, 8, "KC 228/229", ["KC-228","KC-229"], "student"],
		[48, 36, 5, 8, "KC 224/225", ["KC-224","KC-225"], "student"],
		[48, 44, 5, 2, "KC2 Stairs", undefined, "stairs"],
		
		[53, 9, 2, 40, "KC2 Corridor", undefined, "cor"],

		[55, 12, 5, 8, "KC 208/209", ["KC-208","KC-209"], "student"],
		[55, 20, 5, 8, "KC 212/213", ["KC-212","KC-213"], "student"],
		[55, 28, 5, 8, "KC 216/217", ["KC-216","KC-217"], "student"],
		[55, 36, 5, 8, "KC 220/221", ["KC-220","KC-221"], "student"],
		[55, 44, 5, 2, "KC2 Kitchen", undefined, "kitchen"],

		//D-Block
		[24, 46, 36, 2, "KD2 Corridor", undefined, "cor"]
	]; 

	var floor3 = [
				//A-Block
		[0, 1, 12, 8, "KA 302/203", ["KA-302","KA-303"], "student"],
		[0, 4, 5, 8, "KA 340/241", ["KA-340","KA-341"], "student"],
		[7, 9, 5, 3, "KA Stairs", undefined, "stairs"],

		[0, 12, 5, 8, "KA 336/237", ["KA-336","KA-337"], "student"],
		[0, 20, 5, 8, "KA 332/233", ["KA-332","KA-333"], "student"],
		[0, 28, 5, 8, "KA 328/229", ["KA-328","KA-329"], "student"],
		[0, 36, 5, 8, "KA 324/225", ["KA-324","KA-325"], "student"],
		[0, 44, 5, 2, "KA3 Stairs", undefined, "stairs"],
		
		[5, 9, 2, 40, "KA3 Corridor", undefined, "cor"],

		[7, 12, 5, 8, "KA 308/209", ["KA-308","KA-309"], "student"],
		[7, 20, 5, 8, "KA 312/213", ["KA-312","KA-313"], "student"],
		[7, 28, 5, 8, "KA 316/217", ["KA-316","KA-317"], "student"],
		[7, 36, 5, 8, "KA 320/221", ["KA-320","KA-321"], "student"],
		[7, 44, 5, 2, "KA3 Kitchen", undefined, "kitchen"],
	
		//B-Block
		[24, 1, 12, 8, "KB 302/203", ["KB-302","KB-303"], "student"],
		[24, 4, 5, 8, "KB 340/241", ["KB-340","KB-341"], "student"],
		[31, 9, 5, 3, "KB Stairs", undefined, "stairs"],

		[24, 12, 5, 8, "KB 336/237", ["KB-336","KB-337"], "student"],
		[24, 20, 5, 8, "KB 332/233", ["KB-332","KB-333"], "student"],
		[24, 28, 5, 8, "KB 328/229", ["KB-328","KB-329"], "student"],
		[24, 36, 5, 8, "KB 324/225", ["KB-324","KB-325"], "student"],
		[24, 44, 5, 2, "KB3 Stairs", undefined, "stairs"],
		
		[29, 9, 2, 40, "KB3 Corridor", undefined, "cor"],

		[31, 12, 5, 8, "KB 308/209", ["KB-308","KB-309"], "student"],
		[31, 20, 5, 8, "KB 312/213", ["KB-312","KB-313"], "student"],
		[31, 28, 5, 8, "KB 316/217", ["KB-316","KB-317"], "student"],
		[31, 36, 5, 8, "KB 320/221", ["KB-320","KB-321"], "student"],
		[31, 44, 5, 2, "KB3 Kitchen", undefined, "kitchen"],

		//C-Block
		[48, 1, 12, 8, "KC 302/203", ["KC-302","KC-303"], "student"],
		[48, 4, 5, 8, "KC 340/241", ["KC-340","KC-341"], "student"],
		[55, 9, 5, 3, "KC Stairs", undefined, "stairs"],

		[48, 12, 5, 8, "KC 336/237", ["KC-336","KC-337"], "student"],
		[48, 20, 5, 8, "KC 332/233", ["KC-332","KC-333"], "student"],
		[48, 28, 5, 8, "KC 328/229", ["KC-328","KC-329"], "student"],
		[48, 36, 5, 8, "KC 324/225", ["KC-324","KC-325"], "student"],
		[48, 44, 5, 2, "KC3 Stairs", undefined, "stairs"],
		
		[53, 9, 2, 40, "KC3 Corridor", undefined, "cor"],

		[55, 12, 5, 8, "KC 308/209", ["KC-308","KC-309"], "student"],
		[55, 20, 5, 8, "KC 312/213", ["KC-312","KC-313"], "student"],
		[55, 28, 5, 8, "KC 316/217", ["KC-316","KC-317"], "student"],
		[55, 36, 5, 8, "KC 320/221", ["KC-320","KC-321"], "student"],
		[55, 44, 5, 2, "KC3 Kitchen", undefined, "kitchen"],
	
		//D-Block
		[24, 46, 36, 2, "KD3 Corridor", undefined, "cor"]
	];

	return {
		"name": "Krupp", 
		"machine_name": "krupp", 
		"blocks": [
				{
					"name": "Krupp", 
					"machine_name": "abcd", 
					"floors": [
						{
							"rooms": floor1
						}, 
						{
							"rooms": floor2
						},
						{
							"rooms": floor3
						}
					]
				}
			]
	};
})(); 