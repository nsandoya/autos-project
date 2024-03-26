import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  newUserForm: FormGroup

  constructor(private clienteService:ClienteService,private fBuilder: FormBuilder, /* private listaService: AutosInfo */ private router: Router){
    this.newUserForm = fBuilder.group({
      //Inputs a usar
      id: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(4),
        ]
      ],
      nombre: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]
      ],
      apellido: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]
      ],
      password: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(3),
          Validators.maxLength(12),
        ]
      ],
      telefono: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(1),
          Validators.maxLength(10),
        ]
      ],
      email: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(10),
        ]
      ]

    });
  }
  onSubmit(){
    if(this.newUserForm.invalid){
      console.log("Invalido")
      return
    }
    console.log("Nuevo cliente",this.newUserForm.value)
    return this.clienteService.addClient(this.newUserForm.value).subscribe((respuesta)=>{
      console.log("Resultado",respuesta)
    })
  }
}
