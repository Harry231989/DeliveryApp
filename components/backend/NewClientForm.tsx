'use client';
import FormHeader from '@/components/backend/FormHeader';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextAreaInput';
import TextInput from '@/components/FormInputs/TextInput';
import ImageInput from '@/components/FormInputs/ImageInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { makePostRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';
import { generateUserCode } from '@/lib/generateUserCode';
import ArrayItemsInput from '../FormInputs/ArrayItemsInput';

export default function NewClientForm({user}) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [products,setProducts] = useState([])

  const router = useRouter();
  function redirect() {
    router.push('/dashboard/clients');
  }

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...user
    },
  });

  async function onSubmit(data) {
    try {
      console.log('✅ Form Data Before Processing:', data);

      const code = generateUserCode(data.name, 'CUSTOM_PREFIX');

      // Ensure `products` exists before assigning
      data.products = products && products.length > 0 ? products : [];
      data.userId = user.id || null

      // Ensure `userId` exists before assigning
      // if (user?.id) {
      //   data.userId = user.id;
      // } else {
      //   console.warn('⚠️ No user ID found, skipping assignment.');
      // }

      const updatedData = {
        ...data,
        code,
      };

      console.log('🚀 Data Sent to API:', updatedData);

      await makePostRequest(
        setLoading,
        'clients',
        updatedData,
        'Client Data',
        reset,
        redirect
      );
    } catch (error) {
      console.error('❌ Error in onSubmit:', error);
    }
  }

  return (
    <div className='max-w-5xl mx-auto px-6'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl  mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 dark:bg-gray-800 dark:border-gray-600'
      >
        {/* Full Width: Driver's Full Name */}
        <div className='mb-6'>
          <TextInput
            label="Client's Full Name"
            name='name'
            register={register}
            errors={errors}
            className='w-full'
          />
        </div>

        {/* Two Column Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <TextInput
            label="Client's Phone Number"
            name='phone'
            register={register}
            errors={errors}
          />
          <TextInput
            label="Client's Email"
            name='email'
            register={register}
            errors={errors}
          />
          <TextInput
            label="Client's Address"
            name='physicalAddress'
            register={register}
            errors={errors}
          />
          <TextInput
            label='Contact Person'
            name='contactPerson'
            register={register}
            errors={errors}
          />
          <TextInput
            label='Contact Person Phone'
            name='contactPersonPhone'
            register={register}
            errors={errors}
          />
          <TextInput
            label='What services does the company provide?'
            name='companyTask'
            type='text'
            register={register}
            errors={errors}
          />
          <ArrayItemsInput
            setTags={setProducts}
            tags={products}
            itemTitle='Product'
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='clientImageUploader'
            label='Client Profile Image'
          />
        </div>

        {/* Full Width: Payment Terms & Notes */}
        <div className='mt-6'>
          <TextareaInput
            label="client's Payment Terms"
            name='terms'
            register={register}
            errors={errors}
            className='w-full'
            isRequired={false}
          />
        </div>

        <div className='mt-6'>
          <TextareaInput
            label='Notes'
            name='notes'
            register={register}
            errors={errors}
            className='w-full'
            isRequired={false}
          />
        </div>

        <div className='mt-6'>
          <SubmitButton
            isLoading={loading}
            buttonTitle='Create Client'
            loadingButtonTitle='Creating Client, please wait...'
          />
        </div>
      </form>
    </div>
  );
}
