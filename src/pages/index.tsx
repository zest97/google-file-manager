import EmailSearchInput from '@/components/EmailSearchInput';
import Loader from '@/components/Loader';
import ProfileMenu from '@/components/ProfileMenu';
import type { NextPage } from 'next';
import { getSession, useSession } from "next-auth/react";
import { useState } from 'react';

const Home: NextPage = () => {
  const sessionData = useSession();
  const { data: session } = sessionData;

  const [loading, setLoading] = useState<boolean>(false);

  const searchMail = async (search: string) => {
    setLoading(true);

    const res = await fetch('/api/mail/search');

    const data = await res.json();

    console.log('searchMail', data);

    setLoading(false);
  };

  return (
    <div className='px-10 text-gray-800 bg-slate-50 h-screen'>
      <div className='flex justify-end py-4'>
        <ProfileMenu />
      </div>


      <div className='space-y-8 mt-20'>
        <h2 className='text-lg'>
          Welcome, <span className='font-bold'>{session?.user?.name}</span>
        </h2>

        {loading && <Loader />}

        {!loading && <EmailSearchInput onSearch={searchMail} />}
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}

export default Home