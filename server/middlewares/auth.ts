import { Request, Response, NextFunction } from 'express';
import * as Sentry from "@sentry/node"
import { syncUserFromClerk } from '../utils/userSync.js';
import { prisma } from '../configs/prisma.js';

export const protect = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const {userId} = req.auth()

        if(!userId) {
            return res.status(401).json({message: 'Unauthorized'})
        }

        // Ensure user exists in database (sync from Clerk if needed)
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            // User doesn't exist in DB, sync from Clerk
            await syncUserFromClerk(userId);
        }

        next()
    } catch (error: any) {
        Sentry.captureException(error)
        res.status(401).json({message: error.code || error.message})
    }
}