import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobilePageComponent } from "./mobile-page/mobile-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MobilePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-formatting-test';
}
