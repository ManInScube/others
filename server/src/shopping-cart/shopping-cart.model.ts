import {Model, Table, Column } from "sequelize-typescript";


@Table
export class ShoppingCart extends Model {
    @Column
    userId: number;

    @Column
    productId: number;

    @Column
    name: string;

    @Column
    manufacturer: string;

    @Column({defaultValue: 0})
    price: number;

    @Column
    image: string;

    @Column({defaultValue: 0})
    in_stock: number;

    @Column({defaultValue: 0})
    count: number;

    @Column({defaultValue: 0})
    total_price: number;
}