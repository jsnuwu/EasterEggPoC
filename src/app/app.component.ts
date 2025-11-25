import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'easteregg';
  gif = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'a') {
      event.preventDefault();  
      this.triggerEvent();
    }
  }

  triggerEvent() {
    console.log('Tasten Strg + A wurde gedrückt');
    this.gif = true;
    document.body.classList.add('eastereggOn');

    const gifElement = document.querySelector('.gif') as HTMLElement;
    gifElement.addEventListener('animationend', () => {
      
      this.gif = false;
      document.body.classList.remove('eastereggOn');
    });
  }
  
  
}
