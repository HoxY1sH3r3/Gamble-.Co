let balance = 1000;
let multiplier = 1;

function updateBalanceDisplay() {
  document.getElementById("balance").textContent = "Balance: " + balance;
}

function coinFlip() {
  let win = Math.random() < 0.5;
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
  let win = Math.random() < 0.2;
  if (win) balance += 500 * multiplier;
  else balance -= 100;
  updateBalanceDisplay();
}

updateBalanceDisplay();
