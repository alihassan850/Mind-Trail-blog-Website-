const firebaseConfig = {
  apiKey: "AIzaSyDZUlbXUYAckjPF-eKHHU__a6y4zuz6HoY",
  authDomain: "mind-trail-7ba40.firebaseapp.com",
  projectId: "mind-trail-7ba40",
  storageBucket: "mind-trail-7ba40.firebasestorage.app",
  messagingSenderId: "283381069133",
  appId: "1:283381069133:web:b47e68d33647fad02f7304",
  measurementId: "G-RV1B0GPQXH"
};

console.log(firebase);

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const addButtonE1 = document.getElementById("add");

function addBlogClickHandler(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const collectionRef = db.collection("blog");

    collectionRef.add(
        {title, description}
    )
    .then(()=> {
        alert("New Blog has been added");
    })
    .catch((error) => {
        console.log("Error", error);
    });
}

addButtonE1.addEventListener("click", addBlogClickHandler);