// THE MENU SCRIPT
let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick=() =>{
    navbar.classList.toggle('active');
}


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
// The like Script 
const blogs = document.querySelectorAll(".box");
blogs.forEach((blog) => {
  let count = 0;
  let isLiked = false;
  const likeButton = blog.querySelector("#like-button");
  const likeCount = blog.querySelector("#like-count");

  // Retrieve initial count and like status from local storage
  const blogId = blog.getAttribute("id");
  const storedCount = localStorage.getItem(`${blogId}-count`);
  const storedIsLiked = localStorage.getItem(`${blogId}-isLiked`);
  if (storedCount !== null) {
    count = parseInt(storedCount);
    likeCount.textContent = count;
  }
  if (storedIsLiked !== null) {
    isLiked = storedIsLiked === "true";
    if (isLiked) {
      likeButton.classList.add("liked");
      likeButton.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
  }

  likeButton.addEventListener("click", () => {
    if (isLiked) {
      count--;
      likeCount.textContent = count;
      likeButton.classList.remove("liked");
      likeButton.innerHTML = '<i class="far fa-heart"></i>';
      isLiked = false;
    } else {
      count++;
      likeCount.textContent = count;
      likeButton.classList.add("liked");
      likeButton.innerHTML = '<i class="fa-solid fa-heart"></i>';
      isLiked = true;
    }

    // Store count and like status in local storage
    localStorage.setItem(`${blogId}-count`, count);
    localStorage.setItem(`${blogId}-isLiked`, isLiked);
  });
});





// Loop through each blog and add event listeners to its comment and like buttons
const blogComment = document.querySelectorAll(' .blog-icon');

for (let i = 0; i < blogComment.length; i++) {
  const messageIcon = blogComment[i].querySelector('#message-icon');
  const commentSection = blogComment[i].querySelector('#comment-section');
  const commentCount = blogComment[i].querySelector('#comment-count');
  const likeButton = blogComment[i].querySelector('#like-button');
  const likeCount = blogComment[i].querySelector('#like-count');

  // Get the blog ID and check if it has comments and likes stored in local storage
  const blogID = `blog-${i}`;
  let comments = localStorage.getItem(`${blogID}-comments`);
  let likes = localStorage.getItem(`${blogID}-likes`);

  // If there are no comments or likes, initialize them to empty arrays
  if (!comments) {
    comments = [];
  } else {
    comments = JSON.parse(comments);
  }
  if (!likes) {
    likes = 0;
  } else {
    likes = parseInt(likes);
  }

  // Update the comment count and like count with the values from local storage
  commentCount.textContent = comments.length;
  likeCount.textContent = likes;

  // Add event listeners to the message icon and like button
  messageIcon.addEventListener('click', function() {
    commentSection.style.display = 'block';
  });


  // Add event listener to the comment form submit button
  const commentSubmit = blogComment[i].querySelector('#comment-submit');

  commentSubmit.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the comment text from the textarea
    const commentTextarea = blogComment[i].querySelector('#comment-textarea');
    const commentText = commentTextarea.value.trim();

    if (commentText !== '') {
      // Add the comment to the local storage and update the comment count
      comments.push(commentText);
      localStorage.setItem(`${blogID}-comments`, JSON.stringify(comments));
      commentCount.textContent = comments.length;

      // Create a new comment element and add it to the comment list
      const commentList = blogComment[i].querySelector('#comments-list');
      const newComment = document.createElement('li');
      const newCommentText = document.createElement('p');
      const newCommentReplyButton = document.createElement('button');
      newCommentText.textContent = commentText;
      newCommentReplyButton.textContent = 'Reply';
      newCommentReplyButton.classList.add('reply-button');
      newComment.appendChild(newCommentText);
      newComment.appendChild(newCommentReplyButton);
      commentList.appendChild(newComment);

      // Clear the textarea
      commentTextarea.value = '';
    }
  });
}

// The Testmonials script

// coding with nick
// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;
// coding with nick
window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
// coding with nick
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}
  