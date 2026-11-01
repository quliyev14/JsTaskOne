const header = document.getElementById("header");
const text = document.getElementById("text-1");
const dot  = document.getElementById("dot").innerText;

function DigitCall(id){
    let digit = document.getElementById(id).innerText;

    if (text.value === "0")
    {
        text.value = "";
        if (digit === "00") digit = "0";
    }
    text.value += digit;
}

function OperationCall(id)
{               
    const symbol = document.getElementById(id).innerText;
    const last = text.value[text.value.length - 1];

    if(last === "+" || last === "-" || last === "*" || last === "/" || last === "." || last === "%") return; 

    text.value += symbol;
    is = true;           
}

function Clear(id)
{
    text.value = 0;
    is = true;
}

function Delete(id)
{
    const last = text.value.slice(-1); //slice methodu haqqinda melumat aldim nece islediyin tam anladim
    if (last === ".") 
        is = true;      
    text.value = text.value.slice(0, -1);
    if (text.value === "") 
        text.value = "0";
}

let is = true;  
let count = 0;

function Dot() {
    if (is) {
        text.value += dot;  
        count++;
        is = false;
    }
}

function Percent(id)
{
    text.value = Number(text.value)/100;
}

function Calc(id)
{
    text.value = eval(text.value);
}