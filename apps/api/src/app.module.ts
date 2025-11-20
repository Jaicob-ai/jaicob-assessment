import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CqrsModule } from "@nestjs/cqrs";
import { JobModule } from "./jobs/job.module";

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5433,
            username: "postgres",
            password: "postgres",
            database: "ats",
            autoLoadEntities: true,
            synchronize: true, // dev only
        }),
        JobModule,
    ],
})
export class AppModule {}
