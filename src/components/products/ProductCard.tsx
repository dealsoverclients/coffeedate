import React from 'react';
import { Package, DollarSign, Users, GraduationCap, History, UserCheck, TrendingUp } from 'lucide-react';
import { FormData } from '../../types';
import { InputField } from '../ui/InputField';

type Product = FormData['products'][0];

interface ProductCardProps {
  product: Product;
  index: number;
  onUpdate: (index: number, product: Product) => void;
  onRemove: (index: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  onUpdate,
  onRemove,
}) => {
  const handleChange = (name: string, value: string) => {
    onUpdate(index, { ...product, [name]: value });
  };

  const fields = [
    {
      name: 'pricePoint',
      label: 'Product Price Point ($)',
      icon: DollarSign,
      type: 'number',
      min: '0',
      step: '0.01',
    },
    {
      name: 'monthlyEnrollments',
      label: 'New Monthly Enrollments',
      icon: Users,
      type: 'number',
      min: '0',
    },
    {
      name: 'monthlyGraduates',
      label: 'Monthly Graduates',
      icon: GraduationCap,
      type: 'number',
      min: '0',
    },
    {
      name: 'totalPastParticipants',
      label: 'Total Past Participants',
      icon: History,
      type: 'number',
      min: '0',
    },
    {
      name: 'currentParticipants',
      label: 'Current Participants',
      icon: UserCheck,
      type: 'number',
      min: '0',
    },
    {
      name: 'monthlySalesCapacity',
      label: 'Monthly Sales Capacity',
      icon: TrendingUp,
      type: 'number',
      min: '0',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Package className="w-6 h-6 text-blue-500" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Product {index + 1}
          </h3>
        </div>
        {index > 0 && (
          <button
            onClick={() => onRemove(index)}
            className="text-sm px-3 py-1 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 border border-red-200 dark:border-red-800 rounded-md hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
          >
            Remove Product
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map(({ name, label, icon: Icon, ...rest }) => (
          <div key={name} className="relative">
            <div className="absolute left-3 top-9 text-gray-400 dark:text-gray-500">
              <Icon className="w-5 h-5" />
            </div>
            <InputField
              label={label}
              value={product[name as keyof Product]}
              onChange={(e) => handleChange(name, e.target.value)}
              className="pl-10"
              {...rest}
            />
          </div>
        ))}
      </div>
    </div>
  );
};