var quoteData = [
  {quote: "You are entirely bonkers. But I’ll tell you a secret… all the best people are.", author: "Lewis Carroll, Alice in Wonderland "},
  {quote: "You wanna fly, you got to give up the shit that weighs you down.", author: "Toni Morrison"},
  {quote: "The truth is the closest distance between two people.", author: "Unknown"},
  {quote: "It always seems impossible until it's done.", author: "Nelson Mandela"},
  {quote: "It’s far too easy to keep doing what we’ve always done. And if we always do what we’ve always done just because we’ve always done it, we run the risk of blindly spending our lives not as happy as we could be. No.", author: "Melanie Curtis"}
]



function newQuote() {
var randomNum = Math.floor(Math.random() * (quoteData.length + 1));
document.getElementById('quoteDisplay').innerHTML = '<h2>' + quoteData[randomNum].quote + '</h2>'
document.getElementById('quoteDisplay').innerHTML += '<h4>~' + quoteData[randomNum].author + '</h4>'
 console.log(quoteData[randomNum]);
}
