const fs = require('fs');
const __async = require('co').wrap;
const fetch = require('node-fetch');
const urlFormat = require('url').format;
const download = require('./lib/download');
const host = 'https://view42.book118.com';

module.exports = __async (function * (book, dir) {
  for (;;) {
    const url = host + '/pdf/GetNextPage' + urlFormat({
      query: {
        f: book.Url,
        img: book.Img,
        isMobile: book.IsMobi,
        isNet: book.IsNet,
        furl: book.Furl,
        readLimit: book.ReadLimit
      }
    });

    const data = yield fetch(url).then(res => res.json());
    console.log(data);

    switch (data.NextPage) {
        case '!':
        case 'Over':
        case 'Error':
        case 'Response':
        case 'ReadLimit':
          return;
    }

    const imgUrl = host + '/img/?img=' + data.NextPage;
    const file = `${dir}/${('00' + data.PageIndex).substr(-3)}.png`;

    // create folder
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    // download file
    yield download(imgUrl, file);
    console.log(`Download to ${file}...`);

    // update book info
    book.Img = data.NextPage;
  }
});
