import { Eye, GitCompare, Heart, ShoppingCart, Star, TrendingUp } from "lucide-react";

interface ProductCardProps {
    product: {
        name: string;
        image: string;
        price: number;
        originalPrice: number;
        rating: number;
        reviews: number;
        sold?: number;
        badge?: string;
    };
    featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    return (
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
          {/* Product Image Placeholder */}
          <div className={`w-full h-full ${product.image} flex items-center justify-center transition-all duration-500 group-hover:scale-105`}>
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3">
                <span className="text-white text-4xl font-bold">{product.name.charAt(0)}</span>
              </div>
              <p className="text-white/90 font-medium text-sm">{product.name.split(' ').slice(0, 2).join(' ')}</p>
            </div>
          </div>
          
          {/* Badges */}
          {discount > 0 && (
            <div className="absolute top-3 left-3">
              <div className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                -{discount}%
              </div>
            </div>
          )}
          
          {product.badge && (
            <div className="absolute top-3 right-3">
              <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                {product.badge}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <button className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all duration-200">
              <Heart size={20} />
            </button>
            <button className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:bg-blue-50 hover:text-blue-500 transition-all duration-200">
              <Eye size={20} />
            </button>
            <button className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:bg-purple-50 hover:text-purple-500 transition-all duration-200">
              <GitCompare size={20} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 space-y-3">
          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 text-base leading-tight min-h-[2.5rem] line-clamp-2 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-200 fill-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {product.rating}
            </span>
            <span className="text-xs text-gray-400">
              ({product.reviews})
            </span>
          </div>

          {/* Price & Cart */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              {product.sold && (
                <div className="flex items-center text-xs text-green-600 mt-1 font-medium">
                  <TrendingUp size={12} className="mr-1" />
                  <span>{product.sold.toLocaleString()} sold</span>
                </div>
              )}
            </div>
            
            <button className="w-11 h-11 bg-purple-600 hover:bg-purple-700 rounded-xl flex items-center justify-center text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Highlight Bar */}
        <div className="h-1 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    );
  };

export default ProductCard;