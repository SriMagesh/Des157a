(function(){
    'use strict';
    console.log('reading js');
    // Opens the instructions panel
    document.querySelector('#howTo').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('instructions').className = 'showing';
    })
     // Closes the instructions panel
    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('instructions').className = 'hidden';
    })


    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');
    
    // necessary gameData
    const gameData = {
        dice: ['/studio3/images/Roll 1.jpg','/studio3/images/Roll 2.jpg','/studio3/images/Roll 3.jpg','/studio3/images/Roll 4.jpg','/studio3/images/Roll 5.jpg','/studio3/images/Roll 6.jpg'],
        players: ['player 1','player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29

    }

     // Shows the game panel
    myform.addEventListener('submit',function(event){
        event.preventDefault();
        // Shows the game overlay
        document.getElementById('overlay').className = 'showing';
         // gathers input data
        const p1 = document.querySelector('#p1').value;
        const p2 = document.querySelector('#p2').value;
        const bg1 = document.querySelector('#color1').value;
        const bg2 = document.querySelector('#color2').value;

        // gathers playerSection divs
        const section1 = document.querySelector('.pSection1');
        const section2 = document.querySelector('.pSection2');

         // gathers output data
        const outputName1 = document.querySelector('.output_name1');
        const outputName2 = document.querySelector('.output_name2');

         // changes output based on input
        outputName1.innerHTML = p1;
        outputName2.innerHTML = p2;
        section1.style.backgroundColor = bg1;
        section2.style.backgroundColor = bg2;
        gameData.index = Math.round(Math.random());
        setUpTurn();


    });

    function setUpTurn(){
        // gameData.roll1 = Math.floor(Math.random()*6) + 1;
        // gameData.roll2 = Math.floor(Math.random()*6) + 1;
        console.log("Player ",gameData.index);
        if (gameData.index === 1){
            document.getElementById('action2').className = 'showing';
            document.getElementById('action1').className = 'hidden';
        }else{
            document.getElementById('action1').className = 'showing';
            document.getElementById('action2').className = 'hidden';
        } 
        // document.querySelector(`#pass${gameData.index+1}`).addEventListener('click',function(){
        //     gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        //     setUpTurn();
        // });

        document.querySelector(`#roll${gameData.index + 1}`).addEventListener('click',function(){
            throwDice();
        });             
        
    }
    function throwDice(){
        gameData.roll1 = Math.floor(Math.random()*6) + 1;
        console.log(`this is roll 1 ${gameData.roll1}`);
        gameData.roll2 = Math.floor(Math.random()*6) + 1;
        console.log(`this is roll 2 ${gameData.roll2}`);
        const die1 = document.querySelector('.die1');
        const die2 = document.querySelector('.die2');
        die1.src = gameData.dice[gameData.roll1-1];
        die2.src = gameData.dice[gameData.roll2-1];
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(`this is rollSum ${gameData.rollSum}`);
        // const score = document.querySelector(`.score${gameData.index+1}`);
        // gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
        // score.innerHTML = gameData.score[gameData.index];
        const winStatement = document.querySelector('.winStatement');
        winStatement.innerHTML = '';
            
        if(gameData.rollSum === 2){
            console.log('snake eyes');
            winStatement.innerHTML = 'Oh snap! Snake eyes!';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //switches player
            setTimeout(setUpTurn, 1000);

        }

        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            // gameData.rollSum = 0;
            console.log( `sum is ${gameData.rollSum}`);
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            console.log( `Score is ${gameData.score[gameData.index]}`);
            winStatement.innerHTML = `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout (setUpTurn, 1000);
            
        }

        //if neither die is a 1
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            document.querySelector(`#pass${gameData.index+1}`).addEventListener('click',function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            checkWinningCondition();
            // console.log('the game proceeds');
        }
    }

    function showCurrentScore(){
        const score = document.querySelector(`.score${gameData.index+1}`);
        // console.log(`${gameData.index+1}`);
        console.log("Player ", gameData.index," score - ",gameData.score[gameData.index]);
        score.innerHTML = gameData.score[gameData.index];
    }
    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            document.getElementById('action1').className = 'hidden';
            document.getElementById('action2').className = 'hidden';
            showCurrentScore();
            console.log("you win");
        }else{
            showCurrentScore();
        }
    }
    
})();


//     const gameData = {
//         dice: ['images/1die.jpg','images/2die.jpg','images/3die.jpg','images/4die.jpg','images/5die.jpg','images/6die.jpg'],
//         players: ['player 1','player 2'],
//         score: [0,0],
//         roll1: 0,
//         roll2: 0,
//         rollSum: 0,
//         index: 0,
//         gameEnd: 29

//     }

//     startGame.addEventListener('click',function(){
//         gameData.index = Math.round(Math.random());
//         console.log(gameData.index);
//         gameControl.innerHTML = '<h2>The Game Has Started<h2>';
//         gameControl.innerHTML += '<button id ="quit">Wanna quit</button>';

//         document.getElementById('quit').addEventListener('click',function(){
//             location.reload();
//         });
//         setUpTurn();

//     })

//     function setUpTurn(){
//         game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
//         actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
//         document.getElementById('roll').addEventListener('click',function(){
//             throwDice();
        
//         });
//     }
//     function throwDice(){
//         actionArea.innerHTML = '';
//         gameData.roll1 = Math.floor(Math.random()*6) + 1;
//         gameData.roll2 = Math.floor(Math.random()*6) + 1;
//         game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
//         game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
//                             <img src="${gameData.dice[gameData.roll2-1]}">`;
//         gameData.rollSum = gameData.roll1 + gameData.roll2;
//         console.log(gameData.rollSum);

//         if(gameData.rollSum === 2){
//             console.log('snake eyes');
//             game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
//             gameData.score[gameData.index] = 0;
//             gameData.index ? (gameData.index = 0) : (gameData.index = 1);
//             //switches player
//             showCurrentScore();
//             setTimeout(setUpTurn, 2000);

//         }

//         else if (gameData.roll1 === 1 || gameData.roll2 === 1){
//             console.log('one of the two dice was a 1');
//             gameData.index ? (gameData.index = 0) : (gameData.index = 1);
//             game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
//             setTimeout (setUpTurn, 2000);
            
//         }

//         //if neither die is a 1
//         else{
//             gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
//             actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';
//             document.getElementById('rollagain').addEventListener('click',function(){
//                 setUpTurn();
//             });

//             document.getElementById('pass').addEventListener('click',function(){
//                 gameData.index ? (gameData.index = 0) : (gameData.index = 1);
//                 setUpTurn();
//             });

//             checkWinningCondition();
//             // console.log('the game proceeds');
//         }

//     }

//     function checkWinningCondition(){
//         if(gameData.score[gameData.index] > gameData.gameEnd){
//             score.innerHTML = `<h2>${gameData.players[gameData.index]}
//             wins with ${gameData.score[gameData.index]} points!</h2>`;

//             actionArea.innerHTML = '';
//             document.getElementById('quit').innerHTML = "Start a New Game?"
//         }else{
//             showCurrentScore();
//         }
//     }

//     function showCurrentScore(){
//         score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> / <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`
//     }
