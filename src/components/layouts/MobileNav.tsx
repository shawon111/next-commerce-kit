'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            {/* menu button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-gray-600 hover:text-gray-900"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden py-4">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-3"
                        />
                        <Link href="/products" className="block px-3 py-2 text-gray-600">
                            Products
                        </Link>
                        <Link href="/categories" className="block px-3 py-2 text-gray-600">
                            Categories
                        </Link>
                        <Link href="/deals" className="block px-3 py-2 text-gray-600">
                            Deals
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav;