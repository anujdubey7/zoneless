import { ChangeDetectorRef, Component, signal } from '@angular/core';
// {} [] *
@Component({
  selector: 'app-zoneless',
  standalone: false,
  
  templateUrl: './zoneless.component.html',
  styleUrl: './zoneless.component.css'
})
export class ZonelessComponent{
  count1= 0;
  count2=0;
  count3=0;
  intervalId: any;
  constructor(private cdRef:  ChangeDetectorRef ){
  }

  increment(){
    this.count1++; // this.count.update((count)=>{count+1}) //signal
    this.cdRef.detectChanges();
  }
  decrement(){
    this.count1--; // this.count.update((count)=>{count+1})
    this.cdRef.detectChanges();

  }
  startInterval(){
    setInterval(()=>{
      this.count2++; // this.count.update((count)=>{count+1})
      this.cdRef.detectChanges();

    },1000);
    
  }
startTimeout(){
    setTimeout(()=>{
      this.count3++; // this.count.update((count)=>{count+1})
      this.cdRef.detectChanges();

    },1000);
  }
  
}
