const button = document.getElementById("menu-expand");
const regionToCollapse = document.getElementById("region-to-collapse");

const buttonSand = button.innerHTML;

const buttonCross = `<img src="imgs/icon_close.png" alt="close"/>`;

const eventHandler = (e) => {
    
    e.preventDefault();

    if (button.className === "navbar-toggle") {
        button.className = "navbar-toggle collapsed";
        button.innerHTML = buttonSand;
        regionToCollapse.className = "navbar-collpase collapse";
    } else {
        button.className = "navbar-toggle";
        button.innerHTML = buttonCross;
        regionToCollapse.className = "navbar-collapse collapse in";
    }
};

button.addEventListener("click", eventHandler);
