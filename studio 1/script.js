(function (){
    "use strict";
    console.log('reading js');
    console.log(document.getElementById('overlay').className);

    const myForm = document.querySelector('#myform');
    const myOutput = document.querySelector('.output');
    const arrayOfimages = ['images/pokemon_1.png','images/pokemon_2.png','images/pokemon_3.png','images/pokemon_4.png','images/pokemon_5.png'];
    const arrayOfBgs = ['images/BgImage.png','images/BgImage2.png', 'images/BgImage3.png'];

    myForm.addEventListener('submit',function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
        
        console.log(document.getElementById('overlay').className);
        const name = document.querySelector('#name').value;
        const output_name = document.querySelector('#output_name');
        output_name.innerHTML = name;
        const type = document.querySelector('#type').value;
        // const output = document.getElementsByClassName('output');
        const bgImage = document.querySelector('.cardBg');

        if(type == 'water'){
            bgImage.src = arrayOfBgs[1];
            // output.style.backgroundColor = '6A8FE4';
        }else if(type == 'electric'){
            bgImage.src = arrayOfBgs[2];
            // output.style.backgroundColor = '6A8FE4';
        }else{
            bgImage.src = arrayOfBgs[0];
        }
        const number = document.querySelector('#number').value;

        const randomIndex = Math.floor(Math.random() * number) % arrayOfimages.length;
        const myPic = document.querySelector('.cardPic');
        myPic.src = arrayOfimages[randomIndex];
        console.log(myPic.src);

        const move1 = document.querySelector('#move1').value;
        const move1_des = document.querySelector('#move1_des').value;
        const move2 = document.querySelector('#move2').value;
        const move2_des = document.querySelector('#move2_des').value;
        let red = name.fontcolor('#EE8E8E');
        let yellow = type.fontcolor('#FDF39E');
        let green = number.fontcolor('#BAC5FF');
        let blue = move1.fontcolor('#EAADFF');
        let purple = move1_des.fontcolor('#D1FFAD');
        let cyan = move2.fontcolor('#ADFFFA');
        let pink = move2_des.fontcolor('#FFADD0');


        let myText = `Hi, my name is ${red}, and I’m a pokemon. All pokemon’s have a type. My type is ${yellow}, and my favorite number is ${green}. When I’m in danger, I use these two moves to defend myself. My first move ${blue} is a move that ${purple}. The second move I use to protect myself is ${cyan}. This move ${pink}, and I only use it when I need to!`;
        const myArticle = document.querySelector('#madlib');
        myArticle.style.fontSize = 'x-large';
        myArticle.innerHTML = myText;


        const pName = document.querySelector('#pName');
        pName.innerHTML = name;
        const pMove = document.querySelector('#pMove1');
        pMove.innerHTML = move1;
        const pMove1_des = document.querySelector('#pMove1_des');
        pMove1_des.innerHTML = move1_des;
        pMove1_des.style.fontSize = 'small';
        pMove1_des.style.fontWeight = '400';
        const pMove2 = document.querySelector('#pMove2');
        pMove2.innerHTML = move2;
        const pMove2_des = document.querySelector('#pMove2_des');
        pMove2_des.innerHTML = move2_des;
        pMove2_des.style.fontSize = 'small';
        pMove2_des.style.fontWeight = '400';
        pMove.innerHTML = move1.value.fontcolor('black');
        
        const pDamage = document.querySelector('#pDamage').value;
        const pDamage2 = document.querySelector('#pDamage2').value;
        pDamage.innerHTML = (Math.floor(Math.random() * 23) + 1) * 10;
        pDamage2.innerHTML = (Math.floor(Math.random() * 23) + 1) * 10;

        const pScore = document.querySelector('#pScore');
        pMove_des.innerHTML = move1_des.value.fontcolor('black');
        pScore.innerHTML = (Math.floor(Math.random() * 20) + 1) * 10;
    })
    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
        document.querySelector('#name').value = '';
        document.querySelector('#type').value = '';
        document.querySelector('#number').value = '';
        document.querySelector('#move1').value = '';
        document.querySelector('#move1_des').value = '';
        document.querySelector('#move2').value = '';
        document.querySelector('#move2_des').value = '';

    })

}());
