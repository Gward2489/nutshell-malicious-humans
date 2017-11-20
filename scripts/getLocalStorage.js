//Tyler: This module exports a function that pulls down local storage and parses it.

let getLocalStorage = function (callbackFunction) {
    $.ajax({
        "url": "./database.json",
        "method": "GET"
    }).then(
        function (nutshellDatabase) {
            callbackFunction(nutshellDatabase)
        } 
    )
}

module.exports = getLocalStorage