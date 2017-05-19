import cluster from 'cluster';
import os from 'os';

export default () => {
    if(cluster.isMaster){
        os.cpus().forEach((cpu) => cluster.fork());

        cluster.on('exit', (worker, code, signal) => {
            console.log('Worker died' + worker.process.pid);
            cluster.fork();

        });
    } else {
        console.log('Slave server' + cluster.worker.process.pid);
    }
}