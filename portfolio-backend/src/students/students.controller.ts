import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('/students') //<-Endpoints
export class StudentsController {

    constructor (private studentService : StudentsService ){ //Instanciamos un objeto del servicio

    }
    @Get()
    //Funcion para llamar al servicio
    getAllStudents(){ //Retorna todos los estudiantes
        return this.studentService.getStudents();
    }
}
