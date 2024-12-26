import { CustomerAddress }       from './customer_address/models/customer_address.model';
import { VenueVenueType }        from './venue_venue_type/models/venue_venue_type.model';
import { HumanCategory }         from './human_category/models/human_category.model';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { VenueVenueTypeModule }  from './venue_venue_type/venue_venue_type.module';
import { CustomerCard }          from './customer_card/models/customer_card.model';
import { TicketStatus }          from './ticket_status/models/ticket_status.model';
import { HumanCategoryModule }   from './human_category/human_category.module';
import { VenuePhoto }            from './venue_photo/models/venue_photo.model';
import { TicketStatusModule }    from './ticket_status/ticket_status.module';
import { CustomerCardModule }    from './customer_card/customer_card.module';
import { VenueType }             from './venue_type/models/venue_type.model';
import { EventType }             from './event_type/models/event_type.model';
import { SeatType }              from './seat_type/models/seat_type.model';
import { VenuePhotoModule }      from './venue_photo/venue_photo.module';
import { Customer }              from './customer/models/customer.model';
import { VenueTypeModule }       from './venue_type/venue_type.module';
import { EventTypeModule }       from './event_type/event_type.module';
import { Booking }               from './booking/models/booking.model';
import { UserRoles }             from './users/models/user-role.model';
import { SeatTypeModule }        from './seat_type/seat_type.module';
import { Region }                from './region/models/region.model';
import { Ticket }                from './ticket/models/ticket.model';
import { Venue }                 from './venue/models/venue.model';
import { CustomerModule }        from './customer/customer.module';
import { Event }                 from './event/models/event.model';
import { Admin }                 from './admin/models/admin.model';
import { Roles }                 from './roles/models/role.model';
import { Users }                 from './users/models/user.model';
import { BookingModule }         from './booking/booking.module';
import { Seat }                  from './seat/models/seat.model';
import { Cart }                  from './cart/models/cart.model';
import { RegionModule }          from './region/region.module';
import { TicketModule }          from './ticket/ticket.module';
import { EventModule }           from './event/event.module';
import { VenueModule }           from './venue/venue.module';
import { RolesModule }           from './roles/roles.module';
import { ServeStaticModule }     from '@nestjs/serve-static';
import { UsersModule }           from './users/users.module';
import { AdminModule }           from './admin/admin.module';
import { SeatModule }            from './seat/seat.module';
import { AuthModule }            from './auth/auth.module';
import { FileModule }            from './file/file.module';
import { CartModule }            from './cart/cart.module';
import { SequelizeModule }       from '@nestjs/sequelize';
import { ConfigModule }          from '@nestjs/config';
import { Module }                from '@nestjs/common';
import { join }                  from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(
    {
        envFilePath:".env",
        isGlobal:false
    }),
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,"static")
    }),
    SequelizeModule.forRoot(
    {
      dialect:"postgres",
      host:process.env.POSTGRES_HOST,
      port:Number(process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DB,
      models:[
        HumanCategory,
        SeatType,
        VenueType,
        Venue,
        VenuePhoto,
        Region,
        Seat,
        VenueVenueType,
        Roles,
        Users,
        UserRoles,
        EventType,
        Event,
        Ticket,
        TicketStatus,
        Customer,
        CustomerAddress,
        CustomerCard,
        Admin,
        Cart,
        Booking
      ],
      autoLoadModels:true,
      sync:{alter:true},
      logging:false
    }),
    HumanCategoryModule,
    SeatTypeModule,
    VenueTypeModule,
    VenueModule,
    VenuePhotoModule,
    RegionModule,
    SeatModule,
    VenueVenueTypeModule,
    RolesModule,
    UsersModule,
    EventTypeModule,
    EventModule,
    TicketModule,
    TicketStatusModule,
    AuthModule,
    CustomerModule,
    CustomerAddressModule,
    CustomerCardModule,
    AdminModule,
    FileModule,
    CartModule,
    BookingModule
  ],
  controllers: [],
})
export class AppModule {}
