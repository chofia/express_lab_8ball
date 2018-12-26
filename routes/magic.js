var express = require('express');
var router = express.Router();

let answers = [
    {
        message: "It is certain.",
        tone: "positive"
    },
    {
        message: "It is decidedly so.",
        tone: "positive"
    },
    {
        message: "Without a doubt.",
        tone: "positive"
    },
    {
        message: "Yes - definitely.",
        tone: "positive"
    },
    {
        message: "You may rely on it.",
        tone: "positive"
    },
    {
        message: "As I see it, yes.",
        tone: "positive"
    },
    {
        message: "Most likely.",
        tone: "positive"
    },
    {
        message: "Outlook good.",
        tone: "positive"
    },
    {
        message: "Yes.",
        tone: "positive"
    },
    {
        message: "Signs point to yes.",
        tone: "positive"
    },
    {
        message: "Reply hazy, try again.",
        tone: "neutral"
    },
    {
        message: "Ask again later.",
        tone: "neutral"
    },
    {
        message: "Cannot predict now.",
        tone: "neutral"
    },
    {
        message: "Better not tell you now.",
        tone: "neutral"
    },
    {
        message: "Concentrate and ask again.",
        tone: "neutral"
    },
    {
        message: "Don't count on it.",
        tone: "negative"
    },
    {
        message: "My reply is no.",
        tone: "negative"
    },
    {
        message: "My sources say no.",
        tone: "negative"
    },
    {
        message: "Outlook not so good.",
        tone: "negative"
    },
    {
        message: "Very doubtful.",
        tone: "negative"
    }
]

//function to help me generate random numbers
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
  

/* GET home page. */
router.get('/8-ball', function (req, res, next) {
    let message = answers[getRandomIntInclusive(0, answers.length - 1)]
    res.render('magic/8-ball', { title: "magic 8 ball", message: message });
});

module.exports = router;