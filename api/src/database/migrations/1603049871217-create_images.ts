import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1603049871217 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, /* número positivo */
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path', /* caminho da imagem */
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
