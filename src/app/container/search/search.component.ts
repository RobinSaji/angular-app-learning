import { Component,ElementRef,EventEmitter, Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string ='';

  //Non Related componenet communication:
  //the process in which data is shared between two components which are not related in any way (i.e they are not in a parrent child component relationship)
  //what we are dong here is we are exporting the data from the child compinent to te parent component using custom event binding (search ->container) and then we will use the custom property binding to import the data from the parent to othe rchild compnent


  //1 Create  an event:
  @Output()
  //whenever the event will be raised 
  SearchTextChanged:EventEmitter<string> = new EventEmitter<string>();


  @ViewChild('searchInput') searchInputEl:ElementRef; // the @viewchild decorator same as the document.getelemntid() in traditional js, it is used to acess and manipulate the dom elements.
  //Optional 2nd argument of @ViewChild()
  //1.read - Used to read a different token from the queried elements.
  //2.static - True to resolve query results before change detection runs, false to resolve after change detection. Defaults to false. 

  //this function will be called 
  onSearchTextChanged(){
    //this vaue which is inside the input will be emited
    
  }
  setSearchText(){//We are passing a input elemnt here as input for the function using template reference therefore the datatype will be HTMLINPUTeElement
    //this.searchText=event.target.value; 
     this.searchText =this.searchInputEl.nativeElement.value;//instead of passing the refrence as a parameter in the method we store it in a variable through @viewcild due to which we are able to acess it 
     this.SearchTextChanged.emit(this.searchText);
  }
}
