//using callback functions for event listeners

const first = document.querySelector('.first') //run for 1 sec
const second = document.querySelector('.second') //run for 3 sec
const third = document.querySelector('.third') //run for 2 sec
  

  
const btn = document.querySelector('.btn')

  
// btn.addEventListener('click', () =>{

//   //after 1 second
//   setTimeout(()=>{
//         first.style.color = 'red'
//     },1000)

//     //after 3 seconds
//   setTimeout(()=>{
//     second.style.color = 'green'
//     },3000)

//     //after 2 seconds
//     setTimeout(()=>{
//         third.style.color = 'blue'
//         },2000)


// })


//if you want then to run one after another -callback hell
btn.addEventListener('click', () =>{
    setTimeout(()=>{
               first.style.color = 'red'
               setTimeout(()=>{
                second.style.color = 'green'
                    setTimeout(()=>{
                        third.style.color = 'blue'
                        },2000)
                 },3000)

                },4000)

})
