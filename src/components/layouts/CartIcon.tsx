'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const CartIcon = () => {
    const [cartCount, setCartCount] = useState(0);
    return (
        <Link href="/cart" className="relative p-2">
            <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2">
                    {cartCount}
                </span>
            )}
        </Link>
    );
};

export default CartIcon;