const register = function(username){
    console.log(`User ${username}  has been registered`)
}


const login = function(username){
    console.log(`User ${username} is logged in `)
}

const myData = function(data){
    console.log(`my data is ${data}`)
}
module.exports = {
    register,
    login,
    myData
}