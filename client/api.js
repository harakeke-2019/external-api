import request from 'superagent'

// Could make test that api url is defined.

const apiUrl = 'https://dog.ceo/api/breeds/image/random'

// Could test that we are concatinating id on end or url.

export function getPuppy () {
  return request
    .get(apiUrl)
    .then(res => {
      return res.body
    })
    .catch(err => {
      if (err) throw Error('no puupy for you mr/mrs')
    })
}

// You don't test code that you have brought into your code base, e.g: You wouldn't test that superagent is doing it's job.
// Only to test code you have written, not what someone else has written.
