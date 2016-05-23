# Here you can extend the default settings.
# TODO: alphabatize each
Settings.dragonVersion = 5
Settings.defaultBrowser = "Google Chrome"
# Settings.dragonApplicationName = "Dragon" temporary fix TODO: still needed?


# APPLICATIONS
Settings.extend "applications",
  text: "TextEdit"
  termy: "Terminal"
  terminal: "Terminal"
  slacker: "Slack"
  monitor: "Activity Monitor"


# REPETITION WORDS
Settings.extend "repetitionWords",
  "foof": 4 # Inspired by the german 'funf'


# DIRECTORIES
Settings.extend "directories",
  "components": "~/more-yellowdev/fsj/git/a-key/kindred-components"
  "commando": "~/voicecode/commando"
  "my notes": "~/notes"
  "pictures": "~/more-yellowdev/fsj/ym-apps/upicsProject"
  "sandbox": "~/more-yellowdev/fsj/git/a-key/yellowsandbox"
  "solid iron": "~/more-yellowdev/fsj/ym-apps/ironview"
  "toolbox": "~/more-yellowdev/toolbox"
  "yellow": "~/more-yellowdev/"


# WEBS
Settings.extend "websites",
  twitter: "http://twitter.com"
  "the tube": "http://youtube.com"
  "white noise": "https://www.youtube.com/watch?v=SAyA7rfyF38&list=PLOxyk-LNhApLXeT0rwIom42d3Kz1odXWD"
  "playlist to": "https://www.youtube.com/watch?v=0Dfa65ULK3U&list=PLOxyk-LNhApK3qUKyM_Bc0o12Bq2wuq5P"
  "term cuts": "http://beerpla.net/2008/12/22/mastering-the-linux-shell-bash-shortcuts-explained/"
  "script time": "https://gist.github.com/LeCoupa/304493f4914d4e013c3b#file-date-object-cheatsheet-js-L35"
  "script moment": "http://momentjs.com/docs/"
  "plural site": "https://app.pluralsight.com/library/"
  "voicecode vocab": "http://commando:5000/vocab"
  "voicecode commands": "http://commando:5000/commands"
  "google design": "https://design.google.com/"
  "google news": "https://news.google.com/"
  "goober flowchart": "https://drive.google.com/drive/u/0/folders/0B1UtLF9ZEXTib2Ywenk5ckdRQW8"
  "google music": "https://play.google.com/music/listen?authuser&u=0#/now"
  "my drive": "https://drive.google.com/drive/u/0/my-drive"
  "github": "https://github.com/henns20/"
  fight: "http://mmafighting.com"


# Extend Or Add Vocabulary from
Settings.extend "vocabulary", [
  "divish"
  "nodey"
  "foof"
  "gulpy"
  "theming"
  "scrump"
  "laddie"
  "selty"
  "Hennelly"
]


# shellCommands
Settings.extend "shellCommands",
"atom .": "atom ./"
"copy recursive": "cp -rf "
'pseudo-': 'sudo '
'pseudo': 'sudo '
"said": "sed "
"grep": "grep "
"hawk": "awk "
"make": "mkdir "
"location": "pwd"
"touch": "touch "
"special sink": "rsync -ravh"
"long": "ls -lh "
"our sink": "rsync -rv "
"see make": "cmake .."
"shuffle": "shuf "
"symbolic link": "ln -s "
"tale": "tail "
"tar": "tar -cvvf "
"untar": "tar -xf"


# My Translations
Settings.extend 'translations',
  "divish": "div"
  "voice code": "voicecode"
  "nerb install": "npm install"
  "nerb development": "npm install --save-dev"
  "nerb version": "node --version"
  "nerb pack version": "npm --version"
  "nerb back version": "npm --version"
  "nerb package": "npm"
  "my signature": "Cheers, \nJamie"
  "my sincerely": "Sincerely, \nJamie"
  "hyper": "http"
  "paul": "height" # paul phonetic to tall
  "sheltie": "shell"
  "lori": "lorem"
  "pixels": "px"
  "carmen": "karma"
  "swallow": "gulp"
  "corey": "core"
  "ms.": "is"
  "mark": "mock"
  "jazzy dump": "dump" # jasmine logging
  "jazzy don\'t": "dump"
  "ray": "array"
  "to do": "TODO"
  "2 do": "TODO"
  "andy": "end"
  "bill": "d"
  "jason": "json"
  "fodder": "footer"
  "cashed": "cached"
  "cash": "cache"
  "jitter": "github"
  "git are": "github"
  "bauer": "bower"
  # for atom gulp snippets didn't work with swallow
  "gusty task": "gus"
  "dusty task": "gus"
  "gusty pipe": "gup"
  "gusty watch": "guw"
  "gusty soup": "gust2"
  "gusty trace": "gust3"
  "gusty foof": "gust4"
  "gusty fypes": "gust5"
  "dusty soup": "gus"
  "dusty pipe": "gup"
  "dusty watch": "guw"
  "dusty soup": "gust2"
  "dusty trace": "gust3"
  "dusty foof": "gust4"
  "dusty fypes": "gust5"
  "node mom": "nodemon"
  # TODO: things like this may be best with relative environments*(atom for example)
  "store": "*"
  "story": "store"
  "don": "done"
  "wire depot": "wiredep"
  "henley": "Hennelly"
  "emily": "Hennelly"
  "jamie": "Jamie"


# Abbreviations
Settings.extend "abbreviations",
  demonstration: "demo"
  demonstrations: "demos"
  library: "lib"
  logger: "log"
  example: "ex."
  describe: "des"
  before: "bef"
  after: "aft"
  "not defined": "notd"
  array: 'arr'
  element: 'el'
  maximum: 'max'
  category: 'cat'
  distribution: 'dist'
  destination: 'dest'
  mister: 'Mr.'
  revenue: 'rev'
  message: 'msg'
  config: "conf"


# passwords
Settings.extend "passwords",
sports: "**********"
google: "**********"
