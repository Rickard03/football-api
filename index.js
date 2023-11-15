const express = require("express");
const app = express();

app.use(express.json());


// create api key

// const bcrypt = require("bcrypt")
// const saltRounds = 10;
// const token = crypto.randomUUID();

// (async ()=> {
//     const hashedToken = await bcrypt.hash(token, saltRounds);

//     console.log(hashedToken)
    
// })()


var info = "Bad Request";



// players api

const players = [
    {
    id : 0, 
    description:" this is a football player", 
    name:"Novemi",
    score: 5, 
}, 
{
    id :1, 
    description:" This is a basket yaer ", 
    name:"Messi",
    score: 15, 
}, 
{
    id :2 , 
    description:" Christan Ronaldo ", 
    name:"Ronaldo",
    score: 20, 
}, 
]




app.get('/players', returnPlayerId); 

function returnPlayerId(request, response) 
{ 

    var id = request.query.id; // request id params 
    var name = request.query.name; // request params 
     


    // console.log(id)
    // console.log(name)

    var word = id;


    console.log(word)
// return error response 


    word = word.charAt(0).toUpperCase() 
        + word.slice(1).toLowerCase(); 
       
    if(players[word]) { 
        var reply = players[word];          
    } 
    else { 
        var reply = { 
            status:"Not Found"
        } 
    } 
       
    response.send(reply); 
} 




// Define a GET request handler for the user resource
// app.get("/players", (req, res) => {
//     console.log("called")
  
//     res.json(players);

//     console.log(req.query.id) // request parameters http://localhost:3001/players?id=1
//     console.log(req.query.name)// request parameters http://localhost:3001/players?user=rickar
//   });






 // call with http://localhost:3001/players/1
  app.get('/players/:player/', search1Element); 
  
function search1Element(request, response) { 
    var word = request.params.name; 

    console.log(word)
    word = word.charAt(0).toUpperCase() 
        + word.slice(1).toLowerCase(); 
       
    if(players[word]) { 
        var reply = players[word];          
    } 
    else { 
        var reply = { 
            status:"Not Found"
        } 
    } 
       
    response.send(reply); 
} 
  


  // Define a POST request handler for the user resource
  app.post("/players", (req, res) => {
    const { name } = req.body;
    const id = users.length + 1;
    users.push({ id, name });
    res.json({ id, name });
  });
  // Start the se


  const PORT = 3001; 
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
  });