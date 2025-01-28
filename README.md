# Mawjood: Attendance Web Application with Firebase Integration

![Firebase Logo](logo.png)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication Providers](#authentication-providers)
- [Firebase Integration](#firebase-integration)
- [Contributing](#contributing)
- [License](#license)
- [References](#references)

---

## Project Overview

**Mawjood** is a web application designed to help teachers track student attendance efficiently. It records **present** and **absent** statuses and leverages **Firebase** for secure authentication, real-time database updates, and enhanced functionality.

---

## Features

- **Student Registration**: Users can register using email, password, username, and phone number.
- **Email Verification**: Ensures only verified users can access the system.
- **Two-Factor Authentication (2FA)**: Adds an extra layer of security using phone verification.
- **Dashboard**: Students can view enrolled courses and mark attendance by scanning a QR code.
- **Multiple Authentication Options**: Supports email/password, phone, Google, and Facebook login.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (Authentication, Realtime Database)
- **Authentication Providers**: Google, Facebook, Phone, Email/Password
- **Other Tools**: Firebase SDK, reCAPTCHA

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/mawjood.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mawjood
   ```
3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/u/0/).
   - Add your Firebase configuration to the project.
4. Enable authentication providers (Email/Password, Phone, Google, Facebook) in the Firebase Console.

---

## Usage

**Student Registration**
Users can register by providing their email, password, username, and phone number. Firebase's `createUserWithEmailAndPassword` function handles account creation.

**Code Example:**
<pre>
  <code class="language-javascript">
    signUp.addEventListener('click', (e) => {  
        var email = document.getElementById('email').value;  
        var password = document.getElementById('password').value;  
        var username = document.getElementById('username').value;  
        var phoneNumber = document.getElementById('number').value;  

        createUserWithEmailAndPassword(auth, email, password)  
            .then((userCredential) => {  
                sendEmailVerification(auth.currentUser)  
                    .then(() => {  
                        alert("Email verification link sent!");  
                    });  
            });  
    });
  </code>
</pre>

**Email Verification**
After registration, users receive an email verification link. Only verified users can log in.

**Code Example:**
<pre>
  <code class="language-javascript">
const user = userCredential.user;  
dspEmail.textContent = user.email;  
status.textContent = user.emailVerified;  
 </code>
</pre>

**Login**
Users log in using their verified email and password. Firebase's `signInWithEmailAndPassword` function handles authentication.

**Code Example:**
<pre>
  <code class="language-javascript">
login.addEventListener('click', (e) => {  
    var email = document.getElementById('email').value;  
    var password = document.getElementById('password').value;  

    signInWithEmailAndPassword(auth, email, password)  
        .then((userCredential) => {  
            const user = userCredential.user;  
            if (user.emailVerified) {  
                window.location.href = "verification.html";  
            } else {  
                alert('Please verify your email before logging in.');  
            }  
        });  
}); 
 </code>
</pre> 

**Two-Factor Authentication (2FA)**
After email and password verification, users are directed to a 2FA page. A verification code is sent to their phone number via SMS.
**Code Example:**
<pre>
  <code class="language-javascript">
function phoneAuth() {  
    var phoneNumber = document.getElementById('number').value;  
    firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)  
        .then(function (confirmationResult) {  
            window.confirmationResult = confirmationResult;  
        });  
}  

function codeverify() {  
    var code = document.getElementById('verificationCode').value;  
    confirmationResult.confirm(code)  
        .then(function (result) {  
            window.location.href = "welcome.html";  
        });  
}  
</code>
</pre> 

---

## Authentication Providers
Mawjood supports the following authentication methods:

1. Email/Password
2. Phone
3. Google
4. Facebook
**Google Login Example**
<pre>
  <code class="language-javascript">
const signInWithGoogle = async () => {  
    const provider = new GoogleAuthProvider();  
    const result = await signInWithPopup(auth, provider);  
    window.location.href = "welcome.html";  
};  
</code>
</pre> 
**Facebook Login Example**
<pre>
  <code class="language-javascript">
const signInWithFacebook = async () => {  
    const provider = new FacebookAuthProvider();  
    const result = await signInWithPopup(auth, provider);  
    window.location.href = "welcome.html";  
};  
</code>
</pre> 

---

## Firebase Integration
Firebase powers Mawjood's backend with:

- **Authentication:** Secure user login and registration.

- **Realtime Database:** Stores attendance records and user data.

- **Cloud Functions:** Optional for advanced backend logic.




