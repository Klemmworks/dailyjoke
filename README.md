# npm package - @klemmworks/dailyjoke

The one-and-only npm package that returns one or more topical holiday jokes, every single day.
- see [NationalToday](https://nationaltoday.com/today/)

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

### Joke Type
```
{
  for: string //Name of Special Day the joke relates to
  setup: string //Optional, since one-liners exist. Blank string if so.
  punchline: string
}
```