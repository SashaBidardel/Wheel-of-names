
import { renderList } from "./create_user";
import { listUsers, usersArray } from "./elements";

export function deleteUser() : void
{
    const btnDeleteUser = document.querySelectorAll('.btn-delete');
   btnDeleteUser.forEach(btn => {
       btn.addEventListener ('click', (e) => {
           let idStrIc = (<HTMLElement>e.target).id;
           
           const elementList = document.getElementById(`player-${idStrIc}`);
           const coinList = document.getElementById(`coin-${idStrIc}`);
           elementList.remove();
           coinList.remove();
           
       
       
        });
    });
}

