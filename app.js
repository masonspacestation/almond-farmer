console.log("🥜 go nuts")
let almonds = 0
updateStats()

// SECTION player action
function harvestAlmonds() {
  almonds += 10
  console.log('🧑‍🌾 ', almonds)
  updateStats()
}

// SECTION modifiers

function updateStats() {
  drawAlmondsSupply()
  drawUpgrade1()
  drawAmountToHarvest()
  drawAmountToShip()
  drawSeasonHarvest()
}


// SECTION diplay
function drawAlmondsSupply() {
  console.log('almondsSupply')
  document.getElementById('almondsSupply').innerHTML = `<h2>${almonds}</h2>`
}

function drawUpgrade1() {
  console.log('🚜 🚛 🐝 🌳 upgrade purchased')
  // bees and trees increase amount per interval (for stretch, could also speed up the interval at milestones); tractors and trucks increase amount per click
}

function drawAmountToHarvest() { }

function drawAmountToShip() { }

function drawSeasonHarvest() { }


// SECTION interval
function startGame() {
  // hideOverlay(){}
  // updateAll()
  // let harvestInterval = setInterval(harvestAlmonds, 3000)
}

/*
function displayBadge1(){}
unlocked at milestones like boss levelups

function toggleUpgrade1(){}
add/remove d-none — they will float over play area, with justify-content-around, and should shuffle around when more or less become available
*/






let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    multiplier: 1
  }
];

let automaticUpgrades = [
  {
    name: 'rover',
    price: 600,
    quantity: 0,
    multiplier: 20
  }
];


/*!SECTION
ACTIONS
[] click image to collect resource
        image with onclick
        function harvest()

ACTION MODIFIERS
[] at least 4 upgrades purchased that increase resource collection
  [] 1 of these must increase the amount collected per click
  [] 1 must increase amount collected per interval



INTERVALS
[] automatic upgrades applied at least every 3 seconds

DISPLAY
[] current resource total is always displayed
[] show quantity of each upgrade that has been purchased
[] show TOTAL amount of resource that WILL BE collected per click
[] show TOTAL amount of resource that WILL BE collected per interval
{} show total amount of resource cumulatively collected
{} badge system for milestones

RULES
[] Cannot purchase upgrade if they do not have enough resource
[] purchasing upgrade decreases current resource by upgrade price
[] each upgrade has different multiplier values and prices
[] upgrade price increases each time it's purchased
{} disable buttons so you can't buy if you don't have enough resource / hide button instead

*/