 import { useRouter } from "next/navigation";
 import toast from 'react-hot-toast';

export async function makePostRequest(
  setLoading: (loading: boolean) => void,
  endpoint: string,
  data: any,
  resourceName: string,
  reset: () => void,
  redirect: () => void
) {
  try {
    setLoading(true);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!baseUrl) {
      throw new Error('Base URL is not defined in environment variables.');
    }

    const fullUrl = `${baseUrl}/api/${endpoint}`;

    console.log(`🔹 Sending POST request to: ${fullUrl}`); // Debugging

    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    console.log('🔍 Response Data:', responseData);

    if (response.ok) {
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
      redirect();
    } else {
      toast.error(responseData.message || 'Something went wrong');
    }
  } catch (error) {
    console.error('❌ API request failed:', error);
    toast.error('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
}


export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error('Something Went wrong');
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}
