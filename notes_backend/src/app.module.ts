import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './notes/note.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_Host,
      port: +process.env.DB_Port!,
      username:process.env.DB_Username,
      password:process.env.DB_Password,
      database:process.env.DB_Database,
      models: [Note],
      autoLoadModels: true,
      synchronize: true,
    }),
    NotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
