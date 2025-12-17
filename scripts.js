//create the divs inside the container div
const container = document.getElementById('container');

//creating multiple divs
for(let i = 0; i < 16 *16; i++){
  const newDiv = document.createElement('div');
//   newDiv.textContent = i + 1;
  newDiv.classList.add('square');
  container.appendChild(newDiv);

}
  //add a trailing afect of hovering 



 //action listener for the button
 function popUpFunction(){
    let userInput = prompt("Enter the number of squres per side for the new grid (min 100con):");
    if(userInput !== null){
        let newSquares = parseInt(userInput);
        if(newSquares > 0 && newSquares <= 100){
            //clear the container first
            container.innerHTML=' ';
            for(let i = 0; i < newSquares * newSquares; i++){
       const newDiv = document.createElement('div');
  
        newDiv.classList.add('square');
        container.appendChild(newDiv);

       }

    }
 }
 const newDivs = document.querySelectorAll('.square');
newDivs.forEach( newDiv =>{
    newDiv.addEventListener('mouseenter',() =>{
        newDiv.style.backgroundColor = 'black';
    });
 });
 } 
      //set new grid template

const newDivs = document.querySelectorAll('.square');
newDivs.forEach( newDiv =>{
    newDiv.addEventListener('mouseenter',() =>{
        newDiv.style.backgroundColor = 'black';
    });
 });


