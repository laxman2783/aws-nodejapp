const express = require('express');
const fetch = require('cross-fetch');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World'));


app.get("/secrets", (req, res) => {
    res.send("This is secret");
    fetch("https://mt3itmqqbyedboiy6ftx4rsjcu0zqcwj.lambda-url.us-east-2.on.aws/")
        .then(res => res.json())
        .then(json => console.log(json));
      //  req.end();
})

app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))

// function to connect to  graphql calls





