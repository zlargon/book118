const path = require('path');
const bookDownloader = require('../index');

// Book Information
// Information_Systems_for_Managers_with_Cases_3.1
// https://max.book118.com/html/2018/0305/155900729.shtm
const book = {
  Url: "dXAyNS0yLmJvb2sxMTguY29tLjgwXDM5NDk3NTYtNWE5Y2M1MDMwNTY1NS5wZGY=",
  Img: "Hs92T42xAvvcQuSXpzHnF2K2XwkDcv2WUl4F@ZGAYhAnYxM3cbzdU0@2j8NR2dAM",
  IsMobi: "false",
  IsNet: "True",
  Furl: "YOQStEpojXBI4hSqWF_nu1uYyFrdequbXjuAHnU8DUHmmNVYaTERPQa1R9T8fEw8bLgMcqto118RRKWO4coyVeXhRWEk_3Cmga7XY0bwo4sCD@6t7tdL_g==",
  ReadLimit: "6id9kdCn_x4h5vJLpER47g=="
};

// Directory
const dir = path.resolve(__dirname, './pdf');

// start download
bookDownloader(book, dir)
  .then(console.log)
  .catch(console.error);
