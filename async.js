// async always returns a promise
//await waits till promise is settled
//error handling - try/catch block


const example1 = async () => {
    return 'hello there'
}

console.log(example1())


async function someFunc () {
    const result = await example1() //returns the value of the fulfilled promise
    console.log(result)
}

someFunc()

const users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'susan'},
    {id: 3, name: 'anna'}
]

const articles = [
    {userId: 1, articles: ['one', 'two','three']},
    {userId: 2,  articles: ['four', 'five']},
    {userId: 3,  articles: ['six', 'seven','eight']}
]
//create  getUserByName promise
function getUserByName(passedName) {
    return new Promise((resolve, reject) => {
        const foundUser = users.find((user) => {
            return user.name === passedName;
        });
        if (foundUser) {
            return resolve(foundUser);
        } else {
            reject(`No such user with name: ${passedName}`);
        }
    });
}
///create getArticlesByUserId promise
function getArticlesByUserId(passedId) {
    return new Promise((resolve, reject) => {
        const foundUserArticles = articles.find((user) => {
            return user.userId === passedId;   //  {userId: 2,  articles: ['four', 'five']} === passedId which is user.id
        });
        if (foundUserArticles) {
            return resolve(foundUserArticles.articles);
        } else {
            reject(`Wrong userID: ${passedId}`);
        }
    });
}

getUserByName('susan')
    .then((user) => console.log(user))
    .catch((err) => console.log(err));

getUserByName('Mark')
    .then((user) => console.log(user))
    .catch((err) => console.log(err));

    //getUserByName gives you  {id: 2, name: 'susan'}  then you pass this user into getArticlesByUserId(user.id)
    //so user.id is 2 so you will compare this 2 to the article's userId which is 2 and display the articles

getUserByName('susan')
    .then((user) => getArticlesByUserId(user.id))
    .then((articles) => console.log(articles))
    .catch((err) => console.log(err));


    //using async await
    const getData = async () => {
        try {
            const user = await getUserByName('John') //the errors are handled by the individual functions
            const article = await getArticlesByUserId(user.id) //the errors are handled by the individual functions
            console.log(article);
        } catch (error) {
            console.log(error)
        }

    }

getData()