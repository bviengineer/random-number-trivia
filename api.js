// alert("yep, I'm connected");
// "use-strict"
var userName = document.getElementById("user-name"),
    userNumber = document.getElementById("user-number"), 
    resultsDiv = document.getElementById("results");

userNumber.addEventListener("input", getNumberFact);

function getNumberFact(){
    var visitorNumber = userNumber.value, 
        visitorName = userName.value,
        xhr = new XMLHttpRequest(),
        apiQueryResults = "";
    
//AJAX Call to Numbers API - Trivia Section 
xhr.open("GET", "http://numbersapi.com/"+ visitorNumber +"/trivia");
    
    //AJAX call back function  
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            var apiQueryResults = xhr.responseText;
            resultsDiv.innerHTML = "Hey " + visitorName.toUpperCase() + ", <strong>" + apiQueryResults + "</strong>";
        };
        clearTextBoxes();
                   
    }; //closing curly brace for xhr.onreadstatechange (call back) function

    xhr.send();

}; //closing curly brace for getNumberFact function

var clearTextBoxes = function clearTextBoxes(){
    userName.value = "";
    userNumber.value = "";
};

// NOTE / TO DO:
// Text boxes are clearning too quickly and makes it diffiult to type two - three digit numbers
// style
//add additional functionalily, maybe JS animation?
//clear results dive after mouse focus in name textbox