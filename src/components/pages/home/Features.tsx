import Container from '@/components/layouts/Container';
import { Heart, Package, Star, Zap } from 'lucide-react';

const Features = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center space-y-3 group cursor-pointer">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Zap className="text-purple-600" size={32} />
                        </div>
                        <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                        <p className="text-sm text-gray-600">Free shipping over $50</p>
                    </div>

                    <div className="text-center space-y-3 group cursor-pointer">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Package className="text-blue-600" size={32} />
                        </div>
                        <h3 className="font-semibold text-gray-900">Easy Returns</h3>
                        <p className="text-sm text-gray-600">30-day return policy</p>
                    </div>

                    <div className="text-center space-y-3 group cursor-pointer">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Star className="text-green-600" size={32} />
                        </div>
                        <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                        <p className="text-sm text-gray-600">Handpicked products</p>
                    </div>

                    <div className="text-center space-y-3 group cursor-pointer">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Heart className="text-orange-600" size={32} />
                        </div>
                        <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                        <p className="text-sm text-gray-600">Always here to help</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Features;