'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  description?: string;
  children: ReactNode;
  error?: string;
}

export default function FormField({ label, description, children, error }: FormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <label className="block text-sm font-medium text-white">{label}</label>
      {description && (
        <p className="text-xs text-gray-400">{description}</p>
      )}
      {children}
      {error && (
        <p className="text-xs text-red-400 mt-1">{error}</p>
      )}
    </motion.div>
  );
}

interface SelectFieldProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

export function SelectField({ value, onChange, options, placeholder }: SelectFieldProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg text-white focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all appearance-none cursor-pointer"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.75rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
      }}
    >
      <option value="" disabled>
        {placeholder || 'Select an option'}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

interface SliderFieldProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
}

export function SliderField({ value, onChange, min, max, step = 1, suffix = '' }: SliderFieldProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-white">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${percentage}%, #1E293B ${percentage}%, #1E293B 100%)`,
        }}
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>{min}{suffix}</span>
        <span>{max}{suffix}</span>
      </div>
    </div>
  );
}

interface CurrencyInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

export function CurrencyInput({ value, onChange, placeholder }: CurrencyInputProps) {
  const formatDisplayValue = (num: number) => {
    if (num === 0) return '';
    return num.toLocaleString('en-US');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    onChange(rawValue ? parseInt(rawValue, 10) : 0);
  };

  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
      <input
        type="text"
        value={formatDisplayValue(value)}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-8 pr-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg text-white focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
      />
    </div>
  );
}

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  suffix?: string;
}

export function NumberInput({ value, onChange, placeholder, suffix }: NumberInputProps) {
  const formatDisplayValue = (num: number) => {
    if (num === 0) return '';
    return num.toLocaleString('en-US');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    onChange(rawValue ? parseInt(rawValue, 10) : 0);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={formatDisplayValue(value)}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg text-white focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
      />
      {suffix && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">{suffix}</span>
      )}
    </div>
  );
}

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email';
}

export function TextInput({ value, onChange, placeholder, type = 'text' }: TextInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-[#0F172A] border border-[#334155] rounded-lg text-white focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
    />
  );
}
