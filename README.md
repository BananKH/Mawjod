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
2. Navigate to the project directory:
   ```bash
   cd mawjood  
3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/u/0/).
   - Add your Firebase configuration to the project.
4. Enable authentication providers (Email/Password, Phone, Google, Facebook) in the Firebase Console.

---

## Usage
**Student Registration**
Users can register by providing their email, password, username, and phone number. Firebase's ```createUserWithEmailAndPassword``` function handles account creation.

**Code Example:**
<pre>
  <code class="language-java">
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

