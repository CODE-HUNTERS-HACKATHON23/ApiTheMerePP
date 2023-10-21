import { CanActivate, ExecutionContext, mixin } from '@nestjs/common';
import { JWTPayloadDTO } from '../../modules/authentication/dto/jwtPayload.dto';

export const RoleGuard = (role: string) => {
    class RoleGuardMixin implements CanActivate {
        canActivate(context: ExecutionContext): boolean {
            const { user }: { user: JWTPayloadDTO } = context
                .switchToHttp()
                .getRequest();

            return user.rol === role;
        }
    }

    return mixin(RoleGuardMixin);
};
