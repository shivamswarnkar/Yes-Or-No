
/*-----------Get the user Response and post the answer---------*/
function run(){
	var yes = document.getElementById("yes");
	var no = document.getElementById("no");

	/*----Algo to reset page------*/
	if(document.getElementById("try").innerHTML ==="Reset"){
		document.getElementById("try").innerHTML = "Get Ans!";
		yes.style.backgroundColor = "white";
		no.style.backgroundColor = "white";
		yes.innerHTML = "?";
		no.innerHTML = "?";
		yes.style.color = "black";
		no.style.color = "black";
		return;

	}

	/*----Algo to Find answer------*/
	var ans = ["YES", "NO"];
	var rand = ans[Math.floor(Math.random()*2)];

	yes.style.color = "white";
	no.style.color = "white";
	
	if(rand==="NO"){
		yes.style.backgroundColor = "red";
		no.style.backgroundColor = "red";
		yes.innerHTML = "NO";
		no.innerHTML = "NO";
	}

	else{
		yes.style.backgroundColor = "green";
		no.style.backgroundColor = "green";
		yes.innerHTML = "YES";
		no.innerHTML = "YES";
	}

	document.getElementById("try").innerHTML = "Reset";

}