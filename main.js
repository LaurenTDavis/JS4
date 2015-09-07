var victimIndex = prompt("How many victims?");

var victimsName = [];
var victimsPhone = [];
var victimsAddress = [];

for ( var i = 0; i < victimIndex; i++ ) {

	var promptName = prompt("Victim " + (i+1) + " Name: ");
	var promptPhone = prompt("Victim " + (i+1) + " Phone: ");
	var promptAddress = prompt("Victim " + (i+1) + " Address: ");

	victimsName.push(promptName);
	victimsPhone.push(promptPhone);
	victimsAddress.push(promptAddress);
}
console.log(victimsName);
console.log(victimsPhone);
console.log(victimsAddress);

var volunteerIndex = prompt("How many volunteers?");

var volunteerName = [];
var volunteerPhone = [];
var volunteerAddress = [];

for ( var i = 0; i < volunteerIndex; i++ ) {

	var promptName = prompt("Volunteer " + (i+1) + " Name: ");
	var promptPhone = prompt("Volunteer " + (i+1) + " Phone: ");
	var promptAddress = prompt("Volunteer " + (i+1) + " Address: ");

	volunteerName.push(promptName);
	volunteerPhone.push(promptPhone);
	volunteerAddress.push(promptAddress);
}
console.log(volunteerName);
console.log(volunteerPhone);
console.log(volunteerAddress);


alert("Victims in need: " + victimIndex + "\n" + "Victims Names: " + victimsName);

