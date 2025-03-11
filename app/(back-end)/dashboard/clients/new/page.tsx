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
import NewClientForm from '@/components/backend/NewClientForm';

export default function NewClient() {
  // const [loading, setLoading] = useState(false);
  //  const [imageUrl, setImageUrl] = useState('');
   
  // const router = useRouter();
  // function redirect() {
  //   router.push('/dashboard/clients');
  // }

  // const {
  //   register,
  //   reset,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     isActive: true,
  //   },
  // });

  // async function onSubmit(data) {
  //   try {
  //     console.log('✅ Form Data Before Processing:', data);

  //     const code = generateUserCode(data.name, 'CUSTOM_PREFIX');
  //     const updatedData = {
  //       ...data,
  //       code,
  //     };

  //     console.log('🚀 Data Sent to API:', updatedData);

  //     await makePostRequest(
  //       setLoading,
  //       'clients',
  //       updatedData,
  //       'Client',
  //       reset,
  //       redirect
  //     );
  //   } catch (error) {
  //     console.error('❌ Error in onSubmit:', error);
  //   }
  // }

  return (
    <div className='max-w-5xl mx-auto px-6'>
      <FormHeader title='New Client' />
      <NewClientForm />
    </div>
  );
}
