// temples.js

const temples = [
    {
        name: "Japan Tokyo Temple",
        imageUrl: "images/Tokyo Temple.jpg"
    },
    {
        name: "Japan Fukuoka Temple",
        imageUrl: "images/fukuoka temple.jpeg"
    },
    {
        name: "Japan Okinawa Temple",
        imageUrl: "images/okinawa_japan_temple_exterior.jpeg"
    },
    {
        name: "Hawaii Laie Temple",
        imageUrl: "images/laie_hawaii_temple_lds.jpeg"
    },
    {
        name: "Australia Brisbane Temple",
        imageUrl: "images/brisbane_australia_temple_lds.jpeg"
    },
    {
        name: "Japan Sapporo Temple",
        imageUrl: "images/sapporo_japan_temple_night_photo.jpeg"
    }
];

// <main>にカードを追加
const main = document.querySelector("main");

temples.forEach((temple) => {
    const section = document.createElement("section");
    const img = document.createElement("img");
    const caption = document.createElement("p");

    img.src = temple.imageUrl;
    img.alt = temple.name;
    caption.textContent = temple.name;

    section.appendChild(img);
    section.appendChild(caption);
    main.appendChild(section);
});
  
