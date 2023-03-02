import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tasksApp';
  activeElement?: Element | null

  switchMode(e: Event){
    const target = e.target as Element
    this.activeElement?.classList.remove('mode--active')
    this.activeElement = target.classList.contains('mode') ? target : target.parentElement
    this.activeElement?.classList.add('mode--active')
  }

}
