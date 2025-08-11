import { SearchIcon } from '@/components/ui/icons';

const MenuPage = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center">
          <h3>Choose Category</h3>
          <div className="relative flex items-center">
            <input type="text" placeholder="Search cateroy or menu..." />
            <div className="absolute right-0">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
