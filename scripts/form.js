// Product Array
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage Reactor" },
  { id: "jj-1969", name: "Warp Equalizer" }
];

// Populate product select
const productSelect = document.getElementById('product');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Increment review counter on submit
document.getElementById('reviewForm').addEventListener('submit', () => {
  let count = localStorage.getItem('reviewCount') || 0;
  count = parseInt(count) + 1;
  localStorage.setItem('reviewCount', count);
});
