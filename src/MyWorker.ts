
import { parentPort } from "worker_threads";

export class MyWorker
{
	start()
	{
		parentPort!.on( "message", ( message ) => this.onMessage( message ) );
	}

	onMessage( message: any )
	{
			console.log( "Worker: Received message from main: " + message );

			console.log( "Worker: Sending mesage to main." );
			parentPort!.postMessage( "Hello, main thread!" );

			console.log( "Worker: Exiting." );
			process.exit( 0 );
	}
}
