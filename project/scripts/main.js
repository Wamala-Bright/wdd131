const temples = [
  { name: "Salt Lake", year: 1893, size: "large" },
  { name: "Kirtland", year: 1836, size: "small" },
  { name: "Kampala", year: 2022, size: "medium" }
];

const gallery = document.querySelector(".gallery");

function displayTemples(list) {
  gallery.innerHTML = "";
  list.forEach(temple => {
    gallery.innerHTML += `
      <article>
        <h3>${temple.name}</h3>
        <p>Dedicated: ${temple.year}</p>
        <p>Size: ${temple.size}</p>
      </article>
    `;
  });
}

function filterOld() {
  const result = temples.filter(t => t.year < 1900);
  localStorage.setItem("filter", "old");
  displayTemples(result);
}

function filterLarge() {
  const result = temples.filter(t => t.size === "large");
  localStorage.setItem("filter", "large");
  displayTemples(result);
}

function showAll() {
  localStorage.setItem("filter", "all");
  displayTemples(temples);
}

document.getElementById("old")?.addEventListener("click", filterOld);
document.getElementById("large")?.addEventListener("click", filterLarge);
document.getElementById("all")?.addEventListener("click", showAll);

const saved = localStorage.getItem("filter");
if (saved === "old") filterOld();
else if (saved === "large") filterLarge();
else displayTemples(temples);
