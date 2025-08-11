import { SearchCategory } from './_components/search-category';
import { CategoryButtons } from './_components/category-buttons';

const MenuPage = () => {
  return (
    <section className="bg-bg1">
      <div className="container">
        <SearchCategory />
        <CategoryButtons />
      </div>
    </section>
  );
};

export default MenuPage;
