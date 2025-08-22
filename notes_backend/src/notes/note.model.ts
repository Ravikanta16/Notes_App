import {Model, Column, Table, DataType} from 'sequelize-typescript';  

@Table
export class Note extends Model {
    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    title:string;
    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    description:string;
    @Column({
        type:DataType.ENUM('Pending','Done'),
        defaultValue:'Pending',
    })
    status:string;
}