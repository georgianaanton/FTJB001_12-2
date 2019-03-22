// import { AppComponent } from './app.component';
// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

// describe("AppComponent", function(){
//   let de:DebugElement;
//   let fixture:ComponentFixture<AppComponent>;
//   let component:AppComponent;

//   beforeEach(()=>{
//     TestBed.configureTestingModule({
//       declarations: [AppComponent]
//     });

//     fixture = TestBed.createComponent(AppComponent);

//     component = fixture.componentInstance;

//     de = fixture.debugElement.query(By.css(".text-center"))
//   })

//   it("should be created", ()=>{
//     expect(component).toBeDefined();
//   })

//   it("should greet", ()=>{
//     let head = de.nativeElement;
//     expect(head.innerText).toMatch("Hello Angular Testing")
//   })
// })