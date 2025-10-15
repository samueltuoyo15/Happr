import { Processor, WorkerHost } from '@nestjs/bullmq'
import { Job } from 'bullmq'
import { MailService } from './mail.service'

@Processor("email-queue")
export class MailProcessor extends WorkerHost {
    constructor(private readonly mailService: MailService) {
        super()
    }

    async process(job: Job) {
        const { type, data } = job.data 
        if (type === "verification") {
            await this.mailService.sendVerificationEmail(data.email, data.token)
        }
    }
}