import { ErrorHandler } from '@angular/core';

export class AppErrorhandler implements ErrorHandler{
    handleError(error){
        alert('unexpected error');
        console.log(error);
    }
    
}