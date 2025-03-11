'use client';
import FormHeader from '@/components/backend/FormHeader';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/TextInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateCouponCode } from '@/lib/generateCouponCode';
import { makePostRequest } from '@/lib/apiRequest';
import ToggleInput from '@/components/FormInputs/ToggleInput';
import { generateFormattedDate } from '@/lib/generateFormattedDate';
import { useRouter } from 'next/navigation';

export default function NewCoupon() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch('isActive');
  const router = useRouter()
  function redirect() {
    router.push('/dashboard/coupons')
  }

  async function onSubmit(data) {
    try {
      console.log('✅ Form Data Before Processing:', data);

      const couponCode = generateCouponCode(data.title, data.expiryDate);
      const isoFormattedDates = generateFormattedDate(data.expiryDate);

      const updatedData = {
        ...data,
        expiryDate: isoFormattedDates,
        couponCode,
      };

      console.log('🚀 Data Sent to API:', updatedData);

      await makePostRequest(
        setLoading,
        'coupons',
        updatedData,
        'Coupon',
        reset,
        redirect 
      );
    } catch (error) {
      console.error('❌ Error in onSubmit:', error);
    }
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <FormHeader title='New Coupon' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl 
          p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
          dark:bg-gray-700 dark:border-gray-700 mx-auto my-3 '
      >
        <div className='grid gap-4 sm:grid-cols sm:gap-6'>
          <TextInput
            label='Coupon Title'
            name='title'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label='Coupon Expiry Date'
            name='expiryDate'
            type='date'
            register={register}
            errors={errors}
            className='w-full'
          />
          <ToggleInput
            label='Publish your Coupon'
            name='isActive'
            trueTitle='Active'
            falseTitle='Draft'
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle='Create Coupon'
          loadingButtonTitle='Creating Coupon please wait...'
        />
      </form>
    </div>
  );
}
