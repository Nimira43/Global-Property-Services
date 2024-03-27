'use client';

import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

const PropertyPage = () => {
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams();
  const name = searchParams.get('name');
  const pathname = usePathname();

  console.log('hi');

  return (
    <div>
      <h1>Property Page</h1>
      <button onClick={() => router.push('/')} className='bg-red-500 p-2'>Home { pathname }</button>
    </div>
  )
};

export default PropertyPage;
