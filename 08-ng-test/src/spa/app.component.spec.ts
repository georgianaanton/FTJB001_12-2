import { AppComponent } from './app.component';
import { TestBed, ComponentFixture, async, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

describe("AppComponent", function(){
  let fixture:ComponentFixture<AppComponent>;
  let component:AppComponent;
  let location:Location;
  let router:Router;

beforeEach(async(()=>{
  TestBed.configureTestingModule({
    declarations: [AppComponent, HomeComponent, LoginComponent],
    imports: [RouterTestingModule.withRoutes([
        {path: 'home', component: HomeComponent},
        {path: 'login', component: LoginComponent},
        {path:'**', pathMatch:'full', redirectTo: 'home'}
      ])]
  })
  .compileComponents().then(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  })

}))

it("should be on home", ()=>{
    expect(location.path()).toBe("/home");
})

it("should go to login", fakeAsync(()=>{
    router.navigate(['/login']);
    // component.goToLogin();
    tick();
    expect(location.path()).toBe("/login");
}))

})