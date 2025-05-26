'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Package, Plus, ImagePlus } from 'lucide-react';
import { categories } from '@/lib/constant/sampleData';
import { useAppDispatch } from '@/app/hooks/redux';
import { addProduct } from '@/app/store/slices/productsSlice';
import { useToast } from '@/app/hooks/use-toasts';
import { ImageUpload } from '@/components/ui/image-upload';

const AddProduct = () => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    lowStockThreshold: '',
    coverImage: '',
    productImages: [] as string[]
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.category || !formData.price || !formData.stock) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.coverImage) {
      toast({
        title: "Error",
        description: "Please upload a cover image for the product.",
        variant: "destructive",
      });
      return;
    }

    const productData = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      category: formData.category,
      lowStockThreshold: parseInt(formData.lowStockThreshold) || 10,
      coverImage: formData.coverImage,
      productImages: formData.productImages,
      image: formData.coverImage // For backward compatibility
    };

    dispatch(addProduct(productData));
    
    toast({
      title: "Success",
      description: "Product added successfully!",
    });

    // Reset form
    setFormData({
      name: '',
      description: '',
      price: '',
      stock: '',
      category: '',
      lowStockThreshold: '',
      coverImage: '',
      productImages: []
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Add New Product</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Add a new product to your inventory</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center dark:text-white">
              <Package className="h-5 w-5 mr-2" />
              Product Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter product name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Enter product description"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="0.00"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stock">Initial Stock *</Label>
                  <Input
                    id="stock"
                    type="number"
                    min="0"
                    value={formData.stock}
                    onChange={(e) => handleInputChange('stock', e.target.value)}
                    placeholder="0"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lowStockThreshold">Low Stock Threshold</Label>
                  <Input
                    id="lowStockThreshold"
                    type="number"
                    min="0"
                    value={formData.lowStockThreshold}
                    onChange={(e) => handleInputChange('lowStockThreshold', e.target.value)}
                    placeholder="10"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Product Images */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center dark:text-white">
              <ImagePlus className="h-5 w-5 mr-2"/>
              Product Images
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Cover Image *</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Upload one cover image for inventory listings
              </p>
              <ImageUpload
                value={formData.coverImage}
                onChange={(value) => handleInputChange('coverImage', value as string)}
                multiple={false}
                maxFiles={1}
                placeholder="Upload cover image"
                className='w-[600px]'
              />
            </div>

            <div className="space-y-2">
              <Label>Product Images</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Upload up to 5 product images at once (for website use)
              </p>
              <ImageUpload
                value={formData.productImages}
                onChange={(value) => handleInputChange('productImages', value as string[])}
                multiple={true}
                maxFiles={5}
                placeholder="Upload product images"
                className='w-[600px]'
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
