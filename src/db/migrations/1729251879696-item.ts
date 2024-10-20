import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Item1729251879696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'item', 
            columns: [{
                name: 'id', 
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'identity'
            },
            {
                name: 'name',
                type: 'varchar',
                isNullable: false
            },
            {
                name: 'quantity',
                type: 'int',
                isNullable: false
            },
            {
                name: 'quantityType',
                type: 'varchar',
                isNullable: false
            },
            {
                name: 'category',
                type: 'varchar',
                isNullable: false
            },
            {
                name: 'complete',
                type: 'boolean',
                default: false,
            }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('item');
    }

}
