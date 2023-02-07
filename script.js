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



//Database 
let registrations =JSON.parse(localStorage.getItem("registrations")) || [];

// Adding submit event to form 
form.addEventListener("submit", e =>{
    e.preventDefault();
     validateForm();
})

// Email Validation Function 
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

}

function validateFname(){
    if(fname.value.length === 0 || fname.value.trim() === ''){
        fnameErrorMessage.innerHTML="First name is required";
      }else {
        fnameErrorMessage.innerHTML="";
      }
}

function validateLname(){
    if(lname.value.length === 0 || fname.value.trim() === ''){
        lnameErrorMessage.innerHTML="Last name is required";
      }else{
        lnameErrorMessage.innerHTML="";
      }
}

function validateEmail(){
    if(email.value.length === 0 || email.value.trim() === ''){
        emailErrorMessage.innerHTML="Email is required";
      } else if(!isEmailValid(email.value)){
        emailErrorMessage.innerHTML="Enter a valid email.";
      }else{
        emailErrorMessage.innerHTML="";
      }
}

function validateDateofbirth(){
    var Birthday = new Date(dateofbirth.value);
    var currentDate = new Date().toJSON().slice(0,10);
    var myAge = ~~((Date.now(currentDate) - Birthday) / (31557600000));

    if(dateofbirth.value.length === 0){
        dateofbirthErrorMessage.innerHTML="Date of birth is required";
      }else if(myAge <18){
        dateofbirthErrorMessage.innerHTML="Date of birth must be at least 18 years old";
      }else{
        dateofbirthErrorMessage.innerHTML="";
      }
}

function validatePassword(){
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(password.value.length === 0 || password.value.trim() === ''){
        passwordErrorMessage.innerHTML="Password is required";
      }else if(password.value.length < 8){
        passwordErrorMessage.innerHTML="Password must be at least 8 characters";
      } else if(!passwordPattern.test(password.value)){
            passwordErrorMessage.innerHTML="Password must contain atleast lowercase letter, one uppercase, one number, one special character";
      }else{
        passwordErrorMessage.innerHTML="";
      }
}

function validateConfirmpassword(){
    if(confirmpassword.value.length === 0 || confirmpassword.value.trim() === ''){
        confirmpasswordErrorMessage.innerHTML="Confirm password is required";
      }else{
        confirmpasswordErrorMessage.innerHTML="";
      }
}

