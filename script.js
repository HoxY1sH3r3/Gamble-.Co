let balance = 1000;
let multiplier = 1;
let inventory = [];

// Store items
const storeItems = [
  { id: 1, name: "2x Multiplier", price: 500, effect: () => multiplier = 2 },
  { id: 2, name: "3x Multiplier", price: 1200, effect: () => multiplier = 3 },
  { id: 3, name: "Lucky Charm (+20% win chance)", price: 2000, effect: () => hasLuckyCharm = true }
];

// Codes system
const codes = {
  "FREE100": () => balance += 100,
  "MEGABOOST": () => inventory.push("5x Multiplier (One-Time)"),
  "SECRET": () => balance += 1000,
  "OWNER": () => balance += 100000000000000000
};

let hasLuckyCharm = false;

function updateBalanceDisplay() {
  document.getElementById("balance").textContent = "Balance: " + balance;
}

function updateInventory() {
  let invList = document.getElementById("inventory");
  invList.innerHTML = "";
  inventory.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    invList.appendChild(li);
  });
}

function loadStore() {
  let storeDiv = document.getElementById("store");
  storeDiv.innerHTML = "";
  storeItems.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("store-item");
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>💰 ${item.price}</p>
      <button onclick="buyItem(${item.id})">Buy</button>
    `;
    storeDiv.appendChild(div);
  });
}

function buyItem(id) {
  let item = storeItems.find(i => i.id === id);
  if (balance >= item.price) {
    balance -= item.price;
    inventory.push(item.name);
    item.effect();
    updateBalanceDisplay();
    updateInventory();
  } else {
    alert("Not enough coins!");
  }
}

function redeemCode() {
  let code = document.getElementById("codeInput").value.trim().toUpperCase();
  let msg = document.getElementById("codeMessage");

  if (codes[code]) {
    codes[code]();
    msg.textContent = `✅ Code "${code}" redeemed!`;
    updateBalanceDisplay();
    updateInventory();
  } else {
    msg.textContent = "❌ Invalid code!";
  }
  document.getElementById("codeInput").value = "";
}

function coinFlip() {
  let chance = hasLuckyCharm ? 0.6 : 0.5;
  let win = Math.random() < chance;
  if (win) balance += 100 * multiplier;
  else balance -= 100;
  updateBalanceDisplay();
}

function rollDice() {
  let roll = Math.ceil(Math.random() * 6);
  if (roll === 6) balance += 200 * multiplier;
  else balance -= 50;
  updateBalanceDisplay();
}

function slotMachine() {
  let chance = hasLuckyCharm ? 0.3 : 0.2;
  let win = Math.random() < chance;
  if (win) balance += 500 * multiplier;
  else balance -= 100;
  updateBalanceDisplay();
}

loadStore();
updateBalanceDisplay();
updateInventory();
