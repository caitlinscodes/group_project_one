// let sbmtBttn = document.getElementById('bookBttn')
const ageBttn = document.getElementById('ageBttn')
const introCard = document.getElementById('introCard')
const selectionBox = document.getElementById('selectionBox')
const radioButtons = document.querySelectorAll('input[name="question"]');

function askAge(radioInput){
  if(radioInput.checked){
    
    ageBttn.disabled = false;
  }
}


ageBttn.addEventListener('click', () => {
  // introCard.setAttribute('style', 'display:none');
  // selectionBox.setAttribute('style', 'visibility:visible');
window.location.assign('index2.html');
  // genreSubmitted()
  
});

// function genreSubmitted(event) {
//   // event.preventDefault();

//   let formatInput = document.querySelector('#format-input').value
  
//   if (!formatInput) {
//    alert('You need to pick Genre!');
//     return;
    
 
//   // getApi()
// }

// sbmtBttn.addEventListener('click', genreSubmitted);
















// function getApi(e) {
  
//   e.preventDefault()
   
//   // var selectInput = document.getElementById("format-input").value;
  
//   // fetch request gets a list of all the repos for the node.js organization
//   var requestUrl = 'http://openlibrary.org/search.json?subject=' + formatInput;
//   console.log('requestUrl',requestUrl)
//     fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//       .then(function (data) {
//         if (window.location.assign("/index2.html")) {
        
//           return data
//         } 
//       }).then( data => {
//         var bookTitle= document.getElementById("book-title");

//         let bookName = data.docs.title

//        bookName.forEach(book => {
//          console.log(book);

        // let list = document.createElement('li')



        
  //       })
        
        
  //       // for(var i = 0; i< 15; i++){
  //       //   console.log('title',data.docs[i].title)
          
          
  //       //   var listItem = document.createElement('li');
  //       //   listItem.textContent = data.docs[i].title;
  //       //   console.log(listItem)
  //       //   bookTitle.appendChild(listItem)
  //       // }
        
        
  //     });
  // }
  
  // sbmtBttn.addEventListener('click', getApi);
  
  
  
  