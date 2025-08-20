import { ItemCard } from './item-card';
import data from '@/data/data.json';

export const ItemCardContainer = () => {
  return (
    <div className="flex flex-col flex-1 h-full gap-4">
      <div className="flex w-full justify-between">
        <h5>Menu</h5>
        <span>12 Coffees Result</span>
      </div>

      <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[calc(100vh-200px)] pb-12">
        {data.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
