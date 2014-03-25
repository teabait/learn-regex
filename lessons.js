var lessons = [
  {
    title: "Leran Regular Expressions by Slaying Monsters!",
    instructions: '<p>RegEx is a powerful language that lets you search for patterns in text. We\'ll use it to defeat the evil creatures that stand between us and Prince Cotter, who\'s trapped in the cave.</p><p>Defeat your first enemy by typing it\'s name, <code>Zord</code>, below.</p>',
    people: [
      {
        name: 'Zord',
        enemy: true,
        killed: false
      }
    ]
  },
  {
    title: 'Nice! You just wrote your first RegEx.',
    instructions: 'But let\'s be honest, it was pretty weak. This time, kill both enemies at once by typing <code>.ord</code>',
    people: [
      {
        name: 'Zord',
        enemy: true,
        killed: false
      },
      {
        name: 'Bord',
        enemy: true,
        killed: false
      }
    ]
  },
  {
    title: 'Whoa, what was that!?',
    instructions: 'Regular Expressions have <i>metacharacters</i>, with special powers. You just used <code>.</code> which is like a wildcard, that matches any <i>single</i> character. Try it again! Write a RegEx that will match both <code>Zory</code> and <code>Zora</code>',
    people: [
      {
        name: 'Zory',
        enemy: true,
        killed: false
      },
      {
        name: 'Zora',
        enemy: true,
        killed: false
      }
    ]
  },
  {
    title: 'You\'re getting the hang of it!',
    instructions: 'Try and write a regex that matches both of these. Remember, <code>.</code> is a wildcard that will match any <i>single</i> character!',
    people: [
      {
        name: 'Khan',
        enemy: true,
        killed: false
      },
      {
        name: 'Sman',
        enemy: true,
        killed: false
      }
    ]
  }
];

