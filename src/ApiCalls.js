


function getPoems() {
  return fetch('http://localhost:3000/api/v1/poems')
  .then(res => {
    if(!res.ok){
      throw new Error (`${res.status}`)
    }
    return res.json()
  })
}

function postPoem(poem) {
  return fetch('http://localhost:3000/api/v1/poems', {
    method: 'POST',
    body: JSON.stringify(poem),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if(!response.ok) {
      throw new Error(`${response.status}`)
    }
    return response.json();
  })
  .catch(error => {
    console.log('Error', error);
    throw error;
  })
}

function getPoemById(id) {
  return fetch(`http://localhost:3000/api/v1/poems/${id}`)
  .then((res) => {
    if(!res.ok){
      throw new Error (`${res.status}`)
    }
    return res.json()
  })
}
  

export {
  getPoems,
  getPoemById,
  postPoem
}
