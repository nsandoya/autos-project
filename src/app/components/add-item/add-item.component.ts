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
      name: [
        // Valor del input
        '',
        // Validaciones
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]
      ],
      detail: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
        ]
      ],
      image: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(450),
        ]
      ]
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
