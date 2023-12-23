import {Model, Table, Column } from "sequelize-typescript";


@Table
export class User extends Model {
    @Column
    name: string;

    @Column
    lastname: string;

    @Column
    phone: string;

    @Column
    email: string;

    @Column
    password: string;
}