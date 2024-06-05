/*Sign Up*/


function signup() {
    let name1 = document.getElementById('name');
    let name2 = document.getElementById('namel');
    let email = document.getElementById('mail');
    let passw = document.getElementById('password');



    if (name1.value === "") {
        name1.classList.add('border-red-500');
        name1.placeholder = "First name is required";

    }
    else if (name2.value === "") {
        name2.classList.add('border-red-500');
        name2.placeholder = "Last name is required";

    }
    else if (email.value === "") {
        email.classList.add('border-red-500');
        email.placeholder = "Email is required";

    }
    else if (passw.value === "") {
        passw.classList.add('border-red-500');
        passw.placeholder = "Password is required";

    }
    else {
        localStorage.setItem("usernamefirst", name1.value);
        localStorage.setItem("usernamelast", name2.value);
        localStorage.setItem("usermail", email.value);
        localStorage.setItem("userpassword", passw.value);
        alert("You have successfully registered!");
        window.location.href = "login.html";
    }
}
/* Password Toggle */
const eye = document.getElementById('show');
eye.addEventListener('click', function () {
    const passwo = document.getElementById('password');
    if (passwo.type === 'password') {
        passwo.type = 'text';
    } else {
        passwo.type = 'password';
    }
}
);

function icon() {
    document.getElementById('eyeicon').src = "./images/cross.jpg"
}

/* Login */
function login() {
    const email = document.getElementById('mail').value;
    const password = document.getElementById('password').value;

    const useremail = localStorage.getItem('usermail');
    const userpass = localStorage.getItem('userpassword');
    const emailInput = document.getElementById('mail');
    const passwordInput = document.getElementById('password');

    if (email !== useremail) {
        emailInput.style.borderColor = 'red';
        emailInput.placeholder = "Mail is incorrect";
        emailInput.value = '';
    } else if (password !== userpass) {
        passwordInput.style.borderColor = 'red';
        passwordInput.placeholder = "Password is incorrect";
        passwordInput.value = '';
    } else {
        let bankAccountNumber = localStorage.getItem(`acc_${email}`);
        if (!bankAccountNumber) {
            bankAccountNumber = Math.floor(Math.random() * 10000000000);
            localStorage.setItem(`acc_${email}`, bankAccountNumber);
        }

        localStorage.setItem("loginEmail", email);
        localStorage.setItem("password", password);
        alert("Logged in successfully!");
        window.location.href = "home.html";
    }
}

function displayProfile() {
    const email = localStorage.getItem('usermail');
    const accNumber = localStorage.getItem(`acc_${email}`);
    const name = localStorage.getItem('usernamefirst');
    const nam = localStorage.getItem('usernamelast');
    const amount = localStorage.getItem('amount1');
    console.log(amount);

    document.getElementById('row1').innerHTML = 'Name: ' + name + " " + nam;
    document.getElementById('row2').innerHTML = 'ACC Number: ' + accNumber;
    document.getElementById('row3').innerHTML = 'Email id: ' + email;
    document.getElementById('Welcome').innerHTML = "Welcome, " + name + " " + nam;
    document.getElementById('row4').innerHTML = "Balance: " + amount;

}

function amounthide() {
    const amount = document.getElementById('amountpro').value;
    localStorage.setItem("amount1", amount);
    displayProfile();
    document.getElementById('amountprofile').style.display = 'none';
    document.getElementById('amountpro').style.display = 'none';
    document.getElementById('submitpro').style.display = 'none';
}


/*Forgot Password*/
function forgot() {
    const email = prompt("Enter your email");
    let useremail = localStorage.getItem('usermail');
    let userpass = localStorage.getItem('userpassword');

    if (email !== useremail) {
        alert("Email not found!");
    } else {
        alert("Your password is: " + userpass);
    }
}


