import { Controller, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Job } from "src/jobs/infrastructure/schemas/job.schema";
import { Repository } from "typeorm";

@Controller("jobs")
export class JobController {
    constructor(
        @InjectRepository(Job)
        private readonly repository: Repository<Job>
    ) {}

    @Get()
    getJobs(): Promise<Job[]> {
        return this.repository.find();
    }
}
