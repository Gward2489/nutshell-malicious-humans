//Author : Garrett Ward
//Functionality : Display the current active user in the header of the website

let getSessionStorage = require("./getSessionStorage")

const displayActiveUser = function () {

    //create virtual elements and append them to the DOM.
    let currentUserObject = getSessionStorage()
    let userDisplayMarker = document.getElementById("headerId")
    let userDisplayHeading = document.createElement("h1")
    userDisplayHeading.appendChild(document.createTextNode("Welcome " + currentUserObject.user.firstName + "!"))
    userDisplayMarker.appendChild(userDisplayHeading)
    let userDisplaySubHeading = document.createElement("h2")
    userDisplaySubHeading.appendChild(document.createTextNode("What would you like to do today?"))
    userDisplayMarker.appendChild(userDisplaySubHeading)
    userDisplayMarker.classList.add("partyTime")
    

}
module.exports = displayActiveUser

