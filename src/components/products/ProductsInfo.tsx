import React from 'react';
import { Plus } from 'lucide-react';
import { FormData } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductsInfoProps {
  data: FormData['products'];
  onChange: (products: FormData['products']) => void;
}

const emptyProduct = {
  pricePoint: '',
  monthlyEnrollments: '',
  monthlyGraduates: '',
  totalPastParticipants: '',
  currentParticipants: '',
  monthlySalesCapacity: '',
};

export const ProductsInfo: React.FC<ProductsInfoProps> = ({ data, onChange }) => {
  const handleAddProduct = () => {
    onChange([...data, { ...emptyProduct }]);
  };

  const handleUpdateProduct = (index: number, updatedProduct: FormData['products'][0]) => {
    const newProducts = [...data];
    newProducts[index] = updatedProduct;
    onChange(newProducts);
  };

  const handleRemoveProduct = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="space-y-2 mb-6">
        {data.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            index={index}
            onUpdate={handleUpdateProduct}
            onRemove={handleRemoveProduct}
          />
        ))}
      </div>

      <button
        onClick={handleAddProduct}
        className="w-full py-4 flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg border-2 border-dashed border-blue-200 dark:border-blue-800 transition-colors"
      >
        <Plus className="w-5 h-5" />
        <span className="font-medium">Add Another Product</span>
      </button>
    </div>
  );
};