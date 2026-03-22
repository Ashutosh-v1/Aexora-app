import { getUserAccounts } from '@/actions/dashboard'
import { defaultCategories } from '@/data/categories';
import React from 'react'
import AddTransactionForm from '../_components/transaction-form';

const AddTransactionPage = async () => {
  const accounts = await getUserAccounts();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 gradient-title">
          Add Transaction
        </h1>

        <div className="bg-white dark:bg-zinc-900 border rounded-2xl shadow-sm p-6">
          <AddTransactionForm
            accounts={accounts}
            categories={defaultCategories}
          />
        </div>

      </div>
    </div>
  );
};

export default AddTransactionPage;