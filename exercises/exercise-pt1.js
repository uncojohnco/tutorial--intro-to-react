// The super heros of the world need YOUR help!
// You are going to create some functions that can assist super heros in destroying world evil.
// You will need to use the concepts of mapping, string interpolation, an arrow function, const, and let.
// Get creative! (We recommend using repl.it/languages/babel.)
//
// General suggestions:
// - Create an array of superpowers.
// - Write a function that upgrades the superhero’s powers by mapping over the
// superhero powers that accepts an arrow function that capitalizes all the powers.
// - Write a function that takes the superpowers and logs them to the console
// using string interpolation.
// - Can you think of anything else?

const superheroes = [
  { name: "superman", power: "flight" },
  { name: "aquaman", power: "water" },
  { name: "flash", power: "speed" }
];

const shazzam = word => {
  return `${word.toUpperCase()}`;
};

const capPowers = superheroes.map(hero => shazzam(hero.power));

// console
//   .dir(capPowers)

//   [(0, 0, 0)].map((x, i, c) => console.log(c));
// 1
