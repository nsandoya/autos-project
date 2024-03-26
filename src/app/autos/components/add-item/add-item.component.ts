import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutosInfo } from '../../services/autos-info.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  newItemForm: FormGroup

  constructor(private fBuilder: FormBuilder, private listaService: AutosInfo, private router: Router){
    this.newItemForm = fBuilder.group({
      //Inputs a usar
      codigo: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(6),
        ]
      ],
      marca: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]
      ],
      modelo: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]
      ],
      anio: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(4),
          Validators.maxLength(4),
        ]
      ],
      calificacion: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(1),
        ]
      ],
      kilometraje: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.minLength(1),
        ]
      ],
      precio: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(2),
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

    this.listaService.getItemById(this.newItemForm.value.codigo).subscribe((auto:any)=>{
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

    })
  }
    /* this.listaService.addItem({
      ...this.newItemForm.value
    }) */
    /* id: this.listaService.autos.length + 1, */

}
