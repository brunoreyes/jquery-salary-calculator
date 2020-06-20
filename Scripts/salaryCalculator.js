//Here I'm making sure the JavaScript file has been sourced properly
console.log(`Hello from JavaScript!`);

//Here I'm making sure the jQuery file has been sourced properly
$(document).ready(onReady);

function onReady() {
    console.log(`Hello from jQuery!`);
    // console.log('in onReady');
}//end onReady