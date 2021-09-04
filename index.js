function password_show_hide() {
    var x = document.getElementById("pwd");
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



function ValidateLoginpwd()
{
   /* var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;*/
     var pwd= document.getElementById("pwd");

     var user = document.getElementById("UserId");

     if(user.value=="")
     {
         alert("Enter UserName");
         return false;
     }
     if (pwd.value.length<8)
     {
         alert("Password should be minimum of 8 charecters");
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

     return true;



}