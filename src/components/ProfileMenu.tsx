import { Menu, Transition } from '@headlessui/react';
import { signOut, useSession } from "next-auth/react";
import { Fragment } from "react";

const ProfileMenu = () => {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md">
          <img
            src={session?.user?.image || ''}
            className="rounded-full w-12 h-12 border-4 border-gray-100 transition hover:border-gray-300 hover:cursor-pointer"
            alt="profile image" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button className='text-sm p-3 cursor-pointer hover:bg-gray-50 w-full text-left' onClick={() => signOut()}>
                Sign Out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ProfileMenu;