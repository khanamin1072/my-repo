const itemsDiv = document.getElementById("items");

function addItem() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  if (!name || !price) {
    alert("Please enter item name and price");
    return;
  }

  const card = document.createElement("div");
  card.className = "item-card";

  card.innerHTML = `
    <h3>${name}</h3>
    <p class="price">₹${price}</p>
  `;

  itemsDiv.appendChild(card);

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
}