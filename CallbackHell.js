// console.log("Hi sam");
// setTimeout(()=>{
//     console.log("Delay in execution")
// },3000)
// console.log("Hi SAmar")

//Suppose an ecommerce app situation
const cart = ["pant","Shirt","Kurta"];
api.createorder();
api.proceedToPayment();
api.createorder(cart,()=>{
    api.proceedToPayment(()=>{
        api.showOrderSummary(()=>{
            api.updateWallet();
        });
    });
});
//when we have large codebase and multiple apis and have dependency on each other then
//we fall into call back hell.
//here as you can see proceedToPayment api will run after create orderapi . and so on and so forth

//And here we are blindly trust one api to call another function/api.So it is totally dependent on its
//parent function to call or to run the function. So it is called Inversion of control.
//what if parent function stopped working what if it call the function multiple times.
