import { HighlightInputDirective } from './highlight-input.directive';
import { CommonModule } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'app-directive-test',
    template: `<input type="text" class="form-control highlight" appHighlightInput placeholder="Enter Text" [color]="'red'">`,
  })
  class DirectiveTestComponent {}


describe('HighlightInputDirective', () => {
  let directive : HighlightInputDirective,
  component: DirectiveTestComponent,
  directiveElem : DebugElement,
  fixture : ComponentFixture<DirectiveTestComponent>,
  directiveElm;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
        declarations: [
            DirectiveTestComponent,
            HighlightInputDirective
        ],
        imports: [CommonModule]
      }).createComponent(DirectiveTestComponent);
    component = fixture.componentInstance;
    directiveElm = fixture.debugElement.query(By.directive(HighlightInputDirective));
    directive = directiveElm.injector.get(HighlightInputDirective);
    fixture.detectChanges();
  })
  fit('should create an instance', () => {
    
    expect(directive).toBeTruthy();
  });

  fit('highlight input', () => {
    const eventInit: KeyboardEventInit = {
      keyCode: 67,
      ctrlKey: false
    };
    const event = new KeyboardEvent('input', eventInit);
    spyOn(directive, 'ngChanges').and.callThrough();
    directiveElm.triggerEventHandler('input', event);
    expect(directive.ngChanges).toHaveBeenCalled();
    expect(directive.color).toEqual('red');
  });
});
