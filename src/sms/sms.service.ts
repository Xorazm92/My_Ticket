import { Injectable } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';

@Injectable()
export class AppService {
    public constructor(private readonly twilioService: TwilioService) {}
  
    async sendSMS() {
      return this.twilioService.client.messages.create({
        body: 'SMS Body, sent to the phone!',
        from: '+18777804236',
        to: '+998977771053',
      });
    }
  }
export class SmsService {}
