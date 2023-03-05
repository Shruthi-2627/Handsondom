
console.log(document.getElementById("text"));
// console.log(v.innerText);


////h1 tag
let element= document.getElementsByTagName("h1");
console.log(element);
console.log(element.innerText)


///CLASS NAME "box"


console.log(document.getElementsByClassName("box"));



//HELLO TO HELLO JULIE

let hello = document.getElementById("faltu");
 //console.log(hello);
hello.innerText="Hello Julie!";
console.log(hello.innerText);


//change direction of flex on clicking button

let bttn = document.getElementById("buttons1");
console.log(bttn);

bttn.addEventListener("click", changeDirection);

 function changeDirection(){
     let five = document.getElementById("five");
     five.style.flexDirection = "column";
 }
let bttn2 = document.getElementById("buttons2");
console.log(bttn);

bttn2.addEventListener("click", changeDirection2);

 function changeDirection2(){
     let five = document.getElementById("five");
     five.style.flexDirection = "row";
 }

 //h1 add attribute

 let h1s=document.getElementsByTagName("h1");
 console.log(h1s);//as my document has more than one h1 tags, I need to find out the position of this particular h1 which is at index 5

 h1s[5].style.color="red";
 h1s[5].style.fontWeight="bold";
 h1s[5].style.fontSize="30px";
 h1s[5].setAttribute("id", "heading");
 console.log(h1s[5]); //to see id

 //question 9 hours mins secs

 function clock()
 {
 let hrs = document.getElementById("hrs");
 let mins = document.getElementById("mins");
 let secs = document.getElementById("secs");

 let time=new Date();

 let hours=time.getHours();
 if(hours>12)
 hours=hours-12;
 hrs.innerText=hours;
 mins.innerText=time.getMinutes();
 secs.innerText=time.getSeconds();
 }

 setInterval(clock, 1000);

 //print year selected from drop down
let buttonPrint= document.getElementById("buttonPrint");
buttonPrint.addEventListener("click", printYear);

function printYear()
{
    let optionSelected = year.options[year.selectedIndex].text;
    document.write(optionSelected);
}
