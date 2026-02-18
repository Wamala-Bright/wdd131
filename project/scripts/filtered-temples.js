// ================= SITE INFO =================
const site = {
  year: new Date().getFullYear()
};

// ================= TEMPLE ARRAY =================
const temples = [
  {
    name: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    name: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    name: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    name: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    name: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    name: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    name: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    name: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 253000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    name: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 53300,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
    name: "Paris France",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 20700,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  }
];

// ================= DOM ELEMENTS =================
const templeContainer = document.querySelector("#temples");
const filterButtons = document.querySelectorAll(".filters button");
const yearElements = document.querySelectorAll("#year");

// ================= HELPER FUNCTIONS =================
function createTempleCard(temple) {
  const card = document.createElement("figure");
  card.classList.add("temple-card");

  card.innerHTML = `
    <img src="${temple.image}" alt="${temple.name}" loading="lazy">
    <figcaption>
      <h3>${temple.name}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${new Date(temple.dedicated).toLocaleDateString()}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
    </figcaption>
  `;

  templeContainer.appendChild(card);
}

function displayTemples(list) {
  templeContainer.innerHTML = ""; // clear container
  list.forEach(createTempleCard);
}

// ================= FILTER EVENTS =================
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    switch (filter) {
      case "old":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
        break;
      case "new":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000));
        break;
      case "large":
        displayTemples(temples.filter(t => t.area > 90000));
        break;
      case "small":
        displayTemples(temples.filter(t => t.area < 10000));
        break;
      default:
        displayTemples(temples);
        break;
    }
  });
});

// ================= INITIAL DISPLAY =================
displayTemples(temples);

// ================= FOOTER INFO =================
yearElements.forEach(el => el.textContent = site.year);
