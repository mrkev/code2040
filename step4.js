/** using node.js v6.2.2 */

let rp = require('request-promise');
let TOKEN = '509b543531bf5cef7a106b9cb8fc1cca';

/*
  Helper functions; url can be abstracted too
 */

let step = q => rp({
  method: 'POST',
  uri: `http://challenge.code2040.org/api/${q}`,
  body : { token: TOKEN },
  json: true
})

let submit = q => answer => {
  answer.token = TOKEN;
  return rp({
      method: 'POST',
      uri: `http://challenge.code2040.org/api/${q}/validate`,
      body: answer,
      json: true
  });
}

/** Main implementation **/

step('prefix')
.then(json => ({
  array : json.array.filter(x => x.indexOf(json.prefix) != 0)
}))
.then(submit('prefix'))
.then(console.log)
.catch(console.error)