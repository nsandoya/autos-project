import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';


import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface } from '../../interfaces/lista-interface';


@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrl: './editar-auto.component.css'
})
export class EditarAutoComponent implements OnInit{
  
  newItemForm: FormGroup = new FormGroup({})
  id:string=""
  auto:any
  
  constructor(private route: ActivatedRoute, private fBuilder: FormBuilder, private listaService: AutosInfo, private router: Router){
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params['id']

      this.listaService.getItemById(this.id).subscribe((auto:ListaInterface)=>{
        this.auto = auto
        if(!this.auto) {console.log("No hay datos")}
        
        console.log("Auto a editar",this.auto)

        this.newItemForm = this.fBuilder.group({
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
              Validators.minLength(2),
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
            [
              Validators.required,
              Validators.minLength(10),
              Validators.maxLength(450),
            ]
          ],
    
        });
      })
    })
  }
}

