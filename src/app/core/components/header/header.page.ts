import { Component, inject, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { reader, arrowBack} from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonButton, IonButtons, IonIcon, IonToolbar]
})
export class HeaderPage {
  @Input() title: string = 'Amanda & Luigi';

  private location = inject(Location)

  constructor() {
    addIcons({ reader, 'arrow-back': arrowBack, });
  }

  goBack() {
    this.location.back();
  }
}
