window.onload = function () {
    const page = document.querySelector("body");
    page.style.backgroundColor = "lightblue";
    const h1 = document.createElement("h1");
    h1.textContent = "NARUTO SHIPPUDEN";
    page.appendChild(h1);
    const newP = document.createElement("p");
    newP.textContent = "To certo!";
    page.appendChild(newP);
    console.log("newP");
    const img = document.querySelector("img");
    img.style.paddingLeft = "450px";

};