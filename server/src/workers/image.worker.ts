import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import cloudinary from "../common/config/cloudinary.config"
import { UserService } from '../modules/user/user.service';
import { Logger } from '@nestjs/common'

@Processor("image-queue")
export class imageWorker extends WorkerHost {
    private readonly logger = new Logger(imageWorker.name)
    constructor(private readonly userService: UserService) {
        super()
    }

    async process(job: Job) {
        const { userId, fileBuffer, fileName } = job.data 
        try {
            const result: any = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "happr/avatars", public_id: fileName }, (error, result) => {
                        if(error) reject(error)
                        else resolve(result)
                    },
                )
                uploadStream.end(fileBuffer)
            })
            this.userService.updateUserInfo(userId, { avatar_url: result.secure_url })
            this.logger.log(`Avatar uploaded ${result.secure_url} for user ${userId}`)
            return result.secure_url
        } catch(error) {
            this.logger.error(`Avatar upload failed for user ${userId}`, error.stack || error.message)
            throw error
        }
    }
}