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

//HAZIR FUNC LARINI ARASDIRMISAM SADACE for ex: include and slice


function OperationCall(id) {
    const symbol = document.getElementById(id).innerText;
    const last = text.value.slice(-1);

    if ("+-*/%".includes(last)) {
        text.value = text.value.slice(0, -1);
    }

    text.value += symbol;
    is = false;
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
    const last = text.value.slice(-1); //burdada sonuncunu goturur

    if (is && !"+-*/%".includes(last)) { // burda sonuncu simvolun operator olub olmadigini yoxalyirix
        text.value += dot;
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