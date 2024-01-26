import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathTerminalComponent } from './path-terminal.component';

describe('PathTerminalComponent', () => {
  let component: PathTerminalComponent;
  let fixture: ComponentFixture<PathTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathTerminalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PathTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
