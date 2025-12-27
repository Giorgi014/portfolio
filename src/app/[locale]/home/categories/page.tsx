import { AllCategories } from "@/components/categories";
import "./style/categories.scss";

const Categories = ({ className }: { className: string }) => {
  return (
    <div className={`${className}`}>
      <AllCategories />
    </div>
  );
};

export default Categories;
