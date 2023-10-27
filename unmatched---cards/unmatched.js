export const unmatched = [
  {
    "name": "Dracula",
    "image": require('./assets/backs/dracula.jpg'),
    "amount": 30,
    "ability": {
      "en": "At the start of your turn, you may deal 1 damage to a fighter adjacent to Dracula. If you do, draw a card.",
      "es": "Al comienzo de tu turno, puedes infligir 1 de daño a un luchador adyacente a Dracula. Si lo haces, toma una carta de tu mazo."
    },
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
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada Sister en la misma zona del luchador contrario."
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
        "descripcion": "Después del combate: Si ganaste el combate, coloca a Drácula en cualquier espacio adyacente al luchador contrario."
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
        "descripcion": "Después del combate: Si Holmes está adyacente a un luchador contrario, haz 2 de daño a ese luchador."
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
    "ability": {
      "en": "Start the game as Dr. Jekyll. At the start of your turn, you may transform into Dr. Jekyll or Mr. Hyde.\n\nWhile Mr. Hyde: After you Maneuver, take 1 damage.\n\nUse the transformation token to indicate what he currently is.",
      "es": "Comienza el juego como Dr. Jekyll. Al comienzo de tu turno, puedes transformarte en Dr. Jekyll o Mr. Hyde.\n\nMientras eres Mr. Hyde: Después de realizar un Maniobra, toma 1 de daño.\n\nUsa el token de transformación para indicar qué eres actualmente."
    },
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
    "ability": {
      "en": "At the start of the game, after you place Invisible Man, place 3 fog tokens in separate spaces in his zone.\n\nWhen Invisible Man is on a space with a fog token, add 1 to the value of his defense cards.\n\nInvisible Man may move between two spaces with fog tokens as if they were adjacent.\n\n\nWhen placing fog tokens at the start of the game, place them exactly like you would sidekick tokens (they cannot be placed in a space with a fighter, including Invisible Man.) During the game, fog tokens can only be moved by Invisible Man's card effects. They may move through or end their movement in spaces with fighters or other tokens.",
      "es": "Al comienzo del juego, después de colocar a Invisible Man, coloca 3 tokens de niebla en espacios separados en su zona.\n\nCuando Invisible Man esté en un espacio con un token de niebla, suma 1 al valor de sus cartas de defensa.\n\nInvisible Man puede moverse entre dos espacios con tokens de niebla como si fueran adyacentes.\n\n\nAl colocar tokens de niebla al comienzo del juego, colóquelos exactamente como lo haría con las fichas de aliados (no se pueden colocar en un espacio con un luchador, incluido Invisible Man). Durante el juego, los tokens de niebla solo se pueden mover mediante los efectos de las cartas de Invisible Man. Pueden moverse o terminar su movimiento en espacios con guerreros u otras fichas."
    },
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
        "descripcion": "Si Invisible Man está en un espacio con un token de niebla, haz 2 de daño a cualquier luchador contrario."
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
    "ability": {
      "en": "After you attack, you may move your attacking fighter up to 2 spaces.",
      "es": "Después de que ataques, puedes mover tu luchador atacante hasta 2 espacios."
    },
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
        "descripcion": "Después del combate: Toma de tu mazo un número de cartas igual al daño causado al luchador contrario."
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
        "descripcion": "Después del combate: Si tu luchador está adyacente al luchador contrario, toma 1 carta del mazo."
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
        "descripcion": "Después del combate: Haz 1 de daño a cada luchador contrario adyacente a tu luchador."
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
    "ability": {
      "en": "At the start of your turn, you may place a trap.\nWhenever one of your traps is returned to the box, draw a card.\nMuldoon starts with 8 traps.\n\nYou may place a trap token in any unoccupied space in Muldoon's zone. If Muldoon's space is in more than one zone, you may pick a space in any of them. The target space cannot contain any fighters or other tokens, including other traps.\n\nWhen an opposing fighter enters a space with a trap, the trap goes off. The fighter must immediately stop moving and takes 1 damage. After the trap goes off, return it to the box.\n\nMuldoon's and his allies may land on or move through traps freely without setting them off.",
      "es": "Al comienzo de tu turno, puedes colocar una trampa.\nCuando una de tus trampas vuelva a la caja, toma una carta.\nMuldoon comienza con 8 trampas.\n\nPuedes colocar un token de trampa en cualquier espacio vacío en la zona de Muldoon. Si Muldoon está en más de una zona, puedes elegir un espacio en cualquiera de ellas. El espacio elegido no puede contener luchadores u otros token, incluidas otras trampas.\n\nCuando un luchador oponente entra en un espacio con una trampa, la trampa se activa. El luchador debe detenerse y recibir 1 de daño. Después de que la trampa se activa, devuélvela a la caja (para no volver a ser usada).\n\nMuldoon y sus aliados pueden caer en o moverse por trampas sin activarlas."
    },
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
        "descripcion": "Escoge una trampa en la misma zona que uno de tus Ingen Workers. Haz 1 de daño a cada luchador contrario adyacente a la trampa. Regresa la trampa."
      },
      {
        "name": "Rending Shot",
        "type": "attack",
        "amount": 4,
        "character": "any",
        "value": 3,
        "boost": 1,
        "description": "After combat: Move the opposing fighter up to 3 spaces.",
        "descripcion": "Después del combate: Mueve al luchador contrario hasta 3 espacios."
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
        "descripcion": "Durante el combate: +1 a este ataque por cada trampa adyacente al luchador contrario."
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
        "descripcion": "Después del combate: Si una o más de tus Raptors está adyacente al luchador contrario, gana 1 acción."
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
        "descripcion": "Inmediatamente: Escoge una de tus otras Raptors vivas. Puedes colocarla adyacente al luchador contrario."
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
        "descripcion": "Después del combate: Si ganaste el combate, haz 1 de daño a un luchador contrario adyacente."
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
        "descripcion": "Después del combate: Si ganaste el combate, haz 1 de daño al luchador contrario por cada una de tus Raptors adyacentes a él."
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
    "ability": {
      "en": "At the end of your turn, you may move Bruce Lee 1 space.",
      "es": "Al final de tu turno, puedes mover a Bruce Lee 1 espacio."
    },
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
        "descripcion": "Escoge un luchador contrario en la zona de Bruce Lee. Colócalo en un espacio adyacente a Bruce Lee. Gana 1 acción."
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
        "descripcion": "Después del combate: Haz 1 de daño al luchador contrario. Gana 1 acción."
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
        "descripcion": "Después del combate: Bruce Lee puede cambiar de lugar con el luchador contrario. Gana 1 acción."
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
        "descripcion": "Después del combate: Haz 2 de daño al luchador contrario o mueve a tu luchador hasta 3 espacios."
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
        "descripcion": "Después del combate: Haz 1 de daño al luchador contrario si eres el dueño del set Unmatched de Deadpool."
      },
      {
        "name": "Dumpster Divin' Deadpool",
        "type": "scheme",
        "amount": 1,
        "character": "any",
        "boost": 1,
        "description": "Shuffle 5 cards from your discard pile into your deck. Recover 1 health.",
        "descripcion": "Baraja 5 cartas de tu pila de descarte y colócalas en tu mazo. Recupera 1 salud."
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
        "descripcion": "Después del combate: Si ganaste el combate, haz 8 de daño al luchador contrario."
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
        "descripcion": "Después del combate: Si tu atacaste, haz 1 de daño al luchador contrario."
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
        "descripcion": "Después del combate: Si ganaste el combate, haz 3 de daño a cada luchador contrario adyacente al luchador contrario."
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
        "descripcion": "Después del combate: Mueve al luchador contrario 1 espacio. Sólo uno."
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
    "ability": {
      "en": "When Patroclus is defeated, discard 2 random cards.\n\nWhile Patroclus is defeated: Add +2 to the value of all Achilles' attacks and if Achilles wins combat, draw 1 card.\n\nWhile Patroclus is defeated, if Achilles wins combat he draws 1 card after any AFTER COMBAT effects have resolved.",
      "es": "Cuando Patroclus es derrotado, descarta 2 cartas al azar.\n\nMientras Patroclus está derrotado: Añade +2 al valor de todos los ataques de Achilles y si Achilles gana el combate, toma 1 carta.\n\nMientras Patroclus está derrotado, si Achilles gana el combate, toma 1 carta después de que se resuelvan todos los efectos DESPUÉS DEL COMBATE."
    },
    "cards": [
      {
        "name": "Achilles' Heel",
        "type": "defense",
        "amount": 3,
        "value": 4,
        "boost": 2,
        "character": "ACHILLES",
        "description": "After combat: If you lost the combat, your opponent gains 1 action.",
        "descripcion": "Después del combate: Si perdiste el combate, tu oponente gana 1 acción."
      },
      {
        "name": "Battle Frenzy",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "PATROCLUS",
        "description": "After combat: Deal 2 damage to both fighters in the combat.",
        "descripcion": "Después del combate: Haz 2 de daño a ambos luchadores en el combate."
      },
      {
        "name": "Battle Hardened",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: Choose a card in your discard pile and return it to your hand.",
        "descripcion": "Después del combate: Escoge una carta en tu pila de descartes y regresa esa carta a tu mano."
      },
      {
        "name": "Blessed By Hermes",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: Move each of your fighters up to 3 spaces. They may move through opposing fighters.",
        "descripcion": "Después del combate: Mueve cada uno de tus luchadores hasta 3 espacios. Pueden moverse a través de luchadores opuestos."
      },
      {
        "name": "Brothers In Arms",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: If Patroclus is not defeated, gain 1 action.",
        "descripcion": "Después del combate: Si Patroclus no está derrotado, gana 1 acción."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos en la carta de tu oponente."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, escoge uno de los luchadores en el combate y muevelo hasta 2 espacios."
      },
      {
        "name": "Spear Throw",
        "type": "scheme",
        "amount": 2,
        "boost": 1,
        "character": "ACHILLES",
        "description": "Deal 2 damage to an opposing fighter in Achilles' zone.",
        "descripcion": "Haz 2 de daño a un luchador opuesto en la zona de Achilles."
      },
      {
        "name": "Test For Weakness",
        "type": "attack",
        "amount": 3,
        "value": 1,
        "boost": 3,
        "character": "any",
        "description": "After combat: RELENTLESS ASSAULT: 3 ATK",
        "descripcion": "Después del combate: RELENTLESS ASSAULT: 3 ATAQUE"
      },
      {
        "name": "The Day of Your Doom",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "PATROCLUS",
        "description": "During combat: You may deal 2 damage to Patroclus. If you do, the value of this attack is 5 instead.",
        "descripcion": "Durante el combate: Puedes hacer 2 de daño a Patroclus. Si lo haces, el valor de este ataque es 5 en su lugar."
      },
      {
        "name": "Under Achilles' Helm",
        "type": "defense",
        "amount": 3,
        "value": 2,
        "boost": 4,
        "character": "ACHILLES",
        "description": "Immediately: If Patroclus is not defeated, Achilles may swap spaces with him. If he does, Patroclus is now the defender.",
        "descripcion": "Inmediatamente: Si Patroclus no está derrotado, Achilles puede intercambiar espacios con él. Si lo hace, Patroclus es ahora el defensor."
      },
      {
        "name": "Wily Fighting",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: Deal 1 damage to each opposing fighter adjacent to your fighter.",
        "descripcion": "Después del combate: Haz 1 de daño a cada luchador opuesto adyacente a tu luchador."
      },
    ]
  },
  {
    "name": "Bloody Mary",
    "amount": 30,
    "image": require('./assets/backs/bloodymary.jpg'),
    "ability": {
      "en": "At the start of your turn, if you have exactly 3 cards in hand, gain 1 action.",
      "es": "Al comienzo de tu turno, si tienes exactamente 3 cartas en mano, gana 1 acción."
    },
    "cards": [
      {
        "name": "Bloody Requiem",
        "type": "attack",
        "value": 3,
        "amount": 3,
        "character": "any",
        "boost": 4,
        "description": "After combat: BLOODY REPRISE: 0 ATK. DURING COMBAT: If your opponent played a card against BLOODY REQUIEM, this attack's value is that card's printed value.",
        "descripcion": "Después del combate: BLOODY REPRISE: 0 ATK. DURANTE EL COMBATE: Si tu oponente jugó una carta contra BLOODY REQUIEM, este ataque tiene el valor de la carta impresa."
      },
      {
        "name": "Broken Glass",
        "type": "versatile",
        "value": 3,
        "amount": 3,
        "character": "any",
        "boost": 2,
        "description": "During combat: You may increase or decrease the value of this card by 1.\n\nAfter combat: If the value of this card matches your opponent's card, draw 1 card and the opposing fighter takes 2 damage.",
        "descripcion": "Durante el combate: Puedes aumentar o disminuir el valor de esta carta en 1.\n\nDespués del combate: Si el valor de esta carta coincide con el de la carta de tu oponente, toma 1 carta y el oponente toma 2 de daño."
      },
      {
        "name": "Closer Than She Appears",
        "type": "scheme",
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "Move your fighter up to 1 space. Draw 1 card. Gain 1 action.",
        "descripcion": "Mueve tu luchador hasta 1 espacio. Toma 1 carta. Gana 1 acción."
      },
      {
        "name": "Evade",
        "type": "defense",
        "value": 3,
        "amount": 3,
        "character": "any",
        "boost": 1,
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "value": 2,
        "character": "any",
        "amount": 2,
        "boost": 2,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Ghostly Touch",
        "type": "attack",
        "value": 1,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "During combat: You may BOOST this attack.\n\nAfter combat: If this is your third action this turn, recover 3 health.",
        "descripcion": "Durante el combate: Puedes BOOST este ataque.\n\nDespués del combate: Si es tu tercera acción de este turno, recupera 3 de salud."
      },
      {
        "name": "Infinity Mirror",
        "type": "versatile",
        "value": 4,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "After combat: Choose one of the fighters in the combat and move them up to 4 spaces.",
        "descripcion": "Después del combate: Elige uno de los luchadores en el combate y muevelo hasta 4 espacios."
      },
      {
        "name": "Jump Scare",
        "type": "versatile",
        "value": 3,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "During combat: If Bloody Mary shares no zones with the space she started in this turn, this card's value is 6 instead.",
        "descripcion": "Durante el combate: Si Bloody Mary no comparte ninguna zona con el espacio en el que comenzó este turno, este ataque tiene el valor de 6."
      },
      {
        "name": "Mirror Image",
        "type": "defense",
        "value": 0,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "During combat: The value of this card is equal to the printed value of your opponent's card.",
        "descripcion": "Durante el combate: El valor de esta carta es igual al valor impreso de la carta de tu oponente."
      },
      {
        "name": "Out Of The Mirror",
        "type": "attack",
        "value": 1,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "During combat: Your opponent discards 1 random card. Add its BOOST value to this card's value.\n\nAfter combat: If this is your third action, draw 1 card.",
        "descripcion": "Durante el combate: Tu oponente descarta 1 carta aleatoria. Añade su BOOST al valor de esta carta.\n\nDespués del combate: Si es tu tercera acción, toma 1 carta."
      },
      {
        "name": "Speak Three Times",
        "type": "attack",
        "value": 3,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "During combat: If this is your third action this turn, this card's value is 7 instead.",
        "descripcion": "Durante el combate: Si es tu tercera acción de este turno, esta carta tiene el valor de 7."
      },
      {
        "name": "Stolen Memories",
        "type": "scheme",
        "amount": 2,
        "character": "any",
        "boost": 3,
        "description": "Look at an opponent's hand and choose a card. Your opponent may discard it. If they don't, their hero takes damage equal to its BOOST value.",
        "descripcion": "Mira las cartas en la mano de uno de tus oponentes y escoge una carta. Tu oponente puede descartarla. Si no la descarta, su heroe toma daño igual al valor del BOOST de la carta."
      },
      {
        "name": "Trick of the Light",
        "type": "versatile",
        "value": 2,
        "amount": 3,
        "character": "any",
        "boost": 3,
        "description": "After combat: You may place Bloody Mary in any empty space adjacent to the opposing fighter.",
        "descripcion": "Después del combate: Puedes colocar a Bloody Mary en cualquier espacio vacío adyacente al luchador oponente."
      }
    ]
  },
  {
    "name": "Sun Wukong",
    "amount": 30,
    "image": require('./assets/backs/sunwukong.jpg'),
    "cards": [
      {
        "name": "72 Transformations",
        "type": "versatile",
        "value": 2,
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "After combat: Take an OX FORM, TORTOISE FORM, or PHOENIX FORM from your discard pile and return it to your hand.",
        "descripcion": "Después del combate: Toma un OX FORM, TORTOISE FORM o PHOENIX FORM de tu mazo de descarte y retórnalo a tu mano"
      },
      {
        "name": "Bewilderment",
        "type": "defense",
        "value": 0,
        "character": "any",
        "amount": 2,
        "boost": 2,
        "description": "During combat: Prevent all damage\n\nAfter combat: You may place your fighter in any space.",
        "descripcion": "Después del combate: Previene cualquier daño\n\nDespués del combate: Puedes colocar tu luchador en cualquier espacio."
      },
      {
        "name": "Fiery Eyes That See",
        "type": "scheme",
        "character": "any",
        "amount": 2,
        "boost": 1,
        "description": "Look at an opponent's hand and choose a card. Put that card on the bottom of their deck. You each draw 1 card.",
        "descripcion": "Mira en la mano de tu oponente y escoge una carta. Colócala en el fondo de su mazo. Tú y tu oponente toman 1 carta."
      },
      {
        "name": "Golden Chain Mail",
        "type": "defense",
        "value": 4,
        "character": "any",
        "amount": 2,
        "boost": 2,
        "description": "During combat: Any combat damage you would take is dealt to the opposing fighter instead.",
        "descripcion": "Durante el combate: Cualquier daño de combate que hubieras recibido será hecho en su lugar al luchador contrario."
      },
      {
        "name": "Infinite Strikes",
        "type": "attack",
        "value": 2,
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "During combat: For each other friendly fighter adjacent to the opposing fighter, increase the value of this card by +1.\n\nAfter combat: Gain 1 action.",
        "descripcion": "Durante el combate: Por cada luchador aliado adyacente al luchador contrario, aumenta el valor de esta carta en +1.\n\nDespués del combate: Gana 1 acción."
      },
      {
        "name": "Ox Form",
        "type": "attack",
        "value": 7,
        "character": "any",
        "amount": 2,
        "boost": 2,
        "description": "This card's effects cannot be canceled.\n\nDuring combat: If your opponent played a card, they may BOOST it.",
        "descripcion": "Los efectos de esta carta no pueden ser cancelados.\n\nDurante el combate: Si tu oponente jugó una carta, puede hacerle BOOST."
      },
      {
        "name": "Phoenix Form",
        "type": "scheme",
        "character": "any",
        "amount": 1,
        "boost": 1,
        "description": "Sun Wukong recovers 1 health for each Clone on the board.",
        "descripcion": "Sun Wukong recupera 1 salud por cada Clon en el tablero."
      },
      {
        "name": "Riyu Jingo Bang",
        "type": "attack",
        "value": 0,
        "character": "any",
        "amount": 3,
        "boost": 3,
        "description": "After combat: If your opponent played a defense card, TRICKED YOU. TRICKED YOU: 4 ATK",
        "descripcion": "Después del combate: Si tu oponente jugó una carta de defensa/versatil, TRICKED YOU. TRICKED YOU: +4 ATK"
      },
      {
        "name": "Sly Monkey",
        "type": "versatile",
        "value": 2,
        "character": "any",
        "amount": 4,
        "boost": 3,
        "description": "After combat: If Sun Wukong played this card, summon a Clone in Sun Wukong's space, then place Sun Wukong in a space in his zone.",
        "descripcion": "Después del combate: Si Sun Wukong jugó esta carta, invoca un Clon en el espacio de Sun Wukong, y colócalo en un espacio en su zona."
      },
      {
        "name": "Taunting Laughter",
        "type": "attack",
        "value": 3,
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "Immediately: Your opponent may discard 1 card from their hand. If they don't, ignore their card's value.",
        "descripcion": "Inmediatamente: Tu oponente puede descartar 1 carta de su mano. Si no hace eso, ignora el valor de su carta."
      },
      {
        "name": "Tortoise Form",
        "type": "defense",
        "value": 5,
        "character": "any",
        "amount": 2,
        "boost": 2,
        "description": "During combat: Your opponent may BOOST their attack.",
        "descripcion": "Durante el combate: Tu oponente puede hacerle BOOST a su ataque."
      },
      {
        "name": "Wily Fighting",
        "type": "versatile",
        "value": 3,
        "character": "any",
        "amount": 3,
        "boost": 1,
        "description": "After combat: Deal 1 damage to each opposing fighter adjacent to your fighter.",
        "descripcion": "Después del combate: Haz 1 daño a cada luchador contrario adyacente a tu luchador."
      }
    ]
  },
  {
    "name": "Yennenga",
    "amount": 30,
    "ability": {
      "en": "If Yennenga would take damage, you may assign any amount of that damage to one or more Archers in her zone instead. (You may not assign more damage to an Archer than their remaining health.)\n\nIf damage would be dealt to Yennenga and an Archer at the same time, Yennenga cannot assign damage from herself to that Archer if the Archer would already be defeated by the damage it took. (Yennenga cannot use her ability to make damage disappear.)",
      "es": "Si Yennenga va a recibir daño, puedes asignar cualquier cantidad de ese daño a uno o más Arqueros en su zona en su lugar. (No puedes asignar más daño a un Arquero que su salud restante.)\n\nSi el daño se le va a hacer a Yennenga y a un Arquero al mismo tiempo, Yennenga no puede asignar daño de ella misma a ese Arquero si el Arquero ya estaría derrotado por el daño que recibió. (Yennenga no puede usar su habilidad para hacer que el daño desaparezca.)"
    },
    "cards": [
      {
        "name": "Divide and Conquer",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 1,
        "character": "ARCHER",
        "description": "During combat: If your fighter is not in Yennenga's zone, the value of this card is a 4 instead.",
        "descripcion": "Durante el combate: Si tu luchador no está en la zona de Yennenga, el valor de esta carta es 4 en su lugar."
      },
      {
        "name": "Jaws of the Beast",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 3,
        "character": "YENNENGA",
        "description": "During combat: For each zone the opposing fighter is in, increase the value of this card by +1.",
        "descripcion": "Durante el combate: Por cada zona en la que se encuentre el luchador contrario, aumenta el valor de esta carta en +1."
      },
      {
        "name": "Master of the Hunt",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "YENNENGA",
        "description": "Gain 2 actions.",
        "descripcion": "Gana 2 acciones."
      },
      {
        "name": "Momentous Shift",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "During combat: If your fighter started this turn in a different space, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si tu peleador comenzó este turno en un espacio diferente, el valor de esta carta es 5 en su lugar."
      },
      {
        "name": "One With The Land",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "YENNENGA",
        "description": "Move each of your fighters up to 2 spaces. Each of your fighters recovers 1 health. Draw 1 card.",
        "descripcion": "Mueve cada uno de tus luchadores hasta 2 espacios. Cada uno de tus luchadores recupera 1 de salud. Toma 1 carta."
      },
      {
        "name": "Pin the Prey",
        "type": "versatile",
        "amount": 2,
        "value": 1,
        "boost": 2,
        "character": "ARCHER",
        "description": "After combat: Move the opposing fighter up to 4 spaces. Your opponent discards 1 card.",
        "descripcion": "Después del combate: Mueve el luchador contrario hasta 4 espacios. Tu oponente descarta 1 carta."
      },
      {
        "name": "Point Blank",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "YENNENGA",
        "description": "After combat: If the opposing fighter is adjacent to Yennenga, deal them 2 damage.",
        "descripcion": "Después del combate: Si el luchador contrario está adyacente a Yennenga, hazle 2 de daño."
      },
      {
        "name": "Rain of Arrows",
        "type": "attack",
        "amount": 3,
        "value": 3,
        "boost": 3,
        "character": "YENNENGA",
        "description": "After combat: VOLLEY: 3 ATK",
        "descripcion": "Después del combate: VOLLEY"
      },
      {
        "name": "Shield Formation",
        "type": "defense",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "YENNENGA",
        "description": "Immediately: Your opponent may discard a card. If they don't, return a defeated Archer to a space in Yennenga's zone.",
        "descripcion": "Inmediatamente: Tu oponente puede descartar una carta. Si no lo hace, regresa un Arquero derrotado a un espacio en la zona de Yennenga."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, escoge uno de los luchadores en el combate y muevelo hasta 2 espacios."
      },
      {
        "name": "Stallion Charge",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 3,
        "character": "YENNENGA",
        "description": "After combat: Move Yennenga up to 5 spaces. She may move through opposing fighters. Then, deal 1 damage to each opposing fighter she moved through.",
        "descripcion": "Después del combate: Mueve a Yennenga hasta 5 espacios. Ella puede moverse a través de luchadores opuestos. Luego, haz 1 de daño a cada luchador contrario que haya atravesado."
      },
      {
        "name": "Surprise Volley",
        "type": "attack",
        "amount": 3,
        "value": 3,
        "boost": 3,
        "character": "any",
        "description": "Immediately: You may return a defeated Archer to a space in the opposing fighter's zone. If you do, that Archer is now the attacker. If not, gain 1 action.",
        "descripcion": "Inmediatamente: Puedes regresar un Arquero derrotado a un espacio en la zona del luchador contrario. Si lo haces, ese Arquero es ahora el atacante. Si no, gana 1 acción."
      },
    ]
  },
  {
    "name": "Luke Cage",
    "image": require('./assets/backs/luke.jpg'),
    "amount": 30,
    "ability": {
      "en": "Luke Cage takes 2 less combat damage from attacks.\n\n(When defending, Luke Cage wins combat if he takes no damage, even if he didn't play a card.)",
      "es": "Luke Cage recibe 2 menos de daño de ataque.\n\n(Cuando se defiende, Luke Cage gana el combate si no recibe daño, incluso si no jugó una carta.)"
    },
    "cards": [
      {
        "name": "Commanding Impact",
        "type": "attack",
        "amount": 3,
        "value": 5,
        "boost": 1,
        "character": "any",
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta."
      },
      {
        "name": "Daughter of the Dragon",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 2,
        "character": "MISTY",
        "description": "During combat: If Misty Knight is adjacent to the opposing fighter, the value of this card is 6 instead.",
        "descripcion": "Durante el combate: Si Misty Knight está adyacente al luchador contrario, el valor de esta carta es 6."
      },
      {
        "name": "Get Paid",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 2,
        "character": "Luke Cage",
        "description": "After combat: If you won the combat, draw 2 cards.",
        "descripcion": "Después del combate: Si ganaste el combate, toma 2 cartas."
      },
      {
        "name": "Got My Back?",
        "type": "defense",
        "amount": 2,
        "value": 1,
        "boost": 2,
        "character": "Misty",
        "description": "Immediately: Misty Knight may swap spaces with Luke Cage. If she does, Luke Cage is now the defender.",
        "descripcion": "Inmediatamente: Misty Knight puede intercambiar espacios con Luke Cage. Si hace eso, Luke Cage es ahora el defensor."
      },
      {
        "name": "Hero For Hire",
        "type": "attack",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "Luke Cage",
        "description": "During combat: You may BOOST this attack.",
        "descripcion": "Durante el combate: Puede hacerle BOOST a este ataque."
      },
      {
        "name": "Power Man",
        "type": "defense",
        "amount": 2,
        "value": 2,
        "boost": 1,
        "character": "Luke Cage",
        "description": "After combat: Move the opposing fighter up to 3 spaces. You may move them through other opposing fighters. Deal 1 damage to them and each opposing fighter they moved through.",
        "descripcion": "Después del combate: Mueve el luchador contrario hasta 3 espacios. Puede moverlo a través de otros luchadores contrarios. Hazle 1 daño a él y a cada luchador contrario que haya atravesado."
      },
      {
        "name": "Pushback",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 3,
        "character": "Misty",
        "description": "After combat: Move the opposing fighter up to 3 spaces.",
        "descripcion": "Después del combate: Mueve el luchador contrario hasta 3 espacios."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 3,
        "character": "any",
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si ganaste el combate, toma 2 cartas en vez de eso."
      },
      {
        "name": "Skin Like Titanium",
        "type": "defense",
        "amount": 2,
        "value": 0,
        "boost": 1,
        "character": "Luke Cage",
        "description": "After combat: If you lost the combat, deal damage to the opposing fighter equal to the amount of combat damage you took.",
        "descripcion": "Después del combate: Si perdiste el combate, hazle daño a el luchador contrario igual a la cantidad de daño de combate que te han quitado."
      },
      {
        "name": "Still Standing",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you won the combat, choose 2 cards in your discard pile and shuffle them into your deck.",
        "descripcion": "Después del combate: Si ganaste el combate, elige 2 cartas en tu pila de descarte y barajalas en tu mazo."
      },
      {
        "name": "Sweet Christmas!",
        "type": "attack",
        "amount": 2,
        "value": 6,
        "boost": 1,
        "character": "Luke Cage",
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Trash Talk",
        "type": "defense",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "Luke Cage",
        "description": "Immediately: Cancel all effects on your opponent's card.\n\nAfter combat: If you won the combat, end the turn.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente.\n\nDespués del combate: Si ganaste el combate, termina el turno (no se activan más efectos)."
      },
      {
        "name": "Where's My Money?",
        "type": "scheme",
        "amount": 2,
        "boost": 1,
        "character": "Luke Cage",
        "description": "Place Luke Cage adjacent to the nearest opposing fighter. Gain 1 action.",
        "descripcion": "Coloca Luke Cage adyacente al luchador contrario más cercano. Gana 1 acción."
      }
    ]
  },
  {
    "name": "Ghost Rider",
    "image": require('./assets/backs/ghostrider.jpg'),
    "amount": 30,
    "ability": {
      "en": "Ghost Rider starts the game with 5 Hellfire. When you maneuver you may spend 1 Hellfire. If you do, set Ghost Rider's move value to 4, and he mave move through opposing fighters. Then deal 1 damage to each opposing fighter he moved through.",
      "es": "Ghost Rider empieza el juego con 5 Hellfire. Cuando haces maneuver puedes gastar 1 Hellfire. Si lo haces, el valor de movimiento de Ghost Rider es 4, y puede moverse a través de luchadores contrarios. Luego hazle 1 daño a cada luchador contrario que haya atravesado."
    },
    "cards": [
      {
        "name": "Blaze of Glory",
        "type": "attack",
        "amount": 2,
        "value": 2,
        "boost": 3,
        "character": "any",
        "description": "After combat: Spend any amount of Hellfire, Deal that much damage to each fighter in Ghost Rider's zone (including Ghost Rider).",
        "descripcion": "Después del combate: Gasta cualquier cantidad de Hellfire. Hazle ese daño a cada luchador en la zona de Ghost Rider (incluyendo a Ghost Rider)."
      },
      {
        "name": "Chains of Hellfire",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "any",
        "description": "Set your Hellfire to 5.",
        "descripcion": "Pon tu Hellfire en 5."
      },
      {
        "name": "Control The Demon",
        "type": "versatile",
        "amount": 3,
        "value": 0,
        "boost": 1,
        "character": "any",
        "description": "During combat: This card's value is +1 for each Hellfire you have. (You do not spend Hellfire for this effect.)",
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada Hellfire que tengas. (No gastas Hellfire para este efecto.)"
      },
      {
        "name": "Deal With The Devil",
        "type": "defense",
        "amount": 2,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "During combat: You may spend any amount of Hellfire. Increase the value of this card by that amount.",
        "descripcion": "Durante el combate: Puedes gastar cualquier cantidad de Hellfire. Aumenta el valor de esta carta en esa cantidad."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Hell Rides With Me",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "any",
        "description": "Move Ghost Rider and up to one adjacent fighter up to 4 spaces each. Gain 2 Hellfire. Gain 1 action.",
        "descripcion": "Mueve a Ghost Rider y hasta un luchador adyacente hasta 4 espacios cada uno. Gana 2 Hellfire. Gana 1 acción."
      },
      {
        "name": "I Brought The Devil With Me",
        "type": "attack",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: You may spend 2 Hellfire to gain 1 action.",
        "descripcion": "Después del combate: Puedes gastar 2 Hellfire para ganar 1 acción."
      },
      {
        "name": "I Finally Escaped Hell",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: You may spend 1 Hellfire to move Ghost Rider up to 2 spaces.",
        "descripcion": "Después del combate: Puedes gastar 1 Hellfire para mover a Ghost Rider hasta 2 espacios."
      },
      {
        "name": "Penance Stare",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "During combat: Add the BOOST value of the opposing fighter's card to this card's value. You may spend 2 Hellfire to do it a second time.",
        "descripcion": "Durante el combate: Añade el valor de BOOST de la carta del luchador contrario a este valor. Puedes gastar 2 Hellfire para hacerlo una segunda vez."
      },
      {
        "name": "Spirit Of Vengeance",
        "type": "attack",
        "amount": 3,
        "value": 5,
        "boost": 2,
        "character": "any",
        "description": "After combat: You may spend 1 Hellfire to draw 2 cards.",
        "descripcion": "Después del combate: Puedes gastar 1 Hellfire para robar 2 cartas."
      },
      {
        "name": "Stoke The Flames",
        "type": "defense",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you lost the combat, gain Hellfire equal to the combat damage you took.",
        "descripcion": "Después del combate: Si perdiste el combate, gana Hellfire igual al daño de combate que recibiste."
      },
      {
        "name": "The Wicked Will Burn",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: If Ghost Rider started this turn in a different space, gain 2 Hellfire.",
        "descripcion": "Después del combate: Si Ghost Rider comenzó este turno en un espacio diferente, gana 2 Hellfire."
      }
    ]
  },
  {
    "name": "Moon Knight",
    "amount": 30,
    "ability": {
      "en": "Moon Knight\nAt the start of your turn, move up to 2 spaces.\n\nKhonshu\nKhonshu adds +2 to the value of his attack cards. He does not take damage from effects other than combat damage.\n\nMr. Knight\nMr. Knight adds +1 to all his defense values.\n\nAt the end of your turn, change to your next identity (In order, Moon Knight -> Khonshu -> Mr. Knight, repeating).\n\nStart the game as Moon Knight.",
      "es": "Moon Knight\nAl comienzo de tu turno, muévete hasta 2 espacios.\n\nKhonshu\nKhonshu añade +2 al valor de sus cartas de ataque. No recibe daño de efectos que no sean de combate.\n\nMr. Knight\nMr. Knight añade +1 a todos sus valores de defensa.\n\nAl final de tu turno, cambia a tu siguiente identidad (En orden, Moon Knight -> Khonshu -> Mr. Knight, repitiendo).\n\nComienza el juego como Moon Knight."
    },
    "cards": [
      {
        "name": "A Totally Sane Thing To Do",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "After combat: You may deal 2 damage to both fighters in the combat.",
        "descripcion": "Después del combate: Puedes hacerle 2 daño a ambos luchadores en el combate."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Fist of Khonshu",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you won the combat, move the opposing fighter up to 4 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, mueve el luchador contrario hasta 4 espacios."
      },
      {
        "name": "Good Enough For Us",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: You may draw 2 cards. If you do, take 2 damage.",
        "descripcion": "Después del combate: Puedes tomar 2 cartas. Si lo haces, toma 2 daño."
      },
      {
        "name": "I'm Not Real",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: You may change to your next identity.",
        "descripcion": "Después del combate: Puedes cambiar a tu siguiente identidad."
      },
      {
        "name": "Let Your Insanity Guide You",
        "type": "versatile",
        "amount": 2,
        "value": 1,
        "boost": 2,
        "character": "any",
        "description": "After combat: Discard the top card of your deck. Draw cards equal to that card's BOOST value.",
        "descripcion": "Después del combate: Descarta la carta superior de tu mazo. Toma cartas igual al valor de BOOST de esa carta."
      },
      {
        "name": "Madness Will Keep You Alive",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "any",
        "description": "Recover 2 health. If you started your turn in a different space, gain 1 action.",
        "descripcion": "Recupera 2 salud. Si comenzaste tu turno en un espacio diferente, gana 1 acción."
      },
      {
        "name": "Past and Present Intermingle",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "During combat: Add the BOOST value of the top card of your discard pile to this card's value.",
        "descripcion": "Durante el combate: Añade el valor de BOOST de la carta superior de tu pila de descarte al valor de esta carta."
      },
      {
        "name": "That's The Part I Like",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you won the combat, you may look at the top 3 cards of your opponent's deck and discard one of them. Place the other 2 back in any order.",
        "descripcion": "Después del combate: Si ganaste el combate, puedes mirar las 3 primeras cartas del mazo de tu oponente y descartar una de ellas. Coloca las otras 2 en cualquier orden."
      },
      {
        "name": "That's Why I Always Win",
        "type": "attack",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "During combat: You may BOOST this attack.",
        "descripcion": "Durante el combate: Puedes hacerle BOOST a este ataque."
      },
      {
        "name": "Travelers of The Night",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "any",
        "description": "Move your fighter up to 4 spaces. They may move through opposing fighters. Gain 1 action.",
        "descripcion": "Mueve tu luchador hasta 4 espacios. Puede moverse a través de luchadores contrarios. Gana 1 acción."
      },
      {
        "name": "We're All In This Together",
        "type": "defense",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you won the combat, draw 1 card.",
        "descripcion": "Después del combate: Si ganaste el combate, toma 1 carta."
      },
    ]
  },
  {
    "name": "Dr. Ellie Sattler",
    "amount": 30,
    "image": require('./assets/backs/sattler.jpg'),
    "ability": {
      "en": "After Dr. Sattler or Dr. Malcolm move, place an insight token in their new space. You have 5 insight tokens.\n\nWhenever either of your fighters moves to a new space, place and insight token in their new space. Tokens may be placed in spaces with other tokens, including other insight tokens.\n\nThese tokens have no effect themselves but any of your cards interact with them. When you remove insight tokens from the board, return them to your supply. You can place them on the board again in the future.\n\nIf you would place an insight token but don't have any in your supply, nothing happens.",
      "es": "Después de mover a Dr. Sattler o Dr. Malcolm, coloca un token de inspección en su nuevo espacio. Tienes 5 token de inspección.\n\nCada vez que uno de tus luchadores se mueve a un nuevo espacio, coloca un token de inspección en su nuevo espacio. Los token de inspección pueden ser colocadas en espacios con otros token, incluyendo otros token de inspección.\n\nLos token de inspección no tienen efecto propio, pero cualquiera de tus cartas interactúan con ellas. Cuando remuevas token de inspección del tablero, devuelvelos a tu repositorio. Puedes colocarlos de nuevo en el tablero en el futuro.\n\nSi no tienes token de inspección en tu repositorio, no pasa nada."
    },
    "cards": [
      {
        "name": "Chaotician",
        "type": "versatile",
        "value": 2,
        "character": "DR. MALCOLM",
        "amount": 1,
        "boost": 3,
        "description": "After combat: Place an insight token in any space.",
        "descripcion": "Después del combate: Coloca una ficha de conocimiento en cualquier espacio."
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
        "name": "Hey! Hey! Hey!",
        "type": "versatile",
        "value": 3,
        "character": "any",
        "amount": 1,
        "boost": 3,
        "description": "After combat: Move your other fighter up to 4 spaces.",
        "descripcion": "Después del combate: Mueve tu otro luchador 4 espacios."
      },
      {
        "name": "I Think We're Back In Business",
        "type": "versatile",
        "value": 0,
        "character": "DR. SATTLER",
        "amount": 3,
        "boost": 3,
        "description": "During combat: The value of this card is equal to the number of cards in your hand.",
        "descripcion": "Durante el combate: El valor de esta carta es igual al número de cartas en tu mano."
      },
      {
        "name": "Life Finds a Way",
        "type": "versatile",
        "value": 2,
        "character": "DR. MALCOLM",
        "amount": 2,
        "boost": 3,
        "description": "After combat: Your opponent discards the top card of their deck. Dr. Malcolm and Dr. Sattler recover health equal to that card's BOOST value.",
        "descripcion": "Después del combate: Tu oponente descarta la primera carta de su mazo. Dr. Malcolm y Dr. Sattler recuperan salud igual al valor de BOOST de la carta."
      },
      {
        "name": "Lock The Doors!",
        "type": "defense",
        "value": 2,
        "character": "any",
        "amount": 2,
        "boost": 2,
        "description": "After combat: Deal 2 damage to the opposing fighter. Move your fighter up to 2 spaces.",
        "descripcion": "Después del combate: Inflige 2 de daño al luchador contrario. Mueve tu luchador hasta 2 espacios."
      },
      {
        "name": "Must Go Faster",
        "type": "versatile",
        "value": 3,
        "character": "any",
        "amount": 1,
        "boost": 2,
        "description": "After combat: If you won the combat, you may place Dr. Malcolm and Dr. Sattler in any space.",
        "descripcion": "Después del combate: Si ganaste el combate, puedes colocar a Dr. Malcolm y Dr. Sattler en cualquier espacio."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 2,
        "character": "any",
        "value": 1,
        "boost": 1,
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo. Pero si ganaste el combate, toma en su lugar 2 cartas."
      },
      {
        "name": "Sexism in Survival Situations",
        "type": "versatile",
        "value": 1,
        "character": "DR. SATTLER",
        "amount": 2,
        "boost": 2,
        "description": "During combat: If the opposing fighter is a hero, the value of this card is 4 instead.\n\nAfter combat: You may move Dr. Sattler 1 space.",
        "descripcion": "Durante el combate: Si el luchador contrario es un héroe, el valor de esta carta es 4.\n\nDespués del combate: Puedes mover a Dr. Sattler 1 espacio."
      },
      {
        "name": "The Concept of Attraction",
        "type": "defense",
        "value": 2,
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "After combat: You may place your fighter on any space with an insight token.",
        "descripcion": "Después del combate: Puedes colocar tu luchador en cualquier espacio con una ficha de conocimiento."
      },
      {
        "name": "The Future Ex-Mrs. Malcolm",
        "type": "scheme",
        "character": "DR. MALCOLM",
        "amount": 1,
        "boost": 2,
        "description": "Draw 2 cards. Place an insight token in Dr. Malcolm's space. Gain 1 action.",
        "descripcion": "Toma 2 cartas. Coloca una ficha de conocimiento en el espacio de Dr. Malcolm. Recupera 1 acción."
      },
      {
        "name": "Violently, If Necessary",
        "type": "versatile",
        "value": 3,
        "character": "DR. SATTLER",
        "amount": 3,
        "boost": 3,
        "description": "After combat: Deal 2 damage to each opposing fighter on or adjacent to a space with an insight token.",
        "descripcion": "Después del combate: Inflige 2 de daño a cada luchador contrario que esté sobre o adyacente a una ficha de conocimiento."
      },
      {
        "name": "Woman Inherits the Earth",
        "type": "versatile",
        "value": 2,
        "character": "DR. SATTLER",
        "amount": 3,
        "boost": 3,
        "description": "Immediately: Draw 1 card. Dr Sattler recovers health equal to the number of insight tokens on the board. Remove all insight tokens from the board.",
        "descripcion": "Inmediatamente: Toma 1 carta. Dr. Sattler recupera salud igual al número de fichas de conocimiento en el tablero. Quita todas las fichas de conocimiento del tablero."
      },
      {
        "name": "You Never Had Control, That's the Illusion",
        "type": "attack",
        "value": 2,
        "character": "DR. SATTLER",
        "amount": 3,
        "boost": 2,
        "description": "During combat: Increase the value of this card by the number of insight tokens on the board. Remove all insight tokens from the board.",
        "descripcion": "Durante el combate: Aumenta el valor de esta carta por el número de fichas de conocimiento en el tablero. Quita todas las fichas de conocimiento del tablero."
      }
    ]
  },
  {
    "name": "T. Rex",
    "amount": 30,
    "image": require('./assets/backs/trex.jpg'),
    "cards": [
      {
        "name": "15,000 Pounds of Muscle",
        "type": "attack",
        "value": 3,
        "character": "any",
        "amount": 2,
        "boost": 3,
        "description": "During combat: Ignore the value of your opponent's card.\n\nAfter combat: Take 2 damage.",
        "descripcion": "Durante el combate: Ignora el valor de la carta de tu oponente.\n\nDespués del combate: Toma 2 de daño."
      },
      {
        "name": "65 Million Years of Gut Instinct",
        "type": "scheme",
        "character": "any",
        "amount": 2,
        "boost": 3,
        "description": "Choose a card in your discard pile other than '65 Million Years of Gut Instinct' and return it to your hand.",
        "descripcion": "Selecciona una carta de tu pila de descarte que no sea '65 Million Years of Gut Instinct' y devuélvela a tu mano."
      },
      {
        "name": "Closer Than She Appears",
        "type": "scheme",
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "Move your fighter up to 1 space.\n\nDraw 1 card.\n\nGain 1 action.",
        "descripcion": "Mueve tu peleador hasta 1 espacio.\n\nToma 1 carta.\n\nGana 1 acción."
      },
      {
        "name": "Commanding Impact",
        "type": "attack",
        "value": 5,
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta de tu mazo."
      },
      {
        "name": "Momentous Shift",
        "type": "versatile",
        "value": 3,
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "During combat: If your fighter started this turn in a different space, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si tu peleador comenzó este turno en un espacio diferente, el valor de esta carta es 5 en su lugar."
      },
      {
        "name": "Reckless Lunge",
        "type": "attack",
        "value": 3,
        "character": "any",
        "amount": 3,
        "boost": 4,
        "description": "After combat: Deal 3 damage to the opposing fighter. Then, take 3 damage.",
        "descripcion": "Después del combate: Haz 3 de daño al luchador contrario. Luego, toma 3 de daño."
      },
      {
        "name": "Ripples in the Water",
        "type": "scheme",
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "Place T-Rex in any space in her zone. Then, each opponent with a fighter adjacent to T-Rex discards 1 random card.",
        "descripcion": "Coloca a T-Rex en cualquier espacio de su zona. Luego, cada oponente con un peleador adyacente a T-Rex descarta 1 carta aleatoria."
      },
      {
        "name": "Terrifying Roar",
        "type": "versatile",
        "value": 3,
        "character": "any",
        "amount": 2,
        "boost": 3,
        "description": "Immediately: Fighters cannot leave their spaces for the rest of the turn.",
        "descripcion": "Inmediatamente: Los peleadores no pueden abandonar sus espacios por el resto del turno."
      },
      {
        "name": "Thrash",
        "type": "versatile",
        "value": 2,
        "character": "any",
        "amount": 3,
        "boost": 2,
        "description": "During combat: You may BOOST this card.\n\nAfter combat: If you won the combat, deal 1 damage to each opposing fighter in T-Rex's zone.",
        "descripcion": "Durante el combate: Puedes BOOST esta carta.\n\nDespués del combate: Si ganaste el combate, haz 1 de daño a cada luchador contrario en la zona de T-Rex."
      },
      {
        "name": "When Dinosaurs Ruled the Earth",
        "type": "attack",
        "value": 2,
        "character": "any",
        "amount": 4,
        "boost": 3,
        "description": "During combat: You may BOOST this card.\n\nAfter combat: If you won the combat, draw 1 card, gain 1 action, and take 2 damage.",
        "descripcion": "Durante el combate: Puedes BOOST esta carta.\n\nDespués del combate: Si ganaste el combate, toma 1 carta, gana 1 acción y recibe 2 de daño."
      },
      {
        "name": "You're Just Making Her Angry",
        "type": "defense",
        "value": 1,
        "character": "any",
        "amount": 2,
        "boost": 1,
        "description": "During combat: You may BOOST this card.\n\nAfter combat: If you won the combat, return this card to your hand.",
        "descripcion": "Durante el combate: Puedes BOOST esta carta.\n\nDespués del combate: Si ganaste el combate, devuelve esta carta a tu mano."
      }
    ]
  },
  {
    "name": "Alice",
    "amount": 30,
    "image": require('./assets/backs/alice.jpg'),
    "ability": {
      "en": "When you place Alice, choose whether she starts the game BIG or SMALL.\n\nWhen Alice is BIG, add 2 to the value of her attack cards.\n\nWhen Alice is SMALL, add 1 to the value of her defense cards.",
      "es": "Cuando colocas a Alice, elige si comienza el juego GRANDE o PEQUEÑA.\n\nCuando Alice es GRANDE, añade 2 al valor de sus cartas de ataque.\n\nCuando Alice es PEQUEÑA, añade 1 al valor de sus cartas de defensa."
    },
    "cards": [
      {
        "name": "Claws That Catch",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "JABBERWOCK",
        "description": "During combat: if the opposing fighter is a hero, this card's value is 5 instead.",
        "descripcion": "Durante el combate: si el luchador contrario es un héroe, el valor de esta carta es 5 en su lugar."
      },
      {
        "name": "Drink Me",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "ALICE",
        "description": "Draw 2 cards. Change size.",
        "descripcion": "Toma 2 cartas. Cambia de tamaño."
      },
      {
        "name": "Eat Me",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "ALICE",
        "description": "Move Alice up to 3 spaces. Change size.",
        "descripcion": "Mueve a Alice hasta 3 espacios. Cambia de tamaño"
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "I'm Late, I'm Late",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 3,
        "character": "ALIVE",
        "description": "After combat: Move Alice up to 5 spaces. Change size.",
        "descripcion": "Después del combate: Mueve a Alice hasta 5 espacios. Cambia de tamaño."
      },
      {
        "name": "Jaws That Bite",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 2,
        "character": "JABBERWOCK",
        "description": "After combat: Deal 2 damage to any one fighter adjacent to the Jabberwock.",
        "descripcion": "Después del combate: Haz 2 de daño a cualquier luchador adyacente al Jabberwock."
      },
      {
        "name": "Looking Glass",
        "type": "defense",
        "amount": 2,
        "value": 2,
        "boost": 4,
        "character": "ALICE",
        "description": "After combat: Choose 2 different effects:\n\n- draw 2 cards\n\n- Alice recovers 3 health\n\n- place Alice in any other space",
        "descripcion": "Después del combate: Elige 2 efectos diferentes:\n\n- toma 2 cartas\n\n- Alice se recupera 3 de salud\n\n- coloca a Alice en cualquier otro espacio"
      },
      {
        "name": "Mad as a Hatter",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "ALICE",
        "description": "After combat: Move each of your fighters up to 2 spaces. Change size.",
        "descripcion": "Después del combate: Mueve a cada uno de tus luchadores hasta 2 espacios. Cambia de tamaño."
      },
      {
        "name": "Manxome Foe",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "During combat: Discard the top card of your deck. Add its BOOST value to this card's value.",
        "descripcion": "Durante el combate: Descarta la carta superior de tu mazo. Añade su valor BOOST al valor de esta carta."
      },
      {
        "name": "Momentous Shift",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "During combat: If your fighter started this turn in a different space, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si tu luchador comenzó este turno en un espacio diferente, el valor de esta carta es 5 en su lugar."
      },
      {
        "name": "O Frabjous Day!",
        "type": "attack",
        "amount": 1,
        "value": 4,
        "boost": 4,
        "character": "ALICE",
        "description": "After combat: Change size.",
        "descripcion": "Después del combate: Cambia de tamaño."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 2,
        "character": "any",
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si ganaste el combate, toma 2 cartas en su lugar."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, elige uno de los luchadores en el combate y muevelo hasta 2 espacios."
      },
      {
        "name": "Snicker-Snack",
        "type": "attack",
        "amount": 1,
        "value": 3,
        "boost": 4,
        "character": "ALICE",
        "description": "After combat: If you won the combat, look at your opponent's hand and choose 1 card for them to discard.",
        "descripcion": "Después del combate: Si ganaste el combate, mira la mano de tu oponente y elige 1 carta para que la descarte."
      },
      {
        "name": "The Other Side of the Mushroom",
        "type": "attack",
        "amount": 1,
        "value": 3,
        "boost": 4,
        "character": "ALICE",
        "description": "After combat: Move Alice up to 3 spaces. Change size.",
        "descripcion": "Después del combate: Mueve a Alice hasta 3 espacios. Cambia de tamaño."
      }
    ]
  },
  {
    "name": "Medusa",
    "amount": 30,
    "ability": {
      "en": "At the start of your turn, you may deal 1 damage to an opposing fighter in Medusa's zone.",
      "es": "Al inicio de tu turno, puedes infligir 1 de daño a un luchador contrario en la zona de Medusa."
    },
    "cards": [
      {
        "name": "A Momentary Glance",
        "type": "scheme",
        "amount": 2,
        "boost": 4,
        "character": "MEDUSA",
        "description": "Deal 2 damage to any one fighter in Medusa's zone.",
        "descripcion": "Inflige 2 de daño a cualquier luchador en la zona de Medusa."
      },
      {
        "name": "Clutching Claws",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "HARPY",
        "description": "After combat: Your opponent discards 1 card.",
        "descripcion": "Después del combate: Tu oponente descarta 1 carta."
      },
      {
        "name": "Dash",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: Move your fighter up to 3 spaces.",
        "descripcion": "Después del combate: Mueve tu luchador hasta 3 espacios."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Gaze of Stone",
        "type": "attack",
        "amount": 3,
        "value": 2,
        "boost": 4,
        "character": "MEDUSA",
        "description": "After combat: If you won the combat, deal 8 damage to the opposing fighter.",
        "descripcion": "Después del combate: Si ganaste el combate, inflige 8 de daño al luchador contrario."
      },
      {
        "name": "Hiss and Slither",
        "type": "defense",
        "amount": 3,
        "value": 4,
        "boost": 3,
        "character": "MEDUSA",
        "description": "After combat: Your opponent discards 1 card.",
        "descripcion": "Después del combate: Tu oponente descarta 1 carta."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 2,
        "character": "any",
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si ganaste el combate, toma 2 cartas en su lugar."
      },
      {
        "name": "Second Shot",
        "type": "attack",
        "amount": 3,
        "value": 3,
        "boost": 3,
        "character": "MEDUSA",
        "description": "During combat: You may BOOST this attack.",
        "descripcion": "Durante el combate: Puedes BOOST este ataque."
      },
      {
        "name": "Snipe",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta."
      },
      {
        "name": "The Hounds of Mighty Zeus",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 3,
        "character": "HARPY",
        "description": "After combat: Move each Harpy up to 3 spaces.",
        "descripcion": "Después del combate: Mueve cada Harpy hasta 3 espacios."
      },
      {
        "name": "Winged Frenzy",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "MEDUSA",
        "description": "Move each of your fighters up to 3 spaces. You may move them through spaces containing opposing fighters.\n\nThen, return a defeated Harpy (if any) to any space in Medusa's zone.",
        "descripcion": "Mueve cada uno de tus luchadores hasta 3 espacios. Puedes moverlos a través de espacios que contengan luchadores contrarios.\n\nLuego, devuelve un Harpy derrotado (si hay alguno) a cualquier espacio en la zona de Medusa."
      },
    ]
  },
  {
    "name": "Sinbad",
    "amount": 30,
    "image": require('./assets/backs/simbad.jpg'),
    "ability": {
      "en": "When you maneuver, you may move your fighters +1 space for each VOYAGE card in your discard pile.",
      "es": "Cuando haces Maniobra, puedes mover a tu peleador +1 espacio por cada carta VOYAGE en tu pila de descarte."
    },
    "cards": [
      {
        "name": "By Fortune and Fate",
        "type": "attack",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "PORTER",
        "description": "After combat: Draw 2 cards.",
        "descripcion": "Después del combate: Toma 2 cartas."
      },
      {
        "name": "Commanding Impact",
        "type": "attack",
        "amount": 1,
        "value": 5,
        "boost": 2,
        "character": "any",
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta."
      },
      {
        "name": "Exploit",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Leap Away",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 4 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, elige uno de los luchadores en el combate y muevelo hasta 4 espacios."
      },
      {
        "name": "Momentous Shift",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "During combat: If your fighter started this turn in a different space, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si tu luchador comenzó este turno en un espacio diferente, el valor de esta carta es 5 en vez de 3."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 1,
        "character": "any",
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si ganaste el combate, toma 2 cartas en vez de 1."
      },
      {
        "name": "Riches Beyond Compare",
        "type": "scheme",
        "amount": 2,
        "boost": 1,
        "character": "Sinbad",
        "description": "Draw 3 cards.",
        "descripcion": "Toma 3 cartas."
      },
      {
        "name": "Toil and Danger",
        "type": "versatile",
        "amount": 4,
        "value": 3,
        "boost": 1,
        "character": "Sinbad",
        "description": "After combat: Move Sinbad up to 3 spaces.",
        "descripcion": "Después del combate: Mueve a Sinbad hasta 3 espacios."
      },
      {
        "name": "Voyage Home",
        "type": "attack",
        "amount": 1,
        "value": 2,
        "boost": 1,
        "character": "Sinbad",
        "description": "During combat: This card's value is +1 for each other VOYAGE card in your discard pile.\n\nAfter combat: Take all other VOYAGE cards from your discard pile and add them to your hand.",
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada otra carta VOYAGE en tu descarte.\n\nDespués del combate: Toma todas las otras cartas VOYAGE de tu descarte y agrégalas a tu mano."
      },
      {
        "name": "Voyage to the Cannibals With the Root of Madness",
        "type": "attack",
        "amount": 1,
        "value": 2,
        "boost": 0,
        "character": "Sinbad",
        "description": "During combat: This card's value is +1 for each other VOYAGE card in your discard pile.\n\nAfter combat: You may move Sinbad up to 2 spaces.",
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada otra carta VOYAGE en tu descarte.\n\nDespués del combate: Puedes mover a Sinbad hasta 2 espacios."
      },
      {
        "name": "Voyage to the City of the King of Serendib",
        "type": "attack",
        "amount": 1,
        "value": 2,
        "boost": 0,
        "character": "Sinbad",
        "description": "During combat: This card's value is +1 for each other VOYAGE card in your discard pile.\n\nAfter combat: Draw 1 card.",
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada otra carta VOYAGE en tu descarte.\n\nDespués del combate: Toma 1 carta."
      },
      {
        "name": "Voyage to the City of the Man-Eating Apes",
        "type": "attack",
        "amount": 1,
        "value": 2,
        "boost": 0,
        "character": "Sinbad",
        "description": "During combat: This card's value is +1 for each other VOYAGE card in your discard pile.\n\nAfter combat: Deal 2 damage to the opposing fighter.",
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada otra carta VOYAGE en tu descarte.\n\nDespués del combate: Hace 2 daño al luchador enemigo."
      },
      {
        "name": "Voyage to the Creature With Eyes Like Coals of Fire",
        "type": "attack",
        "amount": 1,
        "value": 2,
        "boost": 0,
        "character": "Sinbad",
        "description": "During combat: This card's value is +1 for each other VOYAGE card in your discard pile.\n\nAfter combat: Your opponent discards 1 random card.",
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada otra carta VOYAGE en tu descarte.\n\nDespués del combate: El oponente descarta 1 carta aleatoria."
      },
      {
        "name": "Voyage to the Island That Was a Whale",
        "type": "attack",
        "amount": 1,
        "value": 2,
        "boost": 0,
        "character": "Sinbad",
        "description": "During combat: This card's value is +1 for each other VOYAGE card in your discard pile.\n\nAfter combat: Sinbad recovers 2 health.",
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada otra carta VOYAGE en tu descarte.\n\nDespués del combate: Recupera 2 salud a Sinbad."
      },
      {
        "name": "Voyage to the Valley of the Giant Snakes",
        "type": "attack",
        "amount": 1,
        "value": 2,
        "boost": 0,
        "character": "Sinbad",
        "description": "During combat: This card's value is +1 for each other VOYAGE card in your discard pile.\n\nAfter combat: Look at your opponent's hand.",
        "descripcion": "Durante el combate: El valor de esta carta es +1 por cada otra carta VOYAGE en tu descarte.\n\nDespués del combate: Observa las cartas en la mano del oponente."
      }
    ]
  },
  {
    "name": "King Arthur",
    "amount": 30,
    "image": require('./assets/backs/kingarthur.jpg'),
    "ability": {
      "en": "When King Arthur attacks, you may BOOST that attack. Play the BOOST card, face down, along with your attack card.\n\nIf your opponent cancels the effects on your attack card, the BOOST is discarded without effect.\n\nExcalibur can still be cancelled even though it does not have a card effect. This will cause any BOOST played with Excalibur to be discarded without effect.",
      "es": "Cuando King Arthur ataca, puedes BOOST al ataque. Juega la carta BOOST boca abajo, junto con tu carta de ataque.\n\nSi tu oponente cancela los efectos de tu carta de ataque, el BOOST se descarta sin hacer efecto.\n\nExcalibur puede ser cancelada, aunque no tenga un efecto de carta. Esto causará que cualquier BOOST jugado con Excalibur sea descartado sin hacer efecto."
    },
    "cards": [
      {
        "name": "Aid the Chosen One",
        "type": "attack",
        "amount": 1,
        "value": 4,
        "boost": 2,
        "character": "Merlin",
        "description": "After combat: If you won the combat, draw 2 cards.",
        "descripcion": "Después del combate: Si ganaste el combate, toma 2 cartas."
      },
      {
        "name": "Bewilderment",
        "type": "defense",
        "amount": 2,
        "value": 0,
        "boost": 2,
        "character": "MERLIN",
        "description": "During combat: Prevent all damage\n\nAfter combat: You may place your fighter in any space.",
        "descripcion": "Durante el combate: Evita todo el daño\n\nDespués del combate: Puedes colocar a tu luchador en cualquier espacio."
      },
      {
        "name": "Command the Storms",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "MERLIN",
        "description": "Move each fighter up to 3 spaces. (This includes opposing fighters.)",
        "descripcion": "Mueve a cada luchador hasta 3 espacios. (Incluyendo a los luchadores enemigos.)"
      },
      {
        "name": "Divine Intervention",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "ARTHUR",
        "description": "After combat: Move King Arthur up to 5 spaces.",
        "descripcion": "Después del combate: Mueve a Arthur hasta 5 espacios."
      },
      {
        "name": "Excalibur",
        "type": "attack",
        "amount": 1,
        "value": 6,
        "boost": 3,
        "character": "ARTHUR",
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Momentous Shift",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "During combat: If your fighter started this turn in a different space, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si tu luchador comenzó este turno en un espacio diferente, el valor de esta carta es 5 en vez de 3."
      },
      {
        "name": "Noble Sacrifice",
        "type": "attack",
        "amount": 3,
        "value": 2,
        "boost": 3,
        "character": "ARTHUR",
        "description": "During combat: You may BOOST this attack. (This is in addition to any boost from King Arthur's special ability.)",
        "descripcion": "Durante el combate: Puedes BOOST este ataque. (Esto se agrega a cualquier boost de la habilidad especial de Arthur.)"
      },
      {
        "name": "Prophecy",
        "type": "scheme",
        "amount": 1,
        "boost": 2,
        "character": "MERLIN",
        "description": "Look at the top 4 cards of your deck. Add 2 of them to your hand and put the other 2 back on top of your deck, in any order.",
        "descripcion": "Observa las 4 primeras cartas de tu mazo. Añade 2 de ellas a tu mano y pon las otras 2 de vuelta en el tope del mazo, en cualquier orden."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 1,
        "character": "any",
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si ganaste el combate, toma 2 cartas en vez de 1."
      },
      {
        "name": "Restless Spirits",
        "type": "scheme",
        "amount": 1,
        "boost": 2,
        "character": "MERLIN",
        "description": "Choose any space in Merlin's zone. Deal 2 damage to each opposing fighter in that space and in one adjacent space. If at least one fighter is defeated this way, draw 1 card.",
        "descripcion": "Elige cualquier espacio en la zona de MERLIN. Haz 2 de daño a cada luchador enemigo en ese espacio y en un espacio adyacente. Si al menos un luchador es derrotado de esta manera, toma 1 carta."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, elige uno de los luchadores en el combate y muevelo hasta 2 espacios."
      },
      {
        "name": "Swift Strike",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Move your fighter up to 4 spaces.",
        "descripcion": "Después del combate: Mueve a tu luchador hasta 4 espacios."
      },
      {
        "name": "The Aid of Morgana",
        "type": "attack",
        "amount": 1,
        "value": 4,
        "boost": 2,
        "character": "ARTHUR",
        "description": "After combat: Draw 2 cards.",
        "descripcion": "Después del combate: Toma 2 cartas."
      },
      {
        "name": "The Holy Grail",
        "type": "defense",
        "amount": 1,
        "value": 1,
        "boost": 2,
        "character": "ARTHUR",
        "description": "After combat: If King Arthur has 4 or less health but is not defeated, set his health to 8.",
        "descripcion": "Después del combate: Si Arthur tiene 4 o menos de salud pero no está derrotado, su salud ahora es de 8."
      },
      {
        "name": "The Lady of the Lake",
        "type": "scheme",
        "amount": 1,
        "boost": 2,
        "character": "ARTHUR",
        "description": "Search your deck and discard pile for the EXCALIBUR card. Add it to your hand. If you searched your deck, shuffle it.",
        "descripcion": "Busca la carta EXCALIBUR en tu mazo y en el descarte. Añadela a tu mano. Si buscaste en tu mazo, barajalo."
      }
    ]
  },
  {
    "name": "Buffy",
    "amount": 30,
    "image": require('./assets/backs/buffy.jpg'),
    "ability": {
      "en": "Buffy may move through spaces containing opposing fighters (including when she is moved by effects).\n\nAt the start of the game, after heroes have been placed in their starting spaces, choose Xander or Giles as your sidekick and shuffle their 5 cards into your base deck of 25 cards, before drawing your starting hand.",
      "es": "Buffy puede moverse por espacios que contengan luchadores enemigos (incluyendo cuando se mueve por efectos).\n\nAl comienzo del juego, después de que se hayan colocado los heroes en sus espacios iniciales, elige a Xander o Giles como tu compañero y baraja sus 5 cartas en tu mazo base de 25 cartas, antes de tomar tu mano inicial."
    },
    "cards": [
      {
        "name": "Cartwheel Kick",
        "type": "defense",
        "amount": 2,
        "value": 2,
        "boost": 2,
        "character": "Buffy",
        "description": "After combat: You may move Buffy up to 3 spaces. Then, deal 1 damage to each opposing fighter adjacent to her.",
        "descripcion": "Después del combate: Puedes mover Buffy hasta 3 espacios. Luego, hace 1 de daño a cada luchador enemigo adyacente a ella."
      },
      {
        "name": "Daring Strike",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 3,
        "character": "any",
        "description": "After combat: If you won the combat, draw 2 cards. Otherwise, take 1 damage.",
        "descripcion": "Después del combate: Si ganaste el combate, toma 2 cartas. Si no, recibe 1 de daño."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Insight",
        "type": "scheme",
        "amount": 3,
        "boost": 3,
        "character": "Giles",
        "description": "Choose an opponent and look at their hand. Choose 1 card in their hand for them to discard.",
        "descripcion": "Elige un oponente y mira su mano. Elige 1 carta en su mano para que la descarte."
      },
      {
        "name": "Military Knowledge",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 3,
        "character": "Xander",
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta."
      },
      {
        "name": "Mr. Pointy",
        "type": "attack",
        "amount": 2,
        "value": 5,
        "boost": 4,
        "character": "Buffy",
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Rapid Recovery",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 3,
        "character": "Buffy",
        "description": "After combat: Buffy recovers 1 health.",
        "descripcion": "Después del combate: Buffy recupera 1 de salud."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 1,
        "character": "any",
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si ganaste el combate, toma 2 cartas en vez de una."
      },
      {
        "name": "Right-hand Man",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 3,
        "character": "Xander",
        "description": "During combat: if Xander is adjacent to Buffy, the value of this card is 6 instead.",
        "descripcion": "Durante el combate: si Xander está adyacente a Buffy, el valor de esta carta es 6."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 3,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, elige uno de los luchadores en el combate y muevelo hasta 2 espacios."
      },
      {
        "name": "Slayer's Strength",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 3,
        "character": "Buffy",
        "description": "After combat: You may move all fighters adjacent to Buffy to another space in their zone. Then, deal 1 damage to each fighter you moved.",
        "descripcion": "Después del combate: Puedes mover todos los luchadores adyacentes a Buffy a otro espacio en su zona. Luego, haz 1 de daño a cada luchador que moviste."
      },
      {
        "name": "Swift Strike",
        "type": "attack",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Move your fighter up to 4 spaces.",
        "descripcion": "Después del combate: Mueve tu luchador hasta 4 espacios."
      },
      {
        "name": "Training",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "Giles",
        "description": "Draw 3 cards.",
        "descripcion": "Toma 3 cartas."
      },
    ]
  },
  {
    "name": "Angel",
    "amount": 30,
    "image": require('./assets/backs/angel.jpg'),
    "ability": {
      "en": "After Angel or Faith attacks, if you lost the combat, draw 1 card.",
      "es": "Después que Angel o Faith ataquen, si perdiste el combate, toma 1 carta."
    },
    "cards": [
      {
        "name": "Angelus, Scourge of Europe",
        "type": "attack",
        "amount": 3,
        "value": 5,
        "boost": 3,
        "character": "Angel",
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Brooding",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "Angel",
        "description": "After combat: If you lost the combat, the opposing fighter takes 1 damage.",
        "descripcion": "Después del combate: Si perdiste el combate, el luchador oponente recibe 1 de daño."
      },
      {
        "name": "Cursed with a Soul",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 3,
        "character": "Angel",
        "description": "After combat: If you lost the combat, recover 1 health.",
        "descripcion": "Después del combate: Si perdiste el combate, recupera 1 de salud."
      },
      {
        "name": "Disengage",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: Choose an empty space in this fighter's zone. Place this fighter in that space.",
        "descripcion": "Después del combate: Elige un espacio vacío en la zona de este luchador. Coloca este luchador en ese espacio."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Five by Five",
        "type": "attack",
        "amount": 2,
        "value": 5,
        "boost": 3,
        "character": "Faith",
        "description": "After combat: Move Faith up to 5 spaces. She may move through opposing fighters.",
        "descripcion": "Después del combate: Mueve Faith hasta 5 espacios. Puede moverse por los luchadores oponentes."
      },
      {
        "name": "Haunted by the Faces",
        "type": "defense",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "Angel",
        "description": "After combat: If you lost the combat, you may place Angel in any space in his zone.",
        "descripcion": "Después del combate: Si perdiste el combate, puedes colocar Angel en cualquier espacio en su zona."
      },
      {
        "name": "	Killer of the Dead",
        "type": "scheme",
        "amount": 3,
        "boost": 3,
        "character": "Faith",
        "description": "Deal 2 damage to one opposing fighter adjacent to Faith.",
        "descripcion": "Haz 2 de daño a un luchador oponente adyacente a Faith."
      },
      {
        "name": "Momentous Shift",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "During combat: If your fighter started this turn in a different space, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si tu luchador comenzó este turno en un espacio diferente, estea carta tiene un valor de 5 en vez de 3."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 1,
        "character": "any",
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si ganaste el combate, toma 2 cartas en vez de 1."
      },
      {
        "name": "The Rogue Slayer",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "Faith",
        "description": "After combat: Deal 1 damage to each opposing fighter adjacent to Faith.",
        "descripcion": "Después del combate: Haz 1 de daño a cada luchador oponente adyacente a Faith."
      },
      {
        "name": "Wisdom of Ages",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "Angel",
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Toma 1 carta."
      }
    ]
  },
  {
    "name": "Spike",
    "amount": 30,
    "image": require('./assets/backs/spike.jpg'),
    "ability": {
      "en": "At the start of your turn, you may place a Shadow token in any space adjacent to Spike or Drusilla.",
      "es": "Al comienzo de tu turno, puedes colocar un token de Sombras en cualquier espacio adyacente a Spike o Drusilla."
    },
    "cards": [
      {
        "name": "Always Surprising",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 2,
        "character": "Drusilla",
        "description": "During combat: BLIND BOOST this card. If Drusilla's space has a shadow token, double the BOOST value.",
        "descripcion": "Durante el combate: BLIND BOOST esta carta. Si el espacio de Drusilla tiene un token de sombras, dobla el valor del BOOST."
      },
      {
        "name": "Arrogance",
        "type": "attack",
        "amount": 1,
        "value": 4,
        "boost": 2,
        "character": "Spike",
        "description": "During combat: You may discard your hand (even if your hand is empty). If you do, the value of this card is 6 instead.",
        "descripcion": "Durante el combate: Puedes descartar tu mano (incluso si tu mano está vacía). Si lo haces, el valor de esta carta es 6 en vez de 4."
      },
      {
        "name": "Bloody Hell!",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "Spike",
        "description": "After combat: Deal 1 damage to the opposing fighter, then deal an additional 1 damage for each space with a shadow token adjacent to them.",
        "descripcion": "Después del combate: Haz 1 de daño al luchador oponente, luego haz 1 de daño adicional por cada espacio con un token de sombras adyacente a ellos."
      },
      {
        "name": "Empathy",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "Drusilla",
        "description": "After combat: Draw 1 card. If the opposing fighter is in a space with a shadow token, draw 3 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si el luchador oponente está en un espacio con un token de sombras, toma 3 cartas en vez de 1."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Leap Away",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 4 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, elige uno de los luchadores en el combate y los mueves hasta 4 espacios."
      },
      {
        "name": "Let's Dance",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 3,
        "character": "Spike",
        "description": "During combat: If Spike or the opposing fighter is in a space with a shadow token, you may BOOST this card.",
        "descripcion": "Durante el combate: Si Spike o el luchador oponente están en un espacio con un token de sombras, puedes BOOST esta carta."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 1,
        "character": "any",
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si ganaste el combate, toma 2 cartas en vez de 1."
      },
      {
        "name": "Seek the Shadows",
        "type": "scheme",
        "amount": 4,
        "boost": 2,
        "character": "Spike",
        "description": "Draw 2 cards. Place a shadow token in Spike's space and each space adjacent to it.",
        "descripcion": "Toma 2 cartas. Coloca un token de sombras en el espacio de Spike y en cada espacio adyacente."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, elige uno de los luchadores en el combate y los mueves hasta 2 espacios."
      },
      {
        "name": "The Rush",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "Spike",
        "description": "During combat: If Spike or the opposing fighter is in a space with a shadow token, the value of this card is 5 instead.",
        "descripcion": "Durante el combate: Si Spike o el luchador oponente están en un espacio con un token de sombras, el valor de esta carta es 5 en vez de 3."
      },
      {
        "name": "The Sight",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "Drusilla",
        "description": "Choose an opponent and look at their hand. Choose a card for them to discard. If any of their fighters are in a space with a shadow token, choose 2 cards for them to discard instead.",
        "descripcion": "Elige un oponente y mira su mano. Elige una carta para que la descarte. Si alguno de sus luchadores está en un espacio con un token de sombras, elige 2 cartas para que lo descarte en vez de 1."
      }
    ]
  },
  {
    "name": "Willow",
    "amount": 30,
    "image": require('./assets/backs/willow.jpg'),
    "ability": {
      "en": "When Willow or Tara is dealt damage, Willow becomes Dark Willow.\n\nAt the end of your turn, if Dark Willow is adjacent to Tara, she becomes Willow.",
      "es": "Cuando Willow o Tara sufren daño, Willow se convierte en Dark Willow.\n\nAl final de tu turno, si Dark Willow está adyacente a Tara, ella se convierte en Willow."
    },
    "cards": [
      {
        "name": "Black Magic",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 3,
        "character": "Willow",
        "description": "During combat: (DARK) BLIND BOOST this card.",
        "descripcion": "Durante el combate: (DARK) BLIND BOOST esta carta."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Flayed Alive",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 3,
        "character": "Willow",
        "description": "During combat: (DARK) BLIND BOOST this attack.",
        "descripcion": "Durante el combate: (DARK) BLIND BOOST esta ataque."
      },
      {
        "name": "Hacker",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: Look at the top card of your deck, then choose to put it on the top of your deck or the bottom of your deck.",
        "descripcion": "Después del combate: Mira la carta superior de tu deck, luego elige ponerla en la parte superior o inferior de tu deck."
      },
      {
        "name": "Knowledge of the Craft",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 2,
        "character": "Tara",
        "description": "After combat: If you won the combat, choose a card in your discard pile and add it to your hand.",
        "descripcion": "Después del combate: Si ganaste el combate, elige una carta en tu descarte y agrégala a tu mano."
      },
      {
        "name": "Love and Loss",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "Willow",
        "description": "Draw 2 cards. (DARK) Discard the top 2 cards of your deck. Deal 3 damage to a sidekick in your zone (even if it's your own).",
        "descripcion": "Toma 2 cartas. (DARK) Descarta las 2 cartas superiores de tu deck. Haz 3 de daño a un sidekick de tu zona (incluso si el tuyo)."
      },
      {
        "name": "Meditation",
        "type": "defense",
        "amount": 2,
        "value": 5,
        "boost": 2,
        "character": "Willow",
        "description": "After combat: (DARK) Become Willow.",
        "descripcion": "Después del combate: (DARK) Se convierte en Willow."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 1,
        "character": "any",
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Toma 1 carta. Si ganaste el combate, toma 2 cartas en vez de 1."
      },
      {
        "name": "Rending Shot",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: Move the opposing fighter up to 3 spaces.",
        "descripcion": "Después del combate: Mueve el luchador oponente hasta 3 espacios."
      },
      {
        "name": "Resurrect",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "Willow",
        "description": "Choose a friendly fighter who has been defeated. Place that fighter in any space in Willow's zone and set their health to 3.",
        "descripcion": "Elige un luchador aliado que haya sido derrotado. Coloca ese luchador en cualquier espacio de tu zona con salud a 3."
      },
      {
        "name": "Revoke",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "Tara",
        "description": "Immediately: Cancel any abilities on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Swift Strike",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Move your fighter up to 4 spaces.",
        "descripcion": "Después del combate: Mueve tu luchador hasta 4 espacios."
      },
      {
        "name": "When Good Magic Fails",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 3,
        "character": "Willow",
        "description": "After combat: (DARK) Move Willow to any space in her zone. Discard the top card of your deck.",
        "descripcion": "Después del combate: (DARK) Mueve Willow a cualquier espacio de su zona. Descarta la carta superior de tu deck."
      },
    ]
  },
  {
    "name": "Daredevil",
    "amount": 22,
    "image": require('./assets/backs/daredevil.jpg'),
    "ability": {
      "en": "DURING COMBAT: If you have 2 or fewer cards in your hand, you may BLIND BOOST your attack or defense.\n\n(If you have other DURING COMBAT effects, choose the order.)\n\nWhen you BLIND BOOST, you discard the top card of your deck and add its BOOST value onto the card you played in combat.\n\nDaredevil's ability cannot be canceled.",
      "es": "DURANTE EL COMBATE: Si tienes 2 o menos cartas en tu mano, puedes BLIND BOOST tu ataque o defensa.\n\n(Si tienes otros efectos DURANTE EL COMBATE, elige el orden.)\n\nCuando haces BLIND BOOST, descartas la carta superior de tu mazo y añades su valor de BOOST a la carta que jugaste en el combate.\n\nLa habilidad de Daredevil no se puede cancelar."
    },
    "cards": [
      {
        "name": "Breather",
        "type": "scheme",
        "amount": 3,
        "boost": 2,
        "character": "any",
        "description": "Choose an attack, defense, or versatile card from your discard pile and return it to your hand.",
        "descripcion": "Elige una carta de ataque, defensa o versátil de tu descarte y devuelvela a tu mano."
      },
      {
        "name": "Devil of Hell's Kitchen",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 3,
        "character": "any",
        "description": "During combat: If you have no cards in your deck, the value of this card is 8 instead.\n\nAfter combat: Shuffle this card and the top four cards of your discard pile into your deck.",
        "descripcion": "Durante el combate: Si no tienes cartas en tu mazo, el valor de esta carta es 8 en vez de 4.\n\nDespués del combate: Baraja esta carta y las cuatro cartas superiores de tu descarte en tu mazo."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Grappling Hook",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Move Daredevil up to 2 spaces.",
        "descripcion": "Después del combate: Mueve a Daredevil hasta 2 espacios."
      },
      {
        "name": "Man Without Fear",
        "type": "attack",
        "amount": 2,
        "value": 2,
        "boost": 3,
        "character": "any",
        "description": "During combat: You may BLIND BOOST this attack. (This is in addition to any BLIND BOOST from Daredevil's special ability.)",
        "descripcion": "Durante el combate: Puedes BLIND BOOST esta ataque. (Esto se agrega a cualquier BLIND BOOST de la habilidad especial de Daredevil.)"
      },
      {
        "name": "Son Of A Boxer",
        "type": "defense",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you lost the combat, deal 2 damage to a fighter adjacent to Daredevil.",
        "descripcion": "Después del combate: Si perdiste el combate, inflige 2 daño a un luchador adyacente a Daredevil."
      },
      {
        "name": "Take A Knee",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Discard the top card of your deck. Recover health equal to its BOOST value.",
        "descripcion": "Después del combate: Descarta la primera carta de tu mazo. Recupera salud igual a su valor de BOOST."
      },
      {
        "name": "Through Adversity",
        "type": "scheme",
        "amount": 3,
        "boost": 2,
        "character": "any",
        "description": "Move Daredevil up to 4 spaces. He may move through opposing fighters. Deal 1 damage to each opposing fighter Daredevil moves through.",
        "descripcion": "Mueve a Daredevil hasta 4 espacios. El puede moverse a través de luchadores oponentes. Inflige 1 de daño a cada luchador oponente a través del que Daredevil pase."
      }
    ]
  },
  {
    "name": "Bullseye",
    "amount": 30,
    "image": require('./assets/backs/bullseye.jpg'),
    "ability": {
      "en": "Bullseye can attack from up to 5 spaces away (ignoring zones).\n\nBullseye's special 5 space attack range is in addition to also being able to attack any opposing fighter in his zone.",
      "es": "Bullseye puede atacar desde hasta 5 espacios de distancia (ignorando zonas).\n\nLa distancia de ataque especial de Bullseye es adicional a poder atacar cualquier luchador en su zona."
    },
    "cards": [
      {
        "name": "Arrogant But Effective",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: You are considered to have won this combat. Move Bullseye up to 2 spaces.",
        "descripcion": "Después del combate: Eres considerado ganador de este combate. Mueve Bullseye hasta 2 espacios."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "	For My Next Trick",
        "type": "attack",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: Move Bullseye up to 1 space. Draw 1 card. Gain 1 action.",
        "descripcion": "Después del combate: Mueve Bullseye hasta 1 espacio. Roba 1 carta. Gana 1 acción."
      },
      {
        "name": "I Never Miss",
        "type": "attack",
        "amount": 4,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "During combat: You may BOOST this attack. If you don't BOOST this attack, draw 1 card.",
        "descripcion": "Durante el combate: Puedes BOOST este ataque. Si no lo haces, toma 1 carta."
      },
      {
        "name": "I Planned To Be Here",
        "type": "attack",
        "amount": 2,
        "value": 2,
        "boost": 3,
        "character": "any",
        "description": "During combat: If you started your turn in your current space, the value of this card is 5 instead.",
        "descripcion": "Durante el combate: Si empezaste tu turno en tu espacio actual, el valor de esta carta es 5."
      },
      {
        "name": "I'm Better And I'll Prove It",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "During combat: If you already won a combat this turn, the value of this card is 6 instead.",
        "descripcion": "Durante el combate: Si ya ganaste un combate este turno, el valor de esta carta es 6."
      },
      {
        "name": "Master Strategist",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "any",
        "description": "After combat: Move Bullseye exactly 4 spaces. You may move through opposing fighters.",
        "descripcion": "Después del combate: Mueve Bullseye exactamente 4 espacios. Puedes moverse a través de luchadores oponentes."
      },
      {
        "name": "Ricochet",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: If the opposing fighter was not defeated, deal 1 damage to a fighter in the opposing fighter's zone.",
        "descripcion": "Después del combate: Si el luchador oponente no fue derrotado, inflige 1 de daño a un luchador en la zona del oponente."
      },
      {
        "name": "Right Between The Eyes",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "any",
        "description": "Immediately: If you already won a combat this turn, your opponent discards 1 card.",
        "descripcion": "Inmediatamente: Si ya ganaste un combate este turno, tu oponente descarta 1 carta."
      },
      {
        "name": "Study The Target",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "any",
        "description": "Draw 2 cards.If you won a combat this turn, draw 1 additional card and gain 1 action.",
        "descripcion": "Roba 2 cartas. Si ganaste un combate este turno, roba 1 carta adicional y gana 1 acción."
      },
      {
        "name": "Tactical Retreat",
        "type": "defense",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Place Bullseye in a space that shares no zones with his current space.",
        "descripcion": "Después del combate: Coloca a Bullseye en un espacio que no comparta ninguna zona con su espacio actual."
      },
      {
        "name": "World's Greatest Assassin",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 3,
        "character": "any",
        "description": "Immediately: If you already won a combat this turn, ignore the value of your opponent's card.",
        "descripcion": "Inmediatamente: Si ya ganaste un combate este turno, ignora el valor de la carta del oponente."
      }
    ]
  },
  {
    "name": "Elektra",
    "amount": 20,
    "ability": {
      "en": "The first time Elektra would be defeated, remove her and all Hand from the board. She is not defeated. At the start of your next turn, Resurrect her. (Ignore effects with the RESURRECTED symbol.)\n\nWhen Elektra Resurrects: Flip your health dial. Shuffle your discard pile into your deck.\n\nPlace Elektra and all Hand back onto the board with each fighter in a different zone. (You must resolve effects with the RESURRECTED symbol.)\n\nWhen resurrecting, only your discard pile is shuffled into your deck, not your hand of cards. When placing your fighters after you resurrect, you may place them in zones containing opposing fighters, you just cannot place two of your own fighters in the same zone as each other.",
      "es": "La primera vez que Elektra sería derrotada, retírala y a todos los Hand del tablero. Ella no es derrotada. Al comienzo de tu próximo turno, resucítala. (Ignora los efectos con el símbolo RESURRECTED.)\n\nCuando Elektra resucita: Voltea tu marcador de salud. Baraja tu descarte en tu mazo.\n\nColoca a Elektra y a todos los Hand de vuelta en el tablero con cada luchador en una zona diferente. (Debes resolver los efectos con el símbolo RESURRECTED.)\n\nCuando resucitas, solo tu descarte se baraja en tu mazo, no tu mano de cartas. Cuando colocas a tus luchadores después de resucitar, puedes colocarlos en zonas que contengan luchadores oponentes, solo que no puedes colocar dos de tus propios luchadores en la misma zona."
    },
    "cards": [
      {
        "name": "Cloaked In Shadow",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 1,
        "character": "ELEKTRA",
        "description": "Immediately: Cancel all effects on your opponent's card.\n\nAfter combat: RESURRECTED: Move Elektra up to 3 spaces.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente.\n\nDespués del combate: RESURRECTED: Mueve a Elektra hasta 3 espacios."
      },
      {
        "name": "Hands of Red",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 2,
        "character": "ELEKTRA",
        "description": "After combat: Return a defeated Hand to a space in Elektra's zone.",
        "descripcion": "Después del combate: Devuelve un Hand derrotado a un espacio en la zona de Elektra."
      },
      {
        "name": "Intercept",
        "type": "defense",
        "amount": 2,
        "value": 3,
        "boost": 4,
        "character": "ELEKTRA",
        "description": "During combat: RESURRECTED: You may reveal a card named SAI from your hand. If you do, the value of this card is 5 instead.",
        "descripcion": "Durante el combate: RESURRECTED: Puedes revelar una carta llamada SAI de tu mano. Si lo haces, el valor de esta carta es 5 en vez de 3."
      },
      {
        "name": "Mesmerize",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "ELEKTRA",
        "description": "Choose an opponent and look at their hand. Gain 1 action.RESURRECTED: Choose 1 card for them to discard.",
        "descripcion": "Elige un oponente y mira su mano. Gana 1 acción. RESURRECTED: Elige 1 carta para que la descarte."
      },
      {
        "name": "Mystic Assassin",
        "type": "attack",
        "amount": 2,
        "value": 6,
        "boost":1,
        "character": "ELEKTRA",
        "description": "After combat: Elektra takes 3 damage. RESURRECTED: Elektra takes no damage instead.",
        "descripcion": "Después del combate: Elektra recibe 3 de daño. RESURRECTED: Elektra no recibe daño."
      },
      {
        "name": "Ninjitsu",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Place your fighter in any space.",
        "descripcion": "Después del combate: Coloca a tu luchador en cualquier espacio."
      },
      {
        "name": "Sai",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 3,
        "character": "ELEKTRA",
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Snakeroot Clan",
        "type": "defense",
        "amount": 2,
        "value": 1,
        "boost": 2,
        "character": "ELEKTRA",
        "description": "Immediately: Elektra may swap spaces with a Hand. If she does, that Hand is now the defender.",
        "descripcion": "Inmediatamente: Elektra puede intercambiar espacios con un Hand. Si lo hace, ese Hand es ahora el defensor."
      },
      {
        "name": "The Fist",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "THE HAND",
        "description": "After combat: You may deal 1 damage to your attacking fighter. If you do, return this card to your hand and gain 1 action.",
        "descripcion": "Después del combate: Puedes infligir 1 de daño a tu luchador atacante. Si lo haces, devuelve esta carta a tu mano y gana 1 acción."
      },
      {
        "name": "Whirlwind",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 1,
        "character": "ELEKTRA",
        "description": "After combat: RESURRECTED: Deal 1 damage to each adjacent opposing fighter.",
        "descripcion": "Después del combate: RESURRECTED: Inflige 1 de daño a cada luchador oponente adyacente."
      }
    ]
  },
  {
    "name": "Beowulf",
    "amount": 30,
    "image": require('./assets/backs/beowulf.jpg'),
    "ability": {
      "en": "Beowulf starts with 1 Rage.\n\nWhen Beowulf is dealt damage, he gains 1 Rage.\n\nBeowulf has a maximum of 3 rage.",
      "es": "Beowulf empieza con 1 Rabia.\n\nCuando Beowulf recibe daño, gana 1 Rabia.\n\nBeowulf tiene un máximo de 3 Rabia."
    },
    "cards": [
      {
        "name": "Epic Poem",
        "type": "attack",
        "amount": 2,
        "value": 2,
        "boost": 2,
        "character": "BEOWULF",
        "description": "Immediately: Gain 1 Rage.\n\nDuring combat: This card's value is +1 for each Rage you have. (You do not spend Rage for this effect.)",
        "descripcion": "Inmediatamente: Gana 1 Rabia.\n\nDurante el combate: El valor de esta carta es +1 por cada Rabia que tengas. (No gastas Rabia para este efecto.)"
      },
      {
        "name": "Fatal Struggle",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you won the combat, draw 2 cards. If you lost the combat, your opponent draws 2 cards.",
        "descripcion": "Después del combate: Si ganaste el combate, roba 2 cartas. Si perdiste el combate, tu oponente roba 2 cartas."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta de tu oponente."
      },
      {
        "name": "Golden Drinking Horn",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "BEOWULF",
        "description": "Spend any amount of Rage. Choose a different effect for each Rage spent:\n\n- draw 2 cards\n\n- move Beowulf up to 4 spaces\n\n- Beowulf recovers 2 health.",
        "descripcion": "Gasta cualquier cantidad de Rabia. Elige un efecto diferente por cada Rabia gastada:\n\n- roba 2 cartas\n\n- mueve a Beowulf hasta 4 espacios\n\n- Beowulf se recupera 2 de salud."
      },
      {
        "name": "Hot for the Battle",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "WIGLAF",
        "description": "After combat: Wiglaf may swap spaces with Beowulf.",
        "descripcion": "Después del combate: Wiglaf puede intercambiar espacios con Beowulf."
      },
      {
        "name": "No Contest Expecteth",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "BEOWULF",
        "description": "After combat: If you attacked a sidekick and won the combat, you may spend 3 Rage to defeat that sidekick.",
        "descripcion": "Después del combate: Si atacaste a un secuaz y ganaste el combate, puedes gastar 3 Rabia para derrotar a ese secuaz."
      },
      {
        "name": "Remnant of Valor",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "WIGLAF",
        "description": "Wiglaf deals 1 damage to each adjacent fighter. If Beowulf was dealt damage this way, gain 1 action.",
        "descripcion": "Wiglaf hace 1 de daño a cada luchador adyacente. Si Beowulf recibió daño de esta manera, gana 1 acción."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, elige a uno de los luchadores en el combate y muevelo hasta 2 espacios."
      },
      {
        "name": "The Ancient Heirloom",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "BEOWULF",
        "description": "This card's effects cannot be canceled.\n\nDuring combat: You may spend 2 Rage to make this card's value 5 instead. You may spend 1 Rage to BOOST this card. (You may do both.)",
        "descripcion": "Los efectos de esta carta no pueden ser cancelados.\n\nDurante el combate: Puedes gastar 2 Rabia para hacer que el valor de esta carta sea 5 en vez de 3. Puedes gastar 1 Rabia para BOOST esta carta. (Puedes hacer ambas cosas.)"
      },
      {
        "name": "The Equal of Grendel",
        "type": "defense",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "BEOWULF",
        "description": "Immediately: You may spend 2 Rage to deal damage to the opposing fighter equal to the printed value of their card.",
        "descripcion": "Inmediatamente: Puedes gastar 2 Rabia para hacer daño al luchador opuesto igual al valor impreso de su carta."
      },
      {
        "name": "The War-King",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 3,
        "character": "BEOWULF",
        "description": "During combat: Spend any amount of Rage. This card's value is +2 for each Rage spent.",
        "descripcion": "Durante el combate: Gasta cualquier cantidad de Rabia. El valor de esta carta es +2 por cada Rabia gastada."
      },
      {
        "name": "Vigor and Courage",
        "type": "scheme",
        "amount": 3,
        "boost": 2,
        "character": "BEOWULF",
        "description": "Choose an opponent. They discard 1 random card. Gain rage equal to its BOOST value.",
        "descripcion": "Elige a un oponente. Ese oponente descarta 1 carta al azar. Gana Rabia igual al valor BOOST de esa carta."
      }
    ]
  },
  {
    "name": "Little Red Riding Hood",
    "amount": 30,
    "image": require('./assets/backs/littlered.jpg'),
    "ability": {
      "en": "Resolve an effect on a card you play if the symbol next to the effect matches the item in your basket. At the start of the game, place LITTLE RED's BASKET in your discard pile.\n\nLittle Red's Basket: This starts in your discard pile. It does not count as a card.",
      "es": "Resuelve un efecto sobre una carta que juegas si el símbolo junto a ese efecto coincide con el objeto en tu cesta. Al comienzo del juego, coloca la cesta de Little Red en tu descarte.\n\nCesta de Little Red: Esta carta no cuenta como una carta."
    },
    "cards": [
      {
        "name": "A Grimm Tale 🌹",
        "type": "scheme",
        "amount": 2,
        "character": "HUNTSMAN",
        "boost": 3,
        "description": "Little Red Recovers 2 health.\n\n🐺 Little Red recovers 4 health instead.",
        "descripcion": "Little Red recupera 2 de vida.\n\n🐺 Little Red recupera 4 de vida en vez de 2."
      },
      {
        "name": "Into the Woods 🐺🌹⚔️",
        "type": "scheme",
        "amount": 3,
        "character": "LITTLE RED",
        "boost": 2,
        "description": "Move Little Red up to 3 spaces. Gain 1 action.",
        "descripcion": "Mueve a Little Red hasta 3 espacios. Gana 1 acción."
      },
      {
        "name": "Long Have I Sought You ⚔️",
        "type": "attack",
        "value": 4,
        "amount": 3,
        "character": "HUNTSMAN",
        "boost": 2,
        "description": "During combat: If the Huntsman is adjacent to the opposing fighter, the value of this card is 6 instead.",
        "descripcion": "Durante el combate: Si el Huntsman está adyacente al luchador contrario, el valor de esta carta es 6."
      },
      {
        "name": "Never Leave the Path 🐺",
        "type": "scheme",
        "amount": 2,
        "character": "LITTLE RED",
        "boost": 1,
        "description": "🐺 Place Little Red in any space. Gain 1 action.\n\n⚔️ Deal 2 damage to each opposing fighter in Little Red's zone.\n\n🌹 Draw 3 cards.",
        "descripcion": "🐺 Coloca a Little Red en cualquier espacio. Gana 1 acción.\n\n⚔️ Haz 2 de daño a cada luchador contrario en la zona de Little Red.\n\n🌹 Toma 3 cartas."
      },
      {
        "name": "Once Upon a Time 🌹",
        "type": "versatile",
        "value": 2,
        "amount": 2,
        "character": "any",
        "boost": 1,
        "description": "After combat:\n\n⚔️ Deal 3 damage to the opposing fighter.",
        "descripcion": "Después del combate:\n\n⚔️ Haz 3 de daño a el luchador contrario."
      },
      {
        "name": "Stones in the Belly 🌹",
        "type": "versatile",
        "value": 2,
        "amount": 3,
        "character": "any",
        "boost": 1,
        "description": "During combat:\n\n⚔️ Your opponent discards 1 random card. Add its BOOST value to this card's value.",
        "descripcion": "Durante el combate:\n\n⚔️ Tu oponente descarta 1 carta aleatoria. Añade su valor BOOST a el valor de esta carta."
      },
      {
        "name": "The Wolf's Skin ⚔️",
        "type": "defense",
        "value": 2,
        "amount": 3,
        "character": "any",
        "boost": 2,
        "description": "After combat:\n\n🐺 Draw 2 cards.",
        "descripcion": "Después del combate:\n\n🐺 Toma 2 cartas."
      },
      {
        "name": "What a Terrible Big Mouth You Have",
        "type": "defense",
        "value": 2,
        "amount": 2,
        "character": "LITTLE RED",
        "boost": 2,
        "description": "After combat:\n\n🐺 Deal damage to the opposing fighter equal to the printed value of their card.",
        "descripcion": "Después del combate:\n\n🐺 Haz daño a el luchador contrario igual al valor de su carta."
      },
      {
        "name": "What Big Ears You Have 🐺",
        "type": "attack",
        "value": 4,
        "amount": 2,
        "character": "LITTLE RED",
        "boost": 2,
        "description": "⚔️ You may play this card as a defense card.",
        "descripcion": "⚔️ Puedes jugar esta carta como carta de defensa."
      },
      {
        "name": "What Big Eyes You Have 🐺",
        "type": "versatile",
        "value": 3,
        "amount": 2,
        "character": "LITTLE RED",
        "boost": 2,
        "description": "Immediately: Cancel all effects on your opponent's card.\n\n🌹 Also ignore the value of your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente.\n\n🌹 También ignora el valor de la carta del oponente."
      },
      {
        "name": "What Large Hands You Have 🐺",
        "type": "attack",
        "value": 2,
        "amount": 2,
        "character": "LITTLE RED",
        "boost": 3,
        "description": "After combat: You may return this card to your hand.\n\n🌹 Instead, you may return the top card of your discard pile to your hand.",
        "descripcion": "Después del combate: Puedes devolver esta carta a tu mano.\n\n🌹 En vez de ello, puedes devolver la carta superior de tu pila de descarte a tu mano."
      },
      {
        "name": "What's That In My Basket? 🌟",
        "type": "versatile",
        "value": 4,
        "amount": 4,
        "character": "LITTLE RED",
        "boost": 3,
        "description": "(🌟 counts as any one 🐺🌹⚔️ symbol.)",
        "descripcion": "(🌟 cuenta como cualquier uno de los siguientes símbolos 🐺🌹⚔️.)"
      }
    ]
  },
  {
    "name": "Houdini",
    "amount": 30,
    "ability": {
      "en": "When you take the maneuver action and BOOST, you may place Houdini in any space instead of moving. (Bess moves as normal.)",
      "es": "Cuando tomas la acción de maniobra y haces BOOST, puedes colocar a Houdini en cualquier espacio en vez de moverte. (Bess se mueve normalmente.)"
    },
    "cards": [
      {
        "name": "A Magician Never Reveals His Secrets",
        "type": "scheme",
        "amount": 1,
        "character": "HOUDINI",
        "boost": 4,
        "description": "Draw 2 cards. Gain 1 action.\n\nIf an effect would let an opponent look at your hand, you may reveal this card and cancel that effect.",
        "descripcion": "Roba 2 cartas. Gana 1 acción.\n\nSi un efecto permitiría a un oponente mirar tu mano, puedes revelar esta carta y cancelar ese efecto."
      },
      {
        "name": "All Part of the Show",
        "type": "defense",
        "value": 2,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "BOOSTED WITH: Houdini recovers 2 health.\n\nThis card's effect cannot be canceled.\n\nAfter combat: If your fighter was defeated, set their health to 4 instead and place them in any space. (This effect happens even if Houdini was defeated.)",
        "descripcion": "EFECTO BOOST: Houdini recupera 2 de salud.\n\nLos efectos de esta carta no pueden ser cancelados.\n\nDespués del combate: Si tu luchador fue derrotado, establece su salud en 4 en vez de 0 y colócalo en cualquier espacio. (Este efecto ocurre incluso si Houdini fue derrotado.)"
      },
      {
        "name": "An Illusion of My Own Design",
        "type": "attack",
        "value": 4,
        "amount": 2,
        "character": "HOUDINI",
        "boost": 1,
        "description": "Immediately: Your opponent may BOOST their card.\n\nDuring combat: You may BOOST this card.",
        "descripcion": "Inmediatamente: Tu oponente puede BOOST su carta.\n\nDurante el combate: Puedes BOOST esta carta."
      },
      {
        "name": "And the Beautiful Bess!",
        "type": "versatile",
        "value": 3,
        "amount": 2,
        "character": "BESS",
        "boost": 1,
        "description": "BOOSTED WITH: If it's your turn, gain 1 action.\n\nIf you discard this card as a result of an opponent's effect, draw 1 card.",
        "descripcion": "EFECTO BOOST: Si es tu turno, gana 1 acción.\n\nSi descartas esta carta como resultado de un efecto del oponente, roba 1 carta."
      },
      {
        "name": "Flourish",
        "type": "attack",
        "value": 3,
        "amount": 4,
        "character": "any",
        "boost": 2,
        "description": "BOOSTED WITH: Draw 1 card.\n\nDuring combat: You may BOOST this card.",
        "descripcion": "EFECTO BOOST: Roba 1 carta.\n\nDurante el combate: Puedes BOOST esta carta."
      },
      {
        "name": "For My Next Trick",
        "type": "attack",
        "value": 2,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "After combat: Move one of your fighters up to 1 space. Draw 1 card. Gain 1 action.",
        "descripcion": "Después del combate: Mueve a uno de tus luchadores hasta 1 espacio. Roba 1 carta. Gana 1 acción."
      },
      {
        "name": "Grand Escape",
        "type": "defense",
        "value": 2,
        "amount": 3,
        "character": "HOUDINI",
        "boost": 3,
        "description": "During combat: You may BOOST this card.\n\nAfter combat: If you won the combat, place your fighter in any space.",
        "descripcion": "Durante el combate: Puedes BOOST esta carta.\n\nDespués del combate: Si ganaste el combate, coloca a tu luchador en cualquier espacio."
      },
      {
        "name": "Misdirection",
        "type": "versatile",
        "value": 2,
        "amount": 3,
        "character": "any",
        "boost": 1,
        "description": "BOOSTED WITH: Deal 2 damage to any fighter.\n\nImmediately: Cancel all effects on your opponent's card.",
        "descripcion": "EFECTO BOOST: Haz 2 de daño a cualquier luchador.\n\nInmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Set the Stage",
        "type": "scheme",
        "amount": 2,
        "character": "BESS",
        "boost": 2,
        "description": "BOOSTED WITH: Look at an opponent's hand and choose a card for them to discard.\n\nDraw 3 cards. Then, put a card in your hand on top of your deck.",
        "descripcion": "EFECTO BOOST: Mira la mano de un oponente y elige una carta para que la descarte.\n\nRoba 3 cartas. Luego, pon una carta de tu mano en la parte superior de tu mazo."
      },
      {
        "name": "Sleight of Hand",
        "type": "attack",
        "value": 1,
        "amount": 2,
        "character": "any",
        "boost": 3,
        "description": "BOOSTED WITH: Draw 1 card.\n\nImmediately: You may return this card to your hand and choose a different card to play. Resolve all effects on that card as normal.",
        "descripcion": "EFECTO BOOST: Roba 1 carta.\n\nInmediatamente: Puedes devolver esta carta a tu mano y elegir una carta diferente para jugar. Resuelve todos los efectos de esa carta como de costumbre."
      },
      {
        "name": "Smoke and Mirrors",
        "type": "versatile",
        "value": 3,
        "amount": 2,
        "character": "any",
        "boost": 1,
        "description": "Immediately: Houdini and Bess may swap spaces. If they do, your other fighter is now in the combat.",
        "descripcion": "Inmediatamente: Houdini y Bess pueden intercambiar espacios. Si lo hacen, tu otro luchador está ahora en el combate."
      },
      {
        "name": "The Big Reveal",
        "type": "attack",
        "value": 2,
        "amount": 2,
        "character": "HOUDINI",
        "boost": 3,
        "description": "During combat: You may BOOST this card twice.\n\nAfter combat: Return one card you boosted with to your hand.",
        "descripcion": "Durante el combate: Puedes BOOST esta carta dos veces.\n\nDespués del combate: Devuelve una carta con la que hayas BOOST a tu mano."
      },
      {
        "name": "Vanishing Act",
        "type": "versatile",
        "value": 2,
        "amount": 3,
        "character": "HOUDINI",
        "boost": 2,
        "description": "After combat: Choose one of the fighters in the combat and move them up to 3 spaces. They may move through their opposing fighters.",
        "descripcion": "Después del combate: Elige a uno de los luchadores en el combate y muévelo hasta 3 espacios. Pueden moverse a través de sus luchadores opuestos."
      },
    ]
  },
  {
    "name": "The Genie",
    "amount": 30,
    "ability": {
      "en": "At the start of your turn, you may discard 1 card to gain 1 action.",
      "es": "Al comienzo de tu turno, puedes descartar 1 carta para ganar 1 acción."
    },
    "cards": [
      {
        "name": "Back In The Lamp",
        "type": "defense",
        "amount": 3,
        "value": 0,
        "boost": 1,
        "character": "any",
        "description": "Immediately: The Genie recovers 4 health.",
        "descripcion": "Inmediatamente: El Genio recupera 4 de salud."
      },
      {
        "name": "Careful What You Wish For",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you lost the combat, deal 1 damage to an adjacent opposing fighter.",
        "descripcion": "Después del combate: Si perdiste el combate, inflige 1 de daño a un luchador oponente adyacente."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "I Am Freed",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Place the Genie in any empty space. Then, deal 1 damage to each adjacent fighter.",
        "descripcion": "Después del combate: Coloca al Genio en cualquier espacio vacío. Luego, inflige 1 de daño a cada luchador adyacente."
      },
      {
        "name": "I Grant You Death",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "After combat: You may deal 1 damage to an adjacent fighter.",
        "descripcion": "Después del combate: Puedes infligir 1 de daño a un luchador adyacente."
      },
      {
        "name": "I've Made Sultans Out of Less",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "After combat: Look at your opponent's hand and choose a card for them to discard.",
        "descripcion": "Después del combate: Mira la mano de tu oponente y elige una carta para que la descarte."
      },
      {
        "name": "Imprisoned Wrath",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: You may discard 2 cards to deal 2 damage to an adjacent opposing fighter.",
        "descripcion": "Después del combate: Puedes descartar 2 cartas para infligir 2 de daño a un luchador oponente adyacente."
      },
      {
        "name": "Prisoner's Torment",
        "type": "defense",
        "amount": 2,
        "value": 1,
        "boost": 2,
        "character": "any",
        "description": "After combat: Draw cards equal to the amount of combat damage you took.",
        "descripcion": "Después del combate: Roba cartas igual a la cantidad de daño de combate que recibiste."
      },
      {
        "name": "This is No Parlor Trick",
        "type": "versatile",
        "amount": 2,
        "value": 1,
        "boost": 2,
        "character": "any",
        "description": "During combat: The value of your opponent's card is equal to its BOOST value.",
        "descripcion": "Durante el combate: El valor de la carta de tu oponente es igual a su valor BOOST."
      },
      {
        "name": "Three Wishes",
        "type": "scheme",
        "amount": 3,
        "boost": 3,
        "character": "any",
        "description": "Gain 1 action and choose one effect:\n\n- draw 5 cards\n\n- for the rest of your turn, your cards' values are 4 and cannot be changed\n\n- each opponent discards 2 cards",
        "descripcion": "Gana 1 acción y elige un efecto:\n\n- roba 5 cartas\n\n- por el resto de tu turno, los valores de tus cartas son 4 y no pueden ser cambiados\n\n- cada oponente descarta 2 cartas"
      },
      {
        "name": "Wishing For More Wishes",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Your opponent draws 1 card. Draw 3 cards.",
        "descripcion": "Después del combate: Tu oponente roba 1 carta. Roba 3 cartas."
      },
      {
        "name": "Your Wish is My Command",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, you may discard 2 cards to gain 1 action.",
        "descripcion": "Después del combate: Si ganaste el combate, puedes descartar 2 cartas para ganar 1 acción."
      },
    ]
  },
  {
    "name": "Black Panther",
    "amount": 30,
    "ability": {
      "en": "Whenever you BOOST, draw 1 card.\n\nCards stored in your VIBRANIUM SUIT can only be used to BOOST.",
      "es": "Siempre que hagas BOOST, roba 1 carta.\n\nLas cartas almacenadas en tu TRAJE DE VIBRANIUM sólo se pueden usar para BOOST."
    },
    "cards": [
      {
        "name": "Analyze and Adjust",
        "type": "attack",
        "value": 3,
        "amount": 3,
        "character": "any",
        "boost": 3,
        "description": "After combat: Reveal the top card of your opponent's deck and store it in your Vibranium Suit.",
        "descripcion": "Después del combate: Revela la primera carta del mazo de tu oponente y almacénala en tu Traje de Vibranium."
      },
      {
        "name": "Ancestral Insight",
        "type": "versatile",
        "value": 4,
        "amount": 3,
        "character": "BLACK PANTHER",
        "boost": 1,
        "description": "After combat: If you won the combat, reveal the top card of your opponent's deck and store it in your Vibranium Suit.",
        "descripcion": "Después del combate: Si ganaste el combate, revela la primera carta del mazo de tu oponente y almacénala en tu Traje de Vibranium."
      },
      {
        "name": "Anti-Metal Claws",
        "type": "versatile",
        "value": 1,
        "amount": 2,
        "character": "BLACK PANTHER",
        "boost": 2,
        "description": "During combat: Add the BOOST value of the opposing fighter's card to this card's value. Then, You may BOOST this card.",
        "descripcion": "Durante el combate: Añade el valor BOOST de la carta del luchador contrario al valor de esta carta. Luego, puedes BOOST esta carta."
      },
      {
        "name": "Cat-Like Reflexes",
        "type": "versatile",
        "value": 3,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "After combat: If you won the combat, move one of the fighters in the combat up to 3 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, mueve a uno de los luchadores en el combate hasta 3 espacios."
      },
      {
        "name": "Evade",
        "type": "defense",
        "value": 3,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Roba 1 carta."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "value": 2,
        "amount": 2,
        "character": "any",
        "boost": 1,
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Microweave Mesh",
        "type": "defense",
        "value": 2,
        "amount": 2,
        "character": "BLACK PANTHER",
        "boost": 2,
        "description": "During combat: You may BOOST this card.",
        "descripcion": "Durante el combate: Puedes BOOST esta carta."
      },
      {
        "name": "Nanotriage Processor",
        "type": "versatile",
        "value": 2,
        "amount": 2,
        "character": "SHURI",
        "boost": 2,
        "description": "After combat: Shuri recovers 1 health. If Black Panther is in the same zone as Shuri, he also recovers 1 health.",
        "descripcion": "Después del combate: Shuri se recupera 1 de salud. Si Black Panther está en la misma zona que Shuri, él también se recupera 1 de salud."
      },
      {
        "name": "Regroup",
        "type": "versatile",
        "value": 1,
        "amount": 2,
        "character": "any",
        "boost": 2,
        "description": "After combat: Draw 1 card. If you won the combat, draw 2 cards instead.",
        "descripcion": "Después del combate: Roba 1 carta. Si ganaste el combate, roba 2 cartas en vez de ello."
      },
      {
        "name": "Stalking Panther",
        "type": "scheme",
        "amount": 3,
        "character": "any",
        "boost": 2,
        "description": "Move each of your fighters up to 3 spaces. They may move through opposing fighters. Gain 1 action.",
        "descripcion": "Mueve a cada uno de tus luchadores hasta 3 espacios. Pueden moverse a través de luchadores oponentes. Gana 1 acción."
      },
      {
        "name": "Tactical Remote Scanning",
        "type": "scheme",
        "amount": 2,
        "character": "SHURI",
        "boost": 3,
        "description": "Choose an opponent. Reveal the top 2 cards of their deck and store them in your Vibranium Suit.",
        "descripcion": "Elige a un oponente. Revela las 2 primeras cartas de su mazo y almacénalas en tu Traje de Vibranium."
      },
      {
        "name": "Vibranium Shockwave",
        "type": "attack",
        "value": 2,
        "amount": 2,
        "character": "BLACK PANTHER",
        "boost": 2,
        "description": "During combat: You may BOOST this card.",
        "descripcion": "Durante el combate: Puedes BOOST esta carta."
      },
      {
        "name": "Wakanda Forever!",
        "type": "versatile",
        "value": 3,
        "amount": 3,
        "character": "BLACK PANTHER",
        "boost": 3,
        "description": "During combat: You may BOOST this card up to two times. (Draw a card for Black Panther's special ability each time you BOOST.)",
        "descripcion": "Durante el combate: Puedes BOOST esta carta hasta dos veces. (Roba una carta por la habilidad especial de Black Panther cada vez que BOOST.)"
      },
    ]
  },
  {
    "name": "Black Widow",
    "amount": 31,
    "ability": {
      "en": "Before drawing your starting hand, add THE MOSCOW PROTOCOL card to your hand.\n\nThen, shuffle your deck and draw 5 cards. (Your starting hand if 6 cards instead of 5.)",
      "es": "Antes de robar tu mano inicial, añade la carta THE MOSCOW PROTOCOL a tu mano.\n\nLuego, baraja tu mazo y roba 5 cartas. (Tu mano inicial es de 6 cartas en vez de 5.)"
    },
    "cards": [
      {
        "name": "Acting Director of S.H.I.E.L.D.",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 3,
        "character": "MARIA HILL",
        "description": "After combat: Move each of your fighters up to 3 spaces. They may move through opposing fighters.\n\nThen, shuffle 1 scheme from your discard pile into your deck.",
        "descripcion": "Después del combate: Mueve a cada uno de tus luchadores hasta 3 espacios. Pueden moverse a través de luchadores oponentes.\n\nLuego, baraja 1 carta scheme de tu pila de descarte en tu mazo."
      },
      {
        "name": "Caught in a Web",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "BLACK WIDOW",
        "description": "During combat: Cancel all AFTER COMBAT effects on your opponent's card.",
        "descripcion": "Durante el combate: Cancela todos los efectos AFTER COMBAT de la carta del oponente."
      },
      {
        "name": "Double Identity",
        "type": "defense",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Black Widow and Maria Hill may swap spaces. If they do, your other fighter is now the defender.",
        "descripcion": "Inmediatamente: Black Widow y Maria Hill pueden intercambiar espacios. Si lo hacen, tu otro luchador es ahora el defensor."
      },
      {
        "name": "Fake Out",
        "type": "attack",
        "amount": 2,
        "value": 1,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you lost the combat, draw 1 card and gain 1 action.",
        "descripcion": "Después del combate: Si perdiste el combate, roba 1 carta y gana 1 acción."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Life Model Decoy",
        "type": "defense",
        "amount": 2,
        "value": 0,
        "boost": 0,
        "character": "MARIA HILL",
        "description": "After combat: If Maria Hill was defeated, place her adjacent to Black Widow. If you do, set Maria Hill's health to 3.",
        "descripcion": "Después del combate: Si Maria Hill fue derrotada, colócala adyacente a Black Widow. Si lo haces, establece la salud de Maria Hill en 3."
      },
      {
        "name": "The Budapest Gambit",
        "type": "scheme",
        "amount": 1,
        "boost": 4,
        "character": "BLACK WIDOW",
        "description": "Mission: You have 2 or fewer other cards in your hand.\n\nDraw 5 cards. Each opponent discards 1 random card. Acquire a new mission.",
        "descripcion": "Misión: Tienes 2 o menos cartas en tu mano.\n\nRoba 5 cartas. Cada oponente descarta 1 carta al azar. Adquiere una nueva misión."
      },
      {
        "name": "The Firenze Agenda",
        "type": "scheme",
        "amount": 1,
        "boost": 4,
        "character": "BLACK WIDOW",
        "description": "Mission: Black Widow is adjacent to an opposing hero.\n\nDeal 2 damage to each opposing fighter in Black Widow's zone. Acquire a new mission.",
        "descripcion": "Misión: Black Widow está adyacente a un héroe oponente.\n\nHaz 2 de daño a cada luchador contrario en la zona de Black Widow. Adquiere una nueva misión."
      },
      {
        "name": "The Kinshasa Directive",
        "type": "scheme",
        "amount": 1,
        "boost": 4,
        "character": "BLACK WIDOW",
        "description": "Mission: Black Widow is in your starting space.\n\nChoose an opponent. They discard 2 cards. Acquire a new mission.",
        "descripcion": "Misión: Black Widow está en tu espacio inicial.\n\nElige a un oponente. Ese oponente descarta 2 cartas. Adquiere una nueva misión."
      },
      {
        "name": "The Madripoor Sanction",
        "type": "scheme",
        "amount": 1,
        "boost": 4,
        "character": "BLACK WIDOW",
        "description": "Mission: Black Widow is in an opponent's starting space.\n\nDeal 2 damage to each of that opponent's fighters. Acquire a new mission.",
        "descripcion": "Misión: Black Widow está en el espacio inicial de un oponente.\n\nHaz 2 de daño a cada uno de los luchadores de ese oponente. Adquiere una nueva misión."
      },
      {
        "name": "The Moscow Protocol",
        "type": "scheme",
        "amount": 1,
        "boost": 4,
        "character": "BLACK WIDOW",
        "description": "Mission: An opposing fighter took damage this turn.\n\nDraw 1 card and gain 1 action. Acquire a new mission.",
        "descripcion": "Misión: Un luchador contrario recibió daño este turno.\n\nRoba 1 carta y gana 1 acción. Adquiere una nueva misión."
      },
      {
        "name": "Widow's Bite",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 1,
        "character": "BLACK WIDOW",
        "description": "After combat: If you won the combat, your opponent discards 1 card.",
        "descripcion": "Después del combate: Si ganaste el combate, tu oponente descarta 1 carta."
      },
      {
        "name": "Widow's Kiss",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 2,
        "character": "BLACK WIDOW",
        "description": "Immediately: The opposing fighter may not leave their space for the rest of the turn.",
        "descripcion": "Inmediatamente: El luchador contrario no puede abandonar su espacio durante el resto del turno."
      },
      {
        "name": "Widow's Line",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "BLACK WIDOW",
        "description": "After combat: Move the opposing fighter up to 2 spaces.",
        "descripcion": "Después del combate: Mueve al luchador contrario hasta 2 espacios."
      },
      {
        "name": "Widow's Sting",
        "type": "attack",
        "amount": 2,
        "value": 5,
        "boost": 2,
        "character": "BLACK WIDOW",
        "description": "After combat: Move Black Widow up to 3 spaces.",
        "descripcion": "Después del combate: Mueve a Black Widow hasta 3 espacios."
      },
    ]
  },
  {
    "name": "Winter Soldier",
    "amount": 30,
    "ability": {
      "en": "Effects on Winter Soldier's cards cannot be canceled.",
      "es": "Los efectos de las cartas de Winter Soldier no pueden ser cancelados."
    },
    "cards": [
      {
        "name": "A Boy Named Bucky",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "any",
        "description": "Ignore any {RED ROOM} effects on your cards for the rest of your turn. Gain 1 action.",
        "descripcion": "Ignora cualquier efecto {RED ROOM} en tus cartas durante el resto de tu turno. Gana 1 acción."
      },
      {
        "name": "Bionic Armn",
        "type": "attack",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "During combat: If Winter Soldier is adjacent to the opposing fighter, the value of this card is 6 instead.\n\nAfter combat: {RED ROOM} Your opponent moves each of their fighters up to 5 spaces.",
        "descripcion": "Durante el combate: Si Winter Soldier está adyacente al luchador contrario, el valor de esta carta es 6 en vez de 2.\n\nDespués del combate: {RED ROOM} Tu oponente mueve a cada uno de sus luchadores hasta 5 espacios."
      },
      {
        "name": "Born in the Barracks",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you won the combat, Winter Soldier recovers 2 health.",
        "descripcion": "Después del combate: Si ganaste el combate, Winter Soldier recupera 2 de salud."
      },
      {
        "name": "Complete the Mission",
        "type": "defense",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "During combat: You may BOOST this card.\n\nAfter combat: Deal damage to the opposing fighter equal to the amount of combat damage you took.",
        "descripcion": "Durante el combate: Puedes BOOST esta carta.\n\nDespués del combate: Haz daño al luchador contrario igual a la cantidad de daño de combate que recibiste."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Manipulation",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "any",
        "description": "Draw until you have 5 cards in your hand.\n\n{RED ROOM} Each opponent may draw until they have 5 cards in their hand.",
        "descripcion": "Roba hasta que tengas 5 cartas en tu mano.\n\n{RED ROOM} Cada oponente puede robar hasta que tenga 5 cartas en su mano."
      },
      {
        "name": "Marksman",
        "type": "attack",
        "amount": 3,
        "value": 1,
        "boost": 1,
        "character": "any",
        "description": "During combat: Add +1 to this card's value for each space between you and the opposing fighter along the shortest path.",
        "descripcion": "Durante el combate: Añade +1 al valor de esta carta por cada espacio entre tú y el luchador contrario a lo largo del camino más corto."
      },
      {
        "name": "Programmed to Kill",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: {RED ROOM} If you won the combat, take 2 damage.",
        "descripcion": "Después del combate: {RED ROOM} Si ganaste el combate, recibe 2 de daño."
      },
      {
        "name": "Reflex Memories",
        "type": "versatile",
        "amount": 2,
        "value": 5,
        "boost": 2,
        "character": "any",
        "description": "After combat: {RED ROOM} Discard 2 random cards, then draw 2 cards",
        "descripcion": "Después del combate: {RED ROOM} Descarta 2 cartas aleatorias, luego roba 2 cartas."
      },
      {
        "name": "Reprogram",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: Choose 3 cards in your discard pile and shuffle them into your deck.",
        "descripcion": "Después del combate: Elige 3 cartas en tu pila de descarte y barájalas en tu mazo."
      },
      {
        "name": "Wily Fighting",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: Deal 1 damage to each opposing fighter adjacent to your fighter.",
        "descripcion": "Después del combate: Haz 1 de daño a cada luchador contrario adyacente a tu luchador."
      },
      {
        "name": "Without Remorse",
        "type": "attack",
        "amount": 3,
        "value": 6,
        "boost": 2,
        "character": "any",
        "description": "After combat: {RED ROOM} Your opponent may draw 1 card.",
        "descripcion": "Después del combate: {RED ROOM} Tu oponente puede robar 1 carta."
      },
    ]
  },
  {
    "name": "Spider-Man",
    "amount": 30,
    "ability": {
      "en": "When an opponent attacks Spider-Man, before you play a defense card, they must tell you the printed value of their card.",
      "es": "Cuando un oponente ataca a Spider-Man, antes de que juegues una carta de defensa, debe decirte el valor impreso de su carta."
    },
    "cards": [
      {
        "name": "Counter-Attack",
        "type": "defense",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: If the value of your opponent's card is 4 or higher, deal 2 damage to the opposing fighter.",
        "descripcion": "Después del combate: Si el valor de la carta de tu oponente es 4 o mayor, inflige 2 de daño al luchador contrario."
      },
      {
        "name": "Disarming Shot",
        "type": "attack",
        "amount": 2,
        "value": 4,
        "boost": 3,
        "character": "any",
        "description": "After combat: Draw a number of cards equal to the amount of damage dealt to the opposing fighter.",
        "descripcion": "Después del combate: Roba una cantidad de cartas igual a la cantidad de daño infligido al luchador contrario."
      },
      {
        "name": "Friendly Neighborhood Spider-Man",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "any",
        "description": "Recover 3 Health. Place Spider-Man in any space in his zone.",
        "descripcion": "Recupera 3 de salud. Coloca a Spider-Man en cualquier espacio de su zona."
      },
      {
        "name": "Momentous Shift",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "During combat: If your fighter started this turn in a different space, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si tu luchador comenzó este turno en un espacio diferente, estea carta tiene un valor de 5 en vez de 3."
      },
      {
        "name": "Right in the Face!",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Your opponent can't draw cards this turn.",
        "descripcion": "Inmediatamente: Tu oponente no puede robar cartas este turno."
      },
      {
        "name": "Snark",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: If your fighter is adjacent to the opposing fighter, draw 1 card.",
        "descripcion": "Después del combate: Si tu luchador está adyacente al luchador contrario, roba 1 carta."
      },
      {
        "name": "Spider-Sense Tingling!",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "After combat: If the value of your opponent's card is 4 or higher, draw 2 cards.",
        "descripcion": "Después del combate: Si el valor de la carta de tu oponente es 4 o mayor, roba 2 cartas."
      },
      {
        "name": "Swinging Kick",
        "type": "attack",
        "amount": 3,
        "value": 6,
        "boost": 2,
        "character": "any",
        "description": "After combat: You may move the opposing fighter a number of spaces up to the amount of combat damage dealt.",
        "descripcion": "Después del combate: Puedes mover al luchador contrario una cantidad de espacios hasta la cantidad de daño de combate infligido."
      },
      {
        "name": "Thwip!",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, place Spider-Man in any space in his zone.",
        "descripcion": "Después del combate: Si ganaste el combate, coloca a Spider-Man en cualquier espacio de su zona."
      },
      {
        "name": "Wall Crawler",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: Place Spider-Man in any space in his zone.",
        "descripcion": "Después del combate: Coloca a Spider-Man en cualquier espacio de su zona."
      },
      {
        "name": "Web Shooters",
        "type": "defense",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "During combat: Spider-Man cannot take more than 2 combat damage this combat.",
        "descripcion": "Durante el combate: Spider-Man no puede recibir más de 2 daños de combate en este combate."
      },
      {
        "name": "With Great Power",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "any",
        "description": "All of Spider-Man's attacks this turn are +1 value. Draw 1 card. Gain 1 action.",
        "descripcion": "Todos los ataques de Spider-Man este turno tienen un valor +1. Roba 1 carta. Gana 1 acción."
      },
    ]
  },
  {
    "name": "She-Hulk",
    "amount": 30,
    "ability": {
      "en": "At the start of your turn, you may discard a card to deal damage equal to its BOOST value to a fighter in your zone.",
      "es": "Al comienzo de tu turno, puedes descartar una carta para infligir daño igual a su valor BOOST a un luchador en tu zona."
    },
    "cards": [
      {
        "name": "Cease and Desist",
        "type": "versatile",
        "amount": 3,
        "value": 1,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.\n\nDuring combat: If you are attacking, the value of this card is 4 instead.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente.\n\nDurante el combate: Si estás atacando, el valor de esta carta es 4 en vez de 1."
      },
      {
        "name": "Double Jeopardy",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "any",
        "description": "Draw 2 cards and recover 2 health.",
        "descripcion": "Roba 2 cartas y recupera 2 de salud."
      },
      {
        "name": "Green Energy",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, deal 1 damage to each fighter adjacent to She-Hulk.",
        "descripcion": "Después del combate: Si ganaste el combate, inflige 1 de daño a cada luchador adyacente a She-Hulk."
      },
      {
        "name": "Jennifer Walters, Esq.",
        "type": "scheme",
        "amount": 2,
        "boost": 1,
        "character": "any",
        "description": "Place She-Hulk in a starting space. Draw 1 card. Gain 1 action.",
        "descripcion": "Coloca a She-Hulk en un espacio inicial. Roba 1 carta. Gana 1 acción."
      },
      {
        "name": "Lady Justice",
        "type": "defense",
        "amount": 3,
        "value": 0,
        "boost": 2,
        "character": "any",
        "description": "During combat: Discard the top card of your opponent's deck. Increase the value of this card by twice that card's boost value.",
        "descripcion": "Durante el combate: Descarta la primera carta del mazo de tu oponente. Aumenta el valor de esta carta por el doble del valor BOOST de esa carta."
      },
      {
        "name": "Leap Toward",
        "type": "scheme",
        "amount": 2,
        "boost": 1,
        "character": "any",
        "description": "Move She-Hulk up to 4 spaces. She may move through opposing fighters. Then, if she is adjacent to an opposing fighter, gain 1 action.",
        "descripcion": "Mueve a She-Hulk hasta 4 espacios. Ella puede moverse a través de luchadores oponentes. Luego, si está adyacente a un luchador contrario, gana 1 acción."
      },
      {
        "name": "Legalese",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, your opponent chooses whether you both draw a card or both discard a card. If you lost the combat, you make the choice instead (see above).",
        "descripcion": "Después del combate: Si ganaste el combate, tu oponente elige si ambos roban una carta o ambos descartan una carta. Si perdiste el combate, tú haces la elección en su lugar (ver arriba)."
      },
      {
        "name": "Nerve Cluster Strike",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "Immediately: If She-Hulk is adjacent to the opposing fighter, the opposing fighter may not leave their space this turn.",
        "descripcion": "Inmediatamente: Si She-Hulk está adyacente al luchador contrario, el luchador contrario no puede abandonar su espacio este turno."
      },
      {
        "name": "Omega-Level Threat",
        "type": "attack",
        "amount": 2,
        "value": 5,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you dealt 2 or more combat damage, your opponent discards 2 random cards.",
        "descripcion": "Después del combate: Si infligiste 2 o más daños de combate, tu oponente descarta 2 cartas aleatorias."
      },
      {
        "name": "Sensational",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you won the combat, you may choose a card in your discard pile and shuffle it into your deck.",
        "descripcion": "Después del combate: Si ganaste el combate, puedes elegir una carta en tu pila de descarte y barajarla en tu mazo."
      },
      {
        "name": "The Defense Rests",
        "type": "defense",
        "amount": 2,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: Draw cards equal to the amount of combat damage you took.",
        "descripcion": "Después del combate: Roba cartas igual a la cantidad de daño de combate que recibiste."
      },
      {
        "name": "The Savage She-Hulk",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "any",
        "description": "During combat: You may spend an additional action to make this card's value 9 instead.",
        "descripcion": "Durante el combate: Puedes gastar una acción adicional para que el valor de esta carta sea 9 en vez de 3."
      },
    ]
  },
  {
    "name": "Doctor Strange",
    "amount": 30,
    "ability": {
      "en": "After each combat, if Doctor Strange played a card, you may deal 1 damage to him. If you do, put that card on the bottom of your deck and draw 1 card.",
      "es": "Después de cada combate, si Doctor Strange jugó una carta, puedes infligirse 1 de daño. Si lo haces, pon esa carta en la parte inferior de tu mazo y roba 1 carta."
    },
    "cards": [
      {
        "name": "Bolts of Balthakk",
        "type": "attack",
        "amount": 4,
        "value": 2,
        "boost": 3,
        "character": "any",
        "description": "During combat: You may BLIND BOOST this card.\n\nAfter combat: If you won the combat, gain 1 action.",
        "descripcion": "Durante el combate: Puedes BLIND BOOST a esta carta.\n\nDespués del combate: Si ganaste el combate, gana 1 acción."
      },
      {
        "name": "Cloak of Levitation",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 1,
        "character": "DOCTOR STRANGE",
        "description": "During combat: If Dr. Strange is adjacent to the opposing fighter, ignore the value of your opponent's card.",
        "descripcion": "Durante el combate: Si Dr. Strange está adyacente al luchador contrario, ignora el valor de la carta de tu oponente."
      },
      {
        "name": "Eye of Agamotto",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "DOCTOR STRANGE",
        "description": "Shuffle your hand into your deck. Draw 5 cards. Gain 1 action.",
        "descripcion": "Baraja tu mano en tu mazo. Roba 5 cartas. Gana 1 acción."
      },
      {
        "name": "Feint",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Master of Kamar-Taj",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "During combat: If Dr. Strange and Wong are adjacent, this card's value is 4 instead.",
        "descripcion": "Durante el combate: Si Dr. Strange y Wong están adyacentes, el valor de esta carta es 4."
      },
      {
        "name": "No Really, I'm a Doctor",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "DOCTOR STRANGE",
        "description": "Reveal a card from your hand and put it on top of your deck. Dr. Strange or a friendly fighter adjacent to him recovers health equal to that card's boost value.",
        "descripcion": "Revela una carta de tu mano y ponla en la parte superior de tu mazo. Dr. Strange o un luchador aliado adyacente a él recupera salud igual al valor de BOOST de esa carta."
      },
      {
        "name": "Seven Suns of Cinnibus",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "DOCTOR STRANGE",
        "description": "If the value of this card is above 7, ignore its value.\n\nDuring combat: You may BLIND BOOST this card up to two times.",
        "descripcion": "Si el valor de esta carta es superior a 7, ignora su valor.\n\nDurante el combate: Puedes BLIND BOOST a esta carta hasta dos veces."
      },
      {
        "name": "Steadfast Disciple",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "WONG",
        "description": "After combat: If Wong is adjacent to the opposing fighter, deal 1 damage to the opposing fighter and draw 1 card.",
        "descripcion": "Después del combate: Si Wong está adyacente al luchador contrario, inflige 1 de daño al luchador contrario y roba 1 carta."
      },
      {
        "name": "The Mists of Munnopor",
        "type": "defense",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "DOCTOR STRANGE",
        "description": "Immediately: Discard your opponent's card. They reveal cards from their deck until they reveal an attack or versatile card they can play. They play that card and randomly put the rest of the revealed cards on the bottom of their deck.",
        "descripcion": "Inmediatamente: Descarta la carta de tu oponente. Revela cartas de su mazo hasta que revele una carta de ataque o versátil que pueda jugar. Juega esa carta y coloca al azar el resto de las cartas reveladas en la parte inferior de su mazo."
      },
      {
        "name": "The Rings of Raggadorr",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, your fighter and each friendly fighter adjacent to them recover health equal to the damage dealt.",
        "descripcion": "Después del combate: Si ganaste el combate, tu luchador y cada luchador aliado adyacente a él recupera salud igual al daño infligido."
      },
      {
        "name": "The Winds of Watoomb",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 1,
        "character": "DOCTOR STRANGE",
        "description": "After combat: Your opponent places Dr. Strange in a starting space. Place the opposing fighter in another starting space. All players shuffle their decks.",
        "descripcion": "Después del combate: Tu oponente coloca a Dr. Strange en un espacio inicial. Coloca al luchador contrario en otro espacio inicial. Todos los jugadores barajan sus mazos."
      },
    ]
  },
  {
    "name": "Nikola Tesla",
    "amount": 30,
    "ability": {
      "en": "Start the game with 1 coil charged.\n\nAt the end of your turn, charge 1 coil.\n\nAt the start of your turn, if both coils are charged, deal 1 damage to each opposing fighter adjacent to Tesla and move them up to 1 space.",
      "es": "Empieza el juego con 1 bobina cargada.\n\nAl final de tu turno, carga 1 bobina.\n\nAl comienzo de tu turno, si ambas bobinas están cargadas, inflige 1 de daño a cada luchador opuesto adyacente a Tesla y muévelos hasta 1 espacio."
    },
    "cards": [
      {
        "name": "7 Hertz",
        "type": "attack",
        "amount": 3,
        "value": 4,
        "boost": 3,
        "character": "any",
        "description": "After combat: You may discharge coils:\n\n- 1 Coil: Gain 1 action.\n\n- 2 Coils: Also, draw 1 card.",
        "descripcion": "Después del combate: Puedes descargar bobinas:\n\n- 1 Bobina: Gana 1 acción.\n\n- 2 Bobinas: Además, roba 1 carta."
      },
      {
        "name": "Death Ray",
        "type": "attack",
        "amount": 3,
        "value": 3,
        "boost": 4,
        "character": "any",
        "description": "During combat: You may discharge coils:\n\n- 1 Coil: This card's value is 5.\n\n- 2 Coils: Instead, this card's value is 7.",
        "descripcion": "Durante el combate: Puedes descargar bobinas:\n\n- 1 Bobina: El valor de esta carta es 5.\n\n- 2 Bobinas: En vez de ello, el valor de esta carta es 7."
      },
      {
        "name": "Fully Charged",
        "type": "scheme",
        "amount": 2,
        "boost": 1,
        "character": "any",
        "description": "Charge both coils. Gain 1 action.",
        "descripcion": "Carga ambas bobinas. Gana 1 acción."
      },
      {
        "name": "Intense Experimentation",
        "type": "defense",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Draw 1 card. You may discharge coils:\n\n- 1 Coil: Instead, draw 2 cards.\n\n- 2 Coils: Instead, draw 3 cards and Tesla recovers 1 health.",
        "descripcion": "Después del combate: Roba 1 carta. Puedes descargar bobinas:\n\n- 1 Bobina: En vez de ello, roba 2 cartas.\n\n- 2 Bobinas: En vez de ello, roba 3 cartas y Tesla recupera 1 de salud."
      },
      {
        "name": "Kinetic Induction",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "After combat: Charge one coil. If you won the combat, charge both.",
        "descripcion": "Después del combate: Carga una bobina. Si ganaste el combate, carga ambas."
      },
      {
        "name": "Lightning Storm",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "After combat: You may discharge coils:\n\n- 1 Coil: Deal 1 damage to each opposing fighter in your zone.\n\n- 2 Coils: Instead, deal 2 damage.",
        "descripcion": "Después del combate: Puedes descargar bobinas:\n\n- 1 Bobina: Inflige 1 de daño a cada luchador opuesto en tu zona.\n\n- 2 Bobinas: En vez de ello, inflige 2 de daño."
      },
      {
        "name": "Polyphase Coils",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "Immediately: You may discharge coils:\n\n- 1 Coil: Cancel all effects on your opponent's card.\n\n- 2 Coils: Also, ignore that card's value.",
        "descripcion": "Inmediatamente: Puedes descargar bobinas:\n\n- 1 Bobina: Cancela todos los efectos de la carta del oponente.\n\n- 2 Bobinas: Además, ignora el valor de esa carta."
      },
      {
        "name": "Remote Control",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "any",
        "description": "Move all opposing fighters up to 2 spaces. Gain 1 action.",
        "descripcion": "Mueve a todos los luchadores opuestos hasta 2 espacios. Gana 1 acción."
      },
      {
        "name": "Repulsion Blast",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: Move the opposing fighter up to 2 spaces. You may discharge coils:\n\n- 1 Coil: Also, move Tesla up to 2 spaces.\n\n- 2 Coils: Also, your opponent discards 1 random card.",
        "descripcion": "Después del combate: Mueve al luchador opuesto hasta 2 espacios. Puedes descargar bobinas:\n\n- 1 Bobina: Además, mueve a Tesla hasta 2 espacios.\n\n- 2 Bobinas: Además, tu oponente descarta 1 carta al azar."
      },
      {
        "name": "The Alternating Current",
        "type": "attack",
        "amount": 2,
        "value": 5,
        "boost": 3,
        "character": "any",
        "description": "After combat: Choose one:\n\n- Charge both coils\n\n- Discharge both coils to have Tesla recover 2 health",
        "descripcion": "Después del combate: Elige uno:\n\n- Carga ambas bobinas\n\n- Descarga ambas bobinas para que Tesla recupere 2 de salud"
      },
      {
        "name": "X-Ray Radiation",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "During combat: Reveal the top card of your opponent's deck. You may discharge coils:\n\n- 1 Coil: Discard that card.\n\n- 2 Coils: Also, add its boost value to this card's value.",
        "descripcion": "Durante el combate: Revela la carta superior del mazo de tu oponente. Puedes descargar bobinas:\n\n- 1 Bobina: Descarta esa carta.\n\n- 2 Bobinas: Además, añade su valor de boost al valor de esta carta."
      },
    ]
  },
  {
    "name": "Dr. Jill Trent",
    "amount": 30,
    "ability": {
      "en": "At the start of your turn, activate one of your gadgets. Whenever Jill Trent attacks, resolve the active gadget's effect.\n\nHypnoray Blaster\nDURING COMBAT: If your card's printed value is lower than your opponent's, reveal the top card of your opponent's deck. Increase the value of your attack by the BOOST value of the revealed card.\n\nUltrabiotic Tonic\nAFTER COMBAT: If your card's printed value is higher than your opponent's, Jill Trent Recovers 1 health.",
      "es": "Al comienzo de tu turno, activa uno de tus gadgets. Siempre que Jill Trent ataque, resuelve el efecto del gadget activo.\n\nHypnoray Blaster\nDURANTE EL COMBATE: Si el valor impreso de tu carta es menor que el de tu oponente, revela la carta superior del mazo de tu oponente. Aumenta el valor de tu ataque por el valor BOOST de la carta revelada.\n\nUltrabiotic Tonic\nDESPUÉS DEL COMBATE: Si el valor impreso de tu carta es mayor que el de tu oponente, Jill Trent recupera 1 de salud."
    },
    "cards": [
      {
        "name": "Ace Fighte",
        "type": "versatile",
        "amount": 2,
        "value": 5,
        "boost": 3,
        "character": "DAISY",
        "description": "After combat: Draw 1 card.",
        "descripcion": "Después del combate: Roba 1 carta."
      },
      {
        "name": "Battle of Wits",
        "type": "attack",
        "amount": 3,
        "value": 2,
        "boost": 4,
        "character": "JILL TRENT",
        "description": "After combat: Reveal the top card of your deck and your opponent's deck. If your card has a higher BOOST value, deal 3 damage to the opposing fighter.",
        "descripcion": "Después del combate: Revela la carta superior de tu mazo y el mazo de tu oponente. Si tu carta tiene un valor de BOOST más alto, inflige 3 de daño al luchador contrario."
      },
      {
        "name": "Caught Red-Handed",
        "type": "versatile",
        "amount": 2,
        "value": 1,
        "boost": 2,
        "character": "any",
        "description": "After combat: Your opponent discards 1 card. If you won the combat, they discard 2 cards instead.",
        "descripcion": "Después del combate: Tu oponente descarta 1 carta. Si ganaste el combate, descarta 2 cartas en vez de 1."
      },
      {
        "name": "Energizing Spray",
        "type": "attack",
        "amount": 2,
        "value": 5,
        "boost": 1,
        "character": "any",
        "description": "After combat: Gain 1 action.",
        "descripcion": "Después del combate: Gana 1 acción."
      },
      {
        "name": "Gyroscopic Jetpack",
        "type": "versatile",
        "amount": 3,
        "value": 4,
        "boost": 2,
        "character": "any",
        "description": "After combat: Move your fighter up to 2 spaces. They may move through opposing fighters.",
        "descripcion": "Después del combate: Mueve a tu luchador hasta 2 espacios. Puede moverse a través de luchadores opuestos."
      },
      {
        "name": "Helpful Assistant",
        "type": "scheme",
        "amount": 2,
        "boost": 3,
        "character": "DAISY",
        "description": "Shuffle up to 3 Jill Trent cards in your discard pile back into your deck. Draw 1 card.",
        "descripcion": "Baraja hasta 3 cartas de Jill Trent en tu pila de descarte en tu mazo. Roba 1 carta."
      },
      {
        "name": "Hypnotist",
        "type": "defense",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "JILL TRENT",
        "description": "Immediately: If your active gadget is Hypnoray Blaster, cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Si tu gadget activo es Hypnoray Blaster, cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Indestructible Cloth",
        "type": "defense",
        "amount": 2,
        "value": 5,
        "boost": 2,
        "character": "any",
        "description": "Immediately: This combat, your fighter does not take damage from effects other than combat damage.",
        "descripcion": "Inmediatamente: Este combate, tu luchador no recibe daño de efectos que no sean daño de combate."
      },
      {
        "name": "Insightful Deduction",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: Reveal the top 3 cards of your opponent's deck. Put one of them on the bottom of the deck and the rest on top in any order.",
        "descripcion": "Después del combate: Revela las 3 cartas superiores del mazo de tu oponente. Pon una de ellas en la parte inferior del mazo y el resto en la parte superior en cualquier orden."
      },
      {
        "name": "Laser Pen",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: Deal 1 damage to the opposing fighter.",
        "descripcion": "Después del combate: Inflige 1 de daño al luchador contrario."
      },
      {
        "name": "Sisters in Arms",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "DAISY",
        "description": "This card's effects cannot be canceled. If Daisy and Jill Trent are adjacent and Daisy is attacking, Daisy gains the effect of Jill Trent's gadget.",
        "descripcion": "Los efectos de esta carta no pueden ser cancelados. Si Daisy y Jill Trent están adyacentes y Daisy está atacando, Daisy obtiene el efecto del gadget de Jill Trent."
      },
      {
        "name": "Stasis Diffuser",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "Immediately: The value of your opponent's card is equal to its printed value and cannot be changed.",
        "descripcion": "Inmediatamente: El valor de la carta de tu oponente es igual a su valor impreso y no puede ser cambiado."
      },

      {
        "name": "Utility Belt",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 3,
        "character": "JILL TRENT",
        "description": "After combat: Choose one:\n\n-Jill Trent recovers 1 health,\n\n-Move Jill Trent 1 space,\n\n-Draw 1 card",
        "descripcion": "Después del combate: Elige uno:\n\n-Jill Trent recupera 1 de salud,\n\n-Mueve a Jill Trent 1 espacio,\n\n-Roba 1 carta"
      },
    ]
  },
  {
    "name": "Golden Bat",
    "amount": 30,
    "ability": {
      "en": "If you haven't taken a Maneuver action this turn, add +2 to the value of Golden Bat's attacks.",
      "es": "Si no has tomado una acción de Maniobra este turno, añade +2 al valor de los ataques de Golden Bat."
    },
    "cards": [
      {
        "name": "A Punch to Shake the Earth",
        "type": "attack",
        "amount": 3,
        "value": 1,
        "boost": 1,
        "character": "any",
        "description": "After combat: Deal 1 damage to each opposing fighter in Golden Bat's zone. If you won the combat, deal 2 damage instead.",
        "descripcion": "Después del combate: Inflige 1 de daño a cada luchador contrario en la zona de Golden Bat. Si ganaste el combate, inflige 2 de daño en vez de 1."
      },
      {
        "name": "Alpine Fortress",
        "type": "scheme",
        "amount": 3,
        "boost": 3,
        "character": "any",
        "description": "Choose a card in your discard pile and shuffle it into your deck. Draw 2 cards. Move Golden Bat up to 4 spaces.",
        "descripcion": "Elige una carta en tu pila de descarte y barajala en tu mazo. Roba 2 cartas de tu mazo. Mueve a Golden Bat hasta 4 espacios."
      },
      {
        "name": "Arrive Just in Time",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "any",
        "description": "Place Golden Bat in any space.",
        "descripcion": "Coloca a Golden Bat en cualquier espacio."
      },
      {
        "name": "He Laughs at Your Feebleness",
        "type": "defense",
        "amount": 2,
        "value": 5,
        "boost": 3,
        "character": "any",
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Imposing Presence",
        "type": "defense",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "Immediately: Cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Insight of the Ancients",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "After combat: If you won the combat, return a random card in your discard pile to your hand.",
        "descripcion": "Después del combate: Si ganaste el combate, devuelve una carta aleatoria de tu pila de descarte a tu mano."
      },
      {
        "name": "Like a Flash of Golden Light",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "During combat: If Golden Bat shares no zones with the space he started this turn in, this card's value is 4 instead.\n\nAfter combat: Move Golden Bat up to 5 spaces.",
        "descripcion": "Durante el combate: Si Golden Bat no comparte zonas con el espacio en el que comenzó este turno, el valor de esta carta es 4 en vez de 2.\n\nDespués del combate: Mueve a Golden Bat hasta 5 espacios."
      },
      {
        "name": "Sight Beyond Sight",
        "type": "versatile",
        "amount": 3,
        "value": 2,
        "boost": 1,
        "character": "any",
        "description": "After combat: Look at the top 3 cards of your opponent's deck. Put them back in any order.",
        "descripcion": "Después del combate: Mira las 3 primeras cartas del mazo de tu oponente. Ponlas de nuevo en cualquier orden."
      },
      {
        "name": "Skirmish",
        "type": "versatile",
        "amount": 2,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If you won the combat, choose one of the fighters in the combat and move them up to 2 spaces.",
        "descripcion": "Después del combate: Si ganaste el combate, elige a uno de los luchadores en el combate y muevelo hasta 2 espacios."
      },
      {
        "name": "Super Strength",
        "type": "attack",
        "amount": 2,
        "value": 5,
        "boost": 1,
        "character": "any",
        "description": "",
        "descripcion": ""
      },
      {
        "name": "Terrifying Roar",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "Immediately: Fighters cannot leave their spaces for the rest of the turn.",
        "descripcion": "Inmediatamente: Los luchadores no pueden abandonar sus espacios por el resto del turno."
      },
      {
        "name": "Vaporizing Eyebeams",
        "type": "attack",
        "amount": 3,
        "value": 2,
        "boost": 2,
        "character": "any",
        "description": "After combat: Your opponent discards 1 random card.",
        "descripcion": "Después del combate: Tu oponente descarta 1 carta aleatoria."
      },
    ]
  },
  {
    "name": "Annie Christmas",
    "amount": 30,
    "ability": {
      "en": "Add +2 to the value of Annie's attacks if she has less health than the defender.",
      "es": "Añade +2 al valor de los ataques de Annie si tiene menos salud que el defensor."
    },
    "cards": [
      {
        "name": "A Few More Pearls",
        "type": "scheme",
        "amount": 3,
        "boost": 2,
        "character": "ANNIE",
        "description": "Deal 2 damage to each opposing fighter adjacent to Annie.",
        "descripcion": "Inflige 2 de daño a cada luchador contrario adyacente a Annie."
      },
      {
        "name": "Better Together",
        "type": "versatile",
        "amount": 4,
        "value": 4,
        "boost": 1,
        "character": "any",
        "description": "After combat: If your fighter is adjacent to a friendly fighter, your fighter and each friendly fighter adjacent to them recover 1 health.",
        "descripcion": "Después del combate: Si tu luchador está adyacente a un luchador aliado, tu luchador y cada luchador aliado adyacente a ellos recuperan 1 de salud."
      },
      {
        "name": "Bottom Dealing",
        "type": "attack",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "CHARLIE",
        "description": "During combat: Reveal the bottom card of your deck. Increase the value of this card by the BOOST value of the revealed card, then put the revealed card on the top or the bottom of your deck.",
        "descripcion": "Durante el combate: Revela la carta inferior de tu mazo. Aumenta el valor de esta carta por el valor BOOST de la carta revelada, luego pon la carta revelada en la parte superior o inferior de tu mazo."
      },
      {
        "name": "Captain's Orders",
        "type": "scheme",
        "amount": 2,
        "boost": 2,
        "character": "ANNIE",
        "description": "Place Annie in any space in her zone. Then, place another friendly fighter in any space in Annie's zone. Gain 1 action.",
        "descripcion": "Coloca a Annie en cualquier espacio de su zona. Luego, coloca a otro luchador aliado en cualquier espacio de la zona de Annie. Gana 1 acción."
      },
      {
        "name": "Keep Your Hands to Yourself",
        "type": "versatile",
        "amount": 3,
        "value": 3,
        "boost": 2,
        "character": "ANNIE",
        "description": "After combat: Move each fighter in the combat up to 2 spaces.",
        "descripcion": "Después del combate: Mueve a cada luchador en el combate hasta 2 espacios."
      },
      {
        "name": "Lagniappe",
        "type": "attack",
        "amount": 3,
        "value": 5,
        "boost": 2,
        "character": "ANNIE",
        "description": "Immediately: Deal up to 2 damage to Annie to draw that many cards. (This may cause her special ability to apply.)",
        "descripcion": "Inmediatamente: Inflige hasta 2 de daño a Annie para robar esa cantidad de cartas. (Esto puede hacer que se aplique su habilidad especial.)"
      },
      {
        "name": "Long Shot",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 1,
        "character": "any",
        "description": "During combat: If the opposing fighter is not adjacent to your fighter, this card's value is 5 instead.",
        "descripcion": "Durante el combate: Si el luchador contrario no está adyacente a tu luchador, el valor de esta carta es 5 en vez de 3."
      },
      {
        "name": "Mississippi Queen",
        "type": "defense",
        "amount": 3,
        "value": 2,
        "boost": 3,
        "character": "ANNIE",
        "description": "Immediately: Damage cannot reduce Annie's health below 1 this turn.",
        "descripcion": "Inmediatamente: El daño no puede reducir la salud de Annie por debajo de 1 este turno."
      },
      {
        "name": "Quite a Pair",
        "type": "versatile",
        "amount": 2,
        "value": 3,
        "boost": 2,
        "character": "any",
        "description": "Immediately: You may reveal two cards from your hand with the same name. If you do, cancel all effects on your opponent's card.",
        "descripcion": "Inmediatamente: Puedes revelar dos cartas de tu mano con el mismo nombre. Si lo haces, cancela todos los efectos de la carta del oponente."
      },
      {
        "name": "Slick Talker",
        "type": "defense",
        "amount": 2,
        "value": 3,
        "boost": 3,
        "character": "any",
        "description": "Immediately: Annie and Charlie may swap spaces. If they do, your other fighter is now the defender.",
        "descripcion": "Inmediatamente: Annie y Charlie pueden intercambiar espacios. Si lo hacen, tu otro luchador es ahora el defensor."
      },
      {
        "name": "Striking Beauty",
        "type": "versatile",
        "amount": 2,
        "value": 1,
        "boost": 3,
        "character": "ANNIE",
        "description": "After combat: Deal 1 damage to the opposing fighter. If you won the combat, deal 2 damage instead.",
        "descripcion": "Después del combate: Inflige 1 de daño al luchador contrario. Si ganaste el combate, inflige 2 de daño en vez de 1."
      },
      {
        "name": "The Turn and the River",
        "type": "versatile",
        "amount": 2,
        "value": 2,
        "boost": 3,
        "character": "CHARLIE",
        "description": "After combat: Draw 2 cards.",
        "descripcion": "Después del combate: Roba 2 cartas."
      },
    ]
  },
]
