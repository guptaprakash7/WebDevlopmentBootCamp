function makeColor(r, g, b){
    const color = {};
    color.r = r,
    color.g = g,
    color.b = b,

    color.rgb = function(){
console.log(this)
const {r,g,b} = this;
console.log(`rgb(${r}, ${g}, ${b})`);
    }
return color;
}

const colors = makeColor(35, 45, 66);