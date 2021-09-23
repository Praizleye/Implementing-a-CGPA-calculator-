const click2next = document.querySelector('.prisubmit');//the first button
const getname = document.getElementsByTagName("input")[0];// the input frame
const getcontent = document.getElementById("showcase");//this is the main frame
const nowActive = document.querySelector("header.active"); //get the active class
const getdatname = document.querySelector("span.getdatname"); //get the spantag where users name will be added
const highestcreditload = document.querySelectorAll("input.credit"); //option yes or no for crdit load more than 6 crredit load
const quest4 = document.querySelector("span.max");
const click2next2 = document.querySelector("div.prisubmit2"); // am getting the selected button of the next frame
console.log(highestcreditload);
 
 
//add event listener
const nextframe= click2next.addEventListener("click", (e)=>{
    e.preventDefault();
    
//validate name frame by checking if the input is a text
    if(getname.type ==="text" && validateuser(getname)){
        console.log ("everything is ok you can proceed");

     nowActive.classList.remove("active");// remove active class from header
     nowActive.classList.add("inactive"); //add the class of inactive
     getcontent.classList.remove("inactive"); // remove the class of inactive on next frame
     getcontent.classList.add("active"); //add the class of active on it
  
     getdatname.textContent = getname.value;

   click2next2.addEventListener ("click", ()=> {
       console.log("i have tire i swr")
   }) // the button takes us to next frame and tells us the cheked input of the previous frame.

   const info = console.log (highestcreditload[0].checked);
for (let i=0; i<highestcreditload.length; i++){
    console.log (highestcreditload[i].checked);
}

    };
});
 
// the validation function
function validateuser(user){
if (user.value.length <= 2){
    console.log('hey!!! too short');
    error("linear-gradient(to right, rgba(200, 91, 91, 0.8), rgba(200,70,80,0.9))");
}
else
{
    console.log("valid entry");
 error("linear-gradient(to right, rgba(66, 21, 139, 0.8), rgba(25,22,175,0.9))");
    return true;
}
}
function error(background){
document.body.style.backgroundImage = background;
}


function getuseroption(option) {
if (option.hasAttribute(('#option1')))
console.log('i do nothing');
else{

console.log('wheew you just wanna stresss me');
}
}