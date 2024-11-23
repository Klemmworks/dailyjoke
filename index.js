const jan = [];
const feb = [];
const mar = [];
const apr = [];
const may = [];
const jun = [];
const jul = [];
const aug = [];
const sep = [];
const oct = [];
const nov = [];
const dec = [];
const year = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];

function dailyJoke(){
    const today = new Date();
    return year[today.getMonth()][today.getDate()];
}

module.exports = dailyJoke;