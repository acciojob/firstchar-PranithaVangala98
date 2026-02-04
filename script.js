function firstChar(text) {
  // your code here
let trimmedText = text.trim()
return trimmedText[0]
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
