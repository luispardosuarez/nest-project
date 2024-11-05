import { Logger } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCats1730803425442 implements MigrationInterface {
    private readonly logger = new Logger(CreateCats1730803425442.name)

    public async up(queryRunner: QueryRunner): Promise < void> {
        this.logger.log('Running up migration');
    }
    
    public async down(): Promise < void> {
        this.logger.log('Running down migration');
    }

}
    