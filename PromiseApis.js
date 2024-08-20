//1st we will see for Promise.all
//So it will take the promises as an array and will give the output in an array also
//it will wait till all the promise to be settled then it will give the output in an array
//if one promise out of all is failed then it will immediately throw the error
//it will not wait for others

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("P1 Success")},3000);
// })
// const p2 = new Promise((resolve,reject)=>{
//     //setTimeout(()=>resolve("P2 Success"),1000);
//     setTimeout(()=>reject("P2 Fail"),1000);
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("P3 Success")},2000);
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);//if we do console.log it will throw the error but it will not look like an error
// })


//2. Promise .allSettled
//It will wait till all the promises to be settled and after that it will give the output in an array unlike
// the Promise.all it will not throw immediate error , it will wait even if some promises are failed to execute
//and at last it will give the output in array with all error and success

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Executed Successfully"),3000)
// })
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P2 got rejected"),2000)
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P3 exceuted Succesfully"),1000)
// })

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err);
// })

//3. Promise.race = So basically what it does is it will check which of the promise is setteled firsr irrespectivemof suucess or failure a
//and it will return it 

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Executed Successfully"),3000)
// })
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P2 got rejected"),1000)
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P3 exceuted Succesfully"),2000)
// })

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err);
// })

//4. Promise.any . Basically what it does is it will wait till the first success that means till the first promise which is exceuted successfully
//it does not care whether the 1st promise which is exceuted is failed, it still wait for the next promise and if it is success then it will give the output
//anf if no promises of them are success then it will throw the aggregate error in an array.

const p1 = new Promise((resolve,reject)=>{
    //setTimeout(()=>resolve("P1 Executed Successfully"),3000)
    setTimeout(()=>reject("P1 rejected"),3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P2 got rejected"),1000)
})
const p3 = new Promise((resolve,reject)=>{
    //etTimeout(()=>resolve("P3 exceuted Succesfully"),2000)
    setTimeout(()=>reject("P3 rejected"),2000)
})

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors)//this will show all the errors in an array in console
})//if you will do errors[0] you will get error of 1st one and so on and so forth

