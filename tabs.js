const tabButtons = document.querySelectorAll("[data-tab-button]");
const tabs = document.querySelectorAll("[data-tab]");
const navigator = document.querySelector(".navigator");


if(localStorage.getItem("currentTab") === null){
    localStorage.setItem("currentTab", "Home");
}

let currentTab = localStorage.getItem("currentTab");

function switchTab(tabName){
    localStorage.setItem("currentTab", tabName);
    tabs.forEach(tab => {tab.classList.remove("active");})
    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
    let tabButton = document.querySelector(`[data-tab-button="${tabName}"]`);
    navigator.style.opacity = 1;
    navigator.style.width = tabButton.getBoundingClientRect().width + "px";
    navigator.style.left = tabButton.getBoundingClientRect().x + "px";
}

tabButtons.forEach(tabButton => {tabButton.addEventListener("click", ()=>{
    currentTab = tabButton.dataset.tabButton;
    switchTab(currentTab);
})})

switchTab(currentTab);

window.addEventListener("resize", ()=>{switchTab(currentTab)})