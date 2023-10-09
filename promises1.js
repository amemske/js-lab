const first = document.querySelector('.first') //run for 1 sec
const second = document.querySelector('.second') //run for 3 sec
const third = document.querySelector('.third') //run for 2 sec
  
const btn = document.querySelector('.btn')


//color function that takes in #FFF or #FFFFFF or rgb(255, 255, 255)
function isValidColor(color) {
    const colorRegex = /^#([0-9a-f]{3}){1,2}$|^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/i;
    return colorRegex.test(color);
  }


//create a function that contains the promise logic that sets the color after a delay
function setColorWithDelay(element, passedColor, delay){
    return new Promise((resolve,reject)=>{
        if(!isValidColor(passedColor)){
            reject(new Error('Invalid Color')) //reject with an error
        } else {
             //accepted color so resolve
            setTimeout(() =>{
                element.style.color = passedColor
                resolve()
            }, delay)

        }   

    })
}

//using the promise
btn.addEventListener('click', () =>{
    setColorWithDelay(first, '#FFA500', 4000)
    .then(()=> setColorWithDelay(second, '#800080', 3000))
    .then(() => setColorWithDelay(third, '#98ff98', 2000))
    .catch((error) =>{
        console.error('Error', error)
    })
})