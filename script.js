
let sbmtBttn = document.getElementById('sbmtBttn')

// prompt("Are you 21 and up?")

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = '';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
   
        
      });
  }
  
  sbmtBttn.addEventListener('click', getApi);
  