
console.log( 'js file loaded' );

document.getElementById('mySpan').addEventListener('click', function() {
   let visibility = document.getElementById('myDiv').style.visibility;

   if(visibility === 'hidden') {
      document.getElementById('myDiv').style.visibility = ""
   } else {
      document.getElementById('myDiv').style.visibility = "hidden"
   }
});

// document.getElementById('mySpan1').addEventListener('click', function() {
//    document.getElementById('myDiv').style.visibility = "hidden"
// });
//
// document.getElementById('mySpan2').addEventListener('click', function() {
//    document.getElementById('myDiv').style.visibility = ""
// });

