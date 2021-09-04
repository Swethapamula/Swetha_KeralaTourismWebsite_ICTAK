//phone number validation
function phonevalidate() {


  var phonenum= document.getElementById("phonenum").value;
  var phoeneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;


  if (phonenum.length >12 )
  {

     alert ("Phone number length exceeded");
     document.getElementById("phonenum").focus();
     return false;

  }

  if (!phonenum.match(phoeneregex))
  { 
         alert("Enter Valid Phone Number");
         document.getElementById("phonenum").focus();
         return false;
       }
   }    
   
   //email validation

   function ValidateEmail() 
{
    var emailid=document.getElementById("email").value;
    var validRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (validRegex.test(emailid))
{
  
    return true;
}
else{
    alert("Invalid Email id");
    document.getElementById("email").focus();
    return false;

}

}



//password validation function
function passwordChanged() {
   var strength = document.getElementById("strength");
   var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
   var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
   var pwd = document.getElementById("password");


   if (pwd.value.length<8)
   {
       alert("Password should be minimum of 8 charecters");
       document.getElementById("password").focus();
       return false;
   }
    

   re = /[0-9]/;
   if(!re.test(pwd.value)) {
     alert("Password must contain at least one number (0-9)!");
     document.getElementById("pwd").focus();
     return false;
   }
   re = /[a-z]/;
   if(!re.test(pwd.value)) {
     alert("Password must contain at least one lowercase letter (a-z)!");
     document.getElementById("pwd").focus();
     return false;
   }
   re = /[A-Z]/;
   if(!re.test(pwd.value)) {
     alert("Password must contain at least one uppercase letter (A-Z)!");
     document.getElementById("pwd").focus();
     return false;
   }


   if (pwd.value.length == 0) {
       strength.innerHTML = 'Type Password';
       document.getElementById("password").focus();
       return false;
    } 
    else if (strongRegex.test(pwd.value)) {
       strength.innerHTML = '<span style="color:green">Strong!</span>';
       return true;
       
    }
   else if (mediumRegex.test(pwd.value)) {
       strength.innerHTML = '<span style="color:orange">Medium!</span>';
       return true;
       
   } 
   else {
       strength.innerHTML = '<span style="color:red">Weak!</span>';
    return false;
   }
   return true;
}

//confirm password validation
function ConfirmPassword(){
var confirmPassword = document.getElementById("txtConfirmPassword").value;
var pwd = document.getElementById("password").value;
    
   if (pwd != confirmPassword) {
           alert("Passwords do not match.");
           document.getElementById("txtConfirmPassword").value=null;
           document.getElementById("txtConfirmPassword").focus();
            return false;
       }
       return true;
   }


//user message

function usermessage()

{
 

     var fname=document.getElementById("fname").value;
     var Lname=document.getElementById("Lname").value;
     var num=document.getElementById("phonenum").value;
     var email=document.getElementById("email").value;
     var pwd1=document.getElementById("password").value;
     var pwd2=document.getElementById("txtConfirmPassword").value;

    if(fname==""|| Lname==""||num==""||email==""||pwd1==""||pwd2=="")
    {
        alert("Enter all mandatory fields");
        return false;
    }
    alert("Successfully SignedUp");
    return true;
}


function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }

