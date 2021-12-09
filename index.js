function submitData(name, email) {
  //post request to destination url
  //headers have content type and accept
  //body with name and email stringified
return fetch('http://localhost:3000/users', {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( {
      name,
      email
    })
  })
    //use then to access res obj and built in json method to parse contents of body properly
    .then (function(response) {
      return response.json()
    })
    .then(function(object) {
      document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
      document.body.innerHTML = error.message
    })
  }