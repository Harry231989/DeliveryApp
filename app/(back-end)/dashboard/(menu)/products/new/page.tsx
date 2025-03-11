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

import ArrayItemsInput from '@/components/FormInputs/ArrayItemsInput';

import ToggleInput from '@/components/FormInputs/ToggleInput';

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState('');
  const categories = [
    { id: 1, title: 'Category 1' },
    { id: 2, title: 'Category 2' },
    { id: 3, title: 'Category 3' },
    { id: 4, title: 'Category 4' },
    { id: 5, title: 'Category 5' },
  ];
  // const drivers = [
  //   { id: 1, title: 'Driver 1' },
  //   { id: 2, title: 'Driver 2' },
  //   { id: 3, title: 'Driver 3' },
  //   { id: 4, title: 'Driver 4' },
  //   { id: 5, title: 'Driver 5' },
  // ];
  
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
      isActive: true
    }
  });
  const isActive = watch('isActive');
  console.log(isActive)
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags
    console.log(data);
    makePostRequest(setLoading, 'api/products', data, 'Product', reset);
    setImageUrl('');
  }

  return (
    <div className='max-w-5xl mx-auto px-6'>
      <FormHeader title='New Product' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 dark:bg-gray-800 dark:border-gray-600'
      >
        {/* Full-width Product Title */}
        <div className='mb-6'>
          <TextInput
            label='Product Title'
            name='title'
            register={register}
            errors={errors}
            className='w-full'
          />
        </div>

        {/* 2-Column Layout on Large Screens, 1-Column on Small Screens */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <TextInput
            label='Product SKU'
            name='sku'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label='Product Barcode'
            name='barcode'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label='Product Price (Before Discount)'
            name='productPrice'
            type='number'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label='Product Sale Price (Discounted)'
            name='salePrice'
            register={register}
            errors={errors}
            type='number'
            className='w-full'
          />
          <SelectInput
            label='Select Category'
            name='categoryId'
            register={register}
            errors={errors}
            className='w-full'
            options={categories}
          />
          {/* <SelectInput
            label='Select Driver'
            name='farmerId'
            register={register}
            errors={errors}
            className='w-full'
            options={drivers}
          /> */}
        </div>

        {/* Image Upload Field (Full Width) */}
        <div className='mt-6'>
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='productImageUploader'
            label='Product Image'
          />
        </div>

        {/* Tags */}
        <ArrayItemsInput setTags={setTags} tags={tags} itemTitle='Tag' />

        {/* Product Description (Full Width) */}
        <div className='mt-6'>
          <TextareaInput
            label='Product Description'
            name='description'
            register={register}
            errors={errors}
            className='w-full'
          />

          <ToggleInput
            label='Publish your Products'
            name='isActive'
            trueTitle='Active'
            falseTitle='Draft'
            register={register}
          />
        </div>

        {/* Submit Button (Right-Aligned) */}
        <div className='mt-6 flex justify-end'>
          <SubmitButton
            isLoading={loading}
            buttonTitle='Create Product'
            loadingButtonTitle='Creating Product please wait...'
            className='px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200'
          />
        </div>
      </form>
    </div>
  );
}
