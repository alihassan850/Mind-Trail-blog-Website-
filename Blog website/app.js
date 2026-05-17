const firebaseConfig = {
  apiKey: "AIzaSyDZUlbXUYAckjPF-eKHHU__a6y4zuz6HoY",
  authDomain: "mind-trail-7ba40.firebaseapp.com",
  projectId: "mind-trail-7ba40",
  storageBucket: "mind-trail-7ba40.firebasestorage.app",
  messagingSenderId: "283381069133",
  appId: "1:283381069133:web:b47e68d33647fad02f7304",
  measurementId: "G-RV1B0GPQXH"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const addButtonE1 = document.getElementById("add-blog");
const blogWrapperE1 = document.getElementById("blog-wrapper");

function addBlogClickHandler(id){
    location.href = "add/index.html";
}
addButtonE1.addEventListener("click", addBlogClickHandler);

async function fetchBlogs(){

    blogWrapperE1.innerHTML = "";

    const collectionRef = db.collection("blog");
    const querySnapshot = await collectionRef.get();

    querySnapshot.forEach((doc) => {
        const blogData = {
            ...doc.data(), 
            id: doc.id,
        };

    renderCard(blogData);
    });
}

function renderCard ({id, description, title}) {
    const html = `<div class='blog' id=${id}>
    <h2>${title}</h2>
    <p>${description}</p>
    <button>Edit</button>
    <button>Delete</button>
    </div>` 


    blogWrapperE1.innerHTML += html;
}

fetchBlogs();