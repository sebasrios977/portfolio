import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isMenuShown: boolean = false;
  private screenWidth: number = 0;

  constructor() {
    this.getScreenSize(); // Obtener el tamaño de la pantalla al inicializar el componente
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenSize(); // Actualizar el tamaño de la pantalla al cambiar el tamaño de la ventana
  }

  getScreenSize() {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth >= 768) {
      this.isMenuShown = true;
      return;
    }
    this.isMenuShown = false;
  }

  showMenu(showMenu: boolean): void {
    this.isMenuShown = showMenu;
  }
}
