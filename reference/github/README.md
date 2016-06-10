## github & git toolbox
  * tools, references, etc. to help streamline working with github & git


## inbox

__Streamlining github pages into your development process__
  * [option 1: using git tech only](https://gist.github.com/cobyism/4730490)
    * also includes a way to automate with a shell command(& gulp)
  * [option 2: using a third-party script](https://github.com/X1011/git-directory-deploy )
    * advantages: do not have to maintain build/dist in your master branch
    * disadvantages: uses tech beyond git(maintainability)
    *

__My process regarding option 1__

- git ghp-deploy build
- git shell command location: /usr/local/bin
    - file: git-ghp-deploy
