

const url = 'https://course-api.com/react-tours-project'

//console.log(fetch(url)) //returns a promise

//everytime a promise is returned you need to await
//json also returns a promise
//incase you return resp.json() to access the values you need to use getTours().then()

const getTours = async () => {
    try {
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(resp)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getTours()