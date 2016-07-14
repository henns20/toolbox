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


## Scenarios

### Working with the future branch(branch or another branch)

- Keeping up to date with master
    * http://stackoverflow.com/questions/19758915/keeping-a-branch-up-to-date-with-master
    * http://stackoverflow.com/questions/5691557/how-can-i-keep-my-branch-up-to-date-with-master-with-git
    * When everything is local(in development & master local is changing)
        *   add steps here


__overwrite In git__

- [git overwrite master with branch](http://stackoverflow.com/questions/30105210/git-overwrite-master-with-branch)
    - 1 issue I had: gulp would not work in master when I did it from github pages
    - make a copy of modules/package.json
    - forcing push overwrite remote master(as a second step) git push --force ...

__Push a new local branch to a remote__
    - [stack overflow](http://stackoverflow.com/questions/2765421/push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too)
    - git push -u origin <branch>
