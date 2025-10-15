import { Processor, WorkerHost } from '@nestjs/bullmq'
import { Job } from 'bullmq'
import { MailService } from './mail.service'
import { Logger } from '@nestjs/common'

@Processor("email-queue")
export class MailProcessor extends WorkerHost {
    private readonly logger = new Logger(MailProcessor.name)
    constructor(private readonly mailService: MailService) {
        super()
    }

    async process(job: Job) {
        const { type, data } = job.data 

        switch(type){
            case "verification":
             await this.mailService.sendVerificationEmail(data.email, data.token)
             break 
            
            case "welcome":
             await this.mailService.sendWelcomeMail(data.email, data.username)
             break
            
             default: 
             this.logger.warn(`Unknown email job type: ${type}`)
        }
    }
}