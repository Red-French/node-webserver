'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('news',
  mongoose.Schema({
    top: [
      {
        title: String,
        url: String
      }
    ]
  })
);

// ALTERNTIVE
// const mongoose = require('mongoose');

// const News = mongoose.model('news', mongoose.Schema({
//   top: [{title: String, url: String}]
// }));

// module.exports = News;