var palette = ["#ffae29", "#00b896", "pink", "#fff"];
var bgPalette = [...palette];
bgPalette = bgPalette.concat(bgPalette.splice(0,bgPalette.length-1));

// yellow, green, red
var index = 1;
var body = document.body;
var button = document.getElementById('button');
var intro = document.getElementById('intro');

button.style.backgroundColor = palette[0];
body.style.backgroundColor = bgPalette[0];
intro.style.backgroundColor = palette[0];
  

function paint() {
   body.style.backgroundColor = bgPalette[index];
   button.style.backgroundColor = palette[index];
   intro.style.backgroundColor = palette[index];
   index = (index+1)%(palette.length);
};

function scrollToIntro(){
   intro.scrollIntoView({behavior: "smooth"});
}