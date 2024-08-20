// const cart = ["Shirt","Pants","Kurta"];
// const promiseRef = creareOrder(cart);
// promiseRef.then(()=>{
//     proceedToPayment(orderId);
// });

// we will be calling public github api to fetch data a https://api.github.com/users/Samarendra2001

const URL = "https://api.github.com/users/Samarendra2001";
const user = fetch(URL);
user.then((data)=>{
    console.log(data);
});
//So now we are done with Inversion of control as promise will gurantee you to return thr reult once 
//promise is fulfilled

//Now we will check for CAll back hell
//So it is solved by promise chaining

CreateOrder(cart)
    .then((orderId)=>proceedToPayment(orderId))
    .then((paymentinfo)=>showOrderSummary(paymentinfo))
    .then((balance)=>updateWalletBalance(balance))