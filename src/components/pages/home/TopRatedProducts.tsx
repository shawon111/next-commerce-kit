import Container from '@/components/layouts/Container';
import ProductCard from '@/components/layouts/products/ProductCard';
import { Award, Eye } from 'lucide-react';

const topRatedProducts = [
    { id: 9, name: "Premium Leather Wallet", price: 79.99, originalPrice: 119.99, rating: 5.0, reviews: 1024, image: "bg-gradient-to-br from-amber-600 to-orange-700" },
    { id: 10, name: "Cashmere Scarf", price: 124.99, originalPrice: 179.99, rating: 4.9, reviews: 687, image: "bg-gradient-to-br from-rose-400 to-pink-600" },
    { id: 11, name: "Athletic Running Shoes", price: 139.99, originalPrice: 189.99, rating: 4.9, reviews: 1453, image: "bg-gradient-to-br from-lime-400 to-green-500" },
    { id: 12, name: "Minimalist Backpack", price: 94.99, originalPrice: 139.99, rating: 4.8, reviews: 892, image: "bg-gradient-to-br from-stone-400 to-neutral-600" },
  ];

const TopRatedProducts = () => {
    return (
        <section className='bg-gradient-to-br from-gray-50 to-white py-20'>
            <Container>
                <div>
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                                <Award className="text-white" size={24} />
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Top Rated</h2>
                                <p className="text-gray-600">Highest customer satisfaction</p>
                            </div>
                        </div>
                        <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-semibold text-gray-700 hover:border-purple-400 hover:text-purple-600 transition-colors">
                            <span>View All</span>
                            <Eye size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topRatedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TopRatedProducts;