import { createClerkClient } from '@clerk/backend';
import { prisma } from '../configs/prisma.js';
import * as Sentry from "@sentry/node";

if (!process.env.CLERK_SECRET_KEY) {
    console.error('CLERK_SECRET_KEY is not set in environment variables');
}

const clerkClient = createClerkClient({ 
    secretKey: process.env.CLERK_SECRET_KEY || '' 
});

/**
 * Syncs a user from Clerk to the database.
 * Creates the user if they don't exist, updates if they do.
 */
export const syncUserFromClerk = async (clerkUserId: string) => {
    try {
        // Get user from Clerk
        const clerkUser = await clerkClient.users.getUser(clerkUserId);
        
        if (!clerkUser) {
            throw new Error('User not found in Clerk');
        }

        // Extract user data
        const email = clerkUser.emailAddresses[0]?.emailAddress;
        if (!email) {
            throw new Error('User email not found in Clerk');
        }
        
        const firstName = clerkUser.firstName || '';
        const lastName = clerkUser.lastName || '';
        const name = `${firstName} ${lastName}`.trim() || email;
        const image = clerkUser.imageUrl || '';

        // Upsert user in database
        const user = await prisma.user.upsert({
            where: { id: clerkUserId },
            update: {
                email,
                name,
                image,
            },
            create: {
                id: clerkUserId,
                email,
                name,
                image,
                credits: 20, // Default credits from schema
            },
        });

        return user;
    } catch (error: any) {
        Sentry.captureException(error);
        console.error('Error syncing user from Clerk:', error);
        throw error;
    }
};
