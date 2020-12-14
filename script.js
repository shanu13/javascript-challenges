// challenge 1
var birthyear = prompt("what your birth year");
var cur = new Date();
var cyear = cur.getFullYear();
let ageinDays = (cyear - birthyear) * 365;
console.log(ageinDays);
let textanswer = document.createTextNode("You Are " + ageinDays + " days old");
let h1 = document.createElement("h1");
h1.setAttribute("id", "ageinDays");
h1.appendChild(textanswer);
document.getElementById("flex-box-result").appendChild(h1);

function reset() {
  document.getElementById("ageinDays").remove();
}

function generatecat() {
  var image = document.createElement("img");
  var div = document.querySelector("#flex-cat-gen");
  image.src = "https://cdn2.thecatapi.com/images/5tg.gif";
  console.log(div);

  div.appendChild(image);
}

// rps

function rpsgame(choice) {
  console.log(choice);
  var humanchoice, botchoice;
    humanchoice = choice.id;

  botchoice = numberToChoice(randToRpsInt());
  console.log(botchoice);
  let results = decideWinner(humanchoice,botchoice)// [0,1] human lost
  console.log(results)

   let message = finalMessage(results) //{ message : won, color : green}
  console.log(message)
  rpsFrontEnd(choice.id,botchoice,message)
}


function rpsFrontEnd(humanImagechoice,botImagechoice,finalMessage){
   var imagesDatabase = {
       'rock' : document.getElementById('rock').src,
       'paper' : document.getElementById('paper').src,
       'scissor' : document.getElementById('scissor').src
   }

   // lets remove the image;
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

   var humandiv = document.createElement('div')
   var botdiv = document.createElement('div')
   var messagediv = document.createElement('div')

   humandiv.innerHTML = "<img src='" + imagesDatabase[humanImagechoice] + " 'height =256 width=256 style= 'box-shadow : 0px 10px 50px rgba(37,50,233,1);' >"
   document.getElementById("flexbox-rps-div").appendChild(humandiv);

   botdiv.innerHTML = "<img src='" + imagesDatabase[botImagechoice] + " 'height =256 width=256 style= 'box-shadow : 0px 10px 50px rgba(243,38,24,1);' >"
   document.getElementById("flexbox-rps-div").appendChild(botdiv);

   messagediv.innerHTML = "<h1 style = 'color:" + finalMessage['color'] +" ;font-size:60px; padding:30px;  '>" + finalMessage['message'] + "</h1>"
   document.getElementById("flexbox-rps-div").appendChild(messagediv);

}
function finalMessage([yourscore,computerscore]){
    if(yourscore === 0){
        return {'message' : 'You Lost!', 'color' : 'red'}
    }
    else if(yourscore === 0.5){
        return {'message' : 'Tied!' , 'color':'yellow'}
    }
    else if(yourscore === 1){
        return {'message' : 'You Won!' , 'color' : 'green'}
    }
}

function decideWinner(choice,botchoice){
    var rpsDatabase = {
        'rock' : {'scissor' : 1, 'rock':0.5, 'paper' : 0},
        'paper': {'rock' : 1, 'paper' : 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock' : 0 }
    };

    let yourscore = rpsDatabase[choice][botchoice];
    let computerscore = rpsDatabase[botchoice][choice]
    return [yourscore,computerscore];

}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissor"][number];
}
