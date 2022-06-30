'use strict';

let sort;
var btn1 = document.getElementById( "btn-one" );
var btn2 = document.getElementById( "btn-two" );

const index = [ 1, 2, 3, 4, 5 ];

let arr = [];
for ( var i = 0; i < index.length; i++ ) {
	var box = document.createElement( "p" );
	box.className = "box";
	box.id = "box" + index[ i ];
	box.innerText = index[ i ];
	box.style.order = index[ i ];
	document.getElementById( "container" ).appendChild( box );
	arr.push( box );
};
console.log( 'hello World!' )

var box1 = document.getElementById( 'box1' );
var box2 = document.getElementById( 'box2' );
var box3 = document.getElementById( 'box3' );
var box4 = document.getElementById( 'box4' );
var box5 = document.getElementById( 'box5' );
btn1.onclick = () => {
	sort = index.sort( ( a, b ) => b - a );

	switch ( box1.style.order ) {
		case "1":
			box1.style.order = sort[ 0 ];
			box2.style.order = sort[ 4 ];
			box3.style.order = sort[ 3 ];
			box4.style.order = sort[ 2 ];
			box5.style.order = sort[ 1 ];
			break;
		case "2":
			box1.style.order = sort[ 4 ];
			box2.style.order = sort[ 3 ];
			box3.style.order = sort[ 2 ];
			box4.style.order = sort[ 1 ];
			box5.style.order = sort[ 0 ];
			break;
		case "3":
			box1.style.order = sort[ 3 ];
			box2.style.order = sort[ 2 ];
			box3.style.order = sort[ 1 ];
			box4.style.order = sort[ 0 ];
			box5.style.order = sort[ 4 ];
			break;
		case "4":
			box1.style.order = sort[ 2 ];
			box2.style.order = sort[ 1 ];
			box3.style.order = sort[ 0 ];
			box4.style.order = sort[ 4 ];
			box5.style.order = sort[ 3 ];
			break;
		case "5":
			box1.style.order = sort[ 1 ];
			box2.style.order = sort[ 0 ];
			box3.style.order = sort[ 4 ];
			box4.style.order = sort[ 3 ];
			box5.style.order = sort[ 2 ];
			break;
		default:
			box1.style.order = sort[ 0 ];
			box2.style.order = sort[ 4 ];
			box3.style.order = sort[ 3 ];
			box4.style.order = sort[ 2 ];
			box5.style.order = sort[ 1 ];
	}
	console.log( "button click" )
}
btn2.onclick = () => {
	sort = index.sort( ( a, b ) => b + a );

	switch ( box1.style.order ) {
		case "5":
			box1.style.order = sort[ 0 ];
			box2.style.order = sort[ 1 ];
			box3.style.order = sort[ 2 ];
			box4.style.order = sort[ 3 ];
			box5.style.order = sort[ 4 ];
			break;
		case "4":
			box1.style.order = sort[ 4 ];
			box2.style.order = sort[ 0 ];
			box3.style.order = sort[ 1 ];
			box4.style.order = sort[ 2 ];
			box5.style.order = sort[ 3 ];
			break;
		case "3":
			box1.style.order = sort[ 3 ];
			box2.style.order = sort[ 4 ];
			box3.style.order = sort[ 0 ];
			box4.style.order = sort[ 1 ];
			box5.style.order = sort[ 2 ];
			break;
		case "2":
			box1.style.order = sort[ 2 ];
			box2.style.order = sort[ 3 ];
			box3.style.order = sort[ 4 ];
			box4.style.order = sort[ 0 ];
			box5.style.order = sort[ 1 ];
			break;
		case "1":
			box1.style.order = sort[ 1 ];
			box2.style.order = sort[ 2 ];
			box3.style.order = sort[ 3 ];
			box4.style.order = sort[ 4 ];
			box5.style.order = sort[ 0 ];
			break;
		default:
			box1.style.order = sort[ 0 ];
			box2.style.order = sort[ 1 ];
			box3.style.order = sort[ 2 ];
			box4.style.order = sort[ 3 ];
			box5.style.order = sort[ 4 ];
	}
	console.log( "button click" )
}
