import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class AuthentificatedGuard implements CanActivate{
    canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();

        return request.isAuthentificated();
    }
    
}