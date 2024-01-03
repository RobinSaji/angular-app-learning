import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()  //SINCE WE HAVE DECORATED THESE INPUT DECORATOR , THEREFORE WE USE THESE PROPERTIES AS ATTRIUTES ON WHERE WE ARE USING THE SELECTOR(APP-FILTER)
  all:number=0;

  @Input()
  inStock:number=0;

  @Input()
  outOfStock:number=0;
  //we are going to the values for this properties from the paret component

  @Output()
  selectedFilterRadioButtonChanged:EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton:string ='all';

  onSelectedFilterRadioButtonChanged(){
    //console.log(this.selectedFilterRadioButton)
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);  
  }
}
