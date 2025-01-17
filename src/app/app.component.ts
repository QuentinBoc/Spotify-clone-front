import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { fontAwesomeicons } from './shared/font-awesome-icons';
import {NavigationComponent} from "./layout/navigation/navigation.component";
import {LibraryComponent} from "./layout/library/library.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            FontAwesomeModule,
            NavigationComponent, 
            LibraryComponent,
          ],
templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit{
  title = 'spotify-clone-front';

  private FaIconLibrary : FaIconLibrary = inject(FaIconLibrary);

      ngOnInit(): void {
        this.initFontAwesome();
    }

      private initFontAwesome() {
      this.FaIconLibrary.addIcons(...fontAwesomeicons);
      }
    }
