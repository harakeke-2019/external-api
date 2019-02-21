import request from 'superagent'

const apiUrl = 'https://swapi.co/api/people'

export function getPeople () {
  request
    .get(apiUrl)
    .then(res => {
      return res.body
    })
    .catch(err => {
      if (err) throw Error('Sorry the force is not with you...')
    })
}
