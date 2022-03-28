//"use strict";
const add = document.querySelector('.add');
const colonne = document.getElementById('col');
const note = document.getElementById('note');
const modal=document.querySelector('.modal');
const modal_all=document.querySelector('.modal_all');
const close=document.getElementById('close');
const setting= document.getElementById('set');
// form
const form= document.getElementById('form');
const tache= document.getElementById('tache');
const date= document.getElementById('date');
const start_hour= document.getElementById('start_hour');
const end_hour= document.getElementById('start_end');
const submit= document.getElementById('submit');
///
var nbrElements = 0;
const tab = ['#C1E1F5','#952D14',"#F6F46A","#D6CE8B","#FAD49F"]
colonne.addEventListener('click',()=> 
{
         nbrElements++;
console.log(nbrElements);

      const subcontain = document.getElementById("subcontain");
      const contain_element = document.createElement("div");
      contain_element.style.backgroundColor=tab[nbrElements-1];
      contain_element.setAttribute("class", "contain_element animate__animated animate__rotateInDownLeft");
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
      pose_note.setAttribute("id", nbrElements);
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
      //buuton
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
   modal_all.classList.toggle('show');
});
//close modal
close.addEventListener('click',()=>{
   modal_all.classList.remove('show');
});
//setting icons
setting.addEventListener('click', ()=>{
      add.classList.toggle('show');
});
var cpt=1;

// add task

function add_task(div)
{
   const task_details=document.createElement('div');
   task_details.setAttribute('class','task_details animate__animated animate__jackInTheBox');
   const task_name=document.createElement('div');
   task_name.setAttribute('class','task_name');
   const left_btn=document.createElement('i');
   left_btn.setAttribute('class','fa-solid fa-angles-left fa-2x left');
   const right_btn=document.createElement('i');
   right_btn.setAttribute('class','fa-solid fa-angles-right fa-2x right');
   const details =document.createElement('div');
   details.setAttribute('class','details');
   const p=document.createElement('p');
   p.innerText= tache.value ;
   const h4=document.createElement('h4');
   h4.innerText= "Date:"+date.value ;
   const h41=document.createElement('h4');
   h41.innerText="Heure debut:"+start_hour.value ;
   const h42=document.createElement('h4');
   h42.innerText= "Heure fin:"+end_hour.value ;
   //apend
   task_name.appendChild(left_btn);
   details.appendChild(p);
   details.appendChild(h4);
   details.appendChild(h41);
   details.appendChild(h42);
   task_name.appendChild(details);
   task_name.appendChild(right_btn);
   task_details.appendChild(task_name);
   div.appendChild(task_details);
   //event
   task_name.addEventListener('mouseover',()=>{
      details.classList.add('show');
   });
   task_name.addEventListener('mouseleave',()=>{
      details.classList.remove('show');
   });
   //
   right_btn.addEventListener('click', ()=>{
         task_details.classList.add('select');
         var recupId=parseInt(task_details.parentElement.getAttribute("id"));
         console.log(task_details.parentElement.getAttribute("id"))
         var recupId=recupId+1
         deplacer(document.getElementById(recupId))
         //console.log(document.getElementById(cpt))
         task_details.classList.remove('select');
   });
   left_btn.addEventListener('click', ()=>{
         task_details.classList.add('select');
         var recupId=parseInt(task_details.parentElement.getAttribute("id"));
         var recupId=recupId-1
         deplacer(document.getElementById(recupId))
         //console.log(document.getElementById(cpt))
         task_details.classList.remove('select');
   });
   
}

form.addEventListener('submit', (e)=>{
   e.preventDefault();
   id1=document.getElementById('1');
   add_task(id1);
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
     rebuild()
});
//rebuild
function rebuild()
{
  let input= document.querySelectorAll('.test');
      input.forEach(element => {
         element.value="";
      });
}
//
function deplacer (to)
{
   const tab_task=document.querySelectorAll('.task_details');
   tab_task.forEach(element => {
      
         if(element.classList.contains('select'))
         {
            to.appendChild(element);
         }
   });
}
