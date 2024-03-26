import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  newLoginForm: FormGroup

  constructor(private clienteService:ClienteService,private fBuilder: FormBuilder, /* private listaService: AutosInfo */ private router: Router){
    this.newLoginForm = fBuilder.group({
      //Inputs a usar
      password: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(3),
          Validators.maxLength(12),
        ]
      ],
      nombre: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(3),
        ]
      ]

    });
  }
  onSubmit(){
    if(this.newLoginForm.invalid){
      alert("Email o Password inválidos. Prueba nuevamente")
      console.log("Invalido")
      return
    }
    //console.log("Inicio de sesión",this.newLoginForm.value)
    return this.clienteService.getClientByName(this.newLoginForm.value.nombre).subscribe((respuesta:any)=>{
      //console.log("Resultado",respuesta[0].nombre)
      if(respuesta[0] == undefined){
        console.log(respuesta[0].nombre)
        alert("Usuario no existe. Inténtalo nuevamente")
      }else{
        if(respuesta[0].nombre === this.newLoginForm.value.nombre && respuesta[0].password == this.newLoginForm.value.password){
          //alert("Login!!!")
          this.router.navigate(['/autos/'])

        }else{
          alert("Contraseña incorrecta. Inténtalo nuevamente")
        }
      }
    })
  }
}
