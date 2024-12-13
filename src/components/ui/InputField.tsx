import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  helperText,
  id,
  className = '',
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
          focus:border-blue-500 focus:ring-blue-500 
          dark:bg-gray-800 dark:border-gray-600 dark:text-white ${className}`}
      />
      {helperText && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
};