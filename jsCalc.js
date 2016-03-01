var formCalc = document.calc;
var inputStore = 0;
var flagNewNum = false;
var selectOp = "";

function numPressed (num) {
    if (flagNewNum) 
    {
      formCalc.textDisp.value = num;
      flagNewNum = false;
    } 
    else 
    {
      if (formCalc.textDisp.value == "0")
        formCalc.textDisp.value = num;
      else
        formCalc.textDisp.value += num;
    }
}
  
function operation (op) {
    var input = formCalc.textDisp.value;
    if (flagNewNum && selectOp != "="){
      formCalc.textDisp.value = inputStore;
    }else{
      flagNewNum = true;
      if ( '+' == selectOp )
        inputStore += parseFloat(input);
      else if ( '-' == selectOp )
        inputStore -= parseFloat(input);
      else if ( '/' == selectOp )
        inputStore /= parseFloat(input);
      else if ( '*' == selectOp )
        inputStore *= parseFloat(input);
      else
        inputStore = parseFloat(input);
      formCalc.textDisp.value = inputStore;
      selectOp = op;
    }
}
  
function inputDot () {
    var inpDot = formCalc.textDisp.value;
    if (flagNewNum) 
    {
      inpDot = "0.";
      flagNewNum = false;
    }
    else
    {
      if (inpDot.indexOf(".") == -1)
        inpDot += ".";
    }
    formCalc.textDisp.value = inpDot;
}
  
function inputClean () {
    inputStore = 0;
    selectOp = "";
    formCalc.textDisp.value = "0";
    flagNewNum = true;
}

function inputMinusPlus () { 
    formCalc.textDisp.value = parseFloat(formCalc.textDisp.value) * -1;
}

var zero = document.getElementById("butt0").onclick=function(){numPressed(0);};
var one = document.getElementById("butt1").onclick=function(){numPressed(1);};
var two = document.getElementById("butt2").onclick=function(){numPressed(2);};
var three = document.getElementById("butt3").onclick=function(){numPressed(3);};
var four = document.getElementById("butt4").onclick=function(){numPressed(4);};
var five = document.getElementById("butt5").onclick=function(){numPressed(5);};
var six = document.getElementById("butt6").onclick=function(){numPressed(6);};
var seven = document.getElementById("butt7").onclick=function(){numPressed(7);};
var eight = document.getElementById("butt8").onclick=function(){numPressed(8);};
var nine = document.getElementById("butt9").onclick=function(){numPressed(9);};

var clean = document.getElementById("buttC").onclick=function(){inputClean();};
var minPlus = document.getElementById("buttMinPlus").onclick=function(){inputMinusPlus();};
var dot = document.getElementById("buttDot").onclick=function(){inputDot();};

var division = document.getElementById("buttSlash").onclick=function(){operation("/");};
var multiply = document.getElementById("buttStar").onclick=function(){operation("*");};
var deduct = document.getElementById("buttMinus").onclick=function(){operation("-");};
var add = document.getElementById("buttPlus").onclick=function(){operation("+");};
var equally = document.getElementById("buttEqually").onclick=function(){operation("=");};