function mountainCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = item.name;
    card.innerHTML += `<img src="images/${item.img}">`;    
    return card;
}

document.addEventListener("DOMContentLoaded",()=>{
    mountainsArray.forEach( m => document.body.appendChild(mountainCard(m)));
    
});