//cookies ------------------------------------
//cookies store smaller amount of information 4kb
//available on all browser windows
//has an expiry date
//are stored in the browser and server,
//they send requests to the server
document.cookie = 'name8=kyle;expires=' + new Date(2020, 0, 1).toUTCString()
document.cookie = 'lastName=Mems;expires=' + new Date(2020, 0, 1).toUTCString()

console.log(document.cookie)
// 'name8=kyle;expires=Tue, 31 Dec 2019 21:00:00 GMT'
// 'lastName=Mems;expires=Tue, 31 Dec 2019 21:00:00 GMT'



//local storage ---------------------------
//can store more data, 10mb and 5mb respectively
//local storage - available on all browser windows
//always available unless deleted
//stored in the browser
//they don't send requests to the server

localStorage.setItem('name1', 'Bob')
localStorage.setItem('name2', 'Tony')
console.log(localStorage.getItem('name1'))
localStorage.removeItem('name2')



//session storage -------------------------------------
//- available on only 1 tab
//- available only when open, once it is closed it isn't available
//stored in the browser
//they don't send requests to the server

sessionStorage.setItem('name5', 'Mark')
sessionStorage.setItem('name6', 'Mercy')
console.log(sessionStorage.getItem('name6'))
sessionStorage.removeItem('name6')




