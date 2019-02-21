import request from 'superagent'

// Could make test that api url is defined.

const apiUrl = 'https://swapi.co/api/'

// Could test that we are concatinating id on end or url.

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

// You don't test code that you have brought into your code base, e.g: You wouldn't test that superagent is doing it's job.
// Only to test code you have written, not what someone else has written.