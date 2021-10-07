const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName : 'vamshi' }
        user['lastName'] = "krishna";
        return user;
    },
    fetchUser: () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .catch(error => console.error(error))
    }
}
module.exports =  functions;
