function signup() {
    let name1 = document.getElementById('name').value;
    let name2 = document.getElementById('namel').value;
    let email = document.getElementById('mail').value;
    let passw = document.getElementById('password').value; 

    if (name1 === "") {
        alert("Enter first name");
    } else if (name2 === "") {
        alert("Enter last name");
    } else if (email === "") {
        alert("Enter email");
    } else if (passw === "") {
        alert("Enter password");
    } else {
        localStorage.setItem("username first", name1);
        localStorage.setItem("username last", name2);
        localStorage.setItem("usermail", email);
        localStorage.setItem("userpassword", passw);
        alert("You have successfully registered!");
        window.location.href = "login.html";    }
}

const eye = document.getElementById('show');
eye.addEventListener('click', function() {
    const passwo = document.getElementById('password');
    if (passwo.type === 'password') {
        passwo.type = 'text';
    } else {
        passwo.type = 'password';
   }}
);

function icon(){
    document.getElementById('eyeicon').src="./images/cross.jpg"
}


function login() {
    let email = document.getElementById('mail').value
    let password = document.getElementById('password').value
    console.log(email, password);

    let useremail = localStorage.getItem('usermail')
    let userpass = localStorage.getItem('userpassword')

    if (email != useremail) {
        alert("INVALID EMAIL !")
    }
    else if (password != userpass) {
        alert("INVALID PASSWORD")
    }
    else {
        alert("Logged in successfully !")
        window.location.href = "home.html";

    }

}


function forgot() {
    let email = prompt("Enter your email");
    let useremail = localStorage.getItem('usermail');
    let userpass = localStorage.getItem('userpassword');

    if (email !== useremail) {
        alert("Email not found!");
    } else {
        alert("Your password is: " + userpass);
    }}
function faqshow(){
        document.getElementById('faq').style.display = 'block flex';
        document.getElementById('less').style.display='block';
        document.getElementById('more').style.display='none';
        document.getElementById('bottom1').style.background='#262626';
        document.getElementById('bottom2').style.background='#262626';


}


function faqhide() {
    document.getElementById('faq').style.display = 'none';
    document.getElementById('more').style.display = 'block';
    document.getElementById('less').style.display = 'none';
    document.getElementById('bottom1').style.background = 'linear-gradient(to bottom, #252525 50%, rgba(0, 0, 0, 0.75) 100%)';
    document.getElementById('bottom2').style.background = 'linear-gradient(to bottom, #252525 50%, rgba(0, 0, 0, 0.75) 100%)';
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    let translateXValue = -(slideIndex - 1) * 100;
    document.querySelector('.flex').style.transform = `translateX(${translateXValue}%)`;
}
