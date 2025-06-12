import React from 'react'

import MainProduct from './MainProduct';
import SuggestSection from './SuggestSection';
import RecentlyViewedProducts from './RecentlyViewedProducts';
import PromotionSection from './Promotion/PromotionSection';

const MainContent = () => {
  return (
    <>
      <div>Main Content</div>
      <PromotionSection />
      <MainProduct />
      <SuggestSection />
      <RecentlyViewedProducts />
    </>

  )
}

export default MainContent