import { NextFunction, RequestHandler, Request, Response, Router } from "express"

export function resolver(handlerFn: RequestHandler) {
    return (req: Request, res: Response, next: NextFunction) => {
        return Promise.resolve(handlerFn(req, res, next))
            .catch(e => next(e))
    }
}

const router = Router();

export default router;
