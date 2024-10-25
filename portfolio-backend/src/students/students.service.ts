import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
    private students = ['Carlos', 'Aaron', 'Victor'];
    getStudents(){
        return this.students;
    }
}
