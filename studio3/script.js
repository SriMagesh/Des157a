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
    
    document.querySelector('#roll1').addEventListener('click',function(){
        throwDice();
    });    
    document.querySelector('#roll2').addEventListener('click',function(){
        throwDice();
    });  
    // necessary gameData
    const gameData = {
        dice: ['images/roll1.jpg','images/roll2.jpg','images/roll3.jpg','images/roll4.jpg','images/roll5.jpg','images/roll6.jpg'],
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
