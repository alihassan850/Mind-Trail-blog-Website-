import { db } from "./firebase.js";
import { collection, getDocs} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const elements = [
  { "number": 1, "symbol": "H", "name": "Hydrogen", "category": "nonmetal" },
  { "number": 2, "symbol": "He", "name": "Helium", "category": "noble-gas" },

  { "number": 3, "symbol": "Li", "name": "Lithium", "category": "alkali-metal" },
  { "number": 4, "symbol": "Be", "name": "Beryllium", "category": "alkaline-earth" },
  { "number": 5, "symbol": "B", "name": "Boron", "category": "metalloid" },
  { "number": 6, "symbol": "C", "name": "Carbon", "category": "nonmetal" },
  { "number": 7, "symbol": "N", "name": "Nitrogen", "category": "nonmetal" },
  { "number": 8, "symbol": "O", "name": "Oxygen", "category": "nonmetal" },
  { "number": 9, "symbol": "F", "name": "Fluorine", "category": "halogen" },
  { "number": 10, "symbol": "Ne", "name": "Neon", "category": "noble-gas" }

]

// Select Container

const table = document.querySelector(".periodic-table");
const searchInput = document.querySelector("#searchInput");

//Load data from firebase
async function loadElements() {

    const querySnapshot = await getDocs(collection(db, "elements"));

    elements = [];

    querySnapshot.forEach((doc) => {
        elements.push(doc.data());
    });

    renderElements(elements);
}

//Render function
function renderElements(data) {
    table.innerHTML = "";

    data.forEach(el => {
        const div = document.createElement("div");
        div.classList.add("element");
        div.classList.add("element",el.category);
     
        div.innerHTML = `
        <p>${el.number}</p>
        <h3>${el.Symbol}</h3>
        <p>${el.name}</p>
        `;


        //click addEventListener
        div.addEventListener("click", () => {
            alert(
                `Name: ${el.name}\n Symbol: ${el.Symbol}\n Atomic Number: ${el.number}`
            );
        });

        table.appendChild(div);
    });
}

//Search functionality 
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = elements.filter(el =>
        el.name.toLowerCase().include(value) ||
        el.Symbol.toLowerCase().includes(value) ||
        el.number.toString().includes(value)
    );

    renderElements(filtered);
})

loadElements();