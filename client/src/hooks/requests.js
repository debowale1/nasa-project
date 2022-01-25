const API_URL = 'http://localhost:3000'

async function httpGetPlanets() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/planets`)
  // Load planets and return as JSON.
  const planets =  await response.json()
  return planets
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/launches`)
  // Load launches, sort by flight number, and return as JSON.
  const fetchedLaunches = await response.json()
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber
  })
}

async function httpSubmitLaunch(launch) {
  try {
    
    return await fetch(`${API_URL}/launches`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(launch)
    })
  } catch (error) {
    return {
      ok: false
    }
  }
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'delete'
    })
    
  } catch (error) {
    return {
      ok: false
    }
  }
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};