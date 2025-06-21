import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatsappButtonComponent } from "./shared/whatsapp-button/whatsapp-button.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhatsappButtonComponent, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'site';
}
