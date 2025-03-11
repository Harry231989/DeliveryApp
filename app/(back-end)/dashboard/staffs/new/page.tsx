'use client';
import FormHeader from '@/components/backend/FormHeader';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextAreaInput';
import TextInput from '@/components/FormInputs/TextInput';
import SelectInput from '@/components/FormInputs/SelectInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateUserCode } from '@/lib/generateUserCode';
import ImageInput from '@/components/FormInputs/ImageInput';
import { makePostRequest } from '@/lib/apiRequest';
import ToggleInput from '@/components/FormInputs/ToggleInput';

export default function NewStaff() {
  const [imageUrl, setImageUrl] = useState('');
  const [tags, setTags] = useState([]);
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
  async function onSubmit(data) {
    const code = generateUserCode("PT",data.name);
    data.code = code;
    console.log(data);
    makePostRequest(setLoading, 'api/staffs', data, 'Staff', reset);
  
  }

  return (
    <div className='max-w-5xl mx-auto px-6'>
      <FormHeader title='New Staff' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 dark:bg-gray-800 dark:border-gray-600'
      >
        {/* Full-width Product Title */}
        <div className='mb-6'>
          <TextInput
            label="Staff's Full Name"
            name='name'
            register={register}
            errors={errors}
            className='w-full'
          />
        </div>

        {/* 2-Column Layout on Large Screens, 1-Column on Small Screens */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <TextInput
            label='NIN (Id Number)'
            name='nin'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label='Date of Birth'
            name='dob'
            type='date'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label='Password'
            name='password'
            type='password'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label='Email'
            name='email'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Staff's Phone Number"
            name='phone'
            register={register}
            errors={errors}
            className='w-full'
          />

          <TextInput
            label="Staff's Address"
            name='physicalAddress'
            register={register}
            errors={errors}
            className='w-full'
          />
         
        </div>

        {/* Image Upload Field (Full Width) */}
        {/* <div className='mt-6'>
          

        {/* Product Description (Full Width) */}
        <div className='mt-6'>
          {/* <TextareaInput
            label="Farmer's Payment Terms"
            name='description'
            register={register}
            errors={errors}
            className='w-full'
          /> */}
          <TextareaInput
            label='Notes'
            name='description'
            register={register}
            errors={errors}
            className='w-full'
          />

           <ToggleInput
            label="Staff's Status"
            name='isActive'
            trueTitle='Active'
            falseTitle='Draft'
            register={register}
          /> 
        </div>

        {/* Submit Button (Right-Aligned) */}
        <div className='mt-6 flex '>
          <SubmitButton
            isLoading={loading}
            buttonTitle='Create Staff'
            loadingButtonTitle='Creating Staff please wait...'
            className='px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200'
          />
        </div>
      </form>
    </div>
  );
}
