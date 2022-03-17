



function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
   
        
      });
  }
  
  addEventListener('click', getApi);
  