// Requirements:
// • Assume that the field is a two-dimensional grid. [-check]
// • The cow has an initial starting point (x, y) and facing direction (N, S, E, W). [-check]
// • The cow should accept a sequence of instructions via an array. [-check]
// • Implement commands that move the cow forward and backward (f, b) in the field. [-check]
// • Implement commands that rotate the cow left and right (l, r) in the field. [-check? - only rotate, no moving left or right]
// • Your Cow Grazing Simulator must work on modern browsers. [-check]
// • The provided assets are optional and you may substitute with your own. -(check?) No assets were given



// --------------------- Begin Code --------------------- //

// Recommended to open console to see what is happening.
// 1. Enter command in input then press submit to load up command into the array.
// 2. Click on 'Go' button to execute the instructions from the array.
// 3. Click on 'Clear Instructions' to empty array.
// 4. Click on 'Reset Location' to reset the object location.
// 5. Click on 'Current Instructions' to see what the array currently holds.

// Instructions array; Predefined in this case, can also be left empty if user wants
let instructions = ['f', 'l', 'f', 'r', 'b', 'f', 'f'];

// Set variables for easier access for DOM manipulation
var cow = document.getElementById("cow")
var input = document.getElementById("input_instructions")

// Clear input box of everything on window load just to make sure.
window.onload = e =>{
    console.log("Page has loaded!")
    input.value = ""
}

// Function to validate user input,
// making sure that it only accepts the 4 commands (f,b,l,r)
// and console logging to keep track of it
function checkInput(){
    if (input.value == "f"){
        console.log("Forward")
        instructions.push(input.value);
        input.value = ""
        console.log(instructions)
    } else if (input.value == "b"){
        console.log("Backward")
        instructions.push(input.value);
        input.value = ""
        console.log(instructions)
    } else if (input.value == "l"){
        console.log("Rotated Left")
        instructions.push(input.value);
        input.value = ""
        console.log(instructions)
    } else if (input.value == "r"){
        console.log("Rotated Right")
        instructions.push(input.value);
        input.value = ""
        console.log(instructions)
    } else{
        console.log("Input not valid")
    }
}

// Function to start the instructions.
// Will loop through each element of array and apply the conditionals.
// Help of // https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/
function go(){

    console.log("Executing Instructions")
    
    // Set variables for easier manipulation
    var top = parseInt(cow.style.top, 10)
    var deg = 0 
    
    // This helps to increase the timer for the function below.
    var i = 0
    for(i in instructions){
        run(i)
    }

    // Function to handle the commands of the array.
    // Set a .5s time delay to make the transitions look smoother.
    // Help of // https://stackoverflow.com/questions/32729055/rotating-image-in-increments-on-click
    // for the rotation of the elements.
    // Note: Array will empty first element after executing the command.
    function run(){
        setTimeout(function(){    
            if(instructions[0] === "f"){
                cow.style.top = top + "px"
                top -= 10
                console.log("Forwards!")
                instructions.splice(0,1)
            } else if(instructions[0] === "b"){
                cow.style.top = top + "px"
                top += 10
                console.log("Backwards!")
                instructions.splice(0,1)
            } else if(instructions[0] === "l"){
                console.log("Rotating Left!")
                deg -= 90
                cow.style.transform = "rotate(" + (deg) + "deg)";
                instructions.splice(0,1)   
            } else if(instructions[0] === "r"){
                console.log("Rotating Right!")
                deg += 90
                cow.style.transform = "rotate(" + (deg) + "deg)";
                instructions.splice(0,1)   
            } 
        },750*i)
    }
}

// Function to clear the instructions array
function clear_instructions(){
    console.log("Cleared!")
    instructions.length = 0
}

// function to reset the location of the cow
function reset_cow(){
    cow.style.top = 150 + "px"
    cow.style.left = 100 + "px"
    cow.style.transform = "rotate(0deg)"
    console.log("Cow Reset");
}

// Function to show the current instructions in the array
function show_instructions(){
    console.log("Current Instructions: ")
    console.log(instructions)
}

