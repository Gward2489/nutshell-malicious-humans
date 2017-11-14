//Messageboard Builder - Garrett Ward. 
const storeMessage = require("./storeMessage")
const writeMessages = require("./writeMessages")
const messageAuthorCheck = require("./messageAuthorCheck")
const messageBoardMaintenance = require("./messageBoardMaintenance")
let getLocalStorage = require("./getLocalStorage")
let setLocalStorage = require("./setLocalStorage")

const messageBoardDeleteCheck = require("./messageBoardDeleteCheck")
const revealDashLink = require("./revealDashLink")

//Create a Function to build the MessageBoard
const buildMessageBoard = function() {
    //Use get element by id methos to establish the location the mesage board will be built
    let messageBoardMarker = document.getElementById("messageBoard")
    //Establish the location of the dashboard that will be hidden
    let dashboardMarker = document.getElementById("Dashboard")

    //Hide the Dashboard
    dashboardMarker.classList.add("hideIt")

    //Create the messageboard div
    let messageBoardDiv = document.createElement("div")
    //Give it an id
    messageBoardDiv.id = "messageBoardDiv"
    //Append it as a child of the of the messageBoard Section in the DOM
    messageBoardMarker.appendChild(messageBoardDiv)

    //Create a section that will display all of the messages generated by users
    let messageDisplaySection = document.createElement("section")
    //give that section an id
    messageDisplaySection.id = "messageDisplaySection"
    //append it as a child of the messageboard Div
    messageBoardDiv.appendChild(messageDisplaySection)

    //create a section element where the messages will be entered by the current user
    let messageEntrySection = document.createElement("section")
    //give that section an id
    messageEntrySection.id = "messageEntrySection"

    //create a div that will hold the text area and button for the message entry
    let messageEntryDiv = document.createElement("div")
    //give it an id
    messageEntryDiv.id = "messageEntryDiv"
    //create an h3 that will display text telling the user to input their message in the text area
    let textInstructions = document.createElement("h3")
    //give it an id
    textInstructions.id = "textInstructions"
    //add the text to the h3
    textInstructions.appendChild(document.createTextNode("Enter your message below"))
    //append the instructions to the message entry div
    //create a text area for the user to enter their text in
    let messageTextArea = document.createElement("textarea")
    //give it an id
    messageTextArea.id = "messageTextArea"
    //create a submit button for the messages
    let messageSubmitButton = document.createElement("button")
    //give it an id
    messageSubmitButton.id = "messageSubmitButton"
    //add text to the button
    messageSubmitButton.appendChild(document.createTextNode("submit"))
    //add an event listener that contains a function that will add the users message the messages DB
    messageSubmitButton.addEventListener("click", storeMessage)
    //append the elements to the message entry div
    messageEntryDiv.appendChild(textInstructions)
    messageEntryDiv.appendChild(messageTextArea)
    messageEntryDiv.appendChild(messageSubmitButton)
    //append the message entry div to the message entry section
    messageEntrySection.appendChild(messageEntryDiv)
    //append the message entry section to the message board div
    messageBoardDiv.appendChild(messageEntrySection)

    //ivoke a function that will load the message board with the current messages stored in the database
    let storedDB = getLocalStorage()
    setLocalStorage(storedDB)
    writeMessages()
<<<<<<< HEAD
=======
    revealDashLink()
>>>>>>> master
    messageAuthorCheck()
    messageBoardMaintenance()
    messageBoardDeleteCheck()
    

}

module.exports = buildMessageBoard