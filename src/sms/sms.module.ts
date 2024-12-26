import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { TwilioModule } from 'nestjs-twilio';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TwilioModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (cfg: ConfigService) => ({
            accountSid: cfg.get('TWILIO_ACCOUNT_SID'),
            authToken: cfg.get('TWILIO_AUTH_TOKEN'),
          }),
          inject: [ConfigService],
        }),
      ],
    
  providers: [SmsService]
})
export class SmsModule {}
