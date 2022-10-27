window.onload = function(){
    const maximumNumberOfEntries = 5;
    const maximumNumberOfoptions = 4;
    
    let entryCounter = -1;   
    let optionsCounter = -1;
    let maximumNumberOfOptionsEnteredSoFar = 0;

    const wrapper = document.getElementById("wrapper") 
    const addEntry = document.getElementById("addEntry")
    const addOption = document.getElementById("addOption")

    addEntry.onclick = function(){      
        ++entryCounter  
        optionsCounter = -1
        addNewEntry()
        addOption.disabled = false; 
    }

    addOption.onclick = function(){   
        ++optionsCounter     
        addNewOption()
    }

    function addNewEntry(){
        let newEntry = document.createElement("input")
        newEntry.id = "entry-" + entryCounter;
        wrapper.appendChild(newEntry)
    }
    
    function addNewOption(){
        let newOption = document.createElement("input")
        newOption.id = "option-" + entryCounter + "-" + optionsCounter;
        wrapper.appendChild(newOption)
    
        let isCorrectAnswer = document.createElement("input")
        isCorrectAnswer.id = "isCorrectAnswer-" + entryCounter + "-" + optionsCounter;
        isCorrectAnswer.type = "checkbox";
        wrapper.appendChild(isCorrectAnswer)
    } 
}