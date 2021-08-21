import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AlertButtonComponent } from './alert-button.component';
//So to call the data from the server we are creating a stub as mentioned below 
//not to use the live data from backend 
//But actually need to simulate how backend data will actually come to us

// IMPORT service if required to call the external API 
//Below is stub
import { of } from 'rxjs/internal/observable/of';



describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent //Definfing the component for which test case to be written
  let fixture: ComponentFixture<AlertButtonComponent> //Test environment for the component , providees the access to component & HTML 
  let debugElement: DebugElement;
  let serviceStub: any;
  // let service: ServiceName;
  let spy = jasmine.createSpy();

  beforeEach(async(() => {

    // serviceStub = {
    //   getContent: () => of('You have been warned'),
    // }



    TestBed.configureTestingModule({  // TEST BED IS THE MOCK ENV TO RUN ANGULAR WITHOUT THE BROWSER
      declarations: [AlertButtonComponent]
      // providers:[{provide:ServiceName, useValue:serviceStub}]
      // providers:[ServiceName]
    }).compileComponents(); //Compile HTML & CSS

  }));

  beforeEach(() => {
    //fixture is used actually to access html 

    fixture = TestBed.createComponent(AlertButtonComponent) //creating new instance of a component
    component = fixture.componentInstance // this gives access to the compnent class 
    debugElement = fixture.debugElement  //can debug the html content

    // service = debugElement.injector.get(SericeName);
    // spy = spyOn(service, 'getConent').and.returnValue(of('YOu have been warned'));

    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('should have a message with `warn` ', () => {
    expect(component.content).toContain('warn')
  })

  it('should have a serverity greater than 400', () => {
    expect(component.severity).toBeGreaterThan(400)
  })


  it('should have a H1 tag of `Alert Button` ', () => {
    expect(debugElement.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button')
  })


  it('should Toggle the message boolean` ', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy()
  })

  it('should toggle the message asynchrounoulsy', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500)
    expect(component.hideContent).toBeFalsy()

  }))


  // it('should have message content delivered from observable` ', () => {
  //   component.content.subscribe( (content) => {
  //     expect(content).toBeDefined();
  //     expect(content).toBe('You have been warned')
  //   });

  // })


  // it('should call getcontent on time and update the view` ', () => {
  //  expect(spy).toHaveBeenCalledback();
  // expect(spy.calls.all().length).toEqual(1)
  // check the innertext for content changes 

  // })

})
