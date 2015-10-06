var handlebars  = require('handlebars')
var express     = require('express')
var expressHbs  = require('express3-handlebars')


var app = express()


app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}))
app.set('view engine', 'hbs')

app.get("/", function (req, res) {
    res.render('index')
})

app.get("/posts/:postSlug", function (req, res) {
    res.render('post', {
        title: "Bucket App"
      , body: "Find parties, movie, concerts, sports, arts, theater, broadway shows, family events and get tickets in advance. Bucket makes it easy to find events, buy tickets, and share with your friends - all with one swipe and quick pay."
      , subtitle: "Side Project"
      , headerImg: "/images/portfolio/bucket.png"
      , author: "Ketaki Poyekar"
    })
})

app.use("/static", express.static('static'))

var server = app.listen (8080, function () {
    console.log("Server is responding...")
})
console.log("Server has started...")
