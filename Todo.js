//Close button addition to each element
var myList = document.getElementsByTagName("LI");
var i;
for(i=0;i<myList.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}
//Removing element
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display="none";
    }
}
//Checkmark adding
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle("checked");
    }
},false);

//Adding element function
function AddElement(){
    var li = document.createElement("li"); //create a node <li>
    var event_store = document.getElementById("input1").value;
    var txt_node = document.createTextNode(event_store);
    li.appendChild(txt_node);
    
    if(event_store === ""){
        alert("You must write something!!!");
    } else {
        document.getElementById("show").appendChild(li);
    }
    document.getElementById("input1").value= "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML= h + ":" + m + ":" + s;
    var t = setTimeout(startTime,500);
    
}
function checkTime(i){
    if(i<10){i="0"+i};
    return i;
}

