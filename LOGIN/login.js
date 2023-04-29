const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorText = document.querySelector(".error-text");
const btn = document.querySelector("button")
const form = document.getElementsByClassName("form")

function active(){
    if(email.value.length >1){
        btn.removeAttribute("disabled","")
        btn.classList.add("active");
        password.removeAttribute("disabled","")
    }else{
        btn.setAttribute("disabled","")
        btn.classList.remove("active"); 
        password.setAttribute("disabled","")
    }
    
}
btn.onclick =function(){
      if (password.value.trim()==''){
        errorText.style.display ="block";
        errorText.classList.remove("matched");
        errorText.textContent=" Please Enter the password";
      { return false}
      }
    if(password.value.length <=6){
        errorText.style.display ="block";
        errorText.classList.remove("matched");
        errorText.textContent=" Invalid Password";
      { return false}
    }
    else{
        // errorText.style.display="block"
        // errorText.classList.add("matched"); 
        // errorText.textContent="Login Successfully";
        alert("Login Successfully")
        location.href="../index.html"
        {return true}
    }
}
