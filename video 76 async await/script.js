// async function getData(){
//     //simulate getting data from server
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }



// settle means resolve or reject

// resolve means promise has been settled successfully
// reject means promise has not been settled 


async function getData(){
    //simulate getting data from server
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data =await x.json()
    // console.log(data);
    return data
}




async function main() {
    
    console.log("Loading Modules");
    
    console.log('Do something else');
    
    console.log('Load data');
   
    let data= await getData()
    
    console.log(data);
    
    console.log('Process data');
    
    console.log('Task 2');
}


main()


//Example POST method implementation
async function postData(url="",data={}){
    const response=await fetch(url,{
        method:"POST",
        headers:{
            "Content=Type":"application/json",
        },body:JSON.stringify(data),
    });
    return response.json();
}

postData("https://example.com/answer",{answer:42}).then((data)=>{
    console.log(data);
    
});




// data.then((v)=>{    
//     console.log(data)
//     console.log('Process data');
//     console.log('Task 2');
// })