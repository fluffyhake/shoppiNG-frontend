import { Injectable, type Type as Component } from '@angular/core';
import { SidenavContentAreaDirective } from './sidenavContentArea.directive';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  contentArea?: SidenavContentAreaDirective;

  stack: any[] = [] as Component<unknown>[];

  setDynamicContentArea(host: SidenavContentAreaDirective) {
    this.contentArea = host;
  }

  push(component: Component<unknown>): void {
    this.stack.push(component);
    this.setContent(component);
  }

  pop(): void {
    if (this.stack.length === 1) {
      return;
    }
    this.stack.pop();

    this.setContent(this.stack[this.stack.length - 1]);
  }
  setContent(component: Component<unknown>): void {
    this.contentArea?.viewContainerRef.clear();

    this.contentArea?.viewContainerRef.createComponent(component);
  }
}
