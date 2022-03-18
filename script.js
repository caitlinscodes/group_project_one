
let sbmtBttn = document.getElementById('bookBttn')

// prompt("Are you 21 and up?")

const ageBttn = document.getElementById('sbmtBttn')
const introCard = document.getElementById('introCard')
const selectionBox = document.getElementById('selectionBox')

// var now = confirm("Yes")



ageBttn.addEventListener('click', () => {
  introCard.setAttribute('style', 'display:none');
  selectionBox.setAttribute('style', 'visibility:visible');
  // document.getElementsByName('questoion')[0].focus;
  
});

function getApi(e) {

  e.preventDefault()

  var selectInput = document.getElementById("format-input").value;

    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'http://openlibrary.org/search.json?subject=' + selectInput;
  console.log('requestUrl',requestUrl)
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)

        var bookTitle= document.getElementById("book-title");
       

        for(var i = 0; i< 15; i++){
          console.log('title',data.docs[i].title)

         
          var listItem = document.createElement('li');
          listItem.textContent = data.docs[i].title;
          console.log(listItem)
          bookTitle.appendChild(listItem)
        }
   
        
      });
  }
  
  sbmtBttn.addEventListener('click', getApi);
  



// function getApi(){
//         var requestUrl = 'http://openlibrary.org/search.json?subject=mystery+thriller';

//         fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     })
// }

// libBt.eventListener("click", getApi);
// console.log('');