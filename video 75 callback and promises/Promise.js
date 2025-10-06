console.log('This is promises');

let prom1 = new Promise((resolve,reject)=>{
    let a =Math.random();
    if(a<0.5){
        reject("No random no was not supporting you");
    }else{

        setTimeout(() => {
            console.log('Yes I am done');
            resolve("Hardik")
        }, 3000);
    }
})
let prom2 = new Promise((resolve,reject)=>{
    let a =Math.random();
    if(a<0.5){
        reject("No random no was not supporting you 2");
    }else{

        setTimeout(() => {
            console.log('Yes I am done 2');
            resolve("Hardik 2")
        }, 1000);
    }
})

let p3=Promise.allSettled([prom1,prom2])
p3.then((a)=>{
    console.log(a);
}).catch(e=>{
    console.log(e);
    
})




//prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{

//     console.log(err);
// }
// );