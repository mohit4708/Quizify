/* Asking user input */
const readlinesync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let username = readlinesync.question("What is your name? ");
/*creating Dataset */

const database = {
    data : [
        {
            question : `let a = {} , b = {}
console.log(a==b)
console.log(a===b)`,
            option : {
a : "false false",
b : "false true" ,
c : "true false" ,
d : "true true"
            },
            correctanswer : "a"
        },
        {
            question : `Object.assign(target,source) craetes which type of copy?`,
            option : {
                a : "Deep Copy",
                b : "Shallow Copy" ,
                c : "Nested Copy" ,
                d : "Creates a new reference"
            },
            correctanswer : "b"
        },
        {
            question : `is method chaining possible with forEach`,
            option : {
                a : "Yes",
                b : "No" 
            },
            correctanswer : "b"
        }

    ]

}

/* data for leaderboard*/
const leaderboard = {
    data : [
        {
            name : "Solanki",
            score : 3
        },
        {
            name : "Riya",
            score : 2
        },
        {
            name : "Jai",
            score : 1
        }
    ]
}

function playgames(useranswer , correctanswer){

    if(useranswer === correctanswer){
        console.log(kuler("Coorect Answer", "#4d7c0f"));
        score++;
    }
    else{
        console.log(kuler("Incorrect Answer","#b91c1c"));
        console.log(`Correct answer is ${correctanswer}`);
    }

}

function showQuestionAndOutput(){
   for(let i=0;i<database.data.length;i++){
    console.log(`\nQuesteion ${i+1} : ${database.data[i].question}\n`);
    for(let key in database.data[i].option){
      console.log(`${key} : ${database.data[i].option[key]}`);
    }

    const useranswer = readlinesync.question("Enter your answer - (a/b/c/d) : ");

    playgames(useranswer, database.data[i].correctanswer);
   }
}

function highscorer(leaderboard){
    leaderboard.data.push({name : username , score : score});
    let scorelist = leaderboard.data.sort((a,b) => b.score - a.score);
    for(let leader of scorelist){
        console.log(`${leader.name} : ${leader.score}`);
    }
}

showQuestionAndOutput();
console.log(`Your score is ${score}`);
highscorer(leaderboard);