import { UtensilsIcon } from '@/components/ui/icons';

export const CategoryButtons = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3 px-3 py-4 border border-border rounded-3xl justify-center items-center min-w-18">
        <UtensilsIcon width={18} />
        <label className="text-xs">All</label>
      </div>

      <div className="flex flex-col gap-3 px-3 py-4 border border-border rounded-3xl justify-center items-center min-w-18">
        <UtensilsIcon width={18} />
        <label className="text-xs">Coffee</label>
      </div>

      <div className="flex flex-col gap-3 px-3 py-4 border border-border rounded-3xl justify-center items-center min-w-18">
        <UtensilsIcon width={18} />
        <label className="text-xs">Juice</label>
      </div>

      <div className="flex flex-col gap-3 px-3 py-4 border border-border rounded-3xl justify-center items-center min-w-18">
        <UtensilsIcon width={18} />
        <label className="text-xs">Milk</label>
      </div>

      <div className="flex flex-col gap-3 px-3 py-4 border border-border rounded-3xl justify-center items-center min-w-18">
        <UtensilsIcon width={18} />
        <label className="text-xs">Snack</label>
      </div>

      <div className="flex flex-col gap-3 px-3 py-4 border border-border rounded-3xl justify-center items-center min-w-18">
        <UtensilsIcon width={18} />
        <label className="text-xs">Meals</label>
      </div>

      <div className="flex flex-col gap-3 px-3 py-4 border border-border rounded-3xl justify-center items-center min-w-18">
        <UtensilsIcon width={18} />
        <label className="text-xs">Dessert</label>
      </div>
    </div>
  );
};
