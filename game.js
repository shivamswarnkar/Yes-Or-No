
/*-----------Get the user Response and post the answer---------*/
function printName(){
	var button = document.getElementById("send");

	/*-----------Get The Values---------*/
	if(button.name === "send"){
		var name = document.getElementById("myName").value;
		var word = document.getElementById("word").value;
		var num  = document.getElementById("num").value;
		var bool = document.getElementById("bool").value;
		button.innerHTML = "Reset";
		button.name = "reset";

		document.getElementById("content").innerHTML = luck(name, word, num, bool, button);
	}

	/*-----------Reset The Questions---------*/
	else{
		document.getElementById("myName").value = "";
		document.getElementById("word").value = "";
		document.getElementById("num").value = "";
		document.getElementById("bool").value = "";
		document.getElementById("content").innerHTML = "";
		button.innerHTML = "Send";
		button.name = "send";
	}
};


/*-----------Calculate result and content html---------*/
function luck(name, word, num, bool, button){

	/*-----------Possible Answers Starts---------*/
	var means = ["always thinking","sweat","brave","truth","love","Pure","Life","Shine","Care","Beauty"];
	var colors = ["No color can save you today","Redish","Greenoo","Purpleling","Whityy","Blue","Black",
				  "Yellow","Pinky Pinky","All colors are yours"];
	var extra = [10, 13, -12, -5, 30, -13, -10, -30, 5, 12];
	var op = [1,2];

	/*-----------Possible Answers Ends---------*/

	//test if user gave all data
	if(name=="" || word=="" || num==""){
		button.innerHTML = "Send";
		button.name = "send";
		return "Please Enter All the Info";
	}


	/*-----------Algorithm Starts---------*/
	var rand = Math.floor(Math.random()*100);
	if(bool=="on"){
		rand += extra[rand%10];
	}

	var luckyNum = (Math.floor(Math.random()*10) * Math.floor(Math.random()*100) + rand)%10;

	var color =(rand * (Math.floor(Math.random()*457)) )%10;
	var mean = (name.length * (Math.floor(Math.random()*123)) )%10;  //randomly selected this way to calculate
	var user = num + (word.length *Math.floor(Math.random()*100 ));
	op[0] = user;
	op[1] = user*(-1);
	rand += op[Math.floor(Math.random()*2)];
	rand = Math.abs(rand);
	/*-----------Algorithm ends---------*/

	/*-----------Content HTML Starts---------*/
	message = "<h2 align="+"center"+">Results</h2><br>";
	message += "<h3>Hello, and Welcome " + name+"!!!</h3><br><ul>";
	message += "<li>Your Name means: "+ means[mean]+"</li>" ;
	message += "<li>Your Lucky Color: "+ colors[color]+"</li>" ;
	message += "<li>Your Luck% Today: "+ (rand%102)+"%</li>" ;
	message += "<li>Your Lucky Number Today: "+ luckyNum +"</li><ul>" ;
	/*-----------Content HTML Ends---------*/


	return message;

};


/*------------color changing function------------*/
function changeColor(){
	var colors = ["red","lightgreen","black", "yellow","hotpink"];
	var color = colors[Math.floor(Math.random()*7)];
	document.getElementById("header").style.backgroundColor = color;
}
setInterval(changeColor, 500);