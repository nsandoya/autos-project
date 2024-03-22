import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutosInfo } from '../../services/autos-info.service';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrl: './editar-auto.component.css'
})
export class EditarAutoComponent {
  newItemForm: FormGroup
  carToEdit:string | undefined = ""
  constructor(private fBuilder: FormBuilder, private listaService: AutosInfo){
    //this.listaService.getCompleteList()

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

  setCarToEdit(auto:string | undefined){
    console.log("editar comp, esta es la fx")
    this.listaService.autoEditar$.subscribe((auto:any) => {
      this.carToEdit = auto
      console.log("auto a editar",this.carToEdit)
      if(!this.carToEdit) console.log("No hay id")
    })
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

