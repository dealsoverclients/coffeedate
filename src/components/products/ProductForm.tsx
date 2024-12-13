import React from 'react';
import { InputField } from '../ui/InputField';
import { FormData } from '../../types';

type Product = FormData['products'][0];

interface ProductFormProps {
  product: Product;
  index: number;
  onUpdate: (index: number, product: Product) => void;
  onRemove: (index: number) => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  index,
  onUpdate,
  onRemove,
}) => {
  const handleChange = (name: string, value: string) => {
    onUpdate(index, { ...product, [name]: value });
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Product {index + 1}
        </h3>
        {index > 0 && (
          <button
            onClick={() => onRemove(index)}
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            Remove
          </button>
        )}
      </div>

      <div className="space-y-4">
        <InputField
          label="Product Price Point ($)"
          type="number"
          name="pricePoint"
          value={product.pricePoint}
          onChange={(e) => handleChange('pricePoint', e.target.value)}
          min="0"
          step="0.01"
        />

        <InputField
          label="New Monthly Enrollments"
          type="number"
          name="monthlyEnrollments"
          value={product.monthlyEnrollments}
          onChange={(e) => handleChange('monthlyEnrollments', e.target.value)}
          min="0"
        />

        <InputField
          label="Monthly Graduates"
          type="number"
          name="monthlyGraduates"
          value={product.monthlyGraduates}
          onChange={(e) => handleChange('monthlyGraduates', e.target.value)}
          min="0"
        />

        <InputField
          label="Total Past Participants"
          type="number"
          name="totalPastParticipants"
          value={product.totalPastParticipants}
          onChange={(e) => handleChange('totalPastParticipants', e.target.value)}
          min="0"
        />

        <InputField
          label="Current Participants"
          type="number"
          name="currentParticipants"
          value={product.currentParticipants}
          onChange={(e) => handleChange('currentParticipants', e.target.value)}
          min="0"
        />

        <InputField
          label="Monthly Sales Capacity"
          type="number"
          name="monthlySalesCapacity"
          value={product.monthlySalesCapacity}
          onChange={(e) => handleChange('monthlySalesCapacity', e.target.value)}
          min="0"
        />
      </div>
    </div>
  );
};