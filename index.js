import jan from "/jokes/january.json";
import feb from "/jokes/february.json";
import mar from "/jokes/march.json";
import apr from "/jokes/april.json";
import may from "/jokes/may.json";
import jun from "/jokes/june.json";
import jul from "/jokes/july.json";
import aug from "/jokes/august.json";
import sep from "/jokes/september.json";
import oct from "/jokes/october.json";
import nov from "/jokes/november.json";
import dec from "/jokes/december.json";
const year = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];

function dailyJoke(){
    const today = new Date();
    return year[today.getMonth()][today.getDate()];
}

module.exports = dailyJoke;