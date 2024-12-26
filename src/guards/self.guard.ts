import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()

export class SelfGuard implements CanActivate{
    constructor(private readonly jwtService:JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const req = context.switchToHttp().getRequest()
       
        if(String(req.user.sub)!==req.params.id){
            throw new ForbiddenException({
                message:"Ruxsat etilmagan foydalanuvhci"
            })
        }

        return true
    }
}