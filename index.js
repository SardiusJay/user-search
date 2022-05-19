// 1. API url
const url ="https://jsonplaceholder.typicode.com/users"

//2. fetch the user from the API url
function fetchUsers(){
    // 2.1 make use of the broser fetch API
   fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // 2.2 passing usersData to the renderUsers function
        renderUsers(data);
    });
}

// 3. Render the user in th DOM
function renderUsers(usersData) {
    console.log("from renderUsers");
    console.log(usersData);
    const ul = document.getElementById("user-list-container");
    console.log(ul);

    //Render the li tag for each of the user
    usersData.forEach((user, index) => {
        console.log(user, index + 1);
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1 }</span>
        <span>${user.name}</span>
        <span>=</span>
        <span class="username">${user.username}</span>
 `;

 //Apprench the current useer li tag to the ul tag
 ul.appendChild(li);
    });
}


//4.  Add a search function to 

function searchUsersByUsername(){
    const input = document.getElementById("search")
    const ul = document.getElementById("user-list-container");
    const inputValue =  input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li"); //array for all the li tag

    //console.log(usersList[2]);

    //loop through all the users and render the one that match the search
    for (let index = 0; index < usersList.length; index++ ) {
        const usernameSpanTag = usersList[index].querySelector(".usernaame");
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        console.log(usernameSpanTagValue.indexof(inputValue));
        console.log(usernameSpanTagValue.indexof(inputValue) > -1);

if (isMatch) {
usersList[index].style.display ="block"; 
} else {
    usersList[index].dtyle.display = "none";
}
 } 
 }

//calling the fetch function
fetchUsers();
