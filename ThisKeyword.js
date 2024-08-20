//"useStrict"
console.log(this);
//refers to globalobject that is window in case of browser

//this inside a function

function x() {
    console.log(this);//in strict mode it is undefined and in non-strict it is global object
}
x();
//this inside a object's method

const obj ={
    a:10,
    x:function(){
        console.log(this);
        console.log(this.a);
    }
}
obj.x();