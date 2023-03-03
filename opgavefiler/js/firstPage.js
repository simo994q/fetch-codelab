/* Opgave 1*/
// din kode her

const userURI = "https://jsonplaceholder.typicode.com/users";

fetch(userURI)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        buildUserList(data)
    })
    .catch(error => console.error(error));

const myUserlistElement = document.getElementById("userList");

function buildUserList(myData) {
    myData.map((user) => {
        myUserlistElement.innerHTML += `<h2>${user.name}</h2>
        <p>Adresse: ${user.address.street}  ${user.address.suite}</br>
           post nummer: ${user.address.zipcode}</br>
           by: ${user.address.city}</p>`
    })
};

/* Opgave 2*/

// din kode her





const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");

fetch(myDataFileUrl)
    .then(response => response.json())
    .then(data => {

    })







/* Opgave 3 - skriv videre på koden her: */



/* Opgave 3*/
// din kode her

const myListElement = document.getElementById("userSelect");
const myPostElement = document.getElementById("userPosts");

//entry point

getUsers("https://jsonplaceholder.typicode.com/users");

