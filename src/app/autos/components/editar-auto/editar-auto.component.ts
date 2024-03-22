import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, map } from 'rxjs';

import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface } from '../../interfaces/lista-interface';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrl: './editar-auto.component.css'
})
export class EditarAutoComponent implements OnInit {
  newItemForm: FormGroup
  carToEdit:string | undefined = ""
  //carToEditContent: ListaInterface | undefined
  carToEditContent = new Subject();
  carToEditContent$ = this.carToEditContent.asObservable()

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

  ngOnInit(): void {
    this.listaService.autoEditar$.subscribe((auto:any) => {
      this.carToEdit = auto
      console.log("auto a editar",this.getCarToEdit(this.carToEdit))
      if(!this.carToEdit) console.log("No hay id")
      //else console.log("lo que obtengo",this.carToEditContent)
    })

    
  }
  getCarToEdit(id:string | any){
    return this.carToEditContent = this.listaService.getCarById(this.carToEdit).subscribe((auto:ListaInterface | undefined)=>{
      this.carToEditContent.next(auto)
      console.log("auto recibido", this.carToEditContent$)
    })
  }


  setCarToEdit(auto:string | undefined){
    console.log("editar comp, esta es la fx")
    /* this.listaService.autoEditar$.subscribe((auto:any) => {
      this.carToEdit = auto
      console.log("auto a editar",this.carToEdit)
      if(!this.carToEdit) console.log("No hay id")
    }) */
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

