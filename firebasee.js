 window.onload = function() {
    initializeFirebaseAndRender();
};

 function initializeFirebaseAndRender() {
    // Initialize Firebase
    var firebaseConfig = {
  apiKey: "AIzaSyCvngGEqneRLQk5cpm_xSQWI0lSwIYNp3Q",
  authDomain: "mawjood-e566f.firebaseapp.com",
  databaseURL: "https://mawjood-e566f-default-rtdb.firebaseio.com",
  projectId: "mawjood-e566f",
  storageBucket: "mawjood-e566f.appspot.com",
  messagingSenderId: "828315538798",
  appId: "1:828315538798:web:f3f0b7ba90abb503645d7f"
    };
    firebase.initializeApp(firebaseConfig);
    var firebaseRef=firebase.database().ref("users");
    firebaseRef.once("value", function(snapshot){
        //snapshot.forEach(function(element))
    var data=snapshot.val();
    for(let i in data){
        console.log(data[i]);
    }
    })

    // Render reCAPTCHA after Firebase initialization
    render();
};

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

function phoneAuth() {
var phoneNumber = document.getElementById('number').value;
//alert(phoneNumber);
  firebase.auth().signInWithPhoneNumber(phoneNumber,window.recaptchaVerifier).then(function (confirmationResult) {
    window.confirmationResult=confirmationResult;
    coderesult=confirmationResult;
    console.log(coderesult);
}).catch(function (error) {
    alert(error.message);
});
}
function codeverify() {
    var code = document.getElementById('verificationCode').value;
    window.location.href = "welcome.html";
    coderesult.confirm(code).then(function(result) {
        var user = result.user;
        console.log(user);
        alert("Successfully registered");
     }).catch(function(error) {
           alert(error.message);
       });
  
      alert("Successfully registered");

}
function otp(){
    alert("Message sent, Please verify your phone number");
}
