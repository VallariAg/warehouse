import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from "@heroicons/react/outline"

export default function MyDropdown() {

  return (
    <Menu as="div" className="relative flex items-center justify-end flex-1 lg:w-0">
        <Menu.Button className="flex items-center justify-end flex-1 lg:w-0">
            <div class="rounded-full text-gray-600 text-md justify-self-center my-2 h-12 w-12 flex items-center justify-center bg-blue-100">V</div>
            <ChevronDownIcon
                              className="ml-2 h-5 w-5 text-gray-500 group-hover:text-gray-500"
                              aria-hidden="true"
                />
        </Menu.Button>
      <Menu.Items className="absolute mt-1 right-0">
        <Menu.Item>
          {/* {({ active }) => ( */}
            <a className='bg-blue-500 text-white' href="/account-settings">
              Account settings
            </a>
          {/* )} */}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'bg-blue-500 text-white'}`} href="/documentation">
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75 ...">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
