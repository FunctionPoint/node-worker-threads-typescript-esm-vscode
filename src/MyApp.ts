import { Worker } from "worker_threads";

export class MyApp
{
	start()
	{
		const worker = new Worker( "./out/Worker.js" );

		worker.on( "message", ( message ) => this.onMessage( message ) );
		worker.on( "error", ( error ) => this.onError( error ) );
		worker.on( "exit", ( code ) => this.onExit( code ) );
		console.log( "Main: Sending message to worker." );
		worker.postMessage( "Hello, worker!" );
	}

	onMessage( message: any )
	{
		console.log( "Main: Received message from worker: " + message );
	}

	onError( error: Error )
	{
		console.error( "Main: Worker error: " + error.message );
	}

	onExit( code: number )
	{
		console.log( "Main: Worker exited with code: " + code );
	}
}
