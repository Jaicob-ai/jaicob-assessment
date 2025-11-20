import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Job } from "./infrastructure/schemas/job.schema";
import { JobSeeder } from "./infrastructure/seeds/job.seeder";
import { JobController } from "./domain/controllers/job.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Job])],
    controllers: [JobController],
    providers: [JobSeeder],
})
export class JobModule {}
