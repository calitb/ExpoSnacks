export const unmatched = [
  {
    "name": "Dracula",
    "image": require('./assets/backs/dracula.jpg'),
    "amount": 30,
    "cards": [
      {
        "name": "Ambush",
        "type": "attack",
        "value": 2,
        "character": "any",
        "amount": 2,
        "boost": 3,
        "description": "During combat: Your opponent discards 1 random card. Add its BOOST value to this card's attack value.",
        "descripcion": "Durante el combate: Tu oponente descarta una carta al azar. Añade su valor BOOST al valor de ataque de esta carta."
      },
      {
        "name": "Baptism of Blood",
        "type": "scheme",
        "character": "Dracula",
        "amount": 2,
        "boost": 2,
        "description": "Recover 2 health. Return a defeated Sister (if any) to any space in Dracula's zone.",
        "descripcion": "Recupera 2 salud. Regresa una Sister derrotada (si hay) a cualquier espacio en la zona de Drácula."
      },
      {
        "name": "Beastform",
        "type": "attack",
        "value": 6,
        "character": "Dracula",
        "amount": 2,
        "boost": 4,
        "description": "During combat: You may discard any number of cards from your hand. This card's value is +1 for each card you discard.",
        "descripcion": "Durante el combate: Puedes descartar cualquier cantidad de cartas de tu mano. Agrega +1 al ataque de esta carta por cada carta descartada."
      },
      {
        "name": "Dash",
        "type": "versatile",
        "value": 3,
        "character": "any",
        "amount": 3,
        "boost": 1,
        "description": "After combat: Move your fighter up to 3 spaces.",
        "descripcion": "Después del combate: Mueve tu luchador hasta 3 espacios."
      },
      {
        "name": "Do My Bidding",
        "type": "defense",
        "value": 3,
        "character": "Dracula",
        "amount": 2,
        "boost": 3,
        "description": "Immediately: Return your opponent's attack card to their hand. Look at their hand and choose an attack or versatile card for them to play. (It may be the same card.)",
        "descripcion": "Inmediatamente: Regresa la carta de ataque de tu oponente a su mano. Mira las cartas de su mano y escoge una carta para que tu oponente juegue. (Puede ser la misma carta.)"
      },
      {
        "name": "Exploit",
        "type": "versatile",
        "value": 4,
        "character": "any",
        "amount": 2,
        "boost": 1,
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma una carta de tu mazo."
      },
      {
        "name": "Feeding Frenzy",
        "type": "attack",
        "value": 2,
        "character": "Dracula",
        "amount": 2,
        "boost": 3,
        "description": "During combat: This card's value is +1 for each Sister in the same zone as the opposing fighter.",
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada Sister en la misma zona del luchador opuesto."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "value": 2,
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Look Into My Eyes",
        "type": "defense",
        "value": 1,
        "character": "Dracula",
        "amount": 2,
        "boost": 2,
        "description": "During combat: Add the BOOST value from your opponent's attack card to the defense value of this card.",
        "descripcion": "Durante el combate: Agrega el valor del BOOST de la carta de ataque de tu oponente al valor de defensa de esta carta."
      },
      {
        "name": "Mistform",
        "type": "scheme",
        "character": "Dracula",
        "amount": 2,
        "boost": 2,
        "description": "Place Dracula in any space. Gain 1 action.",
        "descripcion": "Coloca a Drácula en cualquier espacio. Ganas 1 acción."
      },
      {
        "name": "Prey Upon",
        "type": "scheme",
        "character": "Dracula",
        "amount": 2,
        "boost": 4,
        "description": "Deal 1 damage to all opposing fighters adjacent to Dracula. Dracula recovers 1 health for each damage dealt.",
        "descripcion": "Haz 1 de daño a todos los luchadores opuestos adyacentes a Drácula. Drácula recupera 1 salud por cada daño hecho."
      },
      {
        "name": "Ravening Seduction",
        "type": "scheme",
        "character": "Sister",
        "amount": 3,
        "boost": 2,
        "description": "Move any fighter up to 2 spaces. After moving, deal 1 damage to the moved fighter for each Sister adjacent to them.",
        "descripcion": "Mueve cualquier luchador hasta 2 espacios. Después de moverlo, haz 1 de daño al luchador movido por cada Sister adyacente al luchador."
      },
      {
        "name": "Thirst for Sustenance",
        "type": "attack",
        "value": 3,
        "character": "Sister",
        "amount": 3,
        "boost": 3,
        "description": "After combat: If you won the combat, place Dracula in any space adjacent to the opposing fighter.",
        "descripcion": "Después del combate: Si ganaste el combate, coloca a Drácula en cualquier espacio adyacente al luchador opuesto."
      }
    ]
  },
  {
    "name": "Sherlock Holmes",
    "image": require('./assets/backs/sherlock.jpg'),
    "amount": 30,
    "cards": [
      {
        "name": "Administer Aid",
        "type": "scheme",
        "amount": 2,
        "character": "Watson",
        "boost": 2,
        "description": "Place Dr. Watson in a space adjacent to Holmes. Holmes recovers 1 health. Draw 1 card.",
        "descripcion": "Coloca a Dr. Watson en un espacio adyacente a Holmes. Holmes recupera 1 salud. Toma 1 carta de tu mazo."
      },
      {
        "name": "Confirm Suspicion",
        "type": "scheme",
        "amount": 3,
        "character": "Holmes",
        "boost": 1,
        "description": "Choose an opponent and name a value. Your opponent must choose and discard one card matching that attack or defense value. Their hero takes damage equal to the BOOST value of the discarded card. If they do not have a card of the named value, they must reveal their hand instead.",
        "descripcion": "Selecciona un oponente y di un valor. Tu oponente debe escoger y descartar una carta de ataque o defensa con ese valor. Su héroe recibe daño igual al valor BOOST de la carta descartada. Si no tiene una carta con ese valor, debe revelar las cartas de su mano."
      },
      {
        "name": "Counterpunch",
        "type": "versatile",
        "value": 3,
        "character": "Holmes",
        "amount": 3,
        "boost": 1,
        "description": "After combat: If Holmes is adjacent to the opposing fighter, deal 2 damage to that fighter.",
        "descripcion": "Después del combate: Si Holmes está adyacente a un luchador opuesto, haz 2 de daño a ese luchador."
      },
      {
        "name": "Deduce Strategy",
        "type": "versatile",
        "value": 3,
        "character": "Holmes",
        "amount": 3,
        "boost": 1,
        "description": "During combat: You may change the printed value of the opponent's card to its BOOST value. (If a card does not have a BOOST value, it is treated as 0.)",
        "descripcion": "Durante el combate: Puedes cambiar el valor impreso de la carta de tu oponente por su valor BOOST. (Si la carta no tiene valor BOOST, es tratado como valor 0.)"
      },
      {
        "name": "Education Never Ends",
        "type": "versatile",
        "value": 3,
        "character": "any",
        "amount": 2,
        "boost": 1,
        "description": "After combat: If you won the combat, your opponent draws 1 card. If you lost the combat, you draw 2 cards.",
        "descripcion": "Después del combate: Si ganaste el combate, tu oponente toma 1 carta de su mazo. Si perdiste el combate, toma 2 cartas de tu mazo."
      },
      {
        "name": "Elementary",
        "type": "defense",
        "value": 3,
        "character": "Holmes",
        "amount": 2,
        "boost": 3,
        "description": "Play this card face up. Predict the printed attack value of the opponent's card.\n\nDuring combat: If you predicted the correct value, cancel all effects on your opponent's card and ignore its attack value.",
        "descripcion": "Juega esta carta boca arriba. Intenta predecir el valor de ataque impreso en la carta de tu oponente.\n\nDurante el combate: Si atinaste al valor, cancela todos los efectos de la carta de tu oponente e ignore su valor de ataque."
      },
      {
        "name": "Eliminate the Impossible",
        "type": "scheme",
        "amount": 2,
        "character": "Holmes",
        "boost": 2,
        "description": "Choose an opponent. Look at their hand and choose 1 card for them to discard.",
        "descripcion": "Escoge un oponente. Mira las cartas de su mano y selecciona 1 para descartar."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "value": 2,
        "character": "any",
        "amount": 3,
        "boost": 1,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Fixed Point in a Changing Age",
        "type": "versatile",
        "value": 3,
        "character": "Watson",
        "amount": 2,
        "boost": 1,
        "description": "After combat: If Dr. Watson is adjacent to Holmes, they each recover 1 health.",
        "descripcion": "Después del combate: Si Dr. Watson está adyacente Holmes, cada uno recupera 1 salud."
      },
      {
        "name": "Master of Disguise",
        "type": "scheme",
        "amount": 2,
        "character": "Holmes",
        "boost": 2,
        "description": "Choose an opponent. Holmes swaps spaces with their hero. Deal 1 damage to that hero.",
        "descripcion": "Escoge un oponente. Holmes cambia lugares con su héroe. Has 1 de daño a ese héroe."
      },
      {
        "name": "Service Revolver",
        "type": "attack",
        "value": 5,
        "character": "Watson",
        "amount": 2,
        "boost": 3,
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Study Methods",
        "type": "versatile",
        "value": 3,
        "character": "any",
        "amount": 2,
        "boost": 2,
        "description": "After combat: If you won the combat, look at your opponent's hand.",
        "descripcion": "Después del combate: Si ganaste el combate, mira las cartas de la mano de tu oponente."
      },
      {
        "name": "The Game is Afoot",
        "type": "attack",
        "value": 5,
        "character": "Holmes",
        "amount": 2,
        "boost": 2,
        "description": "After combat: Move Holmes up to 3 spaces.",
        "descripcion": "Después del combate: Mueve a Holmes hasta 3 espacios."
      }
    ]
  },
  {
    "name": "Jekyll & Hyde",
    "image": require('./assets/backs/jekyll.jpg'),
    "amount": 30,
    "cards": [
      {
        "name": "Calming Research",
        "type": "scheme",
        "amount": 2,
        "character": "Dr. Jekyll",
        "boost": 3,
        "description": "Recover 2 health. Draw up to 3 cards. Keep one and put any others on the bottom of your deck in any order.",
        "descripcion": "Recupera 2 salud. Toma hasta 3 cartas de tu mazo. Quédate con una y coloca las otras al fondo de tu mazo en cualquier orden."
      },
      {
        "name": "Distracted Triage",
        "type": "versatile",
        "amount": 2,
        "character": "Dr. Jekyll",
        "value": 3,
        "boost": 3,
        "description": "After combat: If you won the combat, recover 2 health.",
        "descripcion": "Después del combate: Si ganaste el combate, recupera 2 salud."
      },
      {
        "name": "Duality of Man",
        "type": "versatile",
        "amount": 2,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "During combat: If you are Dr. Jekyll and playing this card to defend, this card's value is 6 instead. If you are Mr. Hyde and playing this card to attack, this card's value is 6 instead.",
        "descripcion": "Durante el combate: Si eres Dr. Jekyll y juegas esta carta para defenderte, el valor de esta carta es 6. Si eres Mr. Hyde y juegas esta carta para atacar, el valor de esta carta es 6."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 2,
        "boost": 2,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Forever Hyde",
        "type": "attack",
        "amount": 2,
        "character": "Mr. Hyde",
        "value": 5,
        "boost": 2,
        "description": "During combat: You may discard Dr. Jekyll cards. Add 2 to this card's value for each card discarded.",
        "descripcion": "Durante el combate: Puedes descartar cartas de Dr. Jekyll . Agrega 2 al valor de ataque de esta carta por cada carta descartada."
      },
      {
        "name": "Madness Relents",
        "type": "versatile",
        "amount": 2,
        "character": "Mr. Hyde",
        "value": 4,
        "boost": 2,
        "description": "After combat: Transform to Dr. Jekyll.",
        "descripcion": "Después del combate: Transfórmate en Dr. Jekyll."
      },
      {
        "name": "Pure Evil",
        "type": "scheme",
        "amount": 3,
        "character": "Mr. Hyde",
        "boost": 3,
        "description": "Place Mr. Hyde in any space in his zone. Mr. Hyde deals 2 damage to all adjacent fighters.",
        "descripcion": "Coloca a Mr. Hyde en cualquier espacio de su zona. Mr. Hyde hace 2 de daño a todos los oponentes adyacentes."
      },
      {
        "name": "Recoiling Blow",
        "type": "attack",
        "amount": 2,
        "character": "Mr. Hyde",
        "value": 5,
        "boost": 2,
        "description": "After combat: Place Mr. Hyde in any space in his zone. Transform to Dr. Jekyll.",
        "descripcion": "Después del combate: Coloca a Mr. Hyde en cualquier espacio en su zona. Transfórmate en Dr. Jekyll."
      },
      {
        "name": "Scientific Method",
        "type": "defense",
        "amount": 2,
        "character": "Dr. Jekyll",
        "value": 2,
        "boost": 2,
        "description": "After combat: Draw a number of cards equal to the damage you were dealt.",
        "descripcion": "Después del combate: Toma un número de cartas de tu mazo igual al daño que recibiste."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 4,
        "boost": 1,
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, escoge uno de los luchadores del combate y muévelo hasta 2 espacios."
      },
      {
        "name": "Strange Case",
        "type": "scheme",
        "amount": 2,
        "character": "Mr. Hyde",
        "boost": 2,
        "description": "Reveal the top card of your deck. Deal damage equal to its BOOST value to one adjacent fighter. Put the card in your hand.",
        "descripcion": "Revela la carta superior de tu mazo. Haz daño igual a su valor BOOST a uno de los luchadores adyacentes. Coloca la carta en tu mano."
      },
      {
        "name": "Succumb to Compulsion",
        "type": "versatile",
        "amount": 3,
        "character": "Dr. Jekyll",
        "value": 2,
        "boost": 2,
        "description": "After combat: Move up to 2 spaces. Transform to Mr. Hyde.",
        "descripcion": "Después del combate: Muévete hasta 2 espacios. Transfórmate en Mr. Hyde."
      },
      {
        "name": "With Haste!",
        "type": "defense",
        "amount": 2,
        "character": "Dr. Jekyll",
        "value": 4,
        "boost": 3,
        "description": "After combat: Move Dr. Jekyll up to 4 spaces.",
        "descripcion": "Después del combate: Mueve a Dr. Jekyll hasta 4 espacios."
      }
    ]
  },
  {
    "name": "Invisible Man",
    "image": require('./assets/backs/invisible.jpg'),
    "amount": 30,
    "cards": [
      {
        "name": "Coded Notes",
        "type": "defense",
        "amount": 2,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "After combat: Draw 3 cards, then choose 2 cards from your hand and put them on top of your deck in any order.",
        "descripcion": "Después del combate: Toma 3 cartas, luego escoge 2 cartas de tu mano y colócalas en el tope de tu mazo en cualquier orden."
      },
      {
        "name": "Confound",
        "type": "versatile",
        "amount": 2,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "After combat: Your opponent may choose to discard 1 card. If they do not, you may move each fog token to any other space.",
        "descripcion": "Después del combate: Tu oponente puede elegir descartar 1 carta. Si no lo hace, tú puedes mover cada token de niebla a cualquier espacio."
      },
      {
        "name": "Covert Preparation",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 2,
        "boost": 1,
        "description": "After combat: Draw 1 card. Move 1 fog token up to 2 spaces, then your opponent moves a different fog token up to 2 spaces.",
        "descripcion": "Después del combate: Toma 1 carta. Mueve 1 token de niebla hasta 2 espacios, luego tu oponente mueve un token de niebla diferente hasta 2 espacios."
      },
      {
        "name": "Dreaming of Revenge",
        "type": "versatile",
        "amount": 2,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "After combat: If Invisible Man is on a space with a fog token, all opposing fighters on spaces with fog tokens take 1 damage.",
        "descripcion": "Después del combate: Si Invisible Man está en un espacio con token de niebla, todos los luchadores opuestos en espacios con un token de niebla reciben 1 de daño."
      },
      {
        "name": "Emerge From Mist",
        "type": "attack",
        "amount": 2,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "During combat: If Invisible Man started this turn on a space with a fog token, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si Invisible Man inició este turno en un espacio con un token de niebla, el valor de esta carta es 5."
      },
      {
        "name": "Impossible to See",
        "type": "versatile",
        "amount": 2,
        "character": "any",
        "value": 2,
        "boost": 2,
        "description": "Immediately: The value of your opponent's attack or defense is 0 and cannot be changed by card effects. (Other card effects still happen.)",
        "descripcion": "Inmediatamente: El valor de ataque o defensa de tu oponente es 0 y no puede ser cambiado por efectos de cartas. (Otros efectos de cartas aún aplican.)"
      },
      {
        "name": "Into Thin Air",
        "type": "defense",
        "amount": 2,
        "character": "any",
        "value": 4,
        "boost": 1,
        "description": "After combat: Move Invisible Man up to 1 space. Your opponent then moves a fog token up to 3 spaces.",
        "descripcion": "Después del combate: Mueve Invisible Man hasta 1 espacio. Luego tu oponente mueve un token de niebla hasta 3 espacios."
      },
      {
        "name": "Lurking",
        "type": "defense",
        "amount": 2,
        "character": "any",
        "value": 2,
        "boost": 2,
        "description": "After combat: Draw 1 card and choose 1 effect\n\n - move Invisible Man to a space with a fog token\n\n - move 1 fog token up to 3 spaces",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo y escoge un efecto:\n\n - mueve Invisible Man a un espacio con un token de niebla\n\n - mueve 1 token de niebla hasta 3 espacios"
      },
      {
        "name": "Reign of Terror",
        "type": "scheme",
        "amount": 2,
        "character": "any",
        "boost": 1,
        "description": "If Invisible Man is on a space with a fog token, deal 2 damage to any one opposing fighter.",
        "descripcion": "Si Invisible Man está en un espacio con un token de niebla, haz 2 de daño a cualquier luchador opuesto."
      },
      {
        "name": "Rolling Fog",
        "type": "scheme",
        "amount": 2,
        "character": "any",
        "boost": 1,
        "description": "Move 1 fog token to another space. Gain 1 action.",
        "descripcion": "Mueve 1 token de niebla a otro espacio. Gana 1 acción."
      },
      {
        "name": "Slip Away",
        "type": "attack",
        "amount": 3,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "After combat: Move 1 fog token to a space without a fighter, then place Invisible Man on that space.",
        "descripcion": "Después del combate: Mueve 1 token de niebla a un espacio sin un luchador, luego coloca a Invisible Man en ese espacio."
      },
      {
        "name": "Step Lightly",
        "type": "scheme",
        "amount": 2,
        "character": "any",
        "boost": 1,
        "description": "Deal 1 damage to one adjacent fighter. If Invisible Man is on a space with a fog token, deal 3 damage instead. Your opponent then moves a fog token up to 2 spaces.",
        "descripcion": "Haz 1 de daño a un luchador adyacente. Pero, si Invisible Man está en un espacio con un token de niebla, haz 3 de daño. Tu oponente luego mueve un token de niebla hasta 2 espacios."
      },
      {
        "name": "Surprise Attack",
        "type": "attack",
        "amount": 2,
        "character": "any",
        "value": 5,
        "boost": 1,
        "description": "Immediately: Cancel all effects on your opponent's card.\n\nAfter combat: If Invisible Man is on a space with a fog token, move that fog token to another space.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente.\n\nDespués del combate: Si Invisible Man está en un espacio con un token de niebla, mueve ese token de niebla a otro espacio."
      },
      {
        "name": "Vanish",
        "type": "scheme",
        "amount": 2,
        "character": "any",
        "boost": 3,
        "description": "Recover 1 health. Remove Invisible Man from the board. At the start of your next turn, place Invisible Man in any space. (If you played this as your first action, end your turn.)",
        "descripcion": "Recupera 1 salud. Remueve a Invisible Man del tablero. Al inicio de tu próximo turno, coloca a Invisible Man en cualquier espacio del tablero. (Si jugaste esta carta como tu primera acción, tu turno termina.)"
      }
    ]
  },
  {
    "name": "Robin Hood",
    "image": require('./assets/backs/robinhood.jpg'),
    "amount": 30,
    "cards": [
      {
        "name": "A Hunter's Eye",
        "type": "attack",
        "amount": 3,
        "character": "Robin",
        "value": 5,
        "boost": 4,
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Ambush",
        "type": "attack",
        "amount": 2,
        "character": "any",
        "value": 2,
        "boost": 3,
        "description": "During combat: Your opponent discards 1 random card. Add its BOOST value to this card's attack value.",
        "descripcion": "Durante el combate: Tu oponente descarta una carta al azar. Añade su valor BOOST al valor de ataque de esta carta."
      },
      {
        "name": "Defenders of Sherwood",
        "type": "defense",
        "amount": 2,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "After combat: Draw 1 card. Return a defeated Outlaw (if any) to any space in Robin Hood's zone.",
        "descripcion": "Después del combate: Toma 1 carta del mazo. Regresa un Outlaw derrotado (si hay) a cualquier espacio en la zona de Robin Hood."
      },
      {
        "name": "Disarming Shot",
        "type": "attack",
        "amount": 2,
        "character": "Robin",
        "value": 4,
        "boost": 3,
        "description": "After combat: Draw a number of cards equal to the amount of damage dealt to the opposing fighter.",
        "descripcion": "Después del combate: Toma de tu mazo un número de cartas igual al daño causado al luchador opuesto."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 2,
        "boost": 2,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Highway Robbery",
        "type": "attack",
        "amount": 4,
        "character": "Outlaw",
        "value": 2,
        "boost": 2,
        "description": "Immediately: Cancel all effects on your opponent's card and ignore its defense value.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente e ignora su valor de defensa."
      },
      {
        "name": "Piercing Shot",
        "type": "attack",
        "amount": 2,
        "character": "Robin",
        "value": 2,
        "boost": 3,
        "description": "After combat: Draw 2 cards.",
        "descripcion": "Después del combate: Toma 2 cartas del mazo."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 1,
        "boost": 2,
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo. Pero si ganaste el combate, toma en su lugar 2 cartas."
      },
      {
        "name": "Snark",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "After combat: If your fighter is adjacent to the opposing fighter, draw 1 card.",
        "descripcion": "Después del combate: Si tu luchador está adyacente al luchador opuesto, toma 1 carta del mazo."
      },
      {
        "name": "Steal From the Rich",
        "type": "scheme",
        "amount": 3,
        "character": "Robin",
        "boost": 3,
        "description": "Draw 1 card, then choose an opponent. They may choose to discard 1 card. If they do not, draw 1 more card.",
        "descripcion": "Toma 1 carta del mazo, luego escoge un oponente. Él puede elegir descartar una carta. Si no lo hace, entonces toma 1 carta adicional del mazo."
      },
      {
        "name": "Wily Fighting",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "After combat: Deal 1 damage to each opposing fighter adjacent to your fighter.",
        "descripcion": "Después del combate: Haz 1 de daño a cada luchador opuesto adyacente a tu luchador."
      }
    ]
  },
  {
    "name": "BigFoot",
    "image": require('./assets/backs/bigfoot.jpg'),
    "amount": 30,
    "cards": [
      {
        "name": "Crash Through the Trees",
        "type": "scheme",
        "amount": 2,
        "character": "BigFoot",
        "boost": 4,
        "description": "Move Bigfoot up to 5 spaces. You may move Bigfoot through spaces containing opposing fighters.",
        "descripcion": "Mueve a Bigfoot hasta 5 espacios. Puedes moverte a través de espacios ocupados por luchadores opuestos."
      },
      {
        "name": "Disengage",
        "type": "attack",
        "amount": 2,
        "character": "any",
        "value": 4,
        "boost": 2,
        "description": "After combat: Choose an empty space in this fighter's zone. Place this fighter in that space.",
        "descripcion": "Después del combate: Escoge un espacio vacío en la zona de este luchador. Puedes colocar este luchador en ese espacio."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 2,
        "boost": 2,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Hoax",
        "type": "versatile",
        "amount": 3,        
        "character": "any",
        "value": 4,
        "boost": 2,
        "description": "After combat: Move your fighter up to 5 spaces. You may move that fighter through spaces containing opposing fighters.",
        "descripcion": "Después del combate: Mueve tu luchador hasta 5 espacios. Puedes moverte a través de espacios ocupados por luchadores opuestos."
      },
      {
        "name": "It's Just Your Imagination",
        "type": "defense",
        "amount": 2,
        "character": "any",
        "value": 3,
        "boost": 3,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Jackalope Horns",
        "type": "scheme",
        "amount": 3,
        "character": "Jackalope",
        "boost": 2,
        "description": "Move the Jackalope up to 5 spaces. You may move the Jackalope through spaces containing opposing fighters. Then deal 2 damage to any one fighter adjacent to the Jackalope.",
        "descripcion": "Mueve a Jackalope hasta 5 espacios. Puedes moverte a través de espacios ocupados por luchadores opuestos. Luego haz 2 de daño a cada luchador adyacente al Jackalope."
      },
      {
        "name": "Larger Than Life",
        "type": "attack",
        "amount": 3,
        "character": "BigFoot",
        "value": 6,
        "boost": 3,
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Momentous Shift",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "During combat: If your fighter started this turn in a different space, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si tu luchador inició este turno en un espacio diferente, el valor de esta carta es 5."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 1,
        "boost": 2,
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo. Pero si ganaste el combate, toma en su lugar 2 cartas."
      },
      {
        "name": "Savagery",
        "type": "attack",
        "amount": 3,
        "character": "BigFoot",
        "value": 4,
        "boost": 3,
        "description": "After combat: If you won the combat, deal 1 damage to each fighter adjacent to Bigfoot.",
        "descripcion": "Después del combate: Si ganaste el combate, haz 1 de daño a cada luchador adyacente a Bigfoot."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 4,
        "boost": 1,
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, escoge uno de los luchadores del combate y muévelo hasta 2 espacios."
      }
    ]
  },
  {
    "name": "Ingen",
    "image": require('./assets/backs/ingen.jpg'),
    "amount": 30,
    "cards": [
      {
        "name": "Call for Backup",
        "type": "scheme",
        "amount": 2,
        "character": "Muldoon",
        "boost": 3,
        "description": "Choose 2 different effects: - place up to 3 traps - place all of your defeated InGen Workers (if any) in Muldoon's zone - draw 2 cards",
        "descripcion": "Escoge 2 efectos diferentes:\n\n- coloca hasta 3 trampas\n\n- coloca todos tus InGen Workers derrotados (si hay) en la zona de Muldoon\n\n - toma 2 cartas del mazo"
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 2,
        "boost": 1,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "I've Hunted Most Things That Can Hunt You",
        "type": "defense",
        "amount": 2,
        "character": "Muldoon",
        "value": 4,
        "boost": 1,
        "description": "After combat: Move each of your fighters up to 5 spaces. You may move them through spaces containing opposing fighters.",
        "descripcion": "Después del combate: Mueve cada uno de tus luchadores hasta 5 espacios. Puedes moverlos a través de espacios ocupados por luchadores opuestos."
      },
      {
        "name": "Leap Away",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 4,
        "boost": 2,
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 4 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, escoge uno de los luchadores del combate y muévelo hasta 4 espacios."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 1,
        "boost": 1,
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta del mazo. Si ganaste el combate, toma 2 en su lugar."
      },
      {
        "name": "Remote Detonation",
        "type": "scheme",
        "amount": 3,
        "character": "any",
        "boost": 2,
        "description": "Choose a trap in the same zone as one of your Ingen Workers. Deal 1 damage to each opposing fighter adjacent to that trap. Return that trap.",
        "descripcion": "Escoge una trampa en la misma zona que uno de tus Ingen Workers. Haz 1 de daño a cada luchador opuesto adyacente a la trampa. Regresa la trampa."
      },
      {
        "name": "Rending Shot",
        "type": "attack",
        "amount": 4,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "After combat: Move the opposing fighter up to 3 spaces.",
        "descripcion": "Después del combate: Mueve al luchador opuesto hasta 3 espacios."
      },
      {
        "name": "Second Shot",
        "type": "attack",
        "amount": 2,
        "character": "any",
        "value": 2,
        "boost": 3,
        "description": "During combat: You may BOOST this attack.",
        "descripcion": "Durante el combate: Puedes aplicar BOOST a este ataque."
      },
      {
        "name": "Shoot Her!",
        "type": "attack",
        "amount": 2,
        "character": "Muldoon",
        "value": 3,
        "boost": 1,
        "description": "During combat: If this is your first action this turn, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si este es tu primera acción este turno, el valor de esta carta es 5."
      },
      {
        "name": "Tactical Advance",
        "type": "versatile",
        "amount": 3,
        "character": "Ingen Worker",
        "value": 3,
        "boost": 3,
        "description": "After combat: Move each of your InGen Workers up to 2 spaces.",
        "descripcion": "Después del combate: Mueve cada uno de tus InGen Workers hasta 2 espacios."
      },
      {
        "name": "They Should All Be Destroyed",
        "type": "attack",
        "amount": 3,
        "character": "Muldoon",
        "value": 4,
        "boost": 3,
        "description": "During combat: +1 to this attack for each trap token adjacent to the opposing fighter.",
        "descripcion": "Durante el combate: +1 a este ataque por cada trampa adyacente al luchador opuesto."
      }
    ]
  },
  {
    "name": "Raptors",
    "amount": 30,
    "image": require('./assets/backs/raptors.jpg'),
    "cards": [
      {
        "name": "Ambush",
        "type": "attack",
        "amount": 3,
        "character": "any",
        "value": 2,
        "boost": 3,
        "description": "During combat: Your opponent discards 1 random card. Add its BOOST value to this card's attack value.",
        "descripcion": "Durante el combate: Tu oponente descarta 1 carta al azar. Agrega su valor BOOST al valor de ataque de esta carta."
      },
      {
        "name": "Clever Girl",
        "type": "attack",
        "amount": 3,
        "character": "any",
        "value": 3,
        "boost": 3,
        "description": "After combat: If one or more of your Raptors is adjacent to the opposing fighter, gain 1 action.",
        "descripcion": "Después del combate: Si una o más de tus Raptors está adyacente al luchador opuesto, gana 1 acción."
      },
      {
        "name": "Coordinated Attack Pattern",
        "type": "scheme",
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "Choose one of your Raptors. You may place each of your other Raptors in any space in the chosen Raptor's zone.",
        "descripcion": "Escoge una de tus Raptors. Puedes colocar cada una de tus otras Raptors en cualquier espacio de la zona de la Raptor escogida."
      },
      {
        "name": "Decoy",
        "type": "defense",
        "amount": 4,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "Immediately: Choose one of your other undefeated Raptors. You may place her adjacent to the opposing fighter.",
        "descripcion": "Inmediatamente: Escoge una de tus otras Raptors vivas. Puedes colocarla adyacente al luchador opuesto."
      },
      {
        "name": "Disengage",
        "type": "attack",
        "amount": 2,
        "character": "any",
        "value": 4,
        "boost": 2,
        "description": "After combat: Choose an empty space in this fighter's zone. Place this fighter in that space.",
        "descripcion": "Después del combate: Escoge un espacio vacío en la zona de esta luchadora. Puedes colocar esta luchadora en ese espacio."
      },
      {
        "name": "Eaten Alive",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 4,
        "boost": 2,
        "description": "After combat: If you won the combat, deal 1 damage to one adjacent opposing fighter.",
        "descripcion": "Después del combate: Si ganaste el combate, haz 1 de daño a un luchador opuesto adyacente."
      },
      {
        "name": "Eviscerate",
        "type": "attack",
        "amount": 2,
        "character": "any",
        "value": 5,
        "boost": 3,
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 2,
        "boost": 1,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Pack Hunters",
        "type": "attack",
        "amount": 2,
        "character": "any",
        "value": 4,
        "boost": 2,
        "description": "After combat: If you won the combat, deal 1 damage to the opposing fighter for each of your Raptors adjacent to them.",
        "descripcion": "Después del combate: Si ganaste el combate, haz 1 de daño al luchador opuesto por cada una de tus Raptors adyacentes a él."
      },
      {
        "name": "They Remember",
        "type": "attack",
        "amount": 4,
        "character": "any",
        "value": 2,
        "boost": 2,
        "description": "After combat: Gain 1 action.",
        "descripcion": "Después del combate: Gana 1 acción."
      },
      {
        "name": "Working Things Out",
        "type": "scheme",
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "Move each of your Raptors up to 3 spaces. You may move them through spaces containing opposing fighters. Gain 1 action.",
        "descripcion": "Mueve cada una de tus Raptors hasta 3 espacios. Puedes moverlas a través de luchadores opuestos. Gana 1 acción."
      },
    ]
  },
  {
    "name": "Bruce Lee",
    "amount": 30,
    "image": require('./assets/backs/brucelee.jpg'),
    "cards": [
      {
        "name": '"HOO! WHAAAAAA!"',
        "type": "scheme",
        "amount": 1,
        "character": "any",
        "boost": 3,
        "description": "Choose a JEET KUNE DO card in your discard pile and add it to your hand. Gain 1 action.",
        "descripcion": "Escoge una carta JEET KUNE DO de tu pila de descarte y agrégala a tu mano. Gana 1 acción."
      },
      {
        "name": "Be Like Water",
        "type": "defense",
        "amount": 4,
        "character": "any",
        "value": 3,
        "boost": 4,
        "description": "After combat: Choose a JEET KUNE DO card in your discard pile and add it to your hand.",
        "descripcion": "Después del combate: Escoge una carta JEET KUNE DO de tu pila de descarte y agrégala a tu mano."
      },
      {
        "name": "Bring It On",
        "type": "scheme",
        "amount": 1,
        "character": "any",
        "boost": 3,
        "description": "Choose an opposing fighter in Bruce Lee's zone. Place them in any space adjacent to Bruce Lee. Gain 1 action.",
        "descripcion": "Escoge un luchador opuesto en la zona de Bruce Lee. Colócalo en un espacio adyacente a Bruce Lee. Gana 1 acción."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 2,
        "boost": 2,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Jeet Kune Do: Corkscrew Finger Jab",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "After combat: Deal 1 damage to the opposing fighter. Gain 1 action.",
        "descripcion": "Después del combate: Haz 1 de daño al luchador opuesto. Gana 1 acción."
      },
      {
        "name": "Jeet Kune Do: Downward Side Kick",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "After combat: Your opponent discards 1 random card. Gain 1 action.",
        "descripcion": "Después del combate: Tu oponente descarta 1 carta al azar. Gana 1 acción."
      },
      {
        "name": "Jeet Kune Do: High Straight Lead",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 3,
        "description": "During combat: If either fighter started this turn in a different space, this card's value is 5 instead.\n\nAfter combat: Gain 1 action.",
        "descripcion": "Durante el combate: Si cualquiera de los luchadores inició este turno en un espacio diferente, el valor de esta carta es 5.\n\nDespués del combate: Gana 1 acción."
      },
      {
        "name": "Jeet Kune Do: Intercepting Fist",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "Immediately: Cancel all effects on your opponent's card.\n\nAfter combat: Gain 1 action.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente.\n\nDespués del combate: Gana 1 acción.",
      },
      {
        "name": "Jeet Kune Do: Short Lead Hook",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 3,
        "description": "After combat: Bruce Lee may swap spaces with the opposing fighter. Gain 1 action.",
        "descripcion": "Después del combate: Bruce Lee puede cambiar de lugar con el luchador opuesto. Gana 1 acción."
      },
      {
        "name": "Jeet Kune Do: Wrist Lock",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "After combat: Draw 1 card. Gain 1 action.",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo. Gana 1 acción."
      },
      {
        "name": "Little Dragon",
        "type": "versatile",
        "amount": 2,
        "character": "any",
        "value": 2,
        "boost": 3,
        "description": "During combat: If your hand is empty, the value of this card is 6 instead.\n\nAfter combat: Draw 2 cards.",
        "descripcion": "Durante el combate: Si tu mano está vacía, el valor de esta carta es 6.\n\nDespués del combate: Toma 2 cartas de tu mazo.",
      },
      {
        "name": "Momentous Shift",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "During combat: If your fighter started this turn in a different space, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si tu luchador inició este turno en un espacio diferente, el valor de esta carta es 5."
      },
      {
        "name": "Nunchaku",
        "type": "scheme",
        "amount": 2,
        "character": "any",
        "boost": 3,
        "description": "All of Bruce Lee's attacks this turn are +1 value. Gain 1 action.",
        "descripcion": "Todos los ataques de Bruce Lee en este turno tienen valor +1. Gana 1 acción."
      },
      {
        "name": "One-Inch Punch",
        "type": "scheme",
        "amount": 1,
        "character": "any",
        "boost": 3,
        "description": "Deal 2 damage to an adjacent fighter. If this defeats that fighter, return this card to your hand instead of discarding it.",
        "descripcion": "Haz 2 de daño a un luchador adyacente. Si esto derrota a ese luchador, retorna esta carta a tu mano en lugar de descartarla."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 1,
        "boost": 2,
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo. Pero si ganaste el combate, toma en su lugar 2 cartas."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 3,
        "character": "any",
        "value": 4,
        "boost": 1,
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, escoge uno de los luchadores del combate y muévelo hasta 2 espacios."
      },
      {
        "name": "Taste of Blood",
        "type": "defense",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 3,
        "description": "After combat: If Bruce Lee has 5 or less health, draw 3 cards.",
        "descripcion": "Después del combate: Si Bruce Lee tiene 5 de salud o menos, toma 3 cartas de tu mazo."
      }
    ]
  },
  {
    "name": "Deadpool",
    "amount": 30,
    "image": require('./assets/backs/deadpool.jpg'),
    "cards": [
      {
        "name": "3 of Hearts",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 4,
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo."
      },
      {
        "name": "And For My Next Move...",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 2,
        "boost": 1,
        "description": "After combat: Deal 2 damage to the opposing fighter OR move your fighter up to 3 spaces.",
        "descripcion": "Después del combate: Haz 2 de daño al luchador opuesto o mueve a tu luchador hasta 3 espacios."
      },
      {
        "name": "Call Me",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "During combat: If your opponent's name is on this card, its value is 4.\n\nAfter combat: Your opponent writes their name on this card if it's not there already.",
        "descripcion": "Durante el combate: Si el nombre de tu oponente está en esta carta, su valor es 4.\n\nDespués del combate: Tu oponente escribe su nombre en esta carta si no está escrito."
      },
      {
        "name": "Cha-Ching!",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 1,
        "boost": 3,
        "description": "During combat: You may BOOST this card.",
        "descripcion": "Durante el combate: Tu puedes aplicar BOOST a esta carta."
      },
      {
        "name": "Chimichanga Break!",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 2,
        "boost": 2,
        "description": "During combat: If there is food on the table, the value of this card is 5 instead.",
        "descripcion": "Durante el combate: Si hay comida en la mesa, el valor de esta carta es 5."
      },
      {
        "name": "Deadpool™ Merc For Hire, LLC",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 5,
        "boost": 1,
        "description": "After combat: Deal 1 damage to the opposing fighter if you own the Deadpool Unmatched set.",
        "descripcion": "Después del combate: Haz 1 de daño al luchador opuesto si eres el dueño del set Unmatched de Deadpool."
      },
      {
        "name": "Dumpster Divin' Deadpool",
        "type": "scheme",
        "amount": 1,
        "character": "any",
        "boost": 1,
        "description": "Shuffle 5 cards from your discard pile into your deck. Recover 1 health.",
        "descripcion": "Baraja 5 cartas de tu pila de descarta y colócalas en tu mazo. Recupera 1 salud."
      },
      {
        "name": "Eat Me",
        "type": "defense",
        "amount": 1,
        "character": "any",
        "value": 2,
        "boost": 2,
        "description": 'Tee-hee!\n\nImmediately: Say "eat me" to your opponent.\n\nDuring combat: Say "eat me" to your opponent.\n\nAfter combat: If you lost combat, say "eat me" to your opponent.',
        "descripcion": 'Tee-hee!\n\nInmediatamente: Di "eat me" a tu oponente.\n\nDurante el combate: Di "eat me" a tu oponente.\n\nDespués del combate: Si perdiste el combate, di "eat me" a tu oponente.',
      },
      {
        "name": "Excuse me while I grow some limbs.",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "After combat: Your opponent discards a card. If you won the combat, they discard two instead.",
        "descripcion": "Después del combate: Tu oponente descarta 1 carta. Si ganaste el combate, tu oponente descarta 2 cartas en su lugar."
      },
      {
        "name": "Exploding Card!",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 1,
        "boost": 4,
        "description": "During combat: If you made an exploding noise when you revealed the card the value of this card is 4.",
        "descripcion": "Durante el combate: Si hiciste un sonido de explosión cuando revelaste esta carta su valor es 4."
      },
      {
        "name": "Faint",
        "type": "scheme",
        "amount": 1,
        "character": "any",
        "boost": 2,
        "description": "Tip your figure over. Make a fainting noise. Recover 2 health. Reset your figure.",
        "descripcion": "Tumba tu figura. Haz un sonido de desmayo. Recupera 2 de salud. Vuelve a levantar tu figura."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 2,
        "boost": 1,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Gaze of Stone",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 2,
        "boost": 1,
        "description": "After combat: If you won the combat, deal 8 damage to the opposing fighter.",
        "descripcion": "Después del combate: Si ganaste el combate, haz 8 de daño al luchador opuesto."
      },
      {
        "name": "Gimme Gimme Chimichanga",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "After combat: Draw a card. Recover 1 health.",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo. Recupera 1 salud."
      },
      {
        "name": "Holy Mackerel!",
        "type": "scheme",
        "amount": 1,
        "character": "any",
        "boost": 2,
        "description": "Guess the name of a card in your opponent's hand. Your opponent must discard all cards with that name. Otherwise they say \"go fish\" and you draw a card.",
        "descripcion": "Adivina el nombre de una carta en la mano de tu oponente. Tu oponente debe descartar todas las cartas con ese nombre. En caso contrario él dice \"go fish\" y tú tomas una carta de tu mazo."
      },
      {
        "name": "I Always Get The Last Word",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "After combat: If you attacked, deal 1 damage to the opposing fighter.",
        "descripcion": "Después del combate: Si tu atacaste, haz 1 de daño al luchador opuesto."
      },
      {
        "name": "I'm Not Wearing Pants",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 2,
        "boost": 1,
        "description": "During combat: If this card isn't sleeved, its value is 5.\n\nAfter combat: If you're not wearing any pants, go put some on.",
        "descripcion": "Durante el combate: Si esta carta no está cubierta con plástico, su valor es 5.\n\nDespués del combate: Si no estás usando pantalones, ve y ponte unos.",
      },
      {
        "name": "Klunkin' Heads",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 4,
        "boost": 2,
        "description": "After combat: If you won the combat, deal 3 damage to each other opposing fighter adjacent to the opposing fighter.",
        "descripcion": "Después del combate: Si ganaste el combate, haz 3 de daño a cada luchador opuesto adyacente al luchador opuesto."
      },
      {
        "name": "Non-Retinal Scan Access to Danger Room",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 4,
        "description": "After combat: Look at your opponent's hand. Recover 1 health.",
        "descripcion": "Después del combate: Mira las cartas de la mano de tu oponente. Recupera 1 salud."
      },
      {
        "name": "Passwords",
        "type": "defense",
        "amount": 1,
        "character": "any",
        "value": 5,
        "boost": 1,
        "description": "After combat: Your opponent looks at your hand and chooses a card for you to discard.",
        "descripcion": "Después del combate: Tu oponente mira a en tu mano y escoge una carta para descartar."
      },
      {
        "name": "Push to Teleport",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 2,
        "boost": 6,
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo."
      },
      {
        "name": "Rob's Pouch & Shoe Emporium",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 4,
        "boost": 1,
        "description": "After combat: Move the opposing fighter one space. Just one.",
        "descripcion": "Después del combate: Mueve al luchador opuesto 1 espacio. Sólo uno."
      },
      {
        "name": "Super Feint",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 4,
        "boost": 2,
        "description": "This card can't be canceled!\n\nImmediately: Cancel all effects on your opponent's card.\n\nAfter combat: Draw 1 card.",
        "descripcion": "Esta carta no puede ser cancelada!\n\nInmediatamente: Cancela todos los efectos de la carta de tu oponente.\n\nDespués del combate: Toma 1 carta.",
      },
      {
        "name": "Sweeet!",
        "type": "scheme",
        "amount": 1,
        "character": "any",
        "boost": 2,
        "description": "Move to a space in a yellow-ish zone. Then move to a different space in a yellow-ish zone.",
        "descripcion": "Muévete a un espacio en la zona amarillenta. Luego muévete a otro espacio en la zona amarillenta."
      },
      {
        "name": "They Have An Amazing Buffet",
        "type": "defense",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "After combat: Recover 2 health. Then, if you are at full health, take 2 damage.",
        "descripcion": "Después del combate: Recupera 2 de salud. Luego, si estás a tu máxima salud, toma 2 de daño."
      },
      {
        "name": "Time out time out time out!",
        "type": "versatile",
        "amount": 1,
        "character": "any",
        "value": 0,
        "boost": 3,
        "description": "Immediately: Call time out. Look through your deck and pick a card you could play. Discard this card and play that one instead.",
        "descripcion": "Inmediatamente: Pide tiempo fuera. Mira en tu mazo y escoge una carta para jugar. Descarta esta carta y juega la del mazo en su lugar."
      },
      {
        "name": "Transit Card",
        "type": "defense",
        "amount": 1,
        "character": "any",
        "value": 2,
        "boost": 1,
        "description": "After combat: Move to any space in your zone.",
        "descripcion": "Después del combate: Muévete a cualquier espacio en tu zona."
      },
      {
        "name": "Underrated Super Heroes",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 6,
        "boost": 2,
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Wanna bet?",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 2,
        "boost": 1,
        "description": "After combat: If you won the game your opponent buys you a drink. If you lost the game, you buy them a drink.",
        "descripcion": "Después del combate: Si ganaste el juego tu oponente te compra un trago. Si perdiste el juego, tú le compras el trago."
      },
      {
        "name": "Xavier Institute Faculty",
        "type": "attack",
        "amount": 1,
        "character": "any",
        "value": 3,
        "boost": 2,
        "description": "You may play this card as a ranged attack.",
        "descripcion": "Puedes jugar esta carta como un ataque a distancia."
      },
    ]
  },
  {
    "name": "Achilles",
    "amount": 30,
    "image": require('./assets/backs/achilles.jpg'),
    "cards": []
  },
  {
    "name": "Bloody Mary",
    "amount": 30,
    "image": require('./assets/backs/bloodymary.jpg'),
    "cards": []
  },
  {
    "name": "Sun Wukong",
    "amount": 30,
    "image": require('./assets/backs/sunwukong.jpg'),
    "cards": []
  },
  {
    "name": "Yennenga",
    "amount": 30,
    "image": require('./assets/backs/yennenga.jpg'),
    "cards": []
  },
  {
    "name": "Luke Cage",
    "amount": 30,
    "image": require('./assets/backs/luke.jpg'),
    "cards": []
  },
  {
    "name": "Ghost Rider",
    "amount": 30,
    "image": require('./assets/backs/ghostrider.jpg'),
    "cards": []
  },
  {
    "name": "Moon Knight",
    "amount": 30,
    "image": require('./assets/backs/moonknight.jpg'),
    "cards": []
  },
  {
    "name": "Dr. Ellie Sattler",
    "amount": 30,
    "image": require('./assets/backs/sattler.jpg'),
    "cards": []
  },
  {
    "name": "T. Rex",
    "amount": 30,
    "image": require('./assets/backs/trex.jpg'),
    "cards": []
  }
]
