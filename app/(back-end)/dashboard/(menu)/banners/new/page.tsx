'use client';
import FormHeader from '@/components/backend/FormHeader';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/TextInput';
import ImageInput from '@/components/FormInputs/ImageInput';
import ToggleInput from '@/components/FormInputs/ToggleInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateSlug } from '@/lib/generateSlug';
import { makePostRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';

export default function NewBanner() {
  const [imageUrl, setImageUrl] = useState('');
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
  const router = useRouter();

  function redirect() {
    router.push('/dashboard/banners');
  }

  async function onSubmit(data) {
    try {
      console.log('✅ Form Data Before Processing:', data);

      if (!data.title || !data.link || !imageUrl) {
        console.error('❌ Missing Fields: Ensure all fields are filled.');
        return;
      }

      const slug = generateSlug(data.title);
      const updatedData = {
        ...data,
        slug,
        imageUrl,
        isActive,
      };

      console.log('🚀 Data Sent to API:', updatedData);

      await makePostRequest(
        setLoading,
        'banners',
        updatedData,
        'Banner',
        reset,
        redirect
      );
      setImageUrl('');
    } catch (error) {
      console.error('❌ Error in onSubmit:', error);
    }
  }

  return (
    <div className='max-w-6xl mx-auto px-6'>
      <FormHeader title='New Banner' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl 
          p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
          dark:bg-gray-700 dark:border-gray-700 mx-auto my-3'
      >
        <div className='grid grid-cols-2 gap-6'>
          <div className='col-span-2'>
            <TextInput
              label='Banner Title'
              name='title'
              register={register}
              errors={errors}
              className='w-full'
            />
          </div>

          <div className='col-span-2'>
            <TextInput
              label='Banner Link'
              name='link'
              register={register}
              errors={errors}
              className='w-full'
            />
          </div>

          <div className='col-span-2'>
            <ImageInput
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint='bannerImageUploader'
              label='Banner Image'
            />
          </div>

          <div className='col-span-2'>
            <ToggleInput
              label='Publish your Banner'
              name='isActive'
              trueTitle='Active'
              falseTitle='Draft'
              register={register}
            />
          </div>
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle='Create Banner'
          loadingButtonTitle='Creating Banner please wait...'
        />
      </form>
    </div>
  );
}
