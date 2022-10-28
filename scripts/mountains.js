function mountainImage(item) {
    const img = document.createElement("img");
    img.src = "images/" + item.img;
    return img;
} 

function mountainTitle(item) {
    const text = document.createElement("div");
    text.classList.add("card-title");
    text.innerHTML = item.name;
    return text;
}

function mountainCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(mountainImage(item));
    card.appendChild(mountainTitle(item));
    card.appendChild(mountainLevel(item));
    card.appendChild(mountainInfo(item));   
    return card;
}
function mountainLevel(item) {
    const level = document.createElement("p");
    level.classList.add("card-mtnLevel");
    level.innerHTML = "<b>Effort Level: </b><br>";
    level.innerHTML += item.effort;
    return level;
}


function mountainInfo(item) {
    const info = document.createElement("p");
    info.classList.add("card-description");
    info.innerHTML= "<b>Description: </b><br>";
    info.innerHTML += item.desc;
    return info;
}

document.addEventListener("DOMContentLoaded",()=>{
    mountainsArray.forEach( m => document.body.appendChild(mountainCard(m)));
});