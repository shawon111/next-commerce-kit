'use client'

import { Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const WishListIcon = () => {
    const [wishlistCount, setWishlistCount] = useState(0);
    return (
        <Link href="/wishlist" className="relative p-2">
            <Heart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2">
                    {wishlistCount}
                </span>
            )}
        </Link>
    );
};

export default WishListIcon;