// var artistName = "Axl Rose"
// var options = {
//     type: "GET",
//     url: "http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist="
//      + artistName + "&api_key=0ddd76aebc3fa24dffe397fda294c50b&format=json",
//     success: function(data) {
//         console.log(data);
//         console.log("endind app");
//     },
//     error: function(err) {
//         console.log(err);
//         console.log("ending app");
//     }
// };

// console.log("starting ajax app");
// $.ajax(options);
// console.log("continuing with the app");




// localStorage.setItem("primer", stringied);

// var person = localStorage.getItem("primer");

// person = JSON.parse(person);


const express = require('express');
const nunjucks = require('nunjucks');

function mainApp() {
    const app = express();
    const port = process.env.NODE_ENV == "development" ? 3000 : 4000;
   
    nunjucks.configure('views', {
        express: app,
        autoescape: true
    });
    app.set('view engine', 'njk');
    app.use(express.static(__dirname + '/public'));

    app.get('/', (req, res) => {
        res.render("index", {
            name: "JEEEEEE",
            refreshScript: process.env.BROWSER_REFRESH_URL
        });
    });

    app.get('/:artistName', (req, res) => {
        res.render("artist", {
            artist: req.params.artistName,
            refreshScript: process.env.BROWSER_REFRESH_URL
        });
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ` + port);
        if (process.send) {
            process.send('online');
        }
    });
}

mainApp();