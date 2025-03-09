import Image from 'next/image'

import logo from '@/assets/logo.svg'
import { ItemMenu } from '@/components/item-menu'

export default function Header() {
  return (
    <header className="w-full flex items-center h-20 bg-amber-500">
      <div className="w-full max-w-[1246px] px-4 mx-auto">
        <div className="flex items-center gap-14">
          <div className="">
            <Image src={logo} alt="Itaú Logo" />
          </div>
          <ul className="flex items-center">
            <li>
              <ItemMenu name="Para você" />
            </li>
            <li>
              <ItemMenu name="Para empresas" />
            </li>
            <li>
              <ItemMenu name="Serviços" />
            </li>
            <li>
              <ItemMenu name="Ajuda" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
