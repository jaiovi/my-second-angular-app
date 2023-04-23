import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi segunda app';
  alumnosArray:Alumno[]=[
    {id:1, nombre:"Miguel",grado:"2",edad:20},
    {id:2, nombre:"Juan",grado:"7",edad:19},
  ]

  seleAlumno:Alumno=new Alumno();
  
  addOrEdit(){
    if(this.seleAlumno.id==0){ //crea uno nuevo
      this.seleAlumno.id=this.alumnosArray.length+1;
      this.alumnosArray.push(this.seleAlumno);
    }
    this.seleAlumno=new Alumno();
  }

  openForEdit(alum: Alumno){
    this.seleAlumno = alum;
  } //aqui toma y actualiza el dato

  delete(){
    if(confirm("¿Deseas eliminar alumno seleccionado?"))
    {
      //busca registro pa eliminar
      this.alumnosArray=this.alumnosArray.filter(x=> x!=this.seleAlumno);
      this.seleAlumno = new Alumno();
    }
  }
}
