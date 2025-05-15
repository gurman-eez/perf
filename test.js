Use JS/TS to write a function that creates two test users via an API. This function will be used as a hook for tests, so the order of user creation does not matter. 
You can use any functions from tool you find convenient, such as Playwright, WebDriverIO, axios, etc. Do not use any search system!
See the example of curl requests below:


curl -X POST -d '{
    "username": "testUserAdmin"
}' http://example.com/api/users

curl -X POST -d '{
    "username": "testUser"
}' "http://example.com/api/use

function createUser(username) {
    let res = request('http://example.com/api/users', {"username": "testUserAdmin"}, {apptype: json})

}

const testUser1 = createUser('Egor')
const testUser2 = createUser('EgorAdmin')
