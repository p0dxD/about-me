//parallex effect on background
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

//for the background
$('body').shards([0,0,0,.5],[239,250,180,.2],[0,0,0,.1],20,1.0,0,.1,false);


// $(window).scroll(function() {
//    if($(window).scrollTop() + $(window).height() == $(document).height()) {
//   		alert('test');
//   		$( ".footer" ).show( "slow", function() {
//     	// Animation complete.
//   		});
//    }
// });