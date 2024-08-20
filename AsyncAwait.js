 //async function always return a promise
 //if you return value or string instead of promise then it just wrapped it up inside a promise and return it

 async function getData(){
    return "Namaste"
 }
 const dataPromise = getData();
 console.log(dataPromise);
 dataPromise.then((res)=>console.log(res))

 //handing promise with async and await

 const p = new Promise((resolve,reject)=>{
    resolve("Promise resolved successfully")
 })

 async function handlePromise(){
    const val = await p;
    console.log(val);
 }
 handlePromise();

 //handling promise using .then and async await

 const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise Resolved"),5000)
 });

 const getData1 = ()=>{
    p1.then((res)=>console.log(res));
    console.log("Hi samar")
 };
 getData1();

 //So here using promise .then method so it is not waiting till the promise resolved.
 //But using async and await it will wait till the promise get resolved and then any other log will be printed on the screen

 const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise p2 resolved after 6 second ")},6000)
 });
 const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise p2 resolved after 8 second ")},8000)
 });

 async function getData3(){
   // console.log("it will print 1st")
    const val1 = await p2;
    console.log("it will wait for 6 sec. it will still be printed after the promise getting resolved that means simaultaneously")
    console.log(val1);
    //console.log("Hi Barick")
 
    // const val2 = await p2;
    // console.log("it will wait for 6 sec. it will still be printed after the promise getting resolved that means simaultaneously")
    // console.log(val2);
    // console.log("Hi Barick")
    const val3 = await p3;
    console.log("it will wait for 8 sec. it will still be printed after the promise getting resolved that means simaultaneously")
    console.log(val3);
    ///console.log("Hi Barick")
    //still this val2 will wait for six second and it will be printed with val1 simaultaneously
 }

 getData3();
 //here as you can see in output first it will wait promise to get resolved then Hi Barick printed in the console
//if p1 is taing less amount than p2 then p1 will print 1st then p2 will print second
//but if p2 is taking less amount of time than p1 then p2 will wait till the p1 is getting resolved and after that both will be printed at a time.

//Real world example of async/await

async function handlePromise1(){
    const data = await fetch("https://api.github.com/users/Samrendra2001")
    const res = await data.json();
    console.log(res);
}
handlePromise1();

//handling Error
//while in normal promise for error handling we were using .catch method here in async await we will
//use try and catch method
async function handlePromise2(){
    try{
    const data = await fetch("https://api.github.com/uses/Samrendra2001")
    const res = await data.json();
    console.log(res);
    }catch(err){
        console.log(err)
    }
}
handlePromise2().catch(err=>console.log(err));//this way of handling error is also good as it will return error promise in case of failure