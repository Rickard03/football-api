# football-api

## REQUIREMENTS
1. Press on the green button that says "Clone or download" and download it as a .zip file. 
2. Extract the files somewhere on your computer. We recommend creating a folder called "steambot" on your desktop. 
3. Install NodeJS last version. It's required for it to work. https://nodejs.org/en/
4. Open code editor



Open cmd and Type 
```sh
npm install
```

Then run
```sh
npm nodemon index.js
```



To call api with curl



USING AXIOS
```sh
const axios = require("axios");

axios.get("http://localhost:3001/players?id=2").then( res => {
    console.log(res.data)
})
```
USING CURL
```sh
curl -X GET ^  -H "Content-type: application/json" ^  -H "Accept: application/json" ^  "http://localhost:3001/players?id=1"
```
