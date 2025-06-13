import React from 'react'

import MainProduct from './MainProduct';
import SuggestSection from './SuggestSection';
import RecentlyViewedProducts from './RecentlyViewedProducts';
import PromotionSection from './Promotion/PromotionSection';
import PhoneSection from './PhoneSection/PhoneSection';

const MainContent = () => {
  return (
    <>
      <div>Main Content</div>
      <PromotionSection />
      <PhoneSection />
      <MainProduct />
      <SuggestSection />
      <RecentlyViewedProducts />
    </>

  )
}

export default MainContent