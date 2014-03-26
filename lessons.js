var lessons = [
  {
    title: "Learn RegEx by Slaying Monsters!",
    instructions: '<p>Regular Expressions (RegEx, for short) are powerful weapons that let you search for patterns in text. We\'ll use them in our quest to rescue Prince Cotter to match the name of the Monsters that are holding him captive!</p><p>Defeat your first enemy by typing it\'s name, <code>Zord</code>, below.</p>',
    people: [
      {
        name: 'Zord',
        enemy: true,
        killed: false,
        img: 'monsters/monster1'
      }
    ],
    hint: "Remember: RegEx is case sensitive!"
  },
  {
    title: 'Nice! You just wrote your first RegEx.',
    instructions: 'But let\'s be honest, it was pretty weak. This time, kill both enemies at once by typing <code>.ord</code>',
    people: [
      {
        name: 'Ford',
        enemy: true,
        killed: false,
        img: 'monsters/monster2'
      },
      {
        name: 'Bord',
        enemy: true,
        killed: false,
        img: 'monsters/monster2b'
      }
    ],
    hint: "Make sure to kill both monsters!"
  },
  {
    title: 'Whoa, what was that!?',
    instructions: 'Regular Expressions have <i>metacharacters</i>, with special powers. The one you just used (<code>.</code>) is a wildcard, that matches any <i>single</i> character. Try it again! Write a RegEx that will match both <code>Zory</code> and <code>Zora</code>',
    people: [
      {
        name: 'Zory',
        enemy: true,
        killed: false,
        img: 'monsters/monster3'
      },
      {
        name: 'Zora',
        enemy: true,
        killed: false,
        img: 'monsters/monster3b'
      }
    ],
    hint: "Don't forget case sensitivity!"
  },
  {
    title: 'You\'re getting the hang of it!',
    instructions: 'Try and write a regex that matches both of these. Remember, <code>.</code> is a wildcard that will match any <i>single</i> character!',
    people: [
      {
        name: 'Khan',
        enemy: true,
        killed: false,
        img: 'monsters/monster4'
      },
      {
        name: 'Sman',
        enemy: true,
        killed: false,
        img: 'monsters/monster4b'
      }
    ],
    hint: "The placement of the wildcard is a little different for this one! Try again!"
  },
  {
    title: 'One more!',
    instructions: 'Try and write a regex that matches both of these. Remember, <code>.</code> is a wildcard that will match any <i>single</i> character!',
    people: [
      {
        name: 'Hlack',
        enemy: true,
        killed: false,
        img: 'monsters/monster1'
      },
      {
        name: 'Slacy',
        enemy: true,
        killed: false,
        img: 'monsters/monster1b'
      }
    ],
    hint: "The placement of the wildcard is a little different for this one! Try again!"
  },
  {
    title: 'Great job! It\'s time to save Prince Cotter!',
    instructions: 'Prince Cotter is being held captive by the monsters Bolter and Holker. To save Prince Cotter and win the game, defeat Bolter and Holker, but make sure not to hit the Prince!',
    people: [
      {
        name: 'Bolter',
        enemy: true,
        killed: false,
        img: 'monsters/monster5'
      },
      {
        name: 'Holker',
        enemy: true,
        killed: false,
        img: 'monsters/monster5b'
      },
      {
        name: 'Cotter',
        enemy: false,
        killed: false,
        img: 'monsters/cotter'
      }
    ],
    hint: "Don't kill Cotter! Kill both of the monsters, though!"
  }
];

