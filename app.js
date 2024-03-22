console.log("🥜 go nuts")
// SECTION global variables

let almonds = 0

let farm = {
  harvestRate: 10,
  shippingRate: 3,

  seasonHarvest: 0,
}

let clickUpgrades = [
  {
    name: 'tractor',
    price: 15,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'truck',
    price: 10,
    quantity: 0,
    multiplier: 1
  }
];

let automaticUpgrades = [
  {
    name: 'bees',
    price: 50,
    quantity: 0,
    multiplier: 20
  },
  {
    name: 'trees',
    price: 75,
    quantity: 0,
    multiplier: 20
  }
];

updateStats()


// SECTION player action
function harvestAlmonds() {
  almonds += 10
  updateStats()
}

// SECTION modifiers

function upgradePerClick(resource) {
  // truck and tractor
  console.log('bigger shipments')
  farm.shippingRate += 2
  console.log('🚛 shipping rate ', farm.shippingRate)
  farm.resource += 1

  updateStats()
}



function upgradePerInt(resource) {

  let newUpgrade = automaticUpgrades.find(upgrade => upgrade.name == resource)
  console.log("upgrade: ", resource)

  if (almonds > 25) {
    newUpgrade.quantity += 1,
      almonds -= 25
  } else {
    console.log("didn't upgrade ", resource)
  }

  updateStats()
}




// function upgradeHarvest(resource) {
//   console.log('harvest more')
//   farm.harvestRate += 2

//   updateStats()
// }


function updateStats() {
  drawAlmondsSupply()
  drawShippingRate()
  drawHarvestRate()
  drawSeasonHarvest()


  // document.getElementById(stat).innerText = '1'

}


// SECTION diplay
function drawAlmondsSupply() {
  document.getElementById('almondsSupply').innerHTML = `<h2>${almonds}</h2>`
}

function drawShippingRate() {
  // console.log('🚜 🚛 shipping upgrade purchased')
  document.getElementById('shipping-rate').innerHTML = `<h2>${farm.shippingRate}</h2>`
  // bees and trees increase amount per interval (for stretch, could also speed up the interval at milestones); tractors and trucks increase amount per click
}

function drawHarvestRate() {
  // console.log('🐝 🌳 harvest upgrade purchased');
  document.getElementById('harvest-rate').innerHTML = `<h2>${farm.harvestRate}</h2>`
}


function drawSeasonHarvest() {
  // console.log('📦📦📦 season harvest');
  document.getElementById('season').innerHTML = `<h5>Season Total: ${farm.seasonHarvest}</h5>`
}


// SECTION interval
/* function startGame() {
  hideOverlay(){}
  updateAll()
  let harvestInterval = setInterval(harvestAlmonds, 3000)
}
*/

/* stretch
function displayBadge1(){}
unlocked at milestones like boss levelups

function toggleUpgrade1(){}
add/remove d-none — they will float over play area, with justify-content-around, and should shuffle around when more or less become available
*/







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