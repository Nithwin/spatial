import React from 'react';
import TryOn from '@/components/tryon/TryOn';
import { products } from '@/constants/tryon.js';
import Header from '@/components/Landing/Header';

export default function page() {
  return (
    <div>
        <Header />
        <TryOn products={products}/>
    </div>
  )
}