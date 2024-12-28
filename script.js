var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for(tablink of tabcontents) {
        tablink.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
 }


 const scriptURL = 'https://script.google.com/macros/s/AKfycbzzxCYKHeO17OyXQ8jPLi8FXzDfBwGEw7JbUOLEsB9oZU_FpicqjeHhxfWKUIZzmAJ9Tw/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg = document.getElementById("msg")

 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
         msg.innerHTML = "Message sent successfully";
         setTimeout(function(){
             msg.innerHTML = ""
         }, 5000)
         form.reset()
     })
     .catch(error => console.error('Error!', error.message))
 })


 const text = document.querySelector(".mani");
 const textLoad = () => {
     setTimeout(() =>{
         text.textContent = "Manisha";
     }, 0);
     setTimeout(() =>{
         text.textContent = "Developer";
     }, 6000);
 }
 textLoad();
 setInterval(textLoad, 12000);


 var sidemenu = document.getElementById("sidemenu");

 function openmenu() {
    sidemenu.style.right = "0";
 }

 function closemenu() {
    sidemenu.style.right = "-200px";
 }