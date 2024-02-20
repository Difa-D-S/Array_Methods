// // Coding Challenge #10

// const game = {
//     team1 : "Bayern Munich",
//     team2 : "Borrussia Dortmund",
//     players: [
//         [
//             "Neuer", "Pavard", "Martinez", "Alaba",
//             "Davies", "Kimmich", "Goretzka", "Coman",
//             "Muller", "Gnarby", "Lewandowski"
//         ],

//         [
//             "Burki", "Schulz", "Hummels", "Akanji",
//             "Hakimi", "Weigl", "Witsel", "Hazard",
//             "Brandt", "Sancho", "Gotze"
//         ],
//     ],

//     score: "4:0",
//     scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//     date: "Nov 9th, 2037",
//     odds: {
//         team1: 6.33,
//         x: 3.25,
//         team2: 7.5,
//     },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...filedplayer] = players1;
// console.log(gk, filedplayer);

// var allPlayers = [...players1, ...players2];
// console.log(allPlayers)

// var players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const {team1, x:draw, team2} = game.odds;
// console.log(team1, draw, team2);

// function printGoals(...scored){

//     const totalScored = scored.length;
//         console.log(totalScored);

//     scored.forEach((player) => {
//         console.log(player);
//     });
// }
// printGoals("Davis", "Gnarby","Lewandowski", "Kimmich");
// printGoals(...game.scored);

// console.log(team1 > team2 && `Team1 (${team1}) is more likely to win` || team1 < team2 && `Team2 (${team2}) is more likely to win`);



// // Coding Challenge #11

// const game = {
//     team1 : "Bayern Munich",
//     team2 : "Borrussia Dortmund",
//     players: [
//         [
//             "Neuer", "Pavard", "Martinez", "Alaba",
//             "Davies", "Kimmich", "Goretzka", "Coman",
//             "Muller", "Gnarby", "Lewandowski"
//         ],

//         [
//             "Burki", "Schulz", "Hummels", "Akanji",
//             "Hakimi", "Weigl", "Witsel", "Hazard",
//             "Brandt", "Sancho", "Gotze"
//         ],
//     ],

//     score: "4:0",
//     scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//     date: "Nov 9th, 2037",
//     odds: {
//         team1: 6.33,
//         x: 3.25,
//         team2: 7.5,
//     },
// };

//     for(let scores = 0; scores <= game.scored.length - 1; scores++){
//         console.log(`Goal ${scores + 1} : ${game.scored[scores]}`);    
//     }
//                     // for(let score in game.scored){
//                     //     console.log(`Goal ${score} : ${game.scored[score]}`);    
//                     // }
    
//     const odd = Object.values(game.odds);
//     console.log(odd);

//     var sums = 0;                                   // var sum = 0;
//     for(let odds of odd){                           // odd.forEach((number) => {
//         sums += odds / odd.length;                  //     sum += number / odd.length;
//     }                                               // });
//     console.log(sums);                              // console.log(sum)

//     const {team1, x:draw, team2} = game.odds;
//     console.log(`Odd of victory ${game.team1}: ${team1}`);
//     console.log(`Odd of draw: ${draw}`);
//     console.log(`Odd of victory ${game.team2}: ${team2}`);   
    
//     const scorers = {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2,
//     }



// // Code Challenge #12

    // const gameEvents = new Map([
    //     [17, 'GOAL'],
    //     [36, 'Substitution'],
    //     [47, 'GOAL'],
    //     [61, 'Substitution'],
    //     [64, 'Yellow card'],
    //     [69, 'Red card'],
    //     [70, 'Substitution'],
    //     [72, 'Substitution'],
    //     [76, 'GOAL'],
    //     [80, 'GOAL'],
    //     [92, 'Yellow card'],
    // ]);

    // const events = [...new Set(gameEvents.values())];
    // console.log(events);

    // gameEvents.delete(64);
    // console.log(gameEvents);

    // const totalMinutes = 90;
    // const numEvents = gameEvents.size;
    // console.log(numEvents);

    // const averageEvent = totalMinutes / numEvents;
    // console.log(`An even happened, on average, ever ${averageEvent} minutes`);

    // gameEvents.forEach((game, minute) => {
    //     // console.log(game, minute);
    //     const half = minute <=45 ? 'FIRST HALF' : 'SECOND HALF';
    //     console.log(`${half} ${minute} : ${game}`);
    // });



// // Code Challenges #13

    const poll = {
        question: "What is your favourite programming language",
        options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
        answers: new Array(4).fill(0),

        registerNewAnswer: function(){
            const input = Number(prompt(`${poll.question} \n ${poll.option.join('\n')} \n (Write option number)`))
        },
    };

    
    
