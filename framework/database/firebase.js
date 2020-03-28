const fb = require('firebase');

module.exports = {
  fb: fb,
  initilaze: (fb, config) => fb.initializeApp(config),
  set: (fb, ref, data, callback) => {
    const db = fb.database();

    db.ref(ref).set(data).then(res => {
      if(callback) return callback(res);

      return res;
    }).catch(err => {
      return console.error(err);
    });
  },
  get: (fb, ref, callback) => {
    const db = fb.database();

    db.ref(ref).once('value').then(snap => {
      const data = snap.val() || 'null';

      if(callback) return callback(data);

      return data;
    }).catch(err => {
      return console.error(err);
    });
  },
  delete: (fb, ref, callback) => {
    const db = fb.database();

    db.ref(ref).remove().then(res => {
      if(callback) return callback(res);

      return res;
    }).catch(err => {
      return console.error(err);
    });
  }
};