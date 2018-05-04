import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule],
  declarations: [HeaderComponent],
  entryComponents: [HeaderComponent],
})
export class CommonComponentsModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(HeaderComponent, {
      injector,
    });
    customElements.define('ddm-header', customElement);
  }
  ngDoBootstrap() {}
}
