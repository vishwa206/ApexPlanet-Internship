const form = document.querySelector("form");
const int = document.querySelector(".input_group");
const err=document.querySelector(".error")
const user1=document.querySelector("#name")
const pass1=document.querySelector("#pass")
const cpass1=document.querySelector("#cpass")
const email1=document.querySelector("#email")
var f=true
form.addEventListener("submit", function(event) {
   if(!valid()){
      event.preventDefault();
   }
});
function valid() {
   let f = true;

   const user = user1.value.trim();
   const email = email1.value.trim();
   const pass = pass1.value.trim();
   const cpass = cpass1.value.trim();

   if (user === "") {
      seterror(user1, "Username required");
      f = false;
   } else {
      setsucess(user1);
   }

   if (!isValidEmail(email)) {
      seterror(email1, "Enter a valid email");
      f = false;
   } else {
      setsucess(email1);
   }

   if (pass.length < 6) {
      seterror(pass1, "Password must be at least 6 characters");
      f = false;
   } else {
      setsucess(pass1);
   }

   if (cpass !== pass || cpass === "") {
      seterror(cpass1, "Passwords do not match");
      f = false;
   } else {
      setsucess(cpass1);
   }

   return f;
}
const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

function seterror(element,msg){
   var intgrp=element.parentElement
   const ele=intgrp.querySelector(".error")
   ele.innerHTML=msg
   intgrp.classList.add("error")
   intgrp.classList.remove("sucess")
}
function setsucess(element){
   var intgrp=element.parentElement
   intgrp.classList.add("sucess")
   intgrp.classList.remove("error")
}
