function enableBday() {
	document.getElementById("secret").className = "secret secret--bday";
	var hiddenElements = document.getElementsByClassName("bday");

	for(var i = 0; i < hiddenElements.length; i++)
	{
	   hiddenElements[i].className += " bday--visible";
	}
}

function disableBday() {
	document.getElementById("secret").className = "secret";
}