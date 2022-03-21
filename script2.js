// console.log("linked");

// let bookGenre = document.getElementById("format-input").value;
// console.log(bookGenre);


//pull genre from local storage
var bookGenre = localStorage.getItem('genre');
console.log(bookGenre);

//pull book API
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
          bookResult.appendChild(listItem)
        }
        
    });





//gets drinks from API
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=scotch")
  .then(function(response){
    return response.json()
  })
  .then( function(data){
    console.log(data)

    var drinkTitle= document.getElementById("cocktail-name");
       
    //no more than 15 drinks
    for(var i = 0; i< 15; i++){
      console.log('drink',data.drinks[i].strDrink)

     //puts list into "your cocktail is"
      var listItem = document.createElement('li');
      listItem.textContent = data.drinks[i].strDrink;
      console.log(listItem)
      drinkTitle.appendChild(listItem)
    }
    
})
