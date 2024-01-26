// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 5) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });
const firebaseConfig = {
  //PUT YOUR FIREBASE CONFIGURATION HERE
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

function register() {
  Email = document.getElementById("email").value;
  localStorage.setItem('userEmail', Email);
  Password = document.getElementById("password").value;
  Full_Name = document.getElementById("name").value;
  localStorage.setItem('userName', Full_Name);
  if (validate_email(Email) == false || validate_password(Password) == false) {
    return;
  }
  if (validate_field(Full_Name) == false) {
    return;
  }

  auth.createUserWithEmailAndPassword(Email, Password)
    .then(function () {
      var user = auth.currentUser;
      var db_ref = db.ref();
      var user_data = {
        Email: Email,
        Full_Name: Full_Name,
        last_login: Date.now(),
      };
      db_ref.child("users/" + user.uid).set(user_data);
      document.getElementById("auth-form").reset();
      alert("User Created!");
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message);
    });
}
function login() {
  Email = document.getElementById("email").value;
  Password = document.getElementById("password").value;
  if (validate_email(Email) == false || validate_password(Password) == false) {
    return;
  }
  auth.signInWithEmailAndPassword(Email, Password)
    .then(function () {
      Email = document.getElementById("email").value;
      Full_Name = document.getElementById("name").value;
      var user = auth.currentUser;
      var db_ref = db.ref();
      var user_data = {
        last_login: Date.now(),
      };
      db_ref.child("users/" + user.uid).update(user_data);
      document.getElementById("auth-form").reset();
      window.location.href = "./dist/messages.html";
    })
    .catch(function (error) {
      var err_code = error.code;
      var error_message = error.message;
      alert(error_message);
    });
}

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}
function validate_password(password) {
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}
function validate_field(field) {
  if (field == null) {
    return false;
  }
  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
