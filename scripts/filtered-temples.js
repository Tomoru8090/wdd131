// ===== Temple Data (7 temples with official data & images) =====
const temples = [
    {
        templeName: "Fukuoka Japan Temple",
        location: "Fukuoka Japan",
        dedicated: "11 June 2000 by Gordon B. Hinckley",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14618-main.jpg"
    },
    {
        templeName: "Australia Brisbane Temple",
        location: "Brisbane Australia",
        dedicated: "15 June 2003 by Gordon B. Hinckley",
        area: 74792,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brisbane-australia-temple/brisbane-australia-temple-62132-main.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie Hawaii ",
        dedicated: "30 November 1919 by Heber J. Grant",
        area: 6861,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
        templeName: "Okinawa Japan Temple",
        location: "Okinawa Japan",
        dedicated: " 12 November 2023 by Gary E. Stevenson",
        area: 41000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
    }
];

// ===== Function to Display Temples =====
function displayTemples(filteredTemples) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = "";
    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
        container.appendChild(card);
    });
}

// Show all temples by default
displayTemples(temples);

// ===== Navigation Filter Feature =====
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = e.target.getAttribute("data-filter");
        let filtered;

        if (filter === "old") {
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        } else if (filter === "new") {
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        } else if (filter === "large") {
            filtered = temples.filter(t => t.area > 90000);
        } else if (filter === "small") {
            filtered = temples.filter(t => t.area < 10000);
        } else {
            filtered = temples;
        }

        displayTemples(filtered);
    });
});

// ===== Footer Info =====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
  