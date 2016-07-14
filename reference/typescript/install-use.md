## installation
    - (using node js versus visual studio it comes installed)

    - npm install -g typescript
    - tsd(typescript definition manager)
        - npm install tsd -g
        - tsd <typings package>

    - tsconfig.json
        - this is an important file to get type scripts working and compiling in the project
        - NOTE: issue in project starting up typescript not compiling
            - issue was tsconfig.json at a type error(,after file globs property(last))
            - so this is sort of the automatic starter to tsc being the engine


references:
[definitely typed](http://definitelytyped.org/)
