//function to change string to uppercase
function makeUppercase(value){
    console.log(value.toUpperCase())
  }
  // function to reverse a string
  function reverseString(value){
    console.log(value.split('').reverse().join(''))
  }
  
  //function that takes a callback function
  function handleName(name, callBack){
    const fullName = `${name} smith`
    callBack(fullName)
  }
  
  
  
  
  //invove handlename
  //don't use makeuppercase() since we don't want to involke the 
  //function right away, we want to involke it inside the handleName as 
  // callBack(fullName) so we shall use makeuppercase without ()
  
  handleName('peter', makeUppercase) //'PETER SMITH'
  handleName('peter', reverseString) //'htims retep'
  
  //calling a callback function directly as the second argument
  
  handleName('susan', (value) => console.log(value)) //'susan smith'
  
  //using callback functions for event listeners
  
  const btn = document.querySelector('.btn')
  
  btn.addEventListener('click', function(){
    console.log('hello world')
  })