//Tyler: This module exports a function that pulls down local storage and parses it.

let getLocalStorage = function () {
    $.ajax({
        "url": "database.json",
        "method": "GET"
    }).then(
        function (nutshellDatabase) {
            
        }
    )
}

module.exports = getLocalStorage