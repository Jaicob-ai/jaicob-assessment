import Image from "next/image";
import { getJobsAction } from "./get-jobs.action";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default async function Home() {
    const data = await getJobsAction();
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <Image
                alt="Jaicob"
                src="/jaicob.png"
                width={80}
                height={80}
                className="mb-4"
            />
            <h1 className="text-4xl font-bold mb-8">Resume Parser</h1>
            <p className="text-xl text-center max-w-2xl">
                Upload a PDF resume → parsed with Grok → matched against the
                pre-seeded job
            </p>
            <div className="flex flex-col gap-4 mt-4">
                {data.length ? (
                    data.map((job) => (
                        <Card key={job.id} className="max-w-3xl">
                            <CardHeader>
                                <CardTitle>{job.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: job.description ?? "",
                                    }}
                                    className="job-description"
                                />
                            </CardContent>
                            <CardFooter>
                                <p className="text-muted-foreground text-sm italic">
                                    {new Date(
                                        job.createdAt
                                    ).toLocaleDateString()}
                                </p>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <p>
                        Run the <code>job.seeder.ts</code> function to seed the
                        database.
                    </p>
                )}
            </div>
        </main>
    );
}
