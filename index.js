
console.log( 'js file loaded' );

document.getElementById('mySpan1').addEventListener('click', function() {
   document.getElementById('myDiv').style.visibility = "hidden"
});

document.getElementById('mySpan2').addEventListener('click', function() {
   document.getElementById('myDiv').style.visibility = ""
});
