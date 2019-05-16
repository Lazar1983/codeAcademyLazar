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
