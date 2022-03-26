//"use strict";
const add = document.querySelector('.add');
const colonne = document.getElementById('col');
const note = document.getElementById('note');
const modal=document.querySelector('.modal');
const close=document.getElementById('close');
const setting= document.getElementById('set');
//file json
//const json= require('db.json')
/* ;
console.log(json.adress) */
//fetch("db.json").then(response => response.json()).then(data =>console.log(data)); 
// form
const form= document.getElementById('form');
const tache= document.getElementById('tache');
const date= document.getElementById('date');
const start_hour= document.getElementById('start_hour');
const end_hour= document.getElementById('start_end');
const submit= document.getElementById('submit');
///
var nbrElements = 0;
const tab = ['#73FEFF','#47A4FF',"#FF7654","#EAE9BA","#FAD414"]
colonne.addEventListener('click',()=> 
{
         nbrElements++;
console.log(nbrElements);

      const subcontain = document.getElementById("subcontain");
      const contain_element = document.createElement("div");
      contain_element.style.backgroundColor=tab[nbrElements-1];
      contain_element.setAttribute("class", "contain_element animate__animated animate__jackInTheBox");
      const name_col = document.createElement("div");
      name_col.setAttribute("class", "name_col");
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("value", "Colonne"+" "+nbrElements);
      input.setAttribute("id", 'input'+nbrElements);
      input.setAttribute("disabled", "disabled");
      const pose_note = document.createElement("div");
      //apend
      pose_note.setAttribute("class", "pos_note");
      pose_note.setAttribute("id", 'id'+nbrElements);
      subcontain.appendChild(contain_element);
      contain_element.appendChild(name_col);
      contain_element.appendChild(pose_note);
      name_col.appendChild(input);    
      //condition
      if(nbrElements==5)
      {
         colonne.style.display='none';
      }
      if(nbrElements!=0)
      {
         note.style.display='block';
      }
      //event
      name_col.addEventListener('dblclick', ()=>{
         input.toggleAttribute('disabled');
      });
      pose_note.addEventListener('dblclick',()=>{
         input.setAttribute('disabled','disabled');
      });
});


//add note
note.addEventListener('click',()=>{
   modal.classList.toggle('show');
});
//close modal
close.addEventListener('click',()=>{
   modal.classList.remove('show');
});
//setting icons
setting.addEventListener('click', ()=>{
      add.classList.toggle('show');
});

// add task

function add_task(div)
{
   const task_name=document.createElement('div');
   task_name.setAttribute('class','task_name');
   const left_btn=document.createElement('i');
   left_btn.setAttribute('class','fa-solid fa-angles-left fa-2x');
   const right_btn=document.createElement('i');
   right_btn.setAttribute('class','fa-solid fa-angles-right fa-2x');
   const p=document.createElement('p');
   p.innerText= tache.value ;
   task_name.appendChild(left_btn);
   task_name.appendChild(p);
   task_name.appendChild(right_btn);
   div.appendChild(task_name);
   //event
   
}

/* form.addEventListener('submit',(e)=>{
   e.preventDefault();
   id1=document.getElementById('id1');
   add_task(id1);
   //test
   var json =JSON.stringify({
      "id": 1,
      "colonne": 1,
      "titre": document.getElementById('input1').value,
      "description": tache.value,
      "date":date.value,
      "hour_start": start_hour.value,
      "hour_end":end_hour.value,
      "etat": 1
   });
   console.log(json);
}); */
/* var tass=[];
console.log(tass);

var jsonar=JSON.stringify(tass);
function createTask(col,titre,jour,heure_start,heure_end,etat)
{
  var tast= {
      "colonne": col,
      "titre": titre,
      "date":jour,
      "hour_start": heure_start,
      "hour_end":heure_end,
      "etat": etat
   };
   tass.push(tast);  
   console.log(tass);
}
 */

form.addEventListener('submit', (e)=>{
   e.preventDefault();
   fetch("db.json",
    {
        method: "POST",
        body: JSON.stringify({
         id: 1,
         colonne: 1,
         titre: document.getElementById('input1').value,
         description: tache.value,
         date:date.value,
         hour_start: start_hour.value,
         hour_end:end_hour.value,
         etat: 1
        }),
    })
    .then(response => response.json())
    .then(data=> console.log(data))
});