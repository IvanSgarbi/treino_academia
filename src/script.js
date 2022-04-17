console.log(dados);
var app = new Vue({el: "#main",data: {dados:dados,selectedDay:null,selectedExe:null}});
document.onclick = function (event){
    if(event.target.classList[0] == "day-selector"){
        setDay(event.target.getAttribute("day"));
    }else if(event.target.classList[0] == "muscle-title"){
        toggleOpen(event.target.getAttribute("muscle"));
    }
};


function setDay(day){
    if (day != undefined){
        app.selectedDay = day;
    }
}
function toggleOpen(muscle) {
    var div = document.getElementById(muscle);
    if (div.classList.contains("open")){
        div.classList.remove("open");
        div.classList.add("close");
    }else{
        div.classList.remove("close");
        div.classList.add("open");
    }
}