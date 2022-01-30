
let values=function(){
username=document.getElementById('Username');
email=document.getElementById('email');
confirm_email=document.getElementById('confirm_email');
user_password=document.getElementById('password');
user_confirm_password=document.getElementById('confirm_password');
};

values();

let email_exp = /[\w]+@[\w.]+/;      

let check_email=function(){   
 
    if(!(email.value.localeCompare(confirm_email.value)==0)){
        document.getElementById("mismatch_email").style.display="inline";
        return false;
     }
     else if((email.value=="")||(confirm_email.value=="")){
        document.getElementById("mismatch_email").style.display="none";
        document.getElementById("wrong_email").style.display="none";
        return false;
     }
     else{
         document.getElementById("mismatch_email").style.display="none";
         return true;
     }
    
}

let check_email_exp=function(){
        if(!(email.value.match(email_exp))&& (email.value!="")){
        
        document.getElementById("wrong_email").style.display="inline";
        return false;
      
     }
     document.getElementById("wrong_email").style.display="none";

}

email.onblur=check_email_exp;
confirm_email.onblur=check_email;


let check_password=function(){
    if(!(user_password.value.localeCompare(user_confirm_password.value)==0)){
        document.getElementById("mismatch_password").style.display="inline";
        return false;
     }

     if((user_password.value=="")||(user_confirm_password.value=="")){
        document.getElementById("mismatch_password").style.display="none";
        return false;
     }
     document.getElementById("mismatch_password").style.display="none";
     return true;
}

user_confirm_password.onblur=check_password;
let submitButton=document.getElementById('submit');
let inputs=document.querySelectorAll('input');


submitButton.addEventListener('click', function(e)
{
    e.preventDefault();
    
});
    
function register()
{   
    values();
    if(!check_email() || !check_password() || username.value ==''){
        if(!check_email()){
            email="Email";
        }
        else{
            email="";
        }
        if(!check_password()){
            password="Password";
        }
        else{
            password="";
        }
        if(username.value==''){
            user="Username"
        }
        else{
            user=""
        }
        swal("Please fill the following correctly:\n\n"+ email + "\n " + password + "\n" + user);
    }
    else{
        email.value='';
        confirm_email.value='';
        username.value='';
        user_password.value='';
        user_confirm_password.value='';
    }
};




