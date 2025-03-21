// Backpack inventory for Coding Challenge 1
const backpackFullOfAmmo = [
    { item: 'bullets', quantity: 10, priceEa: 0.5 },
    { item: 'shotgun shells', quantity: 4, priceEa: 0.5 },
    { item: 'rockets', quantity: 1, priceEa: 5.0 },
    { item: 'energy cell units', quantity: 20, priceEa: 0.2 },
  ];

  console.log('Task: How would we calculate the total value of the backpack?')
  // using reduce method to get the sum of array's priceEa
  const totalBackpackPrice = backpackFullOfAmmo.reduce((runningTotal, currentAmmo) => {
    currentAmmoPrice = currentAmmo.priceEa * currentAmmo.quantity
    return runningTotal + currentAmmoPrice
  }, 0)
  // output total to console
  console.log(totalBackpackPrice)