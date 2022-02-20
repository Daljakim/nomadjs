const quotes = [
{   quote: "어두운 밤일수록 밝은 별은 더 빛나",
    writer: "-Epik high",
},
{ quote: "What doesn't kill you makes you stronger",
  writer: "-Kelly Clarkson",
},
{ quote: "You want a Maserati? You better work bitch",
 writer: "-Britney Spears",
},
{ quote: "Funny how all dreams come true",
 writer: "-aespa",
},
{ quote: "I just wanna do some shit just to try",
 writer: "-Troye Sivan"
},
{ quote: "you can't see right through what I truly am",
  writer: "-Yerin Baek",
},
{ quote: "let's be new",
  writer: "-BIBI",
},
{ quote: "Pain is inevitable Suffering is optional",
  writer: "-Buddha",
}
]

const quote = document.querySelector("#quotes span:first-child");
const writer = document.querySelector("#quotes span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// round 는 반올림 해준다
// ceil은 소수점 아랫자리가 있으면 올림해준다 1.2 -> 2
// floor은 소수점 아랫자리가 있으면 내림해준다 1.6 ->1 

quote.innerText = todaysQuote.quote;
writer.innerText = todaysQuote.writer;