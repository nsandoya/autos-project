import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { AutosInfo } from '../../autos/services/autos-info.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {

  newItemForm: FormGroup

  constructor(private fBuilder: FormBuilder, /* private listaService: AutosInfo */ private router: Router){
    this.newItemForm = fBuilder.group({
      //Inputs a usar
      id: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(6),
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
          Validators.minLength(4),
          Validators.maxLength(4),
        ]
      ],
      telefono: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(1),
        ]
      ],
      email: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(1),
        ]
      ],
      foto: [
        '',
        /* [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(450),
        ] */
      ],

    });
  }
  onSubmit(){
    if(this.newItemForm.invalid){
      console.log("Invalido")
      return
    }
    console.log("Nuevo auto",this.newItemForm.value)

    /* this.listaService.getItemById(this.newItemForm.value.codigo).subscribe((auto:any)=>{
      if(this.newItemForm.value.codigo == auto.codigo){
        alert("Código ya existe. Intenta con uno nuevo")
        return
      }
    }, (error:any)=>{
      this.listaService.addItem(this.newItemForm.value).subscribe((auto:any)=>{
          console.log("Nuevo auto",auto)
          this.listaService.getCompleteList().subscribe((autos)=>{
            this.router.navigate(['/autos/'+this.newItemForm.value.codigo])
          })
        })    

    }) */
  }
}
