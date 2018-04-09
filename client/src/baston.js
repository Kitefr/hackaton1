class Baston {
  constructor() {}

  static attackNunchaku(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Nunchaku",
      sentence: `${sender.name} attaque avec son nunchaku`
    };
  }

  static attackPoison(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Poison",
      sentence: `${sender.name} attaque avec du poison`
    };
  }

  static attackBaguette(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Baguette",
      sentence: `${sender.name} attaque avec baguette magique`
    };
  }

  static attackBaseball(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Batte de Baseball",
      sentence: `${sender.name} frappe avec une batte de baseball`
    };
  }

  static attackBombe(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Bombe",
      sentence: `${sender.name} envoye une bombe`
    };
  }

  static attackSoucoupe(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Soucoupe Volante",
      sentence: `${sender.name} appel une soucoupe volante`
    };
  }

  static attackMorsure(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Morsure",
      sentence: `${sender.name} attaque avec une morsure`
    };
  }

  static attackBombeCrymo(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Bombe Crymo",
      sentence: `${sender.name} attaque avec une bombe à crymogène`
    };
  }

  static attackBootstrap(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Invocation Bootstrap !",
      sentence: `${sender.name} attaque avec un contenaire bootstrap`
    };
  }

  static attackCafeSamir(sender, receiver, health) {
    return {
      sender: sender,
      receiver: receiver,
      health: health,
      weapon: "Café de Samir",
      sentence: `${sender.name} attaque avec le café de Samir`
    };
  }

  static soignerPharamacie(sender, health) {
    return {
      sender: sender,
      health: health,
      weapon: "Soin Pharmacie",
      sentence: `${sender.name} se soigne avec la pharamacie`
    };
  }
}

export default Baston;
