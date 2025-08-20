import { SearchCategory } from './_components/search-category';
import { CategoryButtons } from './_components/category-buttons';
import { ItemCardContainer } from './_components/item-card-wrapper';

const MenuPage = () => {
  return (
    <section className="bg-bg1 ">
      <div className="container gap-4 flex flex-col">
        <SearchCategory />
        <CategoryButtons />

        <ItemCardContainer />
      </div>
    </section>
  );
};

export default MenuPage;
