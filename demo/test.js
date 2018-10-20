/**
 * Created by gaofeng on 2018/10/20.
 */
var glob = require('glob');

glob("js/?.js",(err,files) => {
  console.log(files)
})

console.log("---");

glob("js/a[0-3].js",(err,files) => {
  console.log(files)
})



glob("js/*(a|a2|b).js",(err,files) => {
  console.log("---");
  console.log(files)
})
