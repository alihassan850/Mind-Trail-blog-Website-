import { db } from "./firebase.js";

import {collection, addDoc} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

//fetch local JSON file 
fetch("./elements.json")
.then(res => res.json())
.then(async (elements) => {

    for(const el of elements) {

        try{
            await addDoc(collection(db, "elements"), {
                number: el.number,
                Symbol: el.Symbol,
                name: el.name,
                category: el.category
            });

            console.log(`${el.name} uploaded`);

        } catch(error) {
            console.log("Error:", error);
        }
    }

    console.log("All elements uploaded!");
    
});