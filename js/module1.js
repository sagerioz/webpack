// module#1
let $ = require('jquery')
$(document).ready(function(){
  console.log("mod 1 has updated");
  $('p').html("this has been updated from module 1 using jquery");
})
