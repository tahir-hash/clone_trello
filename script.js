//"use strict";
const add = document.querySelector('.add');
const added = document.querySelector('.added');
const restore=document.querySelector('.restore');
const burger=document.getElementById('burger');
const colonne = document.getElementById('col');
const note = document.getElementById('note');
const refresh = document.getElementById('refresh');
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
const tab_color = ['#C1E1F5','#952D14',"#F6F46A","#D6CE8B","#FAD49F"]
colonne.addEventListener('click',()=> 
{
         nbrElements++;
console.log(nbrElements);

      const subcontain = document.getElementById("subcontain");
      const contain_element = document.createElement("div");
      contain_element.style.backgroundColor=tab_color[nbrElements-1];
      contain_element.setAttribute("class", "contain_element count animate__animated animate__rotateInDownLeft");
      const name_col = document.createElement("div");
      name_col.setAttribute("class", "name_col");
      const div_name= document.createElement('div');
      div_name.setAttribute('class','div_name');
      const trash =document.createElement('i');
      trash.setAttribute('class','fa-solid fa-trash  trash')
      const input = document.createElement("h2");
      input.innerText="Colonne"+" "+nbrElements;
      input.setAttribute("id", 'input'+nbrElements);
      input.setAttribute("class", 'inp');
      const pose_note = document.createElement("div");
      //apend
      pose_note.setAttribute("class", "pos_note");
      pose_note.setAttribute("id", nbrElements);
      subcontain.appendChild(contain_element); 
      name_col.appendChild(input);
      div_name.appendChild(name_col);
      div_name.appendChild(trash);
      contain_element.appendChild(div_name);
      contain_element.appendChild(pose_note);
      //subcontain.appendChild(restore);
      console.log(input.innerText);
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
      /* var recuper=document.querySelectorAll('.task_details');
      recuper.forEach(element => {
         var recup=parseInt(element.parentElement.getAttribute("id"));
         var recup= recup+1;
         setInterval(() => {
            right_btn.style.visibility='hidden'
            if(document.getElementById(recup)!=null)
         {
            right_btn.style.visibility='visible';
         }
         }, 100);
      }); */
         
      //event
      name_col.addEventListener('click',function(){
         let tempVal = name_col.firstElementChild;
         const newInput = document.createElement('textarea');
         newInput.style.width="100%"

         newInput.value = tempVal.innerText;
         tempVal.innerHTML = '';
         tempVal.appendChild(newInput);
         newInput.addEventListener('blur',function(){
             tempVal.innerHTML = newInput.value;
         })
         newInput.focus();
         console.log(tempVal)
     });
      trash.addEventListener('click',function(e){
         id_=parseInt(e.target.parentElement.nextElementSibling.getAttribute('id'));
         count_column= document.querySelectorAll('.count').length;
         if(id_!=1 || (count_column==1 && id_==1))
         {
            subcontain.removeChild(contain_element);  
            nbrElements--;
            colonne.style.display='block';
            rebuild(); 
         }
         
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
      added.classList.toggle('show');
});
//all first column
refresh.addEventListener('click', ()=>{
         const tasked=document.querySelectorAll('.task_details')
         tasked.forEach(element => {
            if(element.parentElement.id!="Corbeille")
            {
               console.log(element.parentElement.id)
               element.classList.add('select');
            deplacer(document.getElementById('1'))
            element.classList.remove('select');
            }
            
         });
         
});
//restore
burger.addEventListener('click',()=>{
   restore.classList.toggle('show');
});
// add task

function add_task(div)
{
   const task_details=document.createElement('div');
   task_details.setAttribute('class','task_details animate__animated animate__jackInTheBox');
   task_details.setAttribute('data-tache', tache.value);
   task_details.setAttribute('data-date', date.value);
   task_details.setAttribute('data-time-start', start_hour.value);
   task_details.setAttribute('data-time-end', end_hour.value);
   
   const task_name=document.createElement('div');
   task_name.setAttribute('class','task_name');
   const left_btn=document.createElement('i');
   left_btn.setAttribute('class','fa-solid fa-angles-left fa-2x left');
   const right_btn=document.createElement('i');
   right_btn.setAttribute('class','fa-solid fa-angles-right fa-2x right');
   const del_task=document.createElement('i');
   del_task.setAttribute('class','fa-solid fa-xmark try');
   const text_des =document.createElement('div');
   text_des.setAttribute('class','text_des');
   const des =document.createElement('div');
   des.setAttribute('class','des');
   const details =document.createElement('div');
   details.setAttribute('class','details');
   const p=document.createElement('p');
   p.innerText= task_details.getAttribute('data-tache') ;
   const h4=document.createElement('h4');
   h4.innerText= "Date:"+task_details.getAttribute('data-date') ;
   const h41=document.createElement('h4');
   h41.innerText="Heure debut:"+task_details.getAttribute('data-time-start') ;
   const h42=document.createElement('h4');
   h42.innerText= "Heure fin:"+task_details.getAttribute('data-time-start');
   //apend
   task_name.appendChild(left_btn);
   des.appendChild(p);
   text_des.appendChild(des)
   details.appendChild(h4);
   details.appendChild(h41);
   details.appendChild(h42);
   text_des.appendChild(details);
   task_name.appendChild(text_des);
   task_name.appendChild(right_btn);
   task_name.appendChild(del_task);
   task_details.appendChild(task_name);
   div.appendChild(task_details);
   //fleche
  
   //event
   task_name.addEventListener('mouseenter',()=>{
      text_des.classList.add('show');
      del_task.classList.add('show');
   });
   task_name.addEventListener('mouseleave',()=>{
      text_des.classList.remove('show');
      del_task.classList.remove('show');
   });
   //delete_task
   del_task.addEventListener('click',()=>{
      /* modal_all.classList.add('show');
      tache.value= p.innerText; */
      task_details.classList.add('select');
      deplacer(document.getElementById("Corbeille"))
      task_details.classList.remove('select');
   });
   //update
   task_name.addEventListener('dblclick', ()=>{
      if(task_details.parentElement.id!="Corbeille")
      {
         modal_all.classList.add('show');
         tache.value= task_details.getAttribute('data-tache');
         date.value=task_details.getAttribute('data-date');
         start_hour.value=task_details.getAttribute('data-time-start');
         end_hour.value=task_details.getAttribute('data-time-end');
         submit.setAttribute('data-modif', 'true');
      }
      
   });
   //deplacement
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
   //update
   
   
}


form.addEventListener('submit', (e)=>{
   e.preventDefault();
   if(submit.getAttribute('data-modif')=='true')
   {
      document.querySelector('.task_details').innerHTML="";
      document.querySelector('.task_details').dataset.tache==tache.value;
      document.querySelector('.task_details').dataset.date==date.value;
      document.querySelector('.task_details').dataset.time-start==start_hour.value;
      document.querySelector('.task_details').dataset.time-end== end_hour.value;
      modal_all.classList.remove('show');
      submit.removeAttribute('data-modif');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
   }
   else
   {
      id1=document.getElementById('1');
      add_task(id1);
      modal_all.classList.remove('show');
   }
   //reset()
   form.reset();
});
//rebuild
function rebuild()
{
   let column= document.querySelectorAll('.inp');
   column.forEach((input,a)=>{
         a++;
         input.innerText= "Colonne"+" "+a;
       });
   let allId=document.querySelectorAll('.pos_note');
       allId.forEach((pose_note,b)=>{
         b++
         pose_note.setAttribute("id", b);
       });
}
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
