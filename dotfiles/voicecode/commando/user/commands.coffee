# add any custom commands here

###
  Opening Or Switching Applications without `fox` command
  @desc Based on the following conversation
  https://voicecode.slack.com/archives/issues/p1446556114000144
  @jjthrash member of voicecode suggested this instead of using command 'fox'
###
@myApplications =
  chromy: "Google Chrome"
  tradam: "Atom"
  slacker: "Slack"
  turmit: "iTerm"
  safari: "Safari"
  "ted it": "TextEdit"
  termy: 'Terminal'
  finder: 'Finder'
  monitor: 'Activity Monitor'

_.each myApplications, (value, key) ->
  Commands.create key,
    description: "open #{value}"
    tags: ["user"]
    action: ->
      @openApplication value


# Fixes for native command
Commands.addMisspellings "tarp", ["thorpe", "torp", "corp.", "we"] # Added 'we' as an experiment
Commands.addMisspellings "shock", ["shark", "shop", "sharp"]
Commands.addMisspellings "trundle", ["trumbull"]
Commands.addMisspellings "trex", ["treks", "trucks"] # Does not work w/ alphabet commands leaving it as a reminder
Commands.addMisspellings "smash", ["smashed"]
Commands.addMisspellings "rootscope", ["rudy scope"]
Commands.addMisspellings "skoosh", ["skittish"]
Commands.addMisspellings 'laddie', ['latty', 'lottie']
Commands.addMisspellings "swipe", ["swype"]
Commands.addMisspellings "cram", ["graham"]
Commands.addMisspellings "-", ["minas", "dash"]


###
Native command changes
Inspired by @hjp
NOTE: a. added to vocab in user.settings.coffee, imported to dragon - made sure in dragon
  b. Currently not working overall printing out both scrish and scrump, even after restart
  TODO: clean this up before pull request, even just a note that I have not got it working & extend vocab versus adding it manually to dragon.
Commands.changeName "loco", "laddie"
Commands.changeName "scrish", "scrump"
Commands.changeName "seltill", "selty"
###


# Basic(start): my additions to help general coding
Commands.create  "varble",
  grammarType: "individual"
  description: "var misrecognition fix "
  misspellings: ["verbal"]
  tags: ["user"]
  action: (input) ->
    @string 'var '

Commands.create  "dequest",
  grammarType: "individual"
  description: "? ternary helper"
  tags: ["user"]
  action: (input) ->
    @string ' ? '

Commands.create  "triquals",
  grammarType: "individual"
  description: "3 equals operator addition"
  tags: ["user"]
  action: (input) ->
    @string ' === '

Commands.create  "wamper",
  grammarType: "individual"
  description: "&& spaced out"
  tags: ["user"]
  action: (input) ->
    @string ' && '

Commands.create  "chroosh",
  grammarType: "individual"
  description: "move right 1 then space"
  tags: ["user"]
  action: ->
    @right()
    @space()

Commands.create  "cripe",
  grammarType: "individual"
  description: "move right 1 then swipe"
  tags: ["user"]
  action: ->
    @right()
    @string ', '

Commands.create 'doosunk',
  description: 'combo for doom sunk'
  tags: ['user', 'combo']
  repeatable: true
  action: ->
    @down()
    @string ';'

###
TODO:
Commands.create 'keyshock',
  description: 'combo shockey + shock'
  tags: ['user', 'combo']
  repeatable: true
  action: ->
###


# basic angular javascript commands
Commands.create  "angie-bute",
  grammarType: "individual"
  description: "angular style attribute"
  tags: ["user", "angular"]
  action: (input) ->
    @string 'ng-=""'
    @left()
    @left()
    @left()

Commands.create  "angie",
  grammarType: "individual"
  description: "angular ng - snippet helper. Saying angie module will output ngmodule, etc."
  tags: ["user", "angular"]
  action: (input) ->
    @string 'ng'

Commands.create  "angie-div",
  grammarType: "individual"
  description: "angular snippet helper"
  tags: ["user", "angular"]
  action: (input) ->
    @string 'ngdiv'

Commands.create  "musty",
  grammarType: "individual"
  description: "angular & mustache binding convention"
  tags: ["user", "angular", "mustache"]
  action: ->
    @string '{{}}'
    @left()
    @left()

Commands.create 'rootscope',
  description: 'fix for not working alone'
  tags: ['user', 'angular']
  repeatable: true
  action: ->
    @string 'rootScope'


# Markdown commands
Commands.create 'starkoosh',
  description: 'star plus a right space for markdown notes use'
  tags: ['user', 'markdown']
  repeatable: true
  action: ->
    @string '*'
    @space()

Commands.create 'plukoosh',
  description: '+ plus a right space for markdown notes use'
  tags: ['user', 'markdown']
  repeatable: true
  action: ->
    @string '+'
    @space()

Commands.create 'minkoosh',
  description: '- plus a space right for markdown notes use'
  tags: ['user', 'markdown']
  repeatable: true
  action: ->
    @string '-'
    @space()

Commands.create 'poundkoosh',
  description: '# plus a space right for markdown notes use'
  tags: ['user', 'markdown']
  repeatable: true
  action: ->
    @string '#'
    @space()

Commands.create 'dupound',
  description: '## plus a space right for markdown notes use'
  tags: ['user', 'markdown']
  repeatable: true
  action: ->
    @string '##'
    @space()

Commands.create 'tripound',
  description: '### plus a space right for markdown notes use'
  tags: ['user', 'markdown']
  repeatable: true
  action: ->
    @string '###'
    @space()
