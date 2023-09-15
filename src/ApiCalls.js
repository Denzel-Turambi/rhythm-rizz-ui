function getPoems() {
  return fetch('https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems')
  .then(res => {
    if(!res.ok){
      throw new Error (`${res.status}`)
    }
    return res.json()
  })
}

function postPoem(poem) {
  return fetch('https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems', {
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
}

function getPoemById(id) {
  return fetch(`https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems/${id}`)
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