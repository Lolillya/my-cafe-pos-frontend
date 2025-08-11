import { SearchIcon } from '@/components/ui/icons';

export const SearchCategory = () => {
  return (
    <div className="flex items-center justify-between">
      <h4>Choose Category</h4>
      <div className="relative flex items-center w-2/4">
        <input type="text" placeholder="Search category or menu..." />
        <div className="absolute right-0 mr-5">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
