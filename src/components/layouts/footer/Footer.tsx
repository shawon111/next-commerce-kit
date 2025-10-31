// ...existing code...
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../../../../public/next-commerce-kit-logo-dark.png';
import PaymentMethods from '../../../../public/payment-methods.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div>
            <Link href="/" aria-label="Homepage" className="inline-flex items-center">
              <Image src={Logo} alt="Store logo" width={140} height={40} className="object-contain" />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Modern, curated products for everyday life. Fast shipping — excellent support — secure checkout.
            </p>

            <div className="mt-4 flex items-center space-x-4">
              <a href="mailto:hello@store.com" aria-label="Email" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+1234567890" aria-label="Phone" className="text-gray-400 hover:text-white">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-white">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
              <li><Link href="/collections/new" className="hover:text-white">New Arrivals</Link></li>
              <li><Link href="/sale" className="hover:text-white">Sale</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">Track Order</Link></li>
            </ul>

            <div className="mt-4 flex items-start space-x-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 mt-1" />
              <div>
                <div>123 Commerce St.</div>
                <div>City, State • 12345</div>
              </div>
            </div>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white">Refund Policy</Link></li>
            </ul>

            <h4 className="mt-6 text-sm font-semibold text-gray-100 uppercase">Join our newsletter</h4>
            <p className="mt-2 text-xs text-gray-400">Get exclusive offers, product drops, and more.</p>

            <form action="/api/subscribe" method="post" className="mt-3 flex">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@domain.com"
                className="w-full rounded-l-md px-3 py-2 text-gray-900 text-sm"
              />
              <button type="submit" className="rounded-r-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Subscribe
              </button>
            </form>

            <div className="mt-6">
              <span className="text-xs text-gray-400">We accept</span>
              <div className="mt-2 flex items-center space-x-3">
                <Image src={PaymentMethods} alt="Visa" width={200} height={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {year} Your Store, Inc. All rights reserved.</p>
          <div className="mt-3 sm:mt-0 flex items-center space-x-4">
            <Link href="#" className="hover:text-white">Sitemap</Link>
            <Link href="#" className="hover:text-white">Careers</Link>
            <Link href="#" className="hover:text-white">Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;