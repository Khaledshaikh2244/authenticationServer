    
const express = require ('express'); 
const { use } = require('express/lib/router');
const porrt = 3000;
const app = express();


var users = [];

app.use(express.json());
app.post('./signup' , (req , res) =>{
    req.body;
    let userAlreadyExists = false;
    
    for (var i = 0; i<users.length; i++) {
        if(users[i].email === users.email) {
            userAlreadyExists = true;
            break;
        }  
    }
    
    if (userAlreadyExists) {
        res.sendStatus(400).send("Bad Request !");
    }
    else{
        users[i].push(users);
        res.sendStatus(201).send("Signup Succesfully");
    }
}
)


app.post('./login' , (req , res) => {
var users = req.body;
let userFound = null;

for (var i =0 ; i < users.length ; i++) {
    if(users[i].email === users.email && users[i].password === users.password){
        userFound = users[i];
        break;
    }
}
  if (userFound) {
    res.json ({
        firstName : userFound.firstName,
        lastName  : userFound.lastName,
        email : userFound.email
    });
     res.sendStatus(201).send("ok");
  }
  else {
    res.sendStatus(401).send("Unauthorized request !");
  }
})


app.get('./data' , (req , res )=> {
    var email = req.headers.email;
    var password = req.headers.password;
    let userFound = false;
    
    for (var i = 0 ; i < usersFound.length ; i++) {
        if (users[i],email === users.email && users[i].password === users.password) {
            userFound = true;
            break;
        }
    }
    
    if(userFound){
        let usersToReturn = [];
       for(let i = 0 ; i < users.length ; i++) {
        usersToReturn.push({
        firstName : users[i].firstName,
        lastName  : users[i].lastName,
        email : users[i].email
        });
       }
   
    
    res.json({
    users
    });
    
}

  else {
    res.sendStatus(401).send("Invalid");
  }
});

module.exports = app;
