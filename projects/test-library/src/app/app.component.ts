import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  miFormulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      numero: [
        '',
        [Validators.required, Validators.min(50), Validators.max(100)],
      ],
      texto: [null, [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {}
}
