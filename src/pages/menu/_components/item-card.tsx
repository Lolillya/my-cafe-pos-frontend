import { Button } from '@/components/ui/button';
import { ProductType } from '@/types/item-card.types';
import { NumericFormat } from 'react-number-format';
type Props = {
  item: ProductType;
};

export const ItemCard = ({ item }: Props) => {
  return (
    <div className="p-3 rounded-xl flex flex-col bg-white">
      <div className="flex">
        <div className="w-30 h-24 rounded-xl bg-gray-400" />
        <div className="px-2 flex flex-col justify-between">
          <span>{item.name}</span>
          <span className="text-justify">{item.description}</span>
          <NumericFormat
            value={item.price}
            displayType="text"
            decimalScale={2}
            fixedDecimalScale
            prefix="₱"
          />
          {/* <span>{item.price}</span> */}
        </div>
      </div>

      <div className="flex justify-between py-3">
        <div className="flex flex-col">
          <span>Size</span>
          <div className="flex gap-1">
            <div className="w-8 h-8 rounded-full bg-accent/50 items-center justify-center flex">
              <span className="font-bold">S</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-accent/50 items-center justify-center flex">
              <span className="font-bold">M</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-accent/50 items-center justify-center flex">
              <span className="font-bold">L</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span>Sugar</span>
          <div className="flex gap-1">
            <div className="w-8 h-8 rounded-full bg-accent/50 items-center justify-center flex">
              <span className="font-bold">S</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-accent/50 items-center justify-center flex">
              <span className="font-bold">M</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-accent/50 items-center justify-center flex">
              <span className="font-bold">L</span>
            </div>
          </div>
        </div>
      </div>

      <Button variant="1" type="button">
        Add to Billing
      </Button>
    </div>
  );
};
