import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sayHello(nombre:string): void{
    console.log(nombre);
    
  }

  sumar(num1:number, num2: number): number{
return(num1+num2);
  }

  title = 'crud-angular';
}
