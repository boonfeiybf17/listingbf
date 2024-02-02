'use client';

import CategoryBox from '../CategoryBox';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import Container from "../Container";
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

export const categories = [
    {
      label: 'Beach',
      icon: TbBeach,
      description: 'This property is close to the beach!',
    },
    {
      label: 'Windmills',
      icon: TbMountain,
      description: 'This property is has windmills!',
    },
    {
      label: 'Modern',
      icon: MdOutlineVilla,
      description: 'This property is modern!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This is property has a beautiful pool!'
      },
      {
        label: 'Islands',
        icon: TbBeach,
        description: 'This property is on an island!'
      },
      {
        label: 'Lake',
        icon: TbBeach,
        description: 'This property is near a lake!'
      },
      {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activies!'
      },
      {
        label: 'Castles',
        icon: TbBeach,
        description: 'This property is an ancient castle!'
      },
      {
        label: 'Caves',
        icon: TbBeach,
        description: 'This property is in a spooky cave!'
      },
      {
        label: 'Camping',
        icon: TbBeach,
        description: 'This property offers camping activities!'
      },
      {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is in arctic environment!'
      },
      {
        label: 'Desert',
        icon: TbBeach,
        description: 'This property is in the desert!'
      },
      {
        label: 'Barns',
        icon: TbBeach,
        description: 'This property is in a barn!'
      },
      {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is brand new and luxurious!'
      }
  ]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';
  
    if (!isMainPage) {
      return null;
    }
  
    return ( 
    <Container>
        <div className="          
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto">

        
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
        </div>
    </Container>
        );
}
 
export default Categories;