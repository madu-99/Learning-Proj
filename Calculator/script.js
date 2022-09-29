function writeInScreen(x){
    if(x != "AC" && x != "=" && x != "DEL"){
        x = String(x);
        screenOutput.innerHTML += x;
    }

    else if( x == "="){
        var input = screenOutput.innerHTML;
        var output = eval(input);
        screenOutput.innerHTML = output;
    }

    else if( x == "DEL"){
       var displayinput = screenOutput.innerHTML;
       var deletelastString = displayinput.slice(0,-1);
       screenOutput.innerHTML = deletelastString;
    }

    else{
        screenOutput.innerHTML = '';
    }
}