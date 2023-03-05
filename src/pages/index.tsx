import ProfileMenu from '@/components/ProfileMenu';
import type { NextPage } from 'next';
import { getSession, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className='px-10'>
      <div className='flex justify-end py-4'>
        <ProfileMenu />
      </div>

      <h2 className='text-lg mt-10'>
        Welcome, <span className='font-bold'>{session?.user?.name}</span>
      </h2>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

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