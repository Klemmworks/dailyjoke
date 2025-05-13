# @klemmworks/dailyjoke

The one-and-only npm package that returns one or more topical holiday jokes, every single day.
- see [NationalToday](https://nationaltoday.com/today/)  

## Package Intention
These jokes are intended to be:
1. inoffensive 
1. light-hearted
1. generally respectful
1. akin to a dad joke  

Please [create an issue](https://github.com/Klemmworks/dailyjoke/issues/new/choose) if you feel any joke falls outside these bounds.

## Installation
`npm install --save @klemmworks/dailyjoke`

## Use
`const dailyJoke = require('@klemmworks/dailyjoke')`  
`import dailyJoke from '@klemmworks/dailyjoke'` 

`console.log(dailyJoke()) //returns Joke`  
or  
`console.log(dailyJoke(true)) //returns Array<Joke>`  

### Function Signature
```
function dailyJoke (
  returnFullList = false
) : Joke | Array<Joke> {}
```
### Type Definition
```
type Joke {
  for: string //Name of Special Day the joke relates to
  setup: string //Optional, since one-liners exist. Blank string if so.
  punchline: string
}
```