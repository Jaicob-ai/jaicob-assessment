import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Job } from "../schemas/job.schema";

@Injectable()
export class JobSeeder {
    private readonly logger = new Logger(JobSeeder.name);

    constructor(
        @InjectRepository(Job)
        private readonly jobRepo: Repository<Job>
    ) {}

    async seed() {
        const count = await this.jobRepo.count();

        if (count === 0) {
            await this.jobRepo.insert({
                id: "11111111-1111-1111-1111-111111111111",
                title: "Senior Software Engineer",
                description:
                    `<h1>Senior Software Developer (Full-time / Remote or Berlin)</h1>
                    <p><strong>Company:</strong> Jaicob – A fast-growing SaaS startup building the future of recruitment.</p>
                    <div>
                        <p><strong>We are hiring an experienced Senior Software Developer</strong> to join our engineering team and take ownership of major features and architecture decisions.</p>
                    </div>
                    <h2>About the Role</h2>
                    <ul>
                        <li>Design, build, and maintain efficient, reusable, and reliable backend/frontend code</li>
                        <li>Lead technical design and architecture discussions</li>
                        <li>Mentor junior and mid-level developers</li>
                        <li>Collaborate closely with product, design, and DevOps teams</li>
                        <li>Write clean, well-documented, and tested code</li>
                        <li>Participate in code reviews and continuously improve engineering practices</li>
                        <li>Troubleshoot and debug complex issues in production when needed</li>
                    </ul>
                    <h2>Requirements</h2>
                    <ul>
                        <li>5+ years of professional software development experience</li>
                        <li>Strong proficiency in at least one of: Node.js, Python, Go, Ruby, Java, or similar</li>
                        <li>Deep experience with modern frameworks (React, Vue, Angular, Django, Spring, etc.)</li>
                        <li>Solid understanding of RESTful APIs, microservices, and distributed systems</li>
                        <li>Experience with relational databases (PostgreSQL, MySQL) and ideally NoSQL (MongoDB, Redis)</li>
                        <li>Proficiency with Git and modern CI/CD pipelines</li>
                        <li>Previous experience leading or mentoring engineers is a big plus</li>
                        <li>Excellent problem-solving skills and attention to detail</li>
                        <li>Strong communication skills in English (written and spoken)</li>
                    </ul>
                    <h2>Nice to Have</h2>
                    <ul>
                        <li>Experience with cloud platforms (AWS, GCP, Azure)</li>
                        <li>Knowledge of Docker and Kubernetes</li>
                        <li>Contributions to open-source projects</li>
                        <li>Previous startup or scale-up experience</li>
                    </ul>
                    <h2>What We Offer</h2>
                    <ul>
                        <li>Competitive salary (€90k–€130k+ depending on experience) + equity</li>
                        <li>Fully remote within EU time zones or modern office in Berlin</li>
                        <li>Flexible working hours and unlimited vacation policy</li>
                        <li>Latest hardware and home-office budget</li>
                        <li>Annual learning & development budget</li>
                        <li>Regular team off-sites and events</li>
                        <li>Visa sponsorship available if needed</li>
                    </ul>
                    <p><strong>Sound like you?</strong><br>
                    Send your CV and a short note about why you’re excited to join us to <a href="mailto:jobs@yourcompany.com">jobs@yourcompany.com</a> with the subject “Senior Software Developer Application – [Your Name]”.</p>
                    <p><em>We are an equal-opportunity employer and value diversity at our company.</em></p>`.trim(),
                requirements:
                    "5+ years TypeScript, NestJS, Next.js, experience with LLMs, CQRS architecture, clean code obsession",
            });

            this.logger.log("✅ Job seed completed");
        }
    }
}
