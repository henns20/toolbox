- [microsoft/typescriptsamples github repo](https://github.com/Microsoft/TypeScriptSamples)
- [code from Anders Hejlsberg Build 2016 presentation](https://github.com/microsoft/typescript-build2016-demos)
- [Anders Hejlsberg Build 2016 presentation](https://channel9.msdn.com/Events/Build/2016/B881)
- [definitely typed](http://definitelytyped.org/)

# Typescript shortcut convention

- Constructor/class/properties creation

- 1. Traditional Class Convention

```
 // Traditional Class Convention

class Animal{
    name: string
    constructor(name: string) {
        this.name = name;
    }
}

// Typescript Provided Shortcut


class Animal {
    constructor(public name: string) {}
}
```
