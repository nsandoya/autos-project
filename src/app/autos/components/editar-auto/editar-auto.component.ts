import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';


import { AutosInfo } from '../../services/autos-info.service';
import { ListaInterface, RespuestaAPI, RespuestaPUT } from '../../interfaces/lista-interface';


@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrl: './editar-auto.component.css'
})
export class EditarAutoComponent implements OnInit{
  
  editForm: FormGroup = new FormGroup({
    /* codigo,
    marca:,
    modelo:,
    anio:,
    calificacion: ,
    kilometraje:,
    precio:,
    foto, */
  })
  id:string=""
  auto:ListaInterface | any = {}
  
  constructor(private route: ActivatedRoute, private fBuilder: FormBuilder, private listaService: AutosInfo, private router: Router){
    this.editForm = this.fBuilder.group({
      codigo: ``,
      marca: ``,
      modelo: ``,
      anio: ``,
      calificacion: ``,
      kilometraje: ``,
      precio: ``,
      foto: ``,
    })
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params['id']

      this.listaService.getItemById(this.id).subscribe((auto:ListaInterface)=>{
        this.auto = auto
        if(!this.auto) {console.log("No hay datos")}
        
        console.log("Auto a editar",this.auto)

        this.editForm = this.fBuilder.group({
          //Inputs a usar
          codigo: [
            // Valor del input
            `${this.auto.codigo}`,

            // Validaciones
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(6),
            ]
          ],
          marca: [
            // Valor del input
            `${this.auto.marca}`,

            // Validaciones
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(30),
            ]
          ],
          modelo: [
            // Valor del input
            `${this.auto.modelo}`,
            // Validaciones
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(30),
            ]
          ],
          anio: [
            // Valor del input
            `${this.auto.anio}`,

            // Validaciones
            [
              Validators.minLength(4),
              Validators.maxLength(4),
            ]
          ],
          calificacion: [
            // Valor del input
            `${this.auto.calificacion}`,

            // Validaciones
            [
              Validators.minLength(1),
            ]
          ],
          kilometraje: [
            // Valor del input
            `${this.auto.kilometraje}`,

            // Validaciones
            [
              Validators.minLength(1),
            ]
          ],
          precio: [
            // Valor del input
            `${this.auto.precio}`,

            // Validaciones
            [
              Validators.required,
              Validators.minLength(2),
            ]
          ],
          foto: [
            `${this.auto.foto}`,

            /* [
              Validators.required,
              Validators.minLength(10),
              Validators.maxLength(450),
            ] */
          ],
    
        });
      })
    })
  }

  onSubmit(){
    console.log("form value", this.editForm.value)
    if(this.editForm.invalid){
      alert("Formulario inválido. Inténtalo nuevamente")
      return
    }

    // Mi form value está bien
    //console.log("Auto 'editado'", this.editForm.value)
    return this.listaService.editItem(this.auto.codigo, this.editForm.value).subscribe((respuesta) => {
      console.log("Respuesta edicion", respuesta)
      if(respuesta.codigo==1){
        alert("Auto editado con éxito")
        this.router.navigate(['/autos/'+this.editForm.value.codigo])
        
      }else{
        alert("Error. Inténtalo más tarde")
      }
    })
  }
}

