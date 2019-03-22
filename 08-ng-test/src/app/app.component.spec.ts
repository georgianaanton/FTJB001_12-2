// import { AppComponent } from './app.component';
// import { TestBed, ComponentFixture, async } from '@angular/core/testing';
// import { PowPipe } from './pow.pipe';
// import { By } from '@angular/platform-browser';

// describe("AppComponent", function(){
//   let fixture:ComponentFixture<AppComponent>;
//   let component:AppComponent

// /* 
//   beforeEach(async(()=>{
//     TestBed.configureTestingModule({
//       declarations: [AppComponent, PowPipe]
//     })
//     .compileComponents();

//   }))
//   beforeEach(()=>{
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   })
//  */

// beforeEach(async(()=>{
//   TestBed.configureTestingModule({
//     declarations: [AppComponent, PowPipe]
//   })
//   .compileComponents().then(()=>{
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   })

// }))

//   it("should be created", ()=>{
//     expect(component).toBeDefined();
//   })

//   it("should give me initial title", ()=>{
//     let debugElement = fixture.debugElement.query(By.css('.text-center'));
//     let head = debugElement.nativeElement;
//     console.log(head);
//     expect(head.innerText).toBe("Hello Angular Testing");
//   })

//   it("should change title", ()=>{
//     component.changeTitle();

//     fixture.detectChanges();

//     let debugElement = fixture.debugElement.query(By.css('.text-center'));
//     let head = debugElement.nativeElement;

    
//     expect(head.innerText).not.toBe("Hello Angular Testing");
//     expect(head.innerText).toBe("Welcome Angular Testing");
//   })

//   it("should change title on button click", ()=>{
//     // component.changeTitle();
//     let button = fixture.debugElement.query(By.css('.btn'));
//     button.triggerEventHandler('click', null);

//     fixture.detectChanges();

//     // let debugElement = fixture.debugElement.query(By.css('.text-center'));
//     let debugElement = fixture.debugElement.queryAll(By.css('.text-center'))[0];
//     let head = debugElement.nativeElement;

    
//     expect(head.innerText).not.toBe("Hello Angular Testing");
//     expect(head.innerText).toBe("Welcome Angular Testing");
//   })

//   it("should be called", ()=>{
//     spyOn(component, "myLog");

//     component.myLog();

//     component.myLog("Some text");


    
//     component.myLog(5);
//     component.myLog([5]);
    
//     expect(component.myLog).not.toHaveBeenCalledWith("Some another text");
//     expect(component.myLog).toHaveBeenCalled();
//     expect(component.myLog).toHaveBeenCalledTimes(4);



//   })
// })