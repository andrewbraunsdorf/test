var hotelName = "JavaScript Hotel";

var roomTypes = ["Twin", "Single", "Double", "Queen", "King"];
var roomPrices = [75, 85, 100, 150, 200];

var availableRoomNumbers = [[101, 102, 103, 104], [105, 106, 107, 108], [201, 202, 203, 204], [301, 302, 303], [304, 305]];
var bookedRooms = [[], [], [], [], [], []];

function availableRoomQty() {
	var totalAvailableRoomQty = 0;
	
	for (var i = 0; i < availableRoomNumbers.length; i++){
		totalAvailableRoomQty += availableRoomNumbers[i].length;
		
	}
	console.log("Total Available Room Count: ", totalAvailableRoomQty);
}
console.log(availableRoomQty());
