function makeColor(r, g, b){
    this.r = r,
    this.g = g,
    this.b = b
    this.hex = function(){
        
    }
}
makeColor.prototype.rgb = function(){
    console.log(this)
    const {r,g,b} = this;
    console.log(`rgb(${r}, ${g}, ${b})`);
}

const colors = new makeColor(35, 45, 66);
const color2 = new makeColor(352, 45, 66);