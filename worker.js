/**
 *  WEB WORKER - A saparate thread which runs parallaly to the main thread
 *  Used for CPU Extensive tasks
 *  Cannot manipulate DOM
 */


// self is global worker object here just like window object for the main thread
self.onmessage = function( message ) { // onmessage without self. woudld also work
    let sum = 0;

    for( let i = 1; i < 10000000000; i++ ) {
        sum += i;
    }

    // this event is listened by the main or other worker thread
    self.postMessage( sum );
}



