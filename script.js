
let sbmtBttn = document.getElementById('bttn')

// prompt("Are you 21 and up?")



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