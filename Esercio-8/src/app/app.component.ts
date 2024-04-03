import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnoComponent } from './uno/uno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UnoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercio-8';
}
