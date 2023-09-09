function getPoems() {
  return fetch('http://localhost:3000/api/v1/poems')
    .then(res => {
      if(!res.ok){
        throw new Error (`${res.status}`)
      }
      return res.json()
    })
}

function postPoem() {
  
}

export default getPoems;