function searchFor(){
let input = document.getElementById("search");
let filter = input.value.toLowerCase()
let thumbnail = document.getElementsByTagName("a");
for(i=0; i < thumbnail.length; i++){
a = thumbnail[i].getAttribute("data-caption");
    if(a.includes(filter)){
        thumbnail[i].style.display = "";
    } else{
        thumbnail[i].style.display = "none";
    }
}
}