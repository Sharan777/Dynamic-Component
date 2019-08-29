import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2> {{name}}!</h>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
