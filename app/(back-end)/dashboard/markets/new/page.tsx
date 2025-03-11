'use client';
import FormHeader from '@/components/backend/FormHeader';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextAreaInput';
import TextInput from '@/components/FormInputs/TextInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/ImageInput';
import { makePostRequest } from '@/lib/apiRequest';
import { generateCouponCode } from '@/lib/generateCouponCode';
import SelectInput from '@/components/FormInputs/SelectInput';
import ToggleInput from '@/components/FormInputs/ToggleInput';
import { title } from 'process';

export default function NewMarket() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('')
  const categories = [
    {
      id: 1,
      title: "Category 1"
    },
    {
      id: 2,
      title: "Category 2"
    },
    {
      id: 3,
      title: "Category 3"
    },
  ]
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true
    }
  });
  const isActive = watch('isActive')
 
  async function onSubmit(data) {
    {
      /* 
        -id => auto()
        -title
        -code
        -expiry Date
        */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl
    makePostRequest(setLoading, 'api/markets', data, 'Market', reset);
    setLogoUrl("")
  }
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <FormHeader title='Market Logo' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl 
          p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
          dark:bg-gray-700 dark:border-gray-700 mx-auto my-3 '
      >
        <div className='grid gap-4 sm:grid-cols sm:gap-6'>
          <TextInput
            label='Market Title'
            name='title'
            register={register}
            errors={errors}
            className='w-full'
          />

          <SelectInput
            label='Select Categories'
            name='categoryIds'
            register={register}
            errors={errors}
            className='flex-1 w-full'
            options={categories}
            multiple={false}
          />

          <div className='mt-6'>
            <ImageInput
              imageUrl={logoUrl}
              setImageUrl={setImageUrl}
              endpoint='marketImageUploader'
              label='Market Logo'
            />

            <TextareaInput
              label='Market Description'
              name='description'
              register={register}
              errors={errors}
              className='w-full mt-6'
            />
          </div>

          <ToggleInput
            label='Market Status'
            name='isActive'
            trueTitle='Active'
            falseTitle='Draft'
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle='Create Market'
          loadingButtonTitle='Creating Market please wait...'
        />
      </form>
    </div>
  );
}
