
import { renderList } from "./create_user";
import { deleteUser } from "./delete_user";
import {animationCoin, btnPlay, messageContainer, usersArray } from "./elements";

export function play() : void
{
        btnPlay.addEventListener('click',() => {
            if (usersArray.length >= 2) {
                let num=Math.floor(Math.random()*usersArray.length);
                let looser=usersArray[num];
                console.log(num);
           
                for (let i:number = 0; i<animationCoin.length; i++) {
                animationCoin[i].classList.add("rotate");
                }
                
                setTimeout(() => {
                    usersArray.splice(num,1);
                    if (usersArray.length >= 2) {
                        messageContainer.innerHTML=`<div><p>El jugador ${looser} ha sido eliminado</p><p class="text-indicator">Pulsa PLAY para seguir jugando</p></div>`;
                    }
                    if (usersArray.length == 1)
                    {          
                    messageContainer.innerHTML=`<div><p>El ganador es ${usersArray[0]}</p></div>`
                }  
            
            renderList();
            }, 5000);
            messageContainer.innerHTML=`<div></div>`;
            }
            else if (usersArray.length < 2){
                messageContainer.innerHTML = `<div><p>Por favor, introduce al menos 2 jugadores para empezar el juego</p></div>`
            }
                
            

            
});
    
    
       
    

   
        
            /*let i:number=0;
            let rotate = animationCoin[i];
            = "animation: flipHeads 3s; animation-fill-mode: forwards; animation-duration: 5s; @keyframes flipHeads{ from { transform: rotateY(0deg);} to{ transform: rotateY(1800deg);}"*/
          

          
         
        
}
    

