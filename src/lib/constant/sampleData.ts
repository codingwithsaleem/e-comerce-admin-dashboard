
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    image: string;
    lowStockThreshold: number;
    lastRestocked: string;
  }
  
  export interface SalesData {
    date: string;
    orders: number;
    revenue: number;
    category: string;
  }
  
  export const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports',
    'Beauty',
    'Books'
  ];
  
  export const products: Product[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      description: 'Latest iPhone with A17 Pro chip and titanium design',
      price: 999,
      stock: 45,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400',
      lowStockThreshold: 20,
      lastRestocked: '2024-01-15'
    },
    {
      id: '2',
      name: 'Samsung Galaxy S24',
      description: 'Premium Android smartphone with AI features',
      price: 899,
      stock: 8,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      lowStockThreshold: 15,
      lastRestocked: '2024-01-10'
    },
    {
      id: '3',
      name: 'Nike Air Max 270',
      description: 'Comfortable running shoes with Air Max technology',
      price: 150,
      stock: 120,
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      lowStockThreshold: 30,
      lastRestocked: '2024-01-20'
    },
    {
      id: '4',
      name: 'MacBook Pro M3',
      description: '14-inch MacBook Pro with M3 chip and Liquid Retina XDR display',
      price: 1599,
      stock: 25,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      lowStockThreshold: 10,
      lastRestocked: '2024-01-18'
    },
    {
      id: '5',
      name: 'Adidas Ultraboost 22',
      description: 'Energy-returning running shoes with Boost midsole',
      price: 180,
      stock: 5,
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      lowStockThreshold: 25,
      lastRestocked: '2024-01-12'
    },
    {
      id: '6',
      name: 'Levi\'s 501 Jeans',
      description: 'Classic straight-leg jeans with authentic fit',
      price: 89,
      stock: 200,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
      lowStockThreshold: 50,
      lastRestocked: '2024-01-22'
    },
    {
      id: '7',
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise canceling wireless headphones',
      price: 399,
      stock: 35,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      lowStockThreshold: 20,
      lastRestocked: '2024-01-16'
    },
    {
      id: '8',
      name: 'Instant Pot Duo 7-in-1',
      description: 'Multi-functional electric pressure cooker',
      price: 99,
      stock: 75,
      category: 'Home & Garden',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      lowStockThreshold: 30,
      lastRestocked: '2024-01-14'
    }
  ];
  
  export const salesData: SalesData[] = [
    // January 2024
    { date: '2024-01-01', orders: 45, revenue: 12500, category: 'Electronics' },
    { date: '2024-01-01', orders: 23, revenue: 3450, category: 'Clothing' },
    { date: '2024-01-01', orders: 18, revenue: 2700, category: 'Sports' },
    { date: '2024-01-02', orders: 52, revenue: 15800, category: 'Electronics' },
    { date: '2024-01-02', orders: 31, revenue: 4650, category: 'Clothing' },
    { date: '2024-01-02', orders: 22, revenue: 3300, category: 'Sports' },
    { date: '2024-01-03', orders: 38, revenue: 11400, category: 'Electronics' },
    { date: '2024-01-03', orders: 19, revenue: 2850, category: 'Home & Garden' },
    { date: '2024-01-04', orders: 67, revenue: 20100, category: 'Electronics' },
    { date: '2024-01-04', orders: 41, revenue: 6150, category: 'Clothing' },
    { date: '2024-01-05', orders: 29, revenue: 8700, category: 'Electronics' },
    { date: '2024-01-05', orders: 25, revenue: 3750, category: 'Sports' },
    { date: '2024-01-06', orders: 55, revenue: 16500, category: 'Electronics' },
    { date: '2024-01-06', orders: 33, revenue: 4950, category: 'Clothing' },
    { date: '2024-01-07', orders: 44, revenue: 13200, category: 'Electronics' },
    { date: '2024-01-07', orders: 28, revenue: 4200, category: 'Sports' },
    { date: '2024-01-08', orders: 61, revenue: 18300, category: 'Electronics' },
    { date: '2024-01-08', orders: 37, revenue: 5550, category: 'Clothing' },
    { date: '2024-01-09', orders: 35, revenue: 10500, category: 'Electronics' },
    { date: '2024-01-09', orders: 21, revenue: 3150, category: 'Home & Garden' },
    { date: '2024-01-10', orders: 58, revenue: 17400, category: 'Electronics' },
    { date: '2024-01-10', orders: 42, revenue: 6300, category: 'Clothing' },
    { date: '2024-01-11', orders: 47, revenue: 14100, category: 'Electronics' },
    { date: '2024-01-11', orders: 26, revenue: 3900, category: 'Sports' },
    { date: '2024-01-12', orders: 53, revenue: 15900, category: 'Electronics' },
    { date: '2024-01-12', orders: 34, revenue: 5100, category: 'Clothing' },
    { date: '2024-01-13', orders: 39, revenue: 11700, category: 'Electronics' },
    { date: '2024-01-13', orders: 24, revenue: 3600, category: 'Home & Garden' },
    { date: '2024-01-14', orders: 64, revenue: 19200, category: 'Electronics' },
    { date: '2024-01-14', orders: 45, revenue: 6750, category: 'Clothing' },
    { date: '2024-01-15', orders: 41, revenue: 12300, category: 'Electronics' },
    { date: '2024-01-15', orders: 29, revenue: 4350, category: 'Sports' }
  ];
  
  export const getRevenueData = (timeframe: 'daily' | 'weekly' | 'monthly', category?: string) => {
    let filteredData = salesData;
    
    if (category && category !== 'All') {
      filteredData = salesData.filter(item => item.category === category);
    }
  
    const aggregatedData: { [key: string]: { orders: number; revenue: number } } = {};
  
    filteredData.forEach(item => {
      const date = new Date(item.date);
      let key: string;
  
      switch (timeframe) {
        case 'daily':
          key = item.date;
          break;
        case 'weekly':
          const weekStart = new Date(date);
          weekStart.setDate(date.getDate() - date.getDay());
          key = weekStart.toISOString().split('T')[0];
          break;
        case 'monthly':
          key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
          break;
        default:
          key = item.date;
      }
  
      if (!aggregatedData[key]) {
        aggregatedData[key] = { orders: 0, revenue: 0 };
      }
      aggregatedData[key].orders += item.orders;
      aggregatedData[key].revenue += item.revenue;
    });
  
    return Object.entries(aggregatedData)
      .map(([date, data]) => ({ date, ...data }))
      .sort((a, b) => a.date.localeCompare(b.date));
  };
  
  export const getTotalStats = () => {
    const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);
    const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
    const totalProducts = products.length;
    const lowStockProducts = products.filter(p => p.stock <= p.lowStockThreshold).length;
  
    return {
      totalOrders,
      totalRevenue,
      totalProducts,
      lowStockProducts
    };
  };
  