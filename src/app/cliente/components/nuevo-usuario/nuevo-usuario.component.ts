import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AutosInfo } from '../../../autos/services/autos-info.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {

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

    /* this.listaService.getItemById(this.newUserForm.value.codigo).subscribe((auto:any)=>{
      if(this.newUserForm.value.codigo == auto.codigo){
        alert("Código ya existe. Intenta con uno nuevo")
        return
      }
    }, (error:any)=>{
      this.listaService.addItem(this.newUserForm.value).subscribe((auto:any)=>{
          console.log("Nuevo auto",auto)
          this.listaService.getCompleteList().subscribe((autos)=>{
            this.router.navigate(['/autos/'+this.newUserForm.value.codigo])
          })
        })    

    }) */
  }
}
