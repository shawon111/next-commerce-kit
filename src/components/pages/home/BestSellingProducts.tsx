import Container from '@/components/layouts/Container';
import ProductCard from '@/components/layouts/products/ProductCard';
import { Eye, TrendingUp } from 'lucide-react';

const bestSellingProducts = [
        { id: 1, name: "Classic Denim Jacket", price: 89.99, originalPrice: 129.99, rating: 4.8, reviews: 256, sold: 1243, image: "bg-gradient-to-br from-blue-400 to-indigo-500" },
        { id: 2, name: "Summer Floral Dress", price: 64.99, originalPrice: 99.99, rating: 4.9, reviews: 189, sold: 982, image: "bg-gradient-to-br from-pink-400 to-rose-500" },
        { id: 3, name: "Leather Crossbody Bag", price: 149.99, originalPrice: 199.99, rating: 4.7, reviews: 342, sold: 876, image: "bg-gradient-to-br from-amber-400 to-orange-500" },
        { id: 4, name: "Vintage Sunglasses", price: 34.99, originalPrice: 59.99, rating: 4.6, reviews: 421, sold: 1567, image: "bg-gradient-to-br from-purple-400 to-pink-500" },
    ];

const BestSellingProducts = () => {
    return (
        <section className='bg-gradient-to-br from-gray-50 to-white py-20'>
            <Container>
                <div>
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                                <TrendingUp className="text-white" size={24} />
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Best Selling</h2>
                                <p className="text-gray-600">Most popular products this month</p>
                            </div>
                        </div>
                        <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-semibold text-gray-700 hover:border-purple-400 hover:text-purple-600 transition-colors">
                            <span>View All</span>
                            <Eye size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bestSellingProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BestSellingProducts;