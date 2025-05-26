
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImageUploadProps {
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  maxFiles?: number;
  className?: string;
  placeholder?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  multiple = false,
  maxFiles = 1,
  className,
  placeholder = "Upload image"
}) => {
  const [previews, setPreviews] = useState<string[]>(
    multiple ? (Array.isArray(value) ? value : []) : (value ? [value as string] : [])
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          
          if (multiple) {
            const currentPreviews = Array.isArray(value) ? value : [];
            if (currentPreviews.length < maxFiles) {
              const newPreviews = [...currentPreviews, result];
              setPreviews(newPreviews);
              onChange(newPreviews);
            }
          } else {
            setPreviews([result]);
            onChange(result);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    if (multiple) {
      const currentPreviews = Array.isArray(value) ? value : [];
      const newPreviews = currentPreviews.filter((_, i) => i !== index);
      setPreviews(newPreviews);
      onChange(newPreviews);
    } else {
      setPreviews([]);
      onChange('');
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("space-y-4", className)}>
      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={handleFileChange}
        className="hidden"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {previews.map((preview, index) => (
          <div key={index} className="relative group">
            <Image
              src={preview}
              alt={`Preview ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg border border-gray-200"
              width={200}
              height={200}
            />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => removeImage(index)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
        
        {(!multiple || (Array.isArray(value) ? value.length : (value ? 1 : 0)) < maxFiles) && (
          <Button
            type="button"
            variant="outline"
            className="h-32 border-dashed border-2 flex flex-col items-center justify-center text-gray-500 hover:text-gray-700"
            onClick={triggerFileInput}
          >
            <Upload className="h-6 w-6 mb-2" />
            <span className="text-sm">{placeholder}</span>
          </Button>
        )}
      </div>
      
      {multiple && (
        <p className="text-sm text-gray-500">
          {Array.isArray(value) ? value.length : 0} / {maxFiles} images uploaded
        </p>
      )}
    </div>
  );
};
