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

step('dating')
.then(json => {
  let origdate = new Date(json.datestamp);
  let interval = parseInt(json.interval);
  let newdate  = new Date(origdate.getTime() + interval * 1000);
  return {
    // They don't seem to be expecting millisecons, so remove the .000
    datestamp : newdate.toISOString().replace('.000', '')
  };
})
.then(submit('dating'))
.then(console.log)
.catch(console.error)