import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

interface IEmailSearchInput {
  onSearch: (search: string) => void
}

const EmailSearchInput = ({ onSearch }: IEmailSearchInput) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div>
      <div className='space-y-2'>
        <label htmlFor='email-search-input' className='text-sm text-fuchsia-500 capitalize font-bold'>
          Search Email
        </label>

        <div className='relative border border-gray-200 rounded'>
          <input
            type='text'
            id='email-search-input'
            className='w-full p-3 rounded text-black transition'
            placeholder='Search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
          <button
            className='absolute right-0 top-0 bottom-0 p-4 rounded-r z-10 bg-fuchsia-500 disabled:bg-fuchsia-300 disabled:cursor-not-allowed'
            onClick={() => onSearch(searchQuery)}
            disabled={!searchQuery}
          >
            <MagnifyingGlassIcon className='w-5 h-5 text-white' />
          </button>
        </div>
      </div>

      <span className='text-xs'>
        This will search email with attachment only.
      </span>
    </div >
  )
}

export default EmailSearchInput;