const api = 'https://api.spacexdata.com/v3/missions'

/**
 * createNodeElement
 * appendChild
 */
function getMisisons() {
 fetch(api)
  .then((response) => {
    return response.json()
  })
  .then(missions => {
    console.log(missions)
  })
}

async function getMissions2() {
  const ulElement = document.getElementById('missions-list')
  const response = await fetch(api)
  const missions = await response.json()

  // Iterar sobre cada elemento del arreglo
  for(let i=0; i< missions.length; i++) {
    // Crear un elemento li
    const liElement = document.createElement('li')
    liElement.textContent = missions[i].mission_name
    // Agregar el nuevo elemento a la lista
    ulElement.appendChild(liElement)
  }
}

getMissions2()
