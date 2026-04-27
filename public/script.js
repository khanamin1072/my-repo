async function loadItems() {
  const res = await fetch("/api/items");
  const data = await res.json();

  const container = document.getElementById("items");
  container.innerHTML = "";

  data.forEach(item => {
    container.innerHTML += `
      <div class="item">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>
    `;
  });
}

async function addItem() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  await fetch("/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: Date.now(),
      name,
      price
    })
  });

  loadItems();
}

loadItems();