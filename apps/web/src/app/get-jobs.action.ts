"use server";

import { IJob } from "../types/job.interface";

export async function getJobsAction() {
    try {
        const response = await fetch(`${process.env.API_URL}/jobs`);
        if (!response.ok) throw new Error();
        const data: IJob[] = await response.json();
        return data;
    } catch {
        return [];
    }
}
