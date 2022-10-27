window.onload = function(){
    const maximumNumberOfEntries = 5;
    const maximumNumberOfoptions = 4;
    
    let entryCounter = -1;   
    let optionsCounter = -1;
    let maximumNumberOfOptionsEnteredSoFar = 0;

    const activityForm = document.getElementById("activityForm")
    const wrapper = document.getElementById("wrapper") 
    const addEntry = document.getElementById("addEntry")
    const addOption = document.getElementById("addOption")

    addEntry.onclick = () => {      
        ++entryCounter  
        addNewEntry()
        optionsCounter = -1
        addOption.disabled = false; 
    }

    addOption.onclick = () => {   
        ++optionsCounter     
        addNewOption()
    }

    activityForm.onsubmit = () => {
        let entriesValues = []
        let optionsValues = []

        entriesValues.push(document.getElementById("entry-0").value)
        entriesValues.push(document.getElementById("entry-1").value)

        document.getElementById("entriesValues").value = entriesValues;
        //console.log(document.getElementById("entriesValues"));


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