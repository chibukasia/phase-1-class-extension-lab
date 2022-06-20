// Your code here
class Polygon {
    constructor(array){
        this.array =array;
    }

    get countSides (){
        return this.array.length;
    }

    get perimeter(){
        this.array.reduce((accum, curr)=>{
            accum +=curr;
        }, 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if ((this.array[1] + this.array[2]) > this.array[3]||
            (this.array[2] + this.array[3]) > this.array[1]||
            (this.array[3] + this.array[1]) > this.array[2]

        ){
            return true;
        }else{
            return false;
        }
    }
}