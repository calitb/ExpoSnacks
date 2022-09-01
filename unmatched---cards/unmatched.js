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
    "cards": []
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
    "cards": []
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
    "amount": 30,
    "cards": []
  },
  {
    "name": "Moon Knight",
    "amount": 30,
    "cards": []
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
    "cards": [
      
    ]
  },
  {
    "name": "Medusa",
    "amount": 30,
    "cards": [
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
    "cards": [
      
    ]
  },
  {
    "name": "Beowulf",
    "amount": 30,
    "cards": [
      
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
  }
]
