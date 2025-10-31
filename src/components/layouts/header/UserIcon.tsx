'use client';

import { User } from 'lucide-react';
import Link from 'next/link';
import { Fragment, useState } from 'react';

const UserIcon = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Fragment>
            {isLoggedIn ? (
                <Link href="/profile" className="p-2">
                    <User className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                </Link>
            ) : (
                <Link href="/login" className="text-blue-600 hover:text-blue-800">
                    Sign In
                </Link>
            )}
        </Fragment>
    );
};

export default UserIcon;