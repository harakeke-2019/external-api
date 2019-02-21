import request from 'superagent'

const apiUrl = 'https://swapi.co/api/people'

export function getPeople () {
  request
  .get(apiUrl)
  .then
}