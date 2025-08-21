import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Note } from './note.model';

@Injectable()
export class NotesService {
    constructor(@InjectModel(Note)
    private readonly noteModel: typeof Note) {};

    create(title: string, description: string){
        return this.noteModel.create({title,description});
    }

    findAll(){
        return this.noteModel.findAll();
    }

    async findOne(id: number){
        return this.noteModel.findOne({where: {id: id}});
    }
 
    async markAsDone(id: number){
        const [updated] = await this.noteModel.update(
            { status: 'Done' },
            {
                where: { id }
            }
        );
        if (updated){
            return this.noteModel.findOne({where: {id: id}});
        }
        // const note = await this.noteModel.findOne({where: {id: id}});
        // if(note){
        //     note.dataValues.status = 'Done';
        //     await note.save();
        //     return note;
        // }
        // return null;
    }
}
