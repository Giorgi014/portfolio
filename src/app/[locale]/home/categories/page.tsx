import { AllCategories } from "@/components";
import "./style/categories.scss";

type CategoriesProps = {
  categoryChange: (category: string) => void;
  selectedCategory: string;
};

const Categories = ({ categoryChange, selectedCategory }: CategoriesProps) => {
  return (
    <AllCategories
      categoryChange={categoryChange}
      selectedCategory={selectedCategory}
    />
  );
};

export default Categories;
