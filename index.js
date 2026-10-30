// alert("Hello wordl") //ekrana cixarmaq yol 1
// document.write("Hello");//istifade olunmur  aradan qaldirilib
// console.log("salam dunya"); en cox istifada olunan


// const header = document.getElementById("header");


// header.innerHTML="Salam dunya" //innerHTML onun ucundurki  deyissin hemin headeri okey.
// header.innerText = "Salam dunya";
// header.innerText = "</hr>Salam dunya" //ferqi nedir 2 si arasinda  her seyi text kimi basa dusur
// header.innerHTML = "<hr/> Salam dunya"  //innerHTML de ise html kimi basa dusur ve isledir 


// const let var ile deyisenler yaradilir
// const age  = 30
// console.log(age)

// var age = 10
// console.log(age)

// let age = 10 //let muasirdi en cox istifae olunandi
// console.log(age)


// if(true)
// {
//     let a = 10
//     console.log(a) //burda ise scope xaricine cixa bilmir sadadce scope icersinde calisir
// }


// if(true)
// {
//     var b = 10
//     console.log(b) //belede isleye bilir
// }
// console.log(b) //belede isleye bilir cunki scope xaricine cixa bilir


//data types
//private data type / Objects






// let age = 10
// let name = "Elgun"
// let isSucced = true

// let data = null
// let data2 = NaN
// let data3 = undefined

// let myArray=["100",100]
// console.log(myArray)






// let a = 10
// let b = "10"
// console.log(a==b) //only value
// console.log(a === b) //value and type

//  > < >= <= == != === !==
// let a = 10;
// console.log(a > 5 ? "A 5 den boyukdur " : "A 5 den kicikdir");




const header = document.getElementById("header")

// function AppleCall()
// {
//     header.innerHTML = "Apple click lendi Adim deyisdi menim evvel Empty dim";
//     header.style.color = "pink";
// }

// function MangoCall()
// {
//     header.innerHTML = "Mango click lendi Adim deyisdi menim evvel Empty dim";
//     header.style.color = "black";
// }

// function PearCall()
// {
//     header.innerHTML = "Pear click lendi Adim deyisdi menim evvel Empty dim";
//     header.style.color = "green";
// }



function FruitCall(id)
{
    const currentElement=document.getElementById(id);
    header.innerHTML = `I am ${currentElement.innerHTML}`;
}










