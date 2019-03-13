import { AppComponent } from './app.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe("AppComponent", function(){
  it("should be created", ()=>{
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });

    var fixture:ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);

    var component:AppComponent = fixture.componentInstance;

    expect(component).toBeDefined();
  })
})