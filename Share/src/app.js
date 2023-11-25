import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAA5q4c4eIf5gVAxc3v45yznnM-gWz0H3Y",
  authDomain: "smartagrihub-a1ccf.firebaseapp.com",
  projectId: "smartagrihub-a1ccf",
  storageBucket: "smartagrihub-a1ccf.appspot.com",
  messagingSenderId: "901356397354",
  appId: "1:901356397354:web:2205beb55e8f880d6c7453",
};
initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "Messages");

const userEmail = localStorage.getItem("userEmail");
const userName = localStorage.getItem("userName");
const timestamp = new Date();

const day = timestamp.getDate();
const month = timestamp.getMonth() + 1;
const year = timestamp.getFullYear();
const hours = timestamp.getHours();
const minutes = timestamp.getMinutes();
const amOrPm = hours >= 12 ? "PM" : "AM";
const hour12 = hours % 12 || 12;

const formattedDate = `${day < 10 ? "0" : ""}${day}/${
  month < 10 ? "0" : ""
}${month}/${year} ${hour12 < 10 ? "0" : ""}${hour12}:${
  minutes < 10 ? "0" : ""
}${minutes} ${amOrPm}`;

const addForm = document.querySelector(".add");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    Name: userName,
    Email: userEmail,
    Message: addForm.msg.value,
    Heading: addForm.heading.value,
    Time: formattedDate,
  }).then(() => {
    addForm.reset();
  });
  printMessage();
});
window.addEventListener("load", () => {
  printMessage();
});
function printMessage() {
  getDocs(colRef)
    .then((querySnapshot) => {
      const messages = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        const name = data.Name;
        const email = data.Email;
        const message = data.Message;
        const heading = data.Heading;
        const time = data.Time;

        messages.push({
          Name: name,
          Email: email,
          Message: message,
          Heading: heading,
          Time: time,
        });
      });
      const discussionList = document.querySelector(".discussion-list");
      messages.forEach((message) => {
        const html = `
          <li>
            <h3>${message.Heading}</h3>
            <p class="answer">${message.Message}</p>
            <div class="division">
            <p class="posted-on">Posted On - <span id="grey">${message.Time}</span></p>
              <p class="posted-by">Posted By - ${message.Name}</p>
            </div>
          </li>`;

        discussionList.insertAdjacentHTML("beforeend", html);
      });
      console.log(messages);
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
}
