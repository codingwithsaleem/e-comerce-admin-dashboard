'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Package, AlertTriangle, Edit2, Check, X } from 'lucide-react';
import { categories } from '@/lib/constant/sampleData';
import { useAppSelector, useAppDispatch } from '@/app/hooks/redux';
import { useInitializeProducts } from '@/app/hooks/useInitializeProducts';
import { updateProductStock } from '@/app/store/slices/productsSlice';
import Image from 'next/image';

const InventoryManagement = () => {
  useInitializeProducts();
  
  const dispatch = useAppDispatch();
  const inventoryData = useAppSelector(state => state.products.products);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editStock, setEditStock] = useState('');

  const filteredProducts = inventoryData
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'stock':
          aValue = a.stock;
          bValue = b.stock;
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }
      
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const handleEditStock = (productId: string, currentStock: number) => {
    setEditingId(productId);
    setEditStock(currentStock.toString());
  };

  const handleSaveStock = (productId: string) => {
    const newStock = parseInt(editStock);
    if (!isNaN(newStock) && newStock >= 0) {
      dispatch(updateProductStock({ productId, newStock }));
    }
    setEditingId(null);
    setEditStock('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditStock('');
  };

  const getStockStatus = (stock: number, threshold: number) => {
    if (stock <= threshold) return { label: 'Low Stock', color: 'bg-red-100 text-red-800' };
    if (stock <= threshold * 2) return { label: 'Medium Stock', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'In Stock', color: 'bg-green-100 text-green-800' };
  };

  const lowStockCount = inventoryData.filter(p => p.stock <= p.lowStockThreshold).length;
  const totalValue = inventoryData.reduce((sum, p) => sum + (p.price * p.stock), 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Inventory Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your product inventory and stock levels</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Value: <span className="font-bold">${totalValue.toLocaleString()}</span>
          </div>
          {lowStockCount > 0 && (
            <Badge variant="destructive" className="flex items-center">
              <AlertTriangle className="h-3 w-3 mr-1" />
              {lowStockCount} Low Stock
            </Badge>
          )}
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="stock">Stock</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              variant="outline"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            >
              {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center dark:text-white">
            <Package className="h-5 w-5 mr-2" />
            Products ({filteredProducts.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Product</th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Category</th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Price</th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Stock</th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Status</th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Last Restocked</th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredProducts.map((product) => {
                  const stockStatus = getStockStatus(product.stock, product.lowStockThreshold);
                  const displayImage = product.coverImage || product.image || '/placeholder.svg';
                  
                  return (
                    <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <Image 
                            src={displayImage}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg"
                            width={48}
                            height={48}
                          />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{product.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline">{product.category}</Badge>
                      </td>
                      <td className="p-4 font-medium dark:text-white">${product.price}</td>
                      <td className="p-4">
                        {editingId === product.id ? (
                          <div className="flex items-center space-x-2">
                            <Input
                              type="number"
                              value={editStock}
                              onChange={(e) => setEditStock(e.target.value)}
                              className="w-20"
                              min="0"
                            />
                            <Button
                              size="sm"
                              onClick={() => handleSaveStock(product.id)}
                              className="h-8 w-8 p-0"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={handleCancelEdit}
                              className="h-8 w-8 p-0"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <div className="font-medium dark:text-white">{product.stock}</div>
                        )}
                      </td>
                      <td className="p-4">
                        <Badge className={stockStatus.color}>
                          {stockStatus.label}
                        </Badge>
                      </td>
                      <td className="p-4 text-gray-500 dark:text-gray-400">
                        {new Date(product.lastRestocked).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        {editingId !== product.id && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditStock(product.id, product.stock)}
                            className="flex items-center"
                          >
                            <Edit2 className="h-4 w-4 mr-1" />
                            Edit Stock
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryManagement;
