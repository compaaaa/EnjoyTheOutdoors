//window.onload = () => {}
const navURLs = [
    {name: "Home", url: "index.html"},
    {name: "National Parks", url: "parks.html"},
    {name: "Mountains", url: "mountains.html"},
];

//helper/factory function makes a new DOM element
function navLink(item){
    const a = document.createElement("a");
    a.href = item.url;
    a.innerHTML = item.name;
    return a;
}
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");
    //innerHTML += appending string from a javascript template ``
   // navURLs.forEach(item => nav.innerHTML += `<a href="${item.url}">${item.name}</a>`)
    navURLs.forEach(item => nav.appendChild(navLink(item)));
});