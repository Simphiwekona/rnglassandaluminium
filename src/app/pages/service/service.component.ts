import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
email = 'mprojects46@gmail.com'
}
