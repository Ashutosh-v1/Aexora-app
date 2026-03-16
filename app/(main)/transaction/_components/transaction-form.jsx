"use client";

import { createTransaction } from '@/actions/transaction';
import { transactionSchema } from '@/app/lib/schema';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useFetch from '@/hooks/use-fetch';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

const AddTransactionForm = () => {
  const {
    register, setValue, handleSubmit, formState: { errors }, watch, getValues, reset,
  } = useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: "EXPENSE",
      amount: "",
      description: "",
      accountId: accounts.find((ac) => ac.isDefault)?.id,
      date: new Date(),
      isRecurring: false,
    },
  });

  const {
    loading: transactionLoading,
    fn: transactionFn,
    data: transactionResult,
  } = useFetch(createTransaction);

  const type = watch("type");

  return (
    <form>
      {/* AI Recipt Scanner */}
      <div>
        <label>Type</label>
        <Select onValueChange={(value) => setValue("type", value)} defaultValue={type}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
              <SelectItem value="EXPENSE">Expense</SelectItem>
              <SelectItem value="INCOME">Income</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  )
}

export default AddTransactionForm
