/** using node.js v6.2.2 */

let rp = require('request-promise');
let TOKEN = '509b543531bf5cef7a106b9cb8fc1cca';

/*
  Helper functions; challenges follow a pretty
  standard format 
 */

let step = uri => rp({
  method: 'POST',
  uri: uri,
  body : { token: TOKEN },
  json: true
})

let submit = uri => answer => {
  answer.token = TOKEN;
  return rp({
      method: 'POST',
      uri: uri,
      body: answer,
      json: true
  });
}

/** Main implementation **/

step('http://challenge.code2040.org/api/haystack')
.then(json => ({
  needle : json.haystack.indexOf(json.needle)
}))
.then(submit('http://challenge.code2040.org/api/haystack/validate'))
.then(console.log)
.catch(console.error)