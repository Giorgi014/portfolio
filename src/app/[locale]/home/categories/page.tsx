import { AllCategories } from "@/components/categories";
import "./style/categories.scss";

type CategoriesProps = {
  className: string;
  categoryChange: (category: string) => void;
  selectedCategory: string;
};

const Categories = ({
  className,
  categoryChange,
  selectedCategory,
}: CategoriesProps) => {
  return (
    <div className={`${className}`}>
      <AllCategories
        categoryChange={categoryChange}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Categories;
