var container= document.querySelector(".container")
var rightNow= moment().format("H") 
var todayDate= moment().format("dddd, MMMM Do YYYY");
var currentDay= document.querySelector("#currentDay")
var keyArray= Object.keys(localStorage)

function save(e){
    var savingClick = e.target
    var timeLabel = savingClick.parentNode.childNodes[0].textContent;
    console.log(timeLabel)
    var writing = savingClick.parentNode.childNodes[1].textContent;
    console.log(writing)
    localStorage.setItem(timeLabel, writing)
}

//console.log(rightNow)
console.log(Object.keys(localStorage))

currentDay.textContent=todayDate;




for(var i=0; i<9; i++){
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    var hour = document.createElement("div");
    hour.setAttribute("class", "hour col-2");
    if(i<4){
        hour.textContent= i + 9 + "am"
    }else{
        hour.textContent= i - 3 + "pm"
    }
    row.appendChild(hour)

    var longText = document.createElement("div");
    longText.setAttribute("contenteditable", "true");
    if((i + 9) < rightNow){
        longText.setAttribute("class", "past col-8");
    }else if((i + 9) == rightNow){
        longText.setAttribute("class", "present col-8");
    }else{
        longText.setAttribute("class", "future col-8");
    }
    if(keyArray.includes(hour.textContent)){
        longText.textContent=localStorage[hour.textContent]

    }

    





    row.appendChild(longText)

    var saveBtn = document.createElement("div");
    saveBtn.setAttribute("class", "saveBtn col-2");
    saveBtn.textContent= "Save";
    row.appendChild(saveBtn)
    
    //console.log(row);

  container.appendChild(row);

  saveBtn.addEventListener("click", save)



}
