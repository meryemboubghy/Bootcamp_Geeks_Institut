class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
// il afficher "I'm a bird. 🦢" "I'm pink. 🌸" car fait l'appel console.log("I'm pink. 🌸") avant super()
