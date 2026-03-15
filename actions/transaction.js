import { db } from "@/lib/prisma";

export async function createTransaction(data) {
    try {
        const { userId } = await auth();
        if(!userId) throw new Error("Unauthorized");
        
        //Use Arcjet to add rate limiting
        
        const user = await db.user.findUnique({
            where: { clerkUserId: userId},
        });

        if(!user) {
            throw new Error("User not found");
        }

        const account = await db.account.findUnique({
            where: {
                id: data.accountId,
                userId: user.id,
            },
        });

        if(!account) {
            throw new Error("Account not found");
        }

        const balanceChange = data.type === "EXPENSE" ? -data.amount : data.amount;
        const newBalance = account.balance.toNumber() + balanceChange;
        const transaction = await db.$transaction(async(tx) => {
            const newTransaction = await tx.transaction.create({
                data: {
                    ...data,
                    userId: user.id,
                    nextRecurringDate: data.isRecurring && data.recurringInterval ? calculateNextRecurringDate(data.date, data.recurringInterval):null,
                },
            });
        })
    } catch (error) {
        
    }
}