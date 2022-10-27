window.onload = function(){
    let entryCounter = 0;   
    let optionsCounter = 0;
    let addEntry = document.getElementById("addEntry")

    addEntry.onclick = function(){        
        addNewEntry()
    }

    function addNewEntry(){
        let newEntry = document.createElement("input")
        let newEntryId = "newEntry" + entryCounter;
        newEntry.id = newEntryId;
        addEntry.after(newEntry);
        newEntry = document.getElementById(newEntryId)
        ++entryCounter
        optionsCounter = 0
        addNewOption(newEntry)
    }
    
    function addNewOption(newEntry){
        let newOption = document.createElement("input")
        let newOptionId = "newOption" + optionsCounter;
        newOption.id = newOptionId;
        newEntry.after(newOption);
        newOption = document.getElementById(newOptionId)
    
        let isCorrectAnswer = document.createElement("input")
        isCorrectAnswer.type = "checkbox";
        let isCorrectAnswerId = "isCorrectAnswer" + optionsCounter;
        isCorrectAnswer.id = isCorrectAnswerId;
        newOption.after(isCorrectAnswer);
        isCorrectAnswer = document.getElementById(isCorrectAnswerId)
    
        ++optionsCounter
    }
    
    
}