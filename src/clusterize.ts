import * as cluster from 'cluster';
import * as os from 'os';
import { Injectable } from '@nestjs/common';
import { Worker } from 'cluster';

const numCPUs = os.cpus().length;

@Injectable()
export class AppClusterService {
    // eslint-disable-next-line @typescript-eslint/ban-types
    static clusterize(callback: Function): void {
        if (cluster.default.isPrimary) {
            console.log(`Master server started on ${process.pid}`);
            for (let i = 0; i < numCPUs; i++) {
                cluster.default.fork();
            }
            cluster.default.on('exit', (worker: Worker) => {
                console.log(`Worker ${worker.process.pid} died. Restarting`);
                cluster.default.fork();
            });
        } else {
            console.log(`Cluster server started on ${process.pid}`);
            callback();
        }
    }
}
