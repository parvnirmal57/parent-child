import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() customStyle!: { [key: string]: string };

  @Output() buttonClick = new EventEmitter<void>();
  onClick(){
    this.buttonClick.emit();
  }

}
