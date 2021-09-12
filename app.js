//grab all individual cells and convert into an array 

let cells = Array.from(document.querySelectorAll('.row > div'));

//write all cells to the console
console.log(cells);

//add a click event listener to all of the cells
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);


}

//click event handler
function cellClicked(event) {

    //set the clicked cell's content equal to what letter is displayed by each turn
    event.target.textContent = currentLetter;
    
    //give time for the letter to appear in cell on board
    setTimeout(() => {

        //this function checks for win
        checkForWin(currentLetter)


//switch the current letter to the opposite
        if (currentLetter === 'X') {
            currentLetter = 'O'
        } else {
            currentLetter = 'X'
        }
    }, 1);
}

let currentLetter = 'X'

function checkForWin(letter) {
//checks the top row
    if (cells[0].textContent === letter && cells[1].textContent === letter && cells[2].textContent === letter) {
        alert(letter + ' WON')
        clearBoard()
//checks the middle row
    } else if (cells[3].textContent === letter && cells[4].textContent === letter && cells[5].textContent === letter) {
        alert(letter + ' WON')
        clearBoard()
//checks the bottom row
    } else if (cells[6].textContent === letter && cells[7].textContent === letter && cells[8].textContent === letter) {
        alert(letter + ' WON')
        clearBoard()
//checks diagonal right
    } else if (cells[0].textContent === letter && cells[4].textContent === letter && cells[8].textContent === letter) {
        alert(letter + ' WON')
        clearBoard()
    }
//checks diagonal left
    else if (cells[2].textContent === letter && cells[4].textContent === letter && cells[6].textContent === letter) {
        alert(letter + ' WON')
        clearBoard()
    }
//checks left column
    else if (cells[0].textContent === letter && cells[3].textContent === letter && cells[6].textContent === letter) {
        alert(letter + ' WON')
        clearBoard()
    }
//checks middle column
    else if (cells[1].textContent === letter && cells[4].textContent === letter && cells[7].textContent === letter) {
        alert(letter + ' WON')
        clearBoard()
    }
//checks right column
    else if (cells[2].textContent === letter && cells[5].textContent === letter && cells[8].textContent === letter) {
        alert(letter + ' WON')
        clearBoard()
    }
//check if all of the cells have either an x or and o by filtering to just cells that contain something and checking the length against 9
    else if (cells.filter(cell => cell.textContent === 'X' || cell.textContent === 'O').length === 9) {
        alert('NO WIN')
        clearBoard()
    }
}

//sets all the cells to emtpy string
function clearBoard() {

    cells.forEach(cell => {
        cell.textContent = ''
    });

}
