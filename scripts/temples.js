// temples.js

const temples = [
    {
        name: "Japan Tokyo Temple",
        imageUrl: "images/Tokyo Temple.jpg"
    },
    {
        name: "Japan Fukuoka Temple",
        imageUrl: "images/fukuoka.jpg"
    },
    {
        name: "Japan Okinawa Temple",
        imageUrl: "images/okinawa.jpg"
    },
    {
        name: "Hawaii Laie Temple",
        imageUrl: "images/laie.jpg"
    },
    {
        name: "Australia Brisbane Temple",
        imageUrl: "images/brisbane.jpg"
    },
    {
        name: "Japan Sapporo Temple",
        imageUrl: "images/sapporo.jpg"
    },
    {
        name: "America Idaho Temple",
        imageUrl: "images/idaho.jpg"
    },
    {
        name: "America Saltlake Temple",
        imageUrl: "images/Saltlake.jpg"
    },
    {
        name: "Utah Provo Temple",
        imageUrl:"images/provo.jpg"
    },
    {
        name: "Logan Utah Temple",
        imageUrl:"images/logan.jpg"
    }


];

// <main>にカードを追加
const main = document.querySelector("main");

temples.forEach(temple => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const caption = document.createElement("figcaption");

    img.src = temple.imageUrl;
    img.alt = temple.name;
    caption.textContent = temple.name;

    figure.appendChild(img);
    figure.appendChild(caption);
    main.appendChild(figure);
});
  
  
