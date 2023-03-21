import { MigrationInterface, QueryRunner } from "typeorm";

export class addVisitorTable1679406612621 implements MigrationInterface {
    name = 'addVisitorTable1679406612621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "visitor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "hashedIpAddress" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_781fadaa61f95734b600d8670a9" UNIQUE ("hashedIpAddress"), CONSTRAINT "PK_ba6ae421d03de90a99ed838741d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "visitor"`);
    }

}
