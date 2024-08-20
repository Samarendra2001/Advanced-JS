const cart = ["pant","Shirts","Kurta"];
const promise = createOrder(cart);
promise.then((orderId)=>{
     return proceedToPayment(orderId);
})
    .catch((err)=> console.log(err));
//this is the consumer part of promise . Now we will learn how to create a promise.

//Producer part of promise

const createOrder = (cart)=>{
    const promise = new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            resolve(orderId);
        }
    })
    return promise;
}