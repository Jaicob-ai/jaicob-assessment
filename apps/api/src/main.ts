import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { JobSeeder } from "./jobs/infrastructure/seeds/job.seeder";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({ origin: "*" });

    const seeder = app.get(JobSeeder);
    await seeder.seed();

    await app.listen(3000);
}
bootstrap();
