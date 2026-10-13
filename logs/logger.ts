import fs from 'fs';
import path from 'path';

const logDirectory = path.join(process.cwd(), 'logs');
if(!fs.existsSync(logDirectory)){
    fs.mkdirSync(logDirectory, {recursive:true});
}

const logFile = path.join(logDirectory, 'test.log');

export class Logger{
    private writeLog(level: string, message: string){
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level}] ${message}\n`;
        console.log(logMessage.trim());

        fs.appendFileSync(logFile, logMessage);
    }

    info(message:string){  //info - general information about the application's operation
        this.writeLog('INFO', message);
    }

    debug(message: string){  //debug - detailed information, typically of interest only when diagnosing problems
        this.writeLog('DEBUG', message);
    }

    warn(message: string){  //warn - something unexpected happened, but not necessarily a problem
        this.writeLog('WARN', message);
    }

    error(message: string){  //error - something went wrong
        this.writeLog('ERROR', message);
    }
}

export const logger = new Logger();  //creating object for Logger class to be used in other files
