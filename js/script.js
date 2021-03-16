/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const header = document.querySelector('header');
const h2 = document.querySelector('h2');
const div= document.createElement('div');
const searchLabel = document.createElement('label');
const searchSubmit = document.createElement('input');


searchLabel.innerHTML = '<input type="text">'
searchSubmit.type= "submit";
searchSubmit.value= 'Submit'
div.appendChild(searchLabel);
div.appendChild(searchSubmit);
header.insertBefore(div, h2.nextSibling)
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
function showPage(list, page) {
  const startIndex = (page * 9 ) - 9;
  const endIndex= page * 9;
  const studentList = document.querySelector('.student-list');
  studentList.innerHTMl = '';
  for(let i= 0; i< list.length; i++){
    if(startIndex <= i && endIndex > i ){
      studentItem = list[i];
      const li = document.createElement('li')
      li.className = "student-item cf"
      studentList.appendChild(li)
      const div = document.createElement('div');
      div.className = "student-details";
      li.appendChild(div);
      const img = document.createElement('img');
      img.className = "avatar"
      img.src = `${studentItem.picture.thumbnail}`
      img.alt = "Profile Picture"
      div.appendChild(img);
      const h3 = document.createElement('h3');
      h3.innerHTML= `${studentItem.name.first} ${studentItem.name.last}`
      div.appendChild(h3);
      const span = document.createElement('span');
      span.className = "email";
      span.innerHTML = `${studentItem.email}`
      div.appendChild(span);
      const divJoin = document.createElement('div')
      divJoin.className ="joined-details"
      li.appendChild(divJoin)
      const spanDate = document.createElement('span');
      spanDate.className = "date";
      spanDate.innerHTML = `${studentItem.registered.date}`
      divJoin.appendChild(spanDate)

}

  }
}
showPage(data, 1)


const addPagination = list => {
  const numOfPages = Math.ceil(list.length / 9 )
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML =''
  for(let i=1; i< numOfPages+1; i++){
    const li= document.createElement('li');
    linkList.appendChild(li);
    const button = document.createElement('button');
    button.type = "button"
    button.innerHTML = `${i}`
    li.appendChild(button);
    const firstLi = linkList.firstElementChild;
    const firstButton = firstLi.firstElementChild;
    firstButton.className = "active"

  }
  linkList.addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON'){
      const studentList = document.querySelector('.student-list');
      studentList.innerHTML=''
      const active = document.querySelector('.active');
      active.className =''
      e.target.className ='active'
      studenList = showPage(list, e.target.textContent)
    }
    })
  }


addPagination(data)



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
