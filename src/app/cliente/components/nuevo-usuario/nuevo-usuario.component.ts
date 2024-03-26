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

  newUserForm: FormGroup;
  checkbox:boolean = false


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
      ],
      checkbox: [false]

    });
  }

  checkb(){
    console.log("checkbox",this.newUserForm.value.checkbox)
  }

  onSubmit(){
    if(this.newUserForm.invalid){
      console.log("Invalido")
      return
    }
    
    const user = {
      id : this.newUserForm.value.id,
      nombre : this.newUserForm.value.nombre,
      apellido : this.newUserForm.value.apellido,
      password : this.newUserForm.value.password,
      email : this.newUserForm.value.email,
    }

    this.clienteService.getClientById(this.newUserForm.value.id).subscribe((cliente:any)=>{
      console.log("Usuario ya existe", cliente.data)
      alert("Este ID de usuario ya existe. Intenta con uno nuevo")
      /* if(this.newUserForm.value.id == cliente.data.id){
        //return
      } */
    }, (error:any)=>{
      console.log("Nuevo cliente",this.newUserForm.value)
      return this.clienteService.addClient(this.newUserForm.value).subscribe((respuesta)=>{
        alert("Usuario creado con éxito")
        this.router.navigate(['/autos/'])
        console.log("Resultado",respuesta)
      })
      /* this.clienteService.addClient(this.newUserForm.value).subscribe((auto:any)=>{
          console.log("Nuevo auto",auto)
          this.clienteService.getAllClients().subscribe((cliente)=>{
            this.router.navigate(['/autos/'])
          })
        })     */

    })
  }
}
