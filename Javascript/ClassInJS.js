class MakeColor {
    constructor(r, g, b){
        this.r = r,
        this.g = g,
        this.b = b        
    }

    rgb(){
        const {r,g,b} = this;
        console.log(`rgb(${r}, ${g}, ${b})`);
    }
}
const colors = new MakeColor(35, 45, 66);
const color2 = new MakeColor(352, 45, 66);