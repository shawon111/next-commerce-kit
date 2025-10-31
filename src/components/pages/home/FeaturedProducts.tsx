import Container from '@/components/layouts/Container';
import ProductCard from '@/components/layouts/products/ProductCard';
import { Eye, Zap } from 'lucide-react';

const featuredProducts = [
    { id: 5, name: "Designer Sneakers", price: 179.99, originalPrice: 249.99, rating: 4.9, reviews: 523, badge: "New", image: "bg-gradient-to-br from-cyan-400 to-blue-500" },
    { id: 6, name: "Silk Evening Gown", price: 299.99, originalPrice: 449.99, rating: 5.0, reviews: 187, badge: "Premium", image: "bg-gradient-to-br from-violet-400 to-purple-500" },
    { id: 7, name: "Smart Watch Pro", price: 399.99, originalPrice: 499.99, rating: 4.8, reviews: 892, badge: "Featured", image: "bg-gradient-to-br from-slate-400 to-gray-600" },
    { id: 8, name: "Wool Blazer", price: 189.99, originalPrice: 279.99, rating: 4.7, reviews: 264, badge: "Limited", image: "bg-gradient-to-br from-emerald-400 to-teal-500" },
];

const FeaturedProducts = () => {
    return (
        <section className='bg-gradient-to-br from-gray-50 to-white py-20'>
            <Container>
                <div>
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                                <Zap className="text-white" size={24} />
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Products</h2>
                                <p className="text-gray-600">Hand-picked by our experts</p>
                            </div>
                        </div>
                        <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-semibold text-gray-700 hover:border-purple-400 hover:text-purple-600 transition-colors">
                            <span>View All</span>
                            <Eye size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} featured={true} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedProducts;