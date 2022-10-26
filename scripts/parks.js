function locationOption(item){
    const option = document.createElement("option");
    option.value = item;
    option.innerHTML = item;
    return option;
}
/*document.addEventListener("DOMContentLoaded", () => {

    const select = document.getElementById("location");
    locationsArray.forEach(item => select.appendChild(locationOption(item)));
    select.addEventListener("change", (e) => {
        alert(select.selectedOptions[0].value)
    })

    function parkCard(item){
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = item.LocationName;
        return card;
    }
    const results = document.getElementById("results");
    nationalParksArray.forEach(item => results.appendChild(parkCard(item)));
}); */

function parkCard(item){
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = item.LocationName;
    return card;
}

function showCards(list, target){
    target.innerHTML = ""; //CLEAR
    list.forEach(item => target.appendChild(parkCard(item)));
}

document.addEventListener("DOMContentLoaded", () => {
    const results = document.getElementById("results");
    const select = document.getElementById("location");
    locationsArray.forEach(item => select.appendChild(locationOption(item)));
    select.addEventListener("change", (e) => {
        const v = select.selectedOptions[0].value;
        const matches = nationalParksArray.filter(item=>item.State == v);
        showCards(matches, results);
    });
    //show all cards
    //showCards(nationalParksArray, results);
});