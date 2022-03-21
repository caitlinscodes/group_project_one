let sbmtBttn = document.getElementById('bookBttn')
var bookTitle= document.getElementById("book-title");


let results = []







function getApi(e) {

//   e.preventDefault()

  var selectInput = document.getElementById("format-input").value;

    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'http://openlibrary.org/search.json?subject=' + selectInput;
  console.log('requestUrl',requestUrl)
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      
         
       

        for(var i = 0; i< 1; i++){
          console.log('title',data.docs[i].title)

         
          var listItem = document.createElement('li');
          listItem.textContent = data.docs[i].title;
          listItem.setAttribute('style', 'color:white');
          console.log(listItem)
          bookTitle.appendChild(listItem)
        }
   
        
    });
}


function reset(){
    bookTitle.innerText = ''
  }
  
  sbmtBttn.addEventListener('click', function(event){
      event.preventDefault()
    localStorage.setItem("potato", JSON.stringify(results) || []);
  
  var getHistory = JSON.parse(localStorage.getItem("potato"));
  bookTitle.textContent = getHistory;
  

      getApi()
      reset()
      
    })