import { getUserAccounts } from '@/actions/dashboard';
import { defaultCategories } from '@/data/categories';
import React from 'react';
import AddTransactionForm from '../_components/transaction-form';
import { getTransaction } from '@/actions/transaction';

const AddTransactionPage = async ({ searchParams }) => {
  // ✅ unwrap searchParams (Next.js new requirement)
  const { edit: editId } = await searchParams;

  // ✅ fetch data in parallel (better performance)
  const [accounts, initialData] = await Promise.all([
    getUserAccounts(),
    editId ? getTransaction(editId) : Promise.resolve(null),
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 gradient-title">
          {editId ? "Edit" : "Add"} Transaction
        </h1>

        <div className="bg-white dark:bg-zinc-900 border rounded-2xl shadow-sm p-6">
          <AddTransactionForm
            accounts={accounts}
            categories={defaultCategories}
            editMode={!!editId}
            initialData={initialData}
          />
        </div>

      </div>
    </div>
  );
};

export default AddTransactionPage;