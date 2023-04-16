// THE LIGHT MODE SCRIPT

const light = document.getElementById('light');

light.onclick= function(){
    document.body.classList.toggle("dark-theme")
}

//  THE BLOGS SCRIPT

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.container .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}


// THE CONTACT VALIDATIONS
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const messageEl = document.getElementById('message');
const form= document.getElementById('form2');
const send = document.getElementsByClassName('contact_send')
const errorText = document.querySelector(".error-text");

form.addEventListener("submit", (event) => {
    event.preventDefault()
     if(nameEl.value.trim()==''){
        errorText.style.display ="block";
        errorText.classList.remove("matched"); 
        errorText.textContent="Please Enter Your Name";
        return false  
    }
    if(emailEl.value.trim()==''){
        errorText.style.display ="block";
        errorText.classList.remove("matched"); 
        errorText.textContent="Please Enter Your email";
        return false  
    }
    if(messageEl.value.trim()==''){ 
        errorText.style.display ="block";
        errorText.classList.remove("matched"); 
        errorText.textContent="Please Enter Your Message";
        return false  
    }

    else{
        errorText.style.display="block"
        errorText.classList.add("matched"); 
        errorText.textContent="Nice! Message Sent Successfully";
    return true
    }
})
