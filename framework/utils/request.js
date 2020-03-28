const axios = require('axios');

module.exports = (options, callback) => {
  const { baseURL, url, method, data } = options;

  axios({
    method: method,
    baseURL: baseURL,
    url: url,
    data: data ? data : null
  }).then(res => {
    if(callback) return callback(res.data);

    return res.data;
  }).catch(err => {
    return console.error(err);
  });
}