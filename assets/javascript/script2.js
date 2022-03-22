let sbmtBttn = document.getElementById('bookBttn')
var bookBox= document.getElementById("book-title");
var drinkTitle= document.getElementById("cocktail-name");

function getApi() {
  
  const selectInput = document.getElementById("format-input").value;
  
  if (!selectInput) {
        
    alert('You need to pick Genre!')
    
  }   else {
    
  }

  
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'http://openlibrary.org/search.json?subject='+ selectInput;
  console.log('requestUrl',requestUrl)
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
     
    for(let i = 0; i <= 0; i++ ){
        let allTheBooks = data.docs[i].title
        
        
        //  Math.floor(Math.random() * (all + 1) + min);
        
        
         var listItem = document.createElement('li');
         listItem.textContent = allTheBooks;
         listItem.setAttribute('style', 'color:white');
         console.log(listItem)
         bookBox.appendChild(listItem)
         
         localStorage.setItem("notPotato", JSON.stringify(allTheBooks))
        }
      });
    }
  
    
function getApi2(){
  const cocktailInput = document.getElementById("cocktail-input").value

  
  if (!cocktailInput) {
        
    alert('You need to pick Cocktail Base!')
    
  }   


  
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + cocktailInput)
  .then(function(choice){
    return choice.json();
  })
  .then( function(data){
    console.log(data)

       
    //no more than 15 drinks
    for(var i = 0; i<= 0; i++){
      let allDrinks = data.drinks[i].strDrink
      // console.log('drink',data.drinks[i].strDrink)

     //puts list into "your cocktail is"
      let drinkList = document.createElement('li');
      drinkList.textContent = allDrinks
     drinkList.setAttribute('style', 'color:white');
     drinkTitle.appendChild(drinkList)

      localStorage.setItem("notPotato2", JSON.stringify(allDrinks))
    }
    
  })
}

function reset(){
    bookBox.innerText = ''
    drinkTitle.innerText = ''
  }
  
  sbmtBttn.addEventListener('click', function(event){
      event.preventDefault()
      
      
      getApi()
      getApi2()
      reset()
      
      // if (!selectInput || !cocktailInput) {
        
      //   alert('You need to pick Genre!');
      
      // }  
      
    })

    function storage(){

      document.getElementById('result-history')






    }