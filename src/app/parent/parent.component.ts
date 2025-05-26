import { Component, ContentChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ContentChild(ChildComponent) childComponent!: ChildComponent;
  childMessage: string = '';

  ngAfterContentInit():  void {
    if (this.childComponent) {
      this.childMessage = this.childComponent.message;
    }
  }
}
