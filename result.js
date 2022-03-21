let sbmtBttn = document.getElementById('bookBttn')
var bookBox= document.getElementById("book-title");


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
        console.log(data);
      
        //  let nameOfBook = data.docs.title[0]
       

        nameOfBook.forEach(nameOfBook  => {
          
        
        
         var listItem = document.createElement('li');
         listItem.textContent = nameOfBook;
         listItem.setAttribute('style', 'color:white');
         console.log(listItem)
         bookBox.appendChild(listItem)
       })
          

   
        
    });
}


function reset(){
    bookBox.innerText = ''
  }
  
  sbmtBttn.addEventListener('click', function(event){
      event.preventDefault()


      getApi()
      reset()
      
    })