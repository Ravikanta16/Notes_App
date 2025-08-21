import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './note.model';

@Module({
  imports: [SequelizeModule.forFeature([Note])],
  exports: [NotesService],
  providers: [NotesService],
  controllers: [NotesController]
})
export class NotesModule {}
