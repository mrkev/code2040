/** using node.js v6.2.2 */

let rp = require('request-promise');

rp({
  method: 'POST',
  uri: 'http://challenge.code2040.org/api/register',
  body : {
    token: '509b543531bf5cef7a106b9cb8fc1cca',
    github: 'https://github.com/mrkev/code2040'
  },
  json: true
})
.then(console.log)
.catch(console.error)
 