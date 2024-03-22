import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutosInfo } from '../../services/autos-info.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  newItemForm: FormGroup

  constructor(private fBuilder: FormBuilder, private listaService: AutosInfo){
    this.newItemForm = fBuilder.group({
      //Inputs a usar
      codigo: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(3),
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
      calificación: [
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
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(450),
        ]
      ],

    });
  }
  onSubmit(){
    if(this.newItemForm.invalid){
      return
    }
    console.log(this.newItemForm.value)
    this.listaService.addItem({
      id: this.listaService.autos.length + 1,
      ...this.newItemForm.value
    })
  }
}
