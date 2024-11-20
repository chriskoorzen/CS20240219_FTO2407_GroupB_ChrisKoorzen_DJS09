# DJS09: Couch Surfing | Typescript Practice

## Code Overview

- Expanded interfaces: gave an explicit named interface to some anonymous defined types:
    ```ts
    interface User{...};     // The logged in user
    interface GeoData{...};  // Used in footer<DOMElement>
    ```
- Moved statically defined data to its own module ```data.ts```
- Moved all defined functions to the ```utils.ts``` module.
- Added JSDoc annotations to all defined functions
- All else as per Scrimba lessons


## Challenges Overview

### (Inherited) Project Config
Had some issues with the default project build config.\
Got around it by deleting the configs, and starting fresh with the basic TypeScript compiler only. It worked just fine, compiling .ts files into its equivalent .js files.\
The drawback however, was, files that contained only declarations like "interfaces" and "types", would compile to an empty .js file, which is aesthetically displeasing. This was not a worry until the project was completed. Afterwards, I tacked on webpack, to compile the output .js files into a singular .js file for production.\
This needed a intermediate build step (yes, there are add-ons that can do everything at once, but I aimed to keep it simple, and challenge my understanding of JS compilation, and configurations).\
I created two script commands: ```compile``` which would use ```tsc``` to compile .ts files into .js files, and ```bundle``` that runs ```webpack``` to bundle the .js files into a single file. Next, I chained these two commands as ```build``` to do everthing at once. But here I ran into another problem.


### TypeScript and QuerySelector Antagonism
During development, whenever I compiled the .ts files, the compiler would complain with this message:\
```HTMLElement is possibly 'null'```

It (correctly) assumes that a queryselector does not guarantee a return of an HTMLElement. I ignored this, because _I could guarantee it_ . The script was deferred on loading, and the HTMLElements statically declared. _It was definitely going to be there_. The produced .js files worked without any issues.

But now the problem: Since the ```build``` script was just a chaining of commands in the shell using the ```&&``` operator, it would never get past this compilation step, because the TypeScript compiler would exit with an error code, stopping the next sequence of commands to run.

Very annoying. I knew the code was going to be fine anyway. It felt like the compiler was just trolling. I needed to squash the errors. Luckily there was a few solutions available.


- #### 1. Non-null Assertion
    The ugliest (and most dangerous imo) was the use of the "non-null assertion operator" ```!```. You would use it whenever you try to access the object, for example: 
    ```js
    const someElement = document.querySelector("#someElement");
    someElement!.innerText = "Hey man";
    ```
    This explicitly tells the compiler the object won't be null (to ignore checking it, actually). I did not want to litter my code with ```!```'s all over the place like a screaming madman. Nor did I want to turn type checking off (and maybe forget about it later).


- #### 2. Explicit Checking
    The next solution was to add an additional error check into the code.
    ```js
    const someElement = document.querySelector("#someElement");
    if (!someElement) {
        throw new ReferenceError("someElement not found.");
    };
    someElement.innerText = "Hey man";
    ```
    Oh hell no. I'm not going to add null checks for every selected DOMElement, when I can guarantee its going to exist.


- #### 3. Typecasting
    This solution involved telling TypeScript what the type of the object is explicitly, overriding its type inference.
    ```js
    const someElement = document.querySelector("#someElement") as HTMLElement;
    ```
    Sexy. Succint. Sleek.

    Because it was guaranteed that these objects would exist at runtime, I could safely override TypeScript's type inference. It no longer had to guess if there was a ```null``` object.


\
This got the compiler to shut up, and exit with a success code. Now the rest of the ```build``` script would run without issues and produce a nice, neat singular file for production.


## Feedback
### Good
- A good intro to TypeScript.
- Fun to resolve compilation issues.
- Learned quite a bit about config and project setup.


### Bad
- Lack of coherency within the project itself.
- Ugly imperative code, modifying objects seemingly at random - no logical process to page UX.