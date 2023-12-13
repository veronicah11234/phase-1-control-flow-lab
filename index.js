function scuberGreetingForFeet(distance) {
 if (distance <= 400) {
    return 'This one is on me!';
 } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
 } else if (distance > 2500) {
    return 'No can do.';
 }
}


console.log(scuberGreetingForFeet(2500));


function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


const city1 = 'NYC';
const city2 = 'Pittsburgh';

console.log(ternaryCheckCity(city1));
console.log(ternaryCheckCity(city2)); 


function switchOnCharmFromTip(){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }};

  const tip = switchOnCharmFromTip('generous');
  console.log(tip); 
  
  const tip1 = switchOnCharmFromTip('generous');  
  const tip2 = switchOnCharmFromTip('not as generous');
  
  console.log(tip1); // Output: Thank you so much.
  console.log(tip2); // Output: Thank you.