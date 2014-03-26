var lessons = [
  {
    title: "Learn RegEx by Slaying Monsters!",
    instructions: '<p>Regular Expressions (RegEx, for short) are powerful weapons that let you search for patterns in text. We normally use them to validate email addresses, phone numbers, filter spreadsheets, and more!</p><p>But today we\'ll use them in our quest to rescue Prince Cotter to match the name of the monsters that are holding him captive!</p><p>To defeat your first enemy, Zord, you need to write a regex that matches his name. The simplest regex that matches every character in the name Zord is <code>Zord</code>.</p>',
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
    instructions: 'But let\'s be honest, it was pretty weak. This time you need to defeat TWO monsters with ONE regex. You can use the wildcard character <code>.</code> to stand in for any single character. Kill both enemies at once by typing <code>.ord</code>',
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
    title: 'You just used a metacharacter!',
    instructions: 'The (<code>.</code>) you just used is a metacharacter &mdash; a symbol with special powers. Use it again! Write a RegEx that will match both <code>Zory</code> and <code>Zora</code>',
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
    hint: "Don't forget case sensitivity and be aware of the position of the wildcard."
  },
  {
    title: 'More Monsters!',
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
    instructions: 'Prince Cotter is being held captive by the monsters Bolter and Holker. To save Prince Cotter and win the game, defeat Bolter and Holker, <strong>but make sure not to hit the Prince!</strong>',
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
  },
  {
    title: 'Oh no! Captured again!',
    instructions: 'Prince Cotter has managed to get himself tangled up with a whole new breed of beastie! These new, tougher monsters have letters and numbers in their names. Defeat the monster ZL33t to free Cotter! <strong>Don\'t hit the prince!</strong>',
    people: [
      {
        name: 'Cotter',
        enemy: false,
        killed: false,
        img: 'monsters/cotter'
      },
      {
        name: 'ZL33t',
        enemy: true,
        killed: false,
        img: 'monsters/monster7'
      }
    ],
    hint: "Don't get tripped up by the numbers! Use the skills you've already learned!"
  },
  {
    title: 'Save Blish!',
    instructions: 'Blish is a friendly monster; he can help you find your way home if you save him from P4ish and 66ish. The metacharacter <code>.</code>\'s superpower is matching any character. But what if you only want to match numbers? Use <code>\\d</code> instead! <strong>Remember: You don\'t want to hit the good guys!</strong>',
    people: [
      {
        name: 'Cotter',
        enemy: false,
        killed: false,
        img: 'monsters/cotter'
      },
      {
        name: 'Blish',
        enemy: false,
        killed: false,
        img: 'monsters/friendly1'
      },
      {
        name: 'P4ish',
        enemy: true,
        killed: false,
        img: 'monsters/monster6'
      },
      {
        name: '66ish',
        enemy: true,
        killed: false,
        img: 'monsters/monster6b'
      }
    ],
    hint: "Make sure you're using a backslash! And don't match the good guys!"
  }
];

