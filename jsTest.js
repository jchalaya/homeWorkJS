document.getElementById("result").onclick= function checkTest() {
	var percent = 0;
    var ball = 0;
	var ans1 = document.getElementById("answer1").checked;
	if(ans1==true){ 
		percent = percent + 20;
		ball = ball + 5;
		alert("1 ok");
	}
	 
    var ans2 = document.getElementById("answer2").checked;
	if (ans2==true){
		percent = percent + 20;
		ball = ball + 5;
		alert("2 ok");
	}
	
	var ans3 = document.getElementById("answer3").checked;
	if (ans3==true){ 
		percent = percent + 20;
		ball = ball + 5;
		alert("3 ok");
	}
	
	var ans4 = document.getElementsByName("four");
	for(var i = 0; i < ans4.length; i++){
		var elem = ans4[i];
	}
	
	if (ans4[0].checked==false && ans4[1].checked==true && ans4[2].checked==false && ans4[3].checked==true){
	    percent = percent + 20;
		ball = ball + 5;
		alert("4 ok");
	} else if (ans4[0].checked==true && ans4[1].checked==true && ans4[2].checked==false && ans4[3].checked==false){
            percent = percent + 10;
		    ball = ball + 2.5;
	    } else if (ans4[0].checked==false && ans4[1].checked==true && ans4[2].checked==true && ans4[3].checked==false){
            percent = percent + 10;
		    ball = ball + 2.5;
	    } else if (ans4[0].checked==true && ans4[1].checked==false && ans4[2].checked==false && ans4[3].checked==true){
            percent = percent + 10;
		    ball = ball + 2.5;
	    } else if (ans4[0].checked==false && ans4[1].checked==false && ans4[2].checked==true && ans4[3].checked==true){
            percent = percent + 10;
		    ball = ball + 2.5;
	    } else if (ans4[0].checked==false && ans4[1].checked==true && ans4[2].checked==false && ans4[3].checked==false){
	    	percent = percent + 10;
	    	ball = ball + 2.5;
	    } else if (ans4[0].checked==false && ans4[1].checked==false && ans4[2].checked==false && ans4[3].checked==true){
	    	percent = percent + 10;
	    	ball = ball + 2.5;
	    } else {
	    	percent = percent + 0;
	    	ball = ball + 0;
	    }

	var ans5 = document.getElementsByName("five");
	for(var i = 0; i < ans5.length; i++){
		var elem = ans5[i];
	}
	
	if (ans5[0].checked==true && ans5[1].checked==true && ans5[2].checked==false && ans5[3].checked==false){
	    percent = percent + 20;
		ball = ball + 5;
		alert("5 ok");
	} else if (ans5[0].checked==true && ans5[1].checked==false && ans5[2].checked==true && ans5[3].checked==false){
            percent = percent + 10;
		    ball = ball + 2.5;
	    } else if (ans5[0].checked==true && ans5[1].checked==false && ans5[2].checked==false && ans5[3].checked==true){
            percent = percent + 10;
		    ball = ball + 2.5;
	    } else if (ans5[0].checked==false && ans5[1].checked==true && ans5[2].checked==true && ans5[3].checked==false){
            percent = percent + 10;
		    ball = ball + 2.5;
	    } else if (ans5[0].checked==false && ans5[1].checked==true && ans5[2].checked==false && ans5[3].checked==true){
            percent = percent + 10;
		    ball = ball + 2.5;
	    } else if (ans5[0].checked==true && ans5[1].checked==false && ans5[2].checked==false && ans5[3].checked==false){
	    	percent = percent + 10;
	    	ball = ball + 2.5;
	    } else if (ans5[0].checked==false && ans5[1].checked==true && ans5[2].checked==false && ans5[3].checked==false){
	    	percent = percent + 10;
	    	ball = ball + 2.5;
	    } else {
	    	percent = percent + 0;
	    	ball = ball + 0;
	    }

	alert("Вы набрали " + ball + " баллов  " + percent + " % правильных ответов.");
	
}


