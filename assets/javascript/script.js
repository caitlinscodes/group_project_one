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

  localStorage.setItem('selectInput', selectInput);

    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'http://openlibrary.org/search.json?subject=' + selectInput;
  console.log('requestUrl',requestUrl)
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        localStorage.setItem('genre',selectInput);
       
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
          
      });
  }

  bookBttn.addEventListener('click', getApi);
