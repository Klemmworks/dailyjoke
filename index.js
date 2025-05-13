const jan = require("./jokes/january.json");
const feb = require("./jokes/february.json");
const mar = require("./jokes/march.json");
const apr = require("./jokes/april.json");
const may = require("./jokes/may.json");
const jun = require("./jokes/june.json");
const jul = require("./jokes/july.json");
const aug = require("./jokes/august.json");
const sep = require("./jokes/september.json");
const oct = require("./jokes/october.json");
const nov = require("./jokes/november.json");
const dec = require("./jokes/december.json");

const year = [
    jan, 
    feb, 
    mar, 
    apr, 
    may, 
    jun, 
    jul, 
    aug, 
    sep, 
    oct, 
    nov, 
    dec
];

function dailyJoke (returnFullList = false) {
    const today = new Date();
    const monthIndex = today.getMonth();
    const dayIndex = today.getDate() - 1;
    const jokesOfTheMonth = year.at(monthIndex);
    const jokesOfTheDay = jokesOfTheMonth.at(dayIndex).jokes;
    if (returnFullList) return jokesOfTheDay;
    const randomDecimal = Math.random();
    const randomIndex = Math.floor(randomDecimal * 100) % jokesOfTheDay.length;
    const joke = jokesOfTheDay[randomIndex];
    return joke;
}

module.exports = dailyJoke;