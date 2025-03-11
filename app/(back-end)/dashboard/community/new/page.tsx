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
import QuillEditor from '@/components/FormInputs/QuillEditor';

export default function NewCommunity() {
  const [imageUrl, setImageUrl] = useState('');
  const communities = [
    { id: 1, title: 'Community 1' },
    { id: 2, title: 'Community 2' },
    { id: 3, title: 'Community 3' },
    { id: 4, title: 'Community 4' }, 
  ];
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
      router.push('/dashboard/community');
    }

  // Quill Editor
  const [content, setContent] = useState('')
 
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content
    console.log(data);
    makePostRequest(setLoading, 'communities', data, 'Community', reset, redirect);
    setImageUrl(''); 
  }

  return (
    <div className='max-w-6xl mx-auto px-6 '>
      <FormHeader title='New Community' />
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
              label='Community Title'
              name='title'
              register={register}
              errors={errors}
              className='flex-1 w-full'
            />
            <SelectInput
              label='Select Community'
              name='communityId'
              register={register}
              errors={errors}
              className='flex-1 w-full'
              options={communities}
            />
          </div>

          {/* Category Description (Full Width) */}
          <div className='col-span-2'>
            <TextareaInput
              label='Community Description'
              name='description'
              register={register}
              errors={errors}
              className='w-full'
            />
          </div>

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='communityImageUploader'
            label='Community Image'
          />

          {/* Content */}

         <QuillEditor label="PathTreks Community" value={content} onChange={setContent} />

          {/* Content End */}

          <ToggleInput
            label='Publish your Community'
            name='isActive'
            trueTitle='Active'
            falseTitle='Draft'
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle='Create Community'
          loadingButtonTitle='Creating Community please wait...'
        />
      </form>
    </div>
  );
}
