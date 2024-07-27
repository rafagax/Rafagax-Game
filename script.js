'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
let conteo= 0;

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const closeModal = function () {
  modal.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);

document.querySelector('.again').style.display = 'none';
const displaMessage = function ( message){
    document.querySelector('.message').textContent = message;
}

//document.querySelector(".number").textContent=secretNumber;
document.querySelector('.check').addEventListener
('click',function(){
    
    let guess = Number(document.querySelector('.guess').value);

        if( secretNumber === guess ) {
        //document.querySelector('.message').textContent = 'Numero correcto!';
        displaMessage ( 'Numero correcto!');
       
        document.querySelector('#titulo').textContent = 'Ganaste!';
        document.querySelector('#titulo').style.fontSize = '3rem';
        document.querySelector('body').style.backgroundColor = 'BLUE';
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector('.check').style.display = 'none';
        document.querySelector('button.btn.again').style.display = '';
            if (conteo === 2) {document.querySelector('button.btn.again').textContent = 'resultado!'
            document.querySelector('p.between').style.display = 'none';} 
        
       }
        else if (!guess) {
        //document.querySelector('.message').textContent = 'Coloca un numero!'
        displaMessage ( 'Coloca un numero!');
       }
       else if (score>1){
            if (guess !== secretNumber) {
                //document.querySelector('.message').textContent = 'Un poco mas bajo!';
                displaMessage (guess> secretNumber ? 'Un poco mas bajo!': 'Un poco mas alto!' );
                score = score - 1;
                document.querySelector('.score').textContent = score;
                
            }
        
        }
        else  {
          
            document.querySelector('.score').textContent = score = 0;    
            document.querySelector('.message').textContent = 'Intenta de nuevo!';
            document.querySelector('body').style.backgroundColor = 'rgb(224 79 28)';
            document.querySelector('#titulo').textContent = '(x_____x)';
            document.querySelector('#titulo').style.fontSize = '3rem';
            //document.querySelector('.message').style.fontSize = '3rem';
            document.querySelector('.check').style.display = 'none';
            document.querySelector('button.btn.again').style.display = '';
            if (conteo === 2) {document.querySelector('button.btn.again').textContent = 'resultado!'
            document.querySelector('p.between').style.display = 'none';
            document.querySelector('.message').textContent = '';} 
            
            }  
                    }
                    )

document.querySelector('.again').addEventListener
('click',function(){
        
       
        secretNumber = Math.trunc(Math.random() * 20) + 1; 
        highscore = score + highscore;    
        document.querySelector('.check').style.display = '';
        document.querySelector('.again').style.display = 'none';
        document.querySelector('.number').textContent='?';
        document.querySelector('#titulo').textContent = 'Adivina Mi Numero!';
        document.querySelector('.guess').value='';
        displaMessage('Adivina el Numero...');
        document.querySelector(".highscore").textContent= highscore;
        document.querySelector(".score").textContent="10";
        document.querySelector('.message').style.fontSize = '2rem';
        document.querySelector('#titulo').style.fontSize = '2rem';
        document.querySelector('body').style.backgroundColor = 'black';
        score = 10;
        conteo = conteo + 1 ;
        
      
         if (conteo === 3 ){ 
            document.querySelector('.message').textContent = 'Intentalo de Nuevo!';
            document.querySelector('body').style.backgroundColor = 'RED';
            document.querySelector('#titulo').textContent = 'Game Over!';
            document.querySelector('#titulo').style.fontSize = '3rem';
            document.querySelector(".check").textContent= 'Reiniciar';
            document.querySelector('.again').style.display = 'none';
            document.querySelector('p.label-score').style.display = 'none';
            document.querySelector('p.between').style.display = 'none';
            document.querySelector('.guess').style.display = 'none';
            document.querySelector('.number').style.display = 'none';
            document.querySelector('.check').addEventListener
('click',function(){
    window.location.reload()
        }  )
         } })