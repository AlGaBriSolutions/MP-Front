import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup | any;
  mostrarPopup = false;
  mensajePopup: string = "";
  constructor(private fb: FormBuilder,  private router: Router) {}


  ngOnInit(): void {
    this.signupForm = this.fb.group({
      pass: ['', [Validators.required]],
      email: ['', [Validators.required]],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.mensajePopup = 'Login existoso';
      // Mostrar el popup
      this.mostrarPopup = true;
      // Opcional: Cerrar el popup después de unos segundos
    setTimeout(() => {
      this.router.navigate(['/catalogo']);
    }, 5000);

    }
  }

  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }

}
