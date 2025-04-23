import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlflowComponent } from './controlflow/controlflow.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlflowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'control-flow-demo';
}
