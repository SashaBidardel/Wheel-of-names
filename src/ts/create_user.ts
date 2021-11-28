

import { deleteUser } from "./delete_user";
import { animationCoin, btnAddUser, coinsSection, inputNewUser, listUsers, usersArray} from "./elements";

export function newUser() : void
{

    btnAddUser.addEventListener('click', () => {
        if(inputNewUser.value !='') {
            usersArray.push(inputNewUser.value);
            inputNewUser.value = '';
            renderList();
            deleteUser();
                   
            
        }
        if(inputNewUser.value =='') {
            console.log('input vacio');
        }
        
    });

    
}

export function renderList() : void 
{
    coinsSection.innerHTML = '<section id= "coinSection"></section>';
    listUsers.innerHTML = '<ul id="ul-user"></ul>';
    usersArray.forEach(user => {
        const ulUsers = document.getElementById('ul-user') as HTMLElement;
        const allCoins = document.getElementById('coinSection') as HTMLDivElement;
        ulUsers.innerHTML += `<li class="new-player" id="player-${user}"><p>${user}</p> <div class="iconos"><i class="fas fa-trash-alt btn-delete" id=${user}></i><i class="fas fa-edit"></div></li>`;       
        allCoins.innerHTML += `<section><div class="circle" id="coin-${user}"><p>${user}</p></div></section>`;

        ulUsers.style.cssText = "margin-bottom: 2em; list-style: none;"
        
    
    });
}