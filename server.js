/*
*  Write a server that will respond with the appropriate JSON blob 
*  for the given rendering
*/
var express = require('express');
var app = express();
var albums = require('./abstractions/albums.js');
var circles = require('./abstractions/circles.js');
var movies = require('./abstractions/movies.js');
var nameTags = require('./abstractions/nameTags.js');
var poker = require('./abstractions/poker.js');
var rectangle = require('./abstractions/rectangle.js');
var restaurants = require('./abstractions/restaurants.js');
var students = require('./abstractions/students.js');
var surveys = require('./abstractions/surveys.js');
var tweets = require('./abstractions/tweets.js');


app.use(express.static(__dirname + '/public'));

// GET /api/albums
app.get('/api/albums', function getAlbums (req, res, nextFn) {
    res.send(albums)
})

// GET /api/circles
app.get('/api/circles', function getCircles (req, res, nextFn) {
    res.send(circles)
})

// GET /api/movies
app.get('/api/movies', function getMovies (req, res, nextFn) {
    res.send(movies)
})

// GET /api/nametags
app.get('/api/nametags', function getNametags (req, res, nextFn) {
    res.send(nameTags)
})

// GET /api/poker
app.get('/api/poker', function getPoker (req, res, nextFn) {
    res.send(poker)
})

// GET /api/rectangle
app.get('/api/rectangle', function getRectanbles (req, res, nextFn) {
    res.send(rectangle)
})

// GET /api/restaurants
app.get('/api/restaurants', function getRestaurants (req, res, nextFn) {
    res.send(restaurants)
})

// GET /api/students
app.get('/api/students', function getStudents (req, res, nextFn) {
    res.send(students)
})

// GET /api/surveys
app.get('/api/surveys', function getSurveys (req, res, nextFn) {
    res.send(surveys)
})

// GET /api/tweets
app.get('/api/tweets', function getTweets (req, res, nextFn) {
    res.send(tweets)
})

app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
})