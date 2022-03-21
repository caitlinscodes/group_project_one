

//pull genre from local storage
var bookGenre = localStorage.getItem('genre');
var selectInput = localStorage.getItem('selectInput')
console.log(bookGenre);

//pull book API
var requestUrl = 'http://openlibrary.org/search.json?subject=' + bookGenre;
console.log('requestUrl',requestUrl)
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      localStorage.setItem('genre',selectInput);
     
        var bookTitle= document.getElementById("book-title");
        
        
        for(var i = 0; i< 15; i++){
          console.log('title',data.docs[i].title)
          
          var listItem = document.createElement('li');
          listItem.textContent = data.docs[i].title;
          console.log(listItem)
          bookTitle.appendChild(listItem)
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
