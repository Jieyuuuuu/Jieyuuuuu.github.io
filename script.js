//event listener
var number = "";
var display = document.getElementById("display");
var result = eval(number);


function press1(){
    
    number = number + "1";
    print();
}
function press2(){
    number = number + "2";
    print();
}
function press3(){
    number = number + "3";
    print();
}    
function press4(){
    number = number + "4";
    print();
}
function press5(){
    number = number + "5";
    print();
}
function press6(){
    number = number + "6";
    print();
}
function press7(){
    number = number + "7";
    print();
}
function press8(){
    number = number + "8";
    print();
}
function press9(){
    number = number + "9";
    print();
}
function press0(){
    number = number + "0";
    print();
    if(number == "0"){
        number = "";
    }
}
function press_minus(){
    if(number.charAt(number.length-1) != '-' & number != ""
    & number.charAt(number.length-1) != '+'
    & number.charAt(number.length-1) != '*'
    & number.charAt(number.length-1) != '/'
    & number.charAt(number.length-1) != '&'
    & number.charAt(number.length-1) != '**'
    & number.charAt(number.length-1) != '.')
    number = number + "-";
    print();
}
function press_plus(){
    if(number.charAt(number.length-1) != '-' & number != ""
    & number.charAt(number.length-1) != '+'
    & number.charAt(number.length-1) != '*'
    & number.charAt(number.length-1) != '/'
    & number.charAt(number.length-1) != '&'
    & number.charAt(number.length-1) != '**'
    & number.charAt(number.length-1) != '.')
    number = number + "+";
    print();
}
function press_multiply(){
    if(number.charAt(number.length-1) != '-' & number != ""
    & number.charAt(number.length-1) != '+'
    & number.charAt(number.length-1) != '*'
    & number.charAt(number.length-1) != '/'
    & number.charAt(number.length-1) != '&'
    & number.charAt(number.length-1) != '**'
    & number.charAt(number.length-1) != '.')
    number = number + "*";
    print();
}
function press_division(){
    if(number.charAt(number.length-1) != '-' & number != ""
    & number.charAt(number.length-1) != '+'
    & number.charAt(number.length-1) != '*'
    & number.charAt(number.length-1) != '/'
    & number.charAt(number.length-1) != '&'
    & number.charAt(number.length-1) != '**'
    & number.charAt(number.length-1) != '.')
    number = number + "/";
    print();
}
function press_modulo(){
    if(number.charAt(number.length-1) != '-' & number != ""
    & number.charAt(number.length-1) != '+'
    & number.charAt(number.length-1) != '*'
    & number.charAt(number.length-1) != '/'
    & number.charAt(number.length-1) != '&'
    & number.charAt(number.length-1) != '**'
    & number.charAt(number.length-1) != '.')
    number = number + "%";
    print();
}
function press_exponent(){
    if(number.charAt(number.length-1) != '-' & number != ""
    & number.charAt(number.length-1) != '+'
    & number.charAt(number.length-1) != '*'
    & number.charAt(number.length-1) != '/'
    & number.charAt(number.length-1) != '&'
    & number.charAt(number.length-1) != '**'
    & number.charAt(number.length-1) != '.')
    number = number + "**";
    print();
}
function press_point(){
    if(number.charAt(number.length-1) != '-' & number != ""
    & number.charAt(number.length-1) != '+'
    & number.charAt(number.length-1) != '*'
    & number.charAt(number.length-1) != '/'
    & number.charAt(number.length-1) != '&'
    & number.charAt(number.length-1) != '**'
    & number.charAt(number.length-1) != '.'){
    number = number + ".";
    print();
    }
    else if(number == ""){
        number = "0.";
        print();
    }
    
}
function press_reset(){
    number = "";
    print();
}
function press_equal(){
    if(number != ""){
    number = eval(number)
    print();
    number = "";
    }
    else if(number == ""){
        
    }
}
function press_back(){
    number = number.slice(0, -1);
    print();
    
}


function print(){
    display.value = number;
    console.log(number);
}


