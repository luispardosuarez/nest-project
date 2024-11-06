import { Logger } from "@nestjs/common";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCats1730803425442 implements MigrationInterface {
    private readonly logger = new Logger(CreateCats1730803425442.name);

    public async up(queryRunner: QueryRunner): Promise<void> {
        this.logger.log('Running up migration');

        await queryRunner.createTable(
            new Table({
                name: "cats", 
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true, 
                        generationStrategy: "increment", 
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100", 
                        isNullable: false,
                    },
                    {
                        name: "origin",
                        type: "varchar",
                        length: "100", 
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "500",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP", 
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        this.logger.log('Running down migration');
        await queryRunner.dropTable("cats"); 
    }
}

    