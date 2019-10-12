module.exports = {
    fetchuser: (req, res) => {
        var user = {
            name:"Sumit",
            age:"pata nhi",
            univ:"IPU",
            inst:"GTBIT",
            email:"sample@gmail.com"
        }
        res.send(user)
    }
}