import { ArrowRight, Sparkles, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import HeroImage from '@/assets/images/hero-img-1.jpg'

const HomeHero = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
                            <Sparkles className="text-yellow-500" size={20} />
                            <span className="text-sm font-semibold text-gray-700">Limited Time Offer</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                Summer Collection 2024
                            </h1>
                            <p className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                                Elevate Your Style
                            </p>
                            <p className="text-xl text-gray-600">
                                Discover the latest trends in fashion with up to 60% off
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
                                <span>Shop Now</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                View Collection
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                            <div className="space-y-1">
                                <div className="flex items-center space-x-1">
                                    <Star className="text-yellow-500 fill-yellow-500" size={20} />
                                    <span className="text-2xl font-bold text-gray-900">4.9</span>
                                </div>
                                <p className="text-sm text-gray-600">Customer Rating</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center space-x-1">
                                    <TrendingUp className="text-green-500" size={20} />
                                    <span className="text-2xl font-bold text-gray-900">10K+</span>
                                </div>
                                <p className="text-sm text-gray-600">Products Sold</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-2xl font-bold text-gray-900">50+</span>
                                <p className="text-sm text-gray-600">Top Brands</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative">
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src={HeroImage}
                                width={590}
                                height={590}
                                alt='summer shopping'
                                className="absolute inset-0 aspect-square"
                            />
                        </div>

                        <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition-shadow duration-300" style={{ animation: 'float 3s ease-in-out infinite' }}>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                                    <Sparkles className="text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Up to 60% OFF</p>
                                    <p className="text-xs text-gray-600">On selected items</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition-shadow duration-300" style={{ animation: 'float 3s ease-in-out infinite 1s' }}>
                            <div className="flex items-center space-x-3">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">2.5K+ Happy</p>
                                    <p className="text-xs text-gray-600">Customers</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;