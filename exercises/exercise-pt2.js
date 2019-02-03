// We are going to take what you did in the first exercise and
// now your goal is to write a SuperHero class and one class that extends SuperHero.
// In the class, you will need to write functions that use destructuring on either
// an array or an object, as well as all the other ES6 concepts we just learned.
// Use the functions that you already created and add them to the class. Get creative!
//
// Here are some suggestions if you need:
//
// - Give your superhero an array of superpowers in the constructor.
// - Add the functions you created to the class and make them work within the class context.
// - Write a function that destructures some super powers from the class variable
// and then uses them against an evil villain.
// - After writing out your SuperHero class, create a class that extends it.
// Suggestion: SideKick! (Because even SideKicks are superheros, right?)

const shazzam = word => {
  return `${word.toUpperCase()}`;
};

class Human {
  constructor(name) {
    this.name = name;
    this.kind = "civillian";
  }
}

class PoweredHuman extends Human {
  constructor(name, powers) {
    super(name);
    this.powers = powers;
  }

  intro() {
    // console.debug(this);
    // console.log(`I am a ${this.kind}! my name is "${shazzam(this.name)}"!!!`);
    console.log(`I am a ${this.kind}`);
  }
}

class Villian extends PoweredHuman {
  constructor(parms) {
    super(parms.name, parms.powers);
    this.kind = "SuperVillian";
  }
}

class Hero extends PoweredHuman {
  constructor(parms) {
    super(parms.name, parms.powers);
    this.kind = "Superhero";
  }

  beatdown(opponent) {
    console.log(
      `"${opponent.name}" gets hit by "${this.name}" with combo: "${
        this.powers
      }"`
    );
  }
}

class SideKick extends Hero {
  constructor(parms) {
    super(parms.name, parms.powers);
    this.kind = "Side Kick";
  }

  beatdown(opponent) {
    // console.log(opponent);
    console.log(`"${opponent.name}" KOs "${this.name}"!`);
  }
}

const poweredhumans = [
  new Hero({ name: "Superman", powers: ["zapk", "Bam!", "POW!!!"] }),
  new SideKick({ name: "Wonder Boy", powers: ["m", "mm...", "MEhhh"] }),
  new Villian({ name: "Lex Luther", powers: ["boop", "Beep!", "BUP!!!"] })
];

//const phenomena = poweredhumans.map(civillian => (civillian, 2));

const [hero, sidekick, villian] = poweredhumans;

hero.intro();
sidekick.intro();
sidekick.beatdown(villian);
hero.beatdown(villian);
