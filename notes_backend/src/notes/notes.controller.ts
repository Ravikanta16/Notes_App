import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}
    @Post('create')
    create(@Body() body: { title: string, description: string }) {
        return this.notesService.create(body.title, body.description);
    };

    @Get('all')
    findAll() {
        return this.notesService.findAll();
    };

    @Get(':id')
    async getNoteById(@Param('id') id: number) {
        return this.notesService.findOne(id);
    };

    @Patch(':id/markdone')
    public async markAsDone(@Param('id') id: number) {
        const result = await this.notesService.markAsDone(id);
        return result;
    };
}
