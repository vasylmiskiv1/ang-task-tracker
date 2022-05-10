import { 
  Component,
  OnInit,
  Input, 
  Output,
  EventEmitter 
} from '@angular/core';

@Component({
  // name of the component
  selector: 'app-button',
  // styles and html layout files
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // prop types
  // input to this component
  @Input() text!: string;
  @Input() color!: string;
  // outpoot from this component
  @Output() btnClick = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  // events
  onClick() {
    this.btnClick.emit()
  }
}
