document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 'player-X';
    let winner = '';
    const playerDisplay = document.querySelector('.playerDisplay');
    playerDisplay.innerHTML = currentPlayer;
    const images = [
        'url(zero.png)',
        'url(cross.png)'
    ]
    // Create the board
    const newSquares =[];
    function createBoard() {
        
        for(let i = 0; i < 9; i++) {
            const div = document.createElement('div');
            div.className = 'square '
            div.className += `${i}`
            document.querySelector('.grid').appendChild(div);
            newSquares.push(div)
           
        }

        
    }

    createBoard()



    
    newSquares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    });
    


  
    function clickOutcome(e) {
        
        const index = newSquares.indexOf(e.target);
        
        
        if( currentPlayer === 'player-X') {
            winner = 'player-X';
            currentPlayer = 'player-O';
            newSquares[index].style.backgroundImage = images[1];
            newSquares[index].style.backgroundSize = 'cover';
        }else {
            winner = 'player-O'
            newSquares[index].style.backgroundImage = images[0];
            newSquares[index].style.backgroundSize = 'contain';
            newSquares[index].style.backgroundPosition = 'center';
            newSquares[index].style.backgroundRepeat = 'no-repeat';
            currentPlayer = 'player-X'
        }
        playerDisplay.innerHTML = currentPlayer;
        
    }
  

        //  check for winner
    function checkRowOfThree() {
        for(let i = 0; i < 8; i++) {
            let rowOfThree = [i, i+1, i-1];
            

            const notValid = [0,2,3,5,6,8];
            if (notValid.includes(i)) continue

            if(rowOfThree.every
                (index => newSquares[index].style.backgroundImage === 'url("cross.png")'
              || rowOfThree.every(index => newSquares[index].style.backgroundImage === 'url("zero.png")' ))) {
                rowOfThree.forEach(index => {
                   newSquares[index].style.backgroundImage = ''
                    
                    
                    
                     })
                     document.querySelector('.winner').innerHTML += `Winner is ${winner}`
            } 
          
    }}
        checkRowOfThree();





    function checkColOfThree() {
        for(let i = 0; i < 8; i++) {
            let ColOfThree = [i, i+3, i-3];
            

            const notValid = [0,1,2,6,7,8];
            if (notValid.includes(i)) continue

            if(ColOfThree.every
                (index => newSquares[index].style.backgroundImage === 'url("cross.png")'
                || ColOfThree.every(index => newSquares[index].style.backgroundImage === 'url("zero.png")' ))) {
                ColOfThree.forEach(index => {
                    newSquares[index].style.backgroundImage = ''
                    
                    
                    
                        })
                        document.querySelector('.winner').innerHTML += `Winner is ${winner}`
            } 
            
    }}
    checkColOfThree();



    function checkDiaOfThree() {
        for(let i = 0; i < 8; i++) {
            let DiaOfThreeR = [i, i+4, i-4];
            let DiaOfThreeL = [ i, i+2, i-2]

            const notValid = [0,1,2,3,5,6,7,8];
            if (notValid.includes(i)) continue

        if(DiaOfThreeR.every
            (index => newSquares[index].style.backgroundImage === 'url("cross.png")'
            || DiaOfThreeR.every(index => newSquares[index].style.backgroundImage === 'url("zero.png")' ))
            ||DiaOfThreeL.every
            (index => newSquares[index].style.backgroundImage === 'url("cross.png")'
            || DiaOfThreeL.every(index => newSquares[index].style.backgroundImage === 'url("zero.png")' ))) {
            DiaOfThreeL.forEach(index => {
                newSquares[index].style.backgroundImage = ''})
            DiaOfThreeR.forEach(index => {
                newSquares[index].style.backgroundImage = ''})



            document.querySelector('.winner').innerHTML += `Winner is ${winner}`
        } 
            
    }}
    




    window.setInterval(() => {
        checkRowOfThree();
        checkColOfThree();
        checkDiaOfThree();
    },100)
            
   
})