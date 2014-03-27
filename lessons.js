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
    title: 'Save Blush!',
    instructions: 'Blush is a friendly monster; he can help you find Prince Cotter if you save him from Slush and Flush. The metacharacter <code>.</code>\'s superpower is matching any character. But what if you only want to match specific characters? You can put the characters you DO want to match inside a set of brackets, separated by a pipe. The pipe means \'Or\'.  <code>[W|P]</code> means: match the thing on the left side (W) OR the thing on the right side (P), and nothing else! <p>Destroy Slush and Flush, <strong> but spare Blush </strong></p>',
    people: [
      {
        name: 'Blush',
        enemy: false,
        killed: false,
        img: 'monsters/friendly1'
      },
      {
        name: 'Slush',
        enemy: true,
        killed: false,
        img: 'monsters/monster6'
      },
      {
        name: 'Flush',
        enemy: true,
        killed: false,
        img: 'monsters/monster6b'
      }
    ],
    hint: "Make sure to put the specific characters you want matched within the pipe!"
  },
  {
    title: 'Great job! It\'s time to save Prince Cotter!',
    instructions: 'Prince Cotter is being held captive by Blush\'s evil brothers: Blu5h and Blu8h. Their names are deceptively similar, but the brothers have numbers in their name. To match any single digit, use the metacharacter <code>\\d</code>. <strong>Don\'t hit the prince or Blush!</strong>',
    people: [
      {
        name: 'Cotter',
        enemy: false,
        killed: false,
        img: 'monsters/cotter'
      },
      {
        name: 'Blush',
        enemy: false,
        killed: false,
        img: 'monsters/friendly1'
      },
      {
        name: 'Blu5h',
        enemy: true,
        killed: false,
        img: 'monsters/friendly1b'
      },
      {
        name: 'Blu8h',
        enemy: true,
        killed: false,
        img: 'monsters/friendly1c'
      }
    ],
    hint: 'Don\'t get tripped up by the numbers! Use your new weapon similarly to how you would use the <code>.</code>!'
  },
  {
    title: 'A mimic has appeared!',
    instructions: 'On your way back home, you run into Faux Cotter! You can\'t tell which prince is which by looking at them, but your regex powers know. To match Faux Cotter, make use of the metacharacter <code>\\s</code> to match the space in his name.',
    people: [
      {
        name: 'Cotter',
        enemy: false,
        killed: false,
        img: 'monsters/cotter'
      },
      {
        name: 'Faux Cotter',
        enemy: true,
        killed: false,
        img: 'monsters/cotter'
      }
    ],
    hint: ''
  },
  {
    title: 'Oh no! Captured again!',
    instructions: 'Prince Cotter has been captured by the monsters Big Grek and Lil Grek. To save Prince Cotter and win the game, defeat them!',
    people: [
      {
        name: 'Big Grek',
        enemy: true,
        killed: false,
        img: 'monsters/monster5'
      },
      {
        name: 'Lil Grek',
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
    hint: 'Don\'t kill Cotter! Kill both of the monsters, though!'
  }
];

