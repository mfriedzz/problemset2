$(document).on('ready', function() {
  
  // Loop Exercise # 3
 //exercise # 1

//   var allStrings = "This is here";

// 	var reverseOrder = function(arg){
// 	//return arg.split(" ").reverse().join(" ");
// 	return arg.split("").reverse().join("");
  
// };
// 	console.log(allStrings);

// 	console.log("This string " + allStrings + " reversed " + reverseOrder(allStrings));





var allStrings = "How are you doing?";
var result = [];

var swapCase = function (arg){
	for (i=0; i<arg.length; i++) {
			if (arg[i] === arg[i].toUpperCase()) {
					result.push(arg[i].toLowerCase());
					console.log("to Upper " + arg[i]);
			} else if (arg[i] === arg[i].toLowerCase()) {
				result.push(arg[i].toUpperCase()); 
				console.log("to Upper " + arg[i]);
			} else {
					result.push(arg[i]);
					console.log("got here 3");
			} //else
		}
		return result.join(" ");
	};
	

	console.log(result);
	swapCase(allStrings);
	//var replaceCommas = result.replace(/,/g," ");
	//console.log(replaceCommas);
	console.log(result);
		console.log("This string " + allStrings + " swapped case " + result);


});