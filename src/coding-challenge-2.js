// Monsters data for Coding Challenge 2
const monsters = [
    // Deals 10-60 damage per bite
    { name: 'Cacodemon', health: 400, damage: 35 },
    
    // Deals 15-75 damage per claw/fireball
    { name: 'Baron of Hell', health: 1000, damage: 45 },
    
    // Deals 20-200 damage per rocket
    { name: 'Cyberdemon', health: 4000, damage: 125 },
    
    // Deals 5-50 damage per bite
    { name: 'Hell Knight', health: 800, damage: 25 },
    
    // Deals 10-100 damage per bite
    { name: 'Imp', health: 200, damage: 20 },
    
    // Deals 5-25 damage per bite
    { name: 'Lost Soul', health: 100, damage: 10 },
    
    // Deals 5-50 damage per bite
    { name: 'Pinky', health: 300, damage: 15 },
    
    // Deals 10-100 damage per bite
    { name: 'Revenant', health: 500, damage: 30 },
    
    // Deals 5-50 damage per bite
    { name: 'Spectre', health: 200, damage: 20 },
    
    // Deals 5-50 damage per bite
    { name: 'Spider Mastermind', health: 2000, damage: 50 },
    
    // Deals 5-50 damage per bite
    { name: 'Vile', health: 1000, damage: 40 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombie', health: 100, damage: 5 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombieman', health: 200, damage: 10 },
  ];

  console.log('Task 1: Use the map method to create a new array containing just the names of the monsters')
  // create a new array with just monster names
  const monsterNames = monsters.map((monster) => {
    return monster.name
  })
  // output new array
  console.log(monsterNames)

  console.log('') //I use these to separate tasks
  console.log('Task 2: Use the filter method to find all monsters with health greater than 150')
  //create new array of only monsters with more than 150 health
  const monsterHealthHigherThan150 = monsters.filter((monster) => {
    return monster.health > 150
  })
  console.log(monsterHealthHigherThan150)

  console.log('')
  console.log('Task 3: Use the reduce method to calculate the total health of all monsters')
  // create a sum using the running total of all previous health values and the current health value
  const monsterTotalHealth = monsters.reduce((runningTotal, currentHealth) => {
    return runningTotal + currentHealth.health
  }, 0)
  console.log(monsterTotalHealth)

  console.log('')
  console.log('Task 4: Use the sort method to arrange the monsters from highest damage to lowest')
  // sort monsters in descending order (b to a) by amount of damage
  const monsterDamageSorted = monsters.sort((a, b) => {
    return b.damage - a.damage
  })
  console.log(monsterDamageSorted)