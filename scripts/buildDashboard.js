//Author : Garrett Ward
//Functionality : Creates virtual elements and appends them to the DOM to 
//construct our website's dashboard. Uses event listeners to invoke functions
//that manipulate the DOM so the user may create, store, and interact with data
//from the browser


const displayActiveUser = require("./displayActiveUser")
const newsForm = require("./newsForm")
const writeNews = require("./newsController")
const buildMessageBoard = require("./buildMessageBoard")
const taskController = require("./taskController.js")
const eventController = require("./eventController.js")
const displayUsers = require("./displayUsers")
const displayFriends = require("./displayFriends")



const buildDashboard = function () {
    //hide landing page and sign up form sections
    let landingSection = document.getElementById("landingPage")
    landingSection.classList.add("hideIt")
    let formSection = document.getElementById("userFormSection")
    formSection.classList.add("hideIt")

    // declare a variable to store the html injection location for the dashboard using an id
    let dashBoardMarker = document.getElementById("Dashboard")
    
    // TODO added this 11/14/2017
    dashBoardMarker.classList.add("container")
    
    // create div for tasks link
    // create a div and store it in a variable. Then add text to that div
    let tasksDiv = document.createElement("div")

    // tasksDiv.appendChild(document.createTextNode("Click to create or view Tasks"))
    tasksDiv.innerHTML = `
    <i class="fa fa-tasks fa-2x" aria-hidden="true"></i> Click to create or view Tasks<br>`
    //create a button that allows users to navigate to the tasks page, give that button an id
    let tasksButton = document.createElement("button")
    tasksButton.classList.add("btn", "btn-primary")
    tasksButton.appendChild(document.createTextNode("Tasks"))

    tasksButton.id = "tasks_Button"
    tasksButton.addEventListener("click", function(){
        taskController()
    })
    //append the button to the tasks div
    tasksDiv.appendChild(tasksButton)

    // create div for messages link
    // create a div and store it in a variable. Then add text to that div
    let messagesDiv = document.createElement("div")

    // messagesDiv.appendChild(document.createTextNode("Click to create or view messages"))
    messagesDiv.innerHTML = `
    <i class="fa fa-comments fa-2x" aria-hidden="true"></i> Click to create or view messages<br>`
    //create a button that allows users to navigate to the tasks page, give that button an id
    let messagesButton = document.createElement("button")
    messagesButton.classList.add("btn", "btn-primary")
    messagesButton.appendChild(document.createTextNode("Messages"))

    messagesButton.id = "messages_Button"
    //add event listener to invoke Message features
    messagesButton.addEventListener("click", buildMessageBoard)
    //append the button to the tasks div
    messagesDiv.appendChild(messagesButton) 

    // create div for events link
    // create a div and store it in a variable. Then add text to that div
    let eventsDiv = document.createElement("div")

    // eventsDiv.appendChild(document.createTextNode("Click to create or view events"))
    eventsDiv.innerHTML = `
    <i class="fa fa-calendar fa-2x" aria-hidden="true"></i> Click to create or view events<br>`
    //create a button that allows users to navigate to the tasks page, give that button an id
    let eventsButton = document.createElement("button")
    eventsButton.classList.add("btn", "btn-primary")
    eventsButton.appendChild(document.createTextNode("Events"))

    eventsButton.id = "events_Button"
    //add event listener to invoke events features
    eventsButton.addEventListener("click", eventController)
    //append the button to the tasks div
    eventsDiv.appendChild(eventsButton)

    // create div for news
    // create a div and store it in a variable. Then add text to that div
    let newsDiv = document.createElement("div")

    // newsDiv.appendChild(document.createTextNode("Click to create or view News"))
    newsDiv.innerHTML = `
    <i class="fa fa-newspaper-o fa-2x" aria-hidden="true"></i> Click to create or view News<br>`
    //create a button that allows users to navigate to the tasks page, give that button an id
    let createNewsButton = document.createElement("button")
    createNewsButton.classList.add("btn", "btn-primary")
    createNewsButton.appendChild(document.createTextNode("Post Article"))

    createNewsButton.id = "create_news_button"
    //add an event listener that will invoke the create news features
    createNewsButton.addEventListener("click", newsForm)
    //append the button to the tasks div
    newsDiv.appendChild(createNewsButton)
    let showNewsButton = document.createElement("button")

    showNewsButton.classList.add("btn", "btn-primary")
    showNewsButton.appendChild(document.createTextNode("Show Articles"))
    showNewsButton.id = "show_news_button"
    //add event listener that will invoke the show news features
    showNewsButton.addEventListener("click", writeNews)
    newsDiv.appendChild(showNewsButton)

    // create div for friends link
    // create a div and store it in a variable. Then add text to that div
    let friendsDiv = document.createElement("div")

    // friendsDiv.appendChild(document.createTextNode("Click to add or view Friends"))
    friendsDiv.innerHTML = `
    <i class="fa fa-users fa-2x" aria-hidden="true"></i> Click to add or view Friends<br>`
    friendsDiv.id = "friends"

    //create a button that allows users to navigate to the tasks page, give that button an id
    let friendsButton = document.createElement("button")
    friendsButton.classList.add("btn", "btn-primary")
    friendsButton.appendChild(document.createTextNode("Add Friends"))
    friendsButton.id = "friends_Button"
    //add an event listener that invokes the add friends feautures
    friendsButton.addEventListener("click", displayUsers)
    //append the button to the tasks div
    friendsDiv.appendChild(friendsButton)
    let showFriendsButton = document.createElement("button")

    showFriendsButton.classList.add("btn", "btn-primary")
    showFriendsButton.appendChild(document.createTextNode("Show Friends"))

    showFriendsButton.id = "show_Friends_button"
    //add an event listener that invokes the display friends features
    showFriendsButton.addEventListener("click", displayFriends)
    friendsDiv.appendChild(showFriendsButton)

    //create a button that will return the user to the dashboard
    let dashButtonMarker = document.getElementById("headerId")
    let returnToDashButton = document.createElement("button")
    returnToDashButton.classList.add("btn", "btn-primary")
    returnToDashButton.id = "returnToDashButton"
    returnToDashButton.classList.add("btn", "btn-secondary", "hideIt")
    returnToDashButton.appendChild(document.createTextNode("Return To Dashboard"))
    dashButtonMarker.appendChild(returnToDashButton)
    //add event listener that will reload page, resulting in a dashboard load
    //for the current user in session storage
    returnToDashButton.addEventListener("click", function () {
        location.reload()
    })


    //create a button that will log the user out
    let logOutButton = document.createElement("button")
    logOutButton.id = "logOutButton"
    logOutButton.classList.add("btn", "btn-secondary")
    logOutButton.appendChild(document.createTextNode("Log Out"))
    dashButtonMarker.appendChild(logOutButton)
    //add an event listener that invokes a function that clears out session storage
    // and the reloads the page, resulting in a landing page load.
    logOutButton.addEventListener("click", function () {
        sessionStorage.clear()
        location.reload()
    })



    //append all divs to Dashboard section element
    // dashBoardMarker.appendChild(friendsDiv)
    // dashBoardMarker.appendChild(messagesDiv)
    // dashBoardMarker.appendChild(tasksDiv)
    // dashBoardMarker.appendChild(eventsDiv)
    // dashBoardMarker.appendChild(newsDiv)

    // TODO testing
    const rowDiv1 = document.createElement("div")
    const rowDiv2 = document.createElement("div")
    const rowDiv3 = document.createElement("div")

    rowDiv1.classList.add("row")
    rowDiv2.classList.add("row")
    rowDiv3.classList.add("row")

    const colDiv1 = document.createElement("div")
    const colDiv2 = document.createElement("div")
    const colDiv3 = document.createElement("div")
    const colDiv4 = document.createElement("div")
    const colDiv5 = document.createElement("div")

    colDiv1.classList.add("col")
    colDiv2.classList.add("col")
    colDiv3.classList.add("col")
    colDiv4.classList.add("col")
    colDiv5.classList.add("col-6")

    rowDiv1.appendChild(colDiv1)
    rowDiv1.appendChild(colDiv2)
    rowDiv2.appendChild(colDiv3)
    rowDiv2.appendChild(colDiv4)
    rowDiv3.appendChild(colDiv5)

    colDiv1.appendChild(friendsDiv)
    colDiv2.appendChild(messagesDiv)
    colDiv3.appendChild(tasksDiv)
    colDiv4.appendChild(eventsDiv)
    colDiv5.appendChild(newsDiv)

    dashBoardMarker.appendChild(rowDiv1)
    dashBoardMarker.appendChild(rowDiv2)
    dashBoardMarker.appendChild(rowDiv3)
}

module.exports = buildDashboard