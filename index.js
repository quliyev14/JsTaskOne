const header = document.getElementById("header");
            const text = document.getElementById("text-1");

            function DigitCall(id)
            {
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
                if(id === "clear")
                {
                    text.value = 0;
                }
                else if(id === "delete")
                {
                    // slice methodu var kecmemisik deye yazmadim
                }
                else if(id === "percent")
                {
                    //arasdirdim Number adinda interface ile isleyir yazmadim ona gore
                }
                else 
                {
                    const symbol = document.getElementById(id).innerText;
                    const last = text.value[text.value.length - 1];

                    if(last === "+" || last === "-" || last === "*" || last === "/" || last === "." || last === "%") return;

                    text.value += symbol;
                }
            }

            function Calc(id)
            {
                text.value = eval(text.value);
            }