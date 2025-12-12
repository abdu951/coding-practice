export const userlogin = (req, res) => {
    res.send('this is user login route')
}

export const usersignup = (req, res) => {
    res.send('this is user signup route')
}






/*-----------simple dynamic routes------------
export const usernamecontroller = (req, res) => {
    const username = req.params.username
    res.send(`this is user route ${username}`)
}

------------simple query(keyword) routes------------
export const searchcontroller = (req, res) => {
    const keyword = req.query.keyword
    res.send(`this is search route ${keyword}`)
}*/