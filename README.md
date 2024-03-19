# web-workers-tut
An example of web workers and its usage

# What are web workers?
- Web Workers are a feature in web development that enable running scripts in background threads, allowing for concurrent execution alongside the main JavaScript execution thread. This capability is crucial for handling tasks that could potentially block the main thread, such as heavy computations, long-running operations, or asynchronous tasks like network requests.

Web Workers operate independently of the main browser thread, which means they don't interfere with the user interface's responsiveness. They offer a way to improve the performance and responsiveness of web applications, particularly in scenarios where tasks need to be executed in parallel or offloaded from the main thread.

There are two main types of Web Workers:

Dedicated Workers: These workers are tied to a specific script and can only communicate with the script that created them. They're useful for performing tasks that are specific to a particular part of your application.

Shared Workers: Shared workers can be accessed by multiple scripts running in different windows, tabs, or iframes within the same origin. They're beneficial for scenarios where you need shared state or communication across different parts of a web application.

Web Workers communicate with the main thread through an event-based messaging system. They use the postMessage() method to send messages to the main thread and the onmessage event handler to receive messages from the main thread.
