import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-content',
  standalone: true,
  imports: [
    MainComponent,
    MatSidenavModule,
    MatSidenav
  ],
  templateUrl: './side-content.component.html',
  styleUrl: './side-content.component.scss'
})
export class SideContentComponent {

}
