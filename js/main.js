//create a grid
//create chess pieces --> constructor? 
//have the grid be black and white
//assign rank in file --> in retrospect, wasn't 100% sure what you meant by this, so I opted for the id = the chess grid equivalent

/* Create a grid --> Thursday Morning Quarterback says this should be a constructor...*/

var board = document.getElementById("board");
var arr = ["a", "b", "c", "d", "e", "f", "g", "h"];


for (let i = 0; i < arr.length; i++) {

    if (i % 2 === 0) {
        var column = document.createElement("div");
        var columnClassName = arr[i];

       for(let j=1; j<= arr.length; j++){
         if(j % 2 === 0){
            var odd = document.createElement("div");
            var columnNumber = arr[i]+j;
            odd.setAttribute("class", "white");
            odd.setAttribute("id", columnNumber);
            column.appendChild(odd);
        } else {
            var even = document.createElement("div");
            var columnNumber = arr[i]+j;
            even.setAttribute("class", "black");
            even.setAttribute("id", columnNumber)
            column.appendChild(even);
        }
        }
        column.setAttribute("class", columnClassName);
        board.appendChild(column);
    } else {
        var column = document.createElement("div");
        var columnClassName = arr[i];

       for(let j=1; j<= arr.length; j++){
         if(j % 2 === 0){
            var odd = document.createElement("div");
            var columnNumber = arr[i]+j;
            odd.setAttribute("class", "black");
            odd.setAttribute("id", columnNumber);
            column.appendChild(odd);
        } else {
            var even = document.createElement("div");
            var columnNumber = arr[i]+j;
            even.setAttribute("class", "white");
            even.setAttribute("id", columnNumber)
            column.appendChild(even);
        }
        }
        column.setAttribute("class", columnClassName);
        board.appendChild(column);
  }
}

/* Create Pieces */

function CreatePieces(name, color, height, width, borderRadius, location, movement) {
    this.name = name;
    this.color= color;
    this.height = height;
    this.width = width;
    this.borderRadius = borderRadius;
    this.location= location;
    this.movement= movement; //this IRL would be a method

/*This is the 3hr mark */
