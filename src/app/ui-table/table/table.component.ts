import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
// import { resolve } from 'dns';
// import { TableDirective } from './table.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // view child access the element from html with the selector
  @ViewChild('viewchildexample')vcVariable:ElementRef //use this inside html tag with hash #viewchildexample 
  //both child and children are same just difference is it returns the list 
  @ViewChildren('viewchildexample')vcVariableChildren:ElementRef;

  public text="Upper case pipe";
  

  public agePipe='20-1-2020';
   public as = 1233;


  //Depedency Injection is the usage of service files from declaring in constructor 

  //Service files can be imported in various components and used - reusablity

  constructor() {
   }

  ngOnInit(): void {
    this.testPromise();

    // this.promiseAndObservable();
    // this.subject();
    // this.promiseObservable();  //new
  }


  //Pipes are 2 type built in and custom pipes 
  /** built in 
   * uppercase
   * lowercase
   * date
   * json
   * async
   * Number
  */

  /**
   * age created
   */

  ngAfterViewInit(){
    console.log(this.vcVariable , "--view Child");

    console.log(this.vcVariableChildren , "--view children");
  }

  promiseAndObservable(){
    const promiseTest = new Promise(resolve => {
      console.log("Inside promise");
      setTimeout( ()=>{
          resolve('Promise called ')
      },1000)
      
    });
    promiseTest.then(result =>{
      console.log(result,"promise" );
    });


    let count;
    const objTest = new Observable(sub =>{
      console.log(sub);
      setTimeout(()=>{
        count = count+1;
        sub.next(count);
      },1000)
    });

    objTest.subscribe(res =>{
      console.log(res, "IAM IN Observable");
    })

//Observable work only when subscibe hence promise is eager works always ,Observable emits multiple values
//where promise does it ones , 
//Disadvantage of objservable - have to destroy or else multiple observables run parallely , and unicast
//


  }

//difference between subject and observable avoid multiple network calls 
//example random num observable returns multiple nums diff ones subject resolves one 


//observables are unicast
//subscribers are multicast

  subject(){
    let sub = new Subject();

    sub.subscribe(res=>{
      console.log(res , "IAM IN NORMAL SUBJECT");
    })
    sub.next();

//subject cannot initialise value like behaviour subject

    let subBehaviour = new BehaviorSubject<number>(12);
    subBehaviour.subscribe(res=>{
      console.log(res , "IAM IN BEHAVIOUR SUBJECT");
    })
    // sub.next();


    let subReplay = new ReplaySubject(2);
    subReplay.next('1');
    subReplay.next('2');
    subReplay.next('3');
    subReplay.next('4');

    //sub replay can pass arugument what needs to be picked in the above 2 is para so only last 2 are stored


    subReplay.subscribe(res =>{
      console.log(res);
    })



  }

  //constructor 
  //Ngonchanges detecct only normal input on value changes
  //ngoninit 
  //NgDocheck-  checks / detect all the array or object also event if it is changes - this cant be done in ngonchange
  //NgAfterContentInIt() cannot access elements in content child till this hook' refers of element with element Ref but calls onlyonce - @content  [<ng-content> - value passed in between component <app>iam content</app>]
  //NgAfterContentChecked() - detects changes of elements also ,  calls based on changes also 
  //NgAfterViewInit()-viewchild 
//NgAfterViewChecked()-viewchild dtect more times




   promiseObservable(){
      let prom = new Promise(resolve =>{
        resolve("console.log inside promise");

      });
      prom.then()


   }

























   //promise


   testPromise(){
    const promise = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve("promise is working new");
      },1000);
      
    })
    promise.then(res=>{
      console.log(res , "+OA< ")
    })


    const observable = new Observable((res)=>{
      console.log(res);
      setTimeout(()=>{
        res.next("EMIT FROM OBS");
        res.next("EMIT FROM OBS2"); //returns multiple values
      },2000)
      


    
    })




    observable.subscribe((res)=>{
      console.log(res);
    })


   }
  

}
