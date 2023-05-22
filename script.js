document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded!!!');
    
    const worker = new Worker('worker.js');
    const sumBtn = document.querySelector('#calculateSum');
    const changeBgBtn = document.querySelector('#changeBackground');

    sumBtn.addEventListener('click', calculateSum );
    changeBgBtn.addEventListener('click', changeBackground );

    // CPU Extensive Task
    function calculateSum(  ) {

        worker.postMessage( 'Pls Calculate Sum' )
    }

    function changeBackground() {
        if( document.body.style.background !== 'green' ) {
            document.body.style.background = 'green'
        }else {
            document.body.style.background = 'blue'
        }
    }

    // Listens to the message sent on postMessaage Event by the worker thread
    worker.onmessage = function( message ) {
        alert( `The calculated sum is: ${message?.data}` )
    }
})