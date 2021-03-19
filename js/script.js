/**
* @file This Organizes a series of student data
* @author Mike T.
*/


/**
* @const -The series of const and Labels appends a submit and text input
*/
const header = document.querySelector('header');
const h2 = document.querySelector('h2');
const div= document.createElement('div');
const search = document.createElement('input');
const label = document.createElement('label');
label.innerHTML = '<button type="button">Submit</button> '
const value = search.value

search.type= "text";
div.appendChild(search);
div.appendChild(label);
header.insertBefore(div, h2.nextSibling)
//end series



/**
* @function showPage
* @param {array} list
* @param {number} page
* @description - This will Display the information from the data
*                array to the Dom
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
//End function

/**
* @callback Showpage()
* @arg {array} data
* @arg {number} 1
*/
showPage(data, 1)




/**
* @function addPagination
* @param {array} list
* @description -Whis will display the Page numbers at the bottom and also
*               display 9 different students on each page
*/
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
  /**
  * @event linkList#addEventListener
  * @description - When the buttons at the button is 'click' it will
  *                display students
  */
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
//end of functoin

/**
* @callback addPagination()
* @arg {array} data
*/
addPagination(data)



/**
* @description -bellow was a failed attempt at creating the searchBar
*               I will eventually get back to it
*/
function searchBar(searchInput, list){
const studentList = document.querySelectorAll('li.student-item.cf');

  for(let i=0; i<list.length; i++){
    studentList[i].style.display = '';
    if(searchInput.value !== 0 &&
      studentList[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
      studentList[i].style.display ='flex';
    }else {
      studentList[i].style.display ='none'
    }
  }


}
label.addEventListener('click', (event) => {
  event.preventDefault();


searchBar(search,data)



});

search.addEventListener('keyup', () => {


  searchBar(search,data);


});
