import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('semaforo-angular');

  count = signal(0); //deberia poner const
  currentColor = signal<string>('');

  update(newColor: string){
    this.count.update( currentValue => currentValue + 1);
    this.currentColor.set(newColor);
  }

}
