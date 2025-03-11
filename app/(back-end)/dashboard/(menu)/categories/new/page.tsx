'use client';
import FormHeader from '@/components/backend/FormHeader';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextAreaInput';
import TextInput from '@/components/FormInputs/TextInput';
import SelectInput from '@/components/FormInputs/SelectInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/ImageInput';
import { makePostRequest } from '@/lib/apiRequest';
import ToggleInput from '@/components/FormInputs/ToggleInput';
import { useRouter } from 'next/navigation';

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState('');
  // const markets = [
  //   { id: 1, title: 'Kims Coding school' },
  //   { id: 2, title: 'Wobke Coding school' },
  //   { id: 3, title: 'Vanessa Coding school' },
  //   { id: 4, title: 'Jnr Coding school' },
  //   { id: 5, title: 'Akos Coding school' },
  // ];
  const [loading, setLoading] = useState(false);

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
   const router = useRouter();
   function redirect() {
     router.push('/dashboard/categories');
   }

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(
      setLoading,
      'categories',
      data,
      'Category',
      reset,
      redirect
    );
    setImageUrl('');
  }

  return (
    <div className='max-w-6xl mx-auto px-6 '>
      <FormHeader title='New Category' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl 
          p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8
          dark:bg-gray-700 dark:border-gray-700 mx-auto my-3'
      >
        <div className='grid grid-cols-2 gap-6'>
          {/* Category Title + Select Market (Occupies Full Width) */}
          <div className='col-span-2 flex gap-6'>
            <TextInput
              label='Category Title'
              name='title'
              register={register}
              errors={errors}
              className='flex-1 w-full'
            />
              {/* <SelectInput
                label='Select Market'
                name='marketIds'
                register={register}
                errors={errors}
                className='flex-1 w-full'
                options={markets}
                multiple={false}
              /> */}
          </div>

          {/* Category Description (Full Width) */}
          <div className='col-span-2'>
            <TextareaInput
              label='Category Description'
              name='description'
              register={register}
              errors={errors}
              className='w-full'
            />
          </div>

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='categoryImageUploader'
            label='Category Image'
          />

          <ToggleInput
            label='Publish your Category'
            name='isActive'
            trueTitle='Active'
            falseTitle='Draft'
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle='Create Category'
          loadingButtonTitle='Creating Category please wait...'
        />
      </form>
    </div>
  );
}
