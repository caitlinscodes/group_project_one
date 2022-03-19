let sbmtBttn = document.getElementById('bookBttn')
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
        if (!window.location.href.includes("/index2.html")) {
            window.open("index2.html", "_parent")
            return data
        } 
        var bookTitle= document.getElementById("book-title");
       

        for(var i = 0; i< 15; i++){
          console.log('title',data.docs[i].title)

         
          var listItem = document.createElement('li');
          listItem.textContent = data.docs[i].title;
          console.log(listItem)
          bookTitle.appendChild(listItem)
        }
   
        console.log(bookGenre);
      });
  }
  console.log(bookGenre);
  sbmtBttn.addEventListener('click', getApi);

//------------------code section to pull API for second page/cocktails-------
// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita&api_key=1")
//   .then(function(response){
//     return response.json()
//   })
//   .then( function(data){
//     console.log(data)
//   })
//   .catch(function(error){
//     console.log(error)
//   });



  


//-----code template to pull from API-----
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