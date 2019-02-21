import request from 'superagent'

const apiUrl = 'https://swapi.co/api/'

export function getPeople (id) {
  return request
    .get(`${apiUrl}/people/${id}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      if (err) throw Error('Sorry the force is not with you...')
    })
}

//You don't test code that you have brought into your code base, e.g: You wouldn't test that superagent is doing it's job.