// toggleMenu 

var menuList = document.getElementById("menu-list");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "200px";
    }
    else
    {
        menuList.style.maxHeight = "0px";
    }
}

// search open 
function openSearch(){
    document.getElementById("search-icon").style.display="block";
}
function closeSearch(){
    document.getElementById("search-icon").style.display="none";
}



// Open and Close form 
function Openform(){
    document.getElementById("signupForm").style.display="block";
   
}
function closeForm(){
    document.getElementById("signupForm").style.display="none";
}

// form validations 
const form = document.getElementById("signupForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const dateofbirth = document.getElementById("date-of-birth");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirm-password");


const fnameErrorMessage = document.getElementById("fname-error");
const lnameErrorMessage = document.getElementById("lname-error");
const emailErrorMessage = document.getElementById("email-error");
const dateofbirthErrorMessage = document.getElementById("date-of-birth-error");
const passwordErrorMessage = document.getElementById("password-error");
const confirmpasswordErrorMessage = document.getElementById("confirm-password-error");


let registrations =JSON.parse(localStorage.getItem("registrations")) || [];


form.addEventListener("submit", e =>{
    e.preventDefault();
     validateForm();
})

function isEmailValid(email){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(String(email).toLocaleLowerCase());
}

function validateForm() {

      if(fname.value === "" || lname.value === "" || email.value === "" || dateofbirth.value=== "" || password.value === "" || confirmpassword.value === ""){
        alert("Please fill in all the details to signup!")
      }else if(!isEmailValid(email.value)){
        alert("Please enter a valid email");
      }
      else if(password.value != confirmpassword.value){
        const formErrorMessage = document.getElementById("form-error-message");
        formErrorMessage.innerHTML="Passwords do not match";
      }else if(registrations.includes(email.value)){
        alert("This email is already registered");
      }else{
        registrations.push(email.value);
        localStorage.setItem("registrations", JSON.stringify(registrations));
        alert("Thanks for signing up!")
      }
    //   console.log(registrations)
}

function validateFname(){
    if(fname.value.length === 0){
        fnameErrorMessage.innerHTML="First name is required";
      }else {
        fnameErrorMessage.innerHTML="";
      }
}

function validateLname(){
    if(lname.value.length === 0){
        lnameErrorMessage.innerHTML="Last name is required";
      }else{
        lnameErrorMessage.innerHTML="";
      }
}

function validateEmail(){
    if(email.value.length === 0){
        emailErrorMessage.innerHTML="Email is required";
      } else if(!isEmailValid(email.value)){
        emailErrorMessage.innerHTML="Enter a valid email.";
      }else{
        emailErrorMessage.innerHTML="";
      }
}

function validateDateofbirth(){
    if(dateofbirth.value.length === 0){
        dateofbirthErrorMessage.innerHTML="Date of birth is required";
      }else{
        dateofbirthErrorMessage.innerHTML="";
      }
}

function validatePassword(){
    if(password.value.length === 0){
        passwordErrorMessage.innerHTML="Password is required";
      }else{
        passwordErrorMessage.innerHTML="";
      }
}
function validateConfirmpassword(){
    if(confirmpassword.value.length === 0){
        confirmpasswordErrorMessage.innerHTML="Confirm password is required";
      }else{
        confirmpasswordErrorMessage.innerHTML="";
      }
}
































































// // Input Validations 
// function validateFname() {
//     if (fname.value === "") {
//         document.getElementById("fname-error").innerHTML = "First name is required";
//     } else if (!/^[a-zA-Z]+$/.test(fname.value)) {
//         errorMessage.innerHTML = "First name should contain only letters";
//     } else {
//         errorMessage.innerHTML = "";
//     }
// }

// function validateLname() {
//     if (fname.value === "") {
//         document.getElementById("lname-error").innerHTML = "Last name is required";
//     } else if (!/^[a-zA-Z]+$/.test(fname.value)) {
//         errorMessage.innerHTML = "Last name should contain only letters";
//     } else {
//         errorMessage.innerHTML = "";
//     }
// }

// function validateEmail() {
//     if (fname.value === "") {
//         document.getElementById("email-error").innerHTML = "Email is required";
//     } 
//     else {
//         errorMessage.innerHTML = "";
//     }
// }

// function validatePassword() {
//     if (fname.value === "") {
//         document.getElementById("password-error").innerHTML = "Password is required";
//     } 
//     else {
//         errorMessage.innerHTML = "";
//     }
// }


// function validateConfirmpassword() {
//     if (fname.value === "") {
//         document.getElementById("confirmpassword-error").innerHTML = "This field is required";
//     } 
//     else {
//         errorMessage.innerHTML = "";
//     }
// }

// // Validate the entire form 
// function submitForm(){
//     setTimeout(document.getElementById("submit-message").innerHTML="Thanks for singing up!", 3000);
    
// }