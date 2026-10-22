/** Exercise 01 - Coins **/

// Add your function here
const calculateChange = function calculateChange(amount) {
  if (amount > 100) {
    return `$${amount} ==> Error: the number is too large`;
  }

  const coins = [
    { name: 'dollar', plural: 'dollars', value: 100 },
    { name: 'quarter', plural: 'quarters', value: 25 },
    { name: 'dime', plural: 'dimes', value: 10 },
    { name: 'nickel', plural: 'nickels', value: 5 },
    { name: 'penny', plural: 'pennies', value: 1 },
  ];
  const result = [];
  let cents = Math.round(amount * 100);

  for (let i = 0; i < coins.length; i += 1) {
    const count = Math.floor(cents / coins[i].value);
    if (count > 0) {
      result.push(`${count} ${count === 1 ? coins[i].name : coins[i].plural}`);
      cents -= count * coins[i].value;
    }
  }
  return `$${amount} ==> ${result.join(', ')}`;
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
console.log(calculateChange(100));
// $100 ==> 100 dollars
console.log(calculateChange(100.01));
// $100.01 ==> Error: the number is too large
console.log(calculateChange(1.41));
// $1.41 ==> 1 dollar, 1 quarter, 1 dime, 1 nickel, 1 penny
console.log(calculateChange(0.99));
// $0.99 ==> 3 quarters, 2 dimes, 4 pennies
