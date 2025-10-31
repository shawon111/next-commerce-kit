import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Logo from '../../../public/next-commerce-kit-logo.png';
import CartIcon from './CartIcon';
import WishListIcon from './WishListIcon';
import UserIcon from './UserIcon';
import MobileNav from './MobileNav';
import Container from './Container';

const Header = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <Container>
                <div className="flex items-center justify-between h-16">
                    {/* Mobile nav */}
                    <MobileNav />

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt="Store Logo"
                                width={120}
                                height={40}
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/products" className="text-gray-600 hover:text-gray-900">
                            Products
                        </Link>
                        <Link href="/categories" className="text-gray-600 hover:text-gray-900">
                            Categories
                        </Link>
                        <Link href="/deals" className="text-gray-600 hover:text-gray-900">
                            Deals
                        </Link>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute right-3 top-3 text-gray-400 h-5 w-5" />
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4">
                        <WishListIcon />
                        <CartIcon />
                        <UserIcon />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;