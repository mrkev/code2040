/** using node.js v6.2.2 */

let rp = require('request-promise');

rp({
  method: 'POST',
  uri: 'http://challenge.code2040.org/api/reverse',
  body : {
    token: '509b543531bf5cef7a106b9cb8fc1cca'
  },
  json: true
})
.then(str => {
  console.log(str);
  return rp({
      method: 'POST',
      uri: 'http://challenge.code2040.org/api/reverse/validate',
      body: {
          token: '509b543531bf5cef7a106b9cb8fc1cca',
          string: str.split('').reverse().join('')
      },
      json: true
  })
})
.then(console.log)
.catch(console.error)
 