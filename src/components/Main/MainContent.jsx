import React from 'react'

import MainProduct from './MainProduct';
import SuggestSection from './SuggestSection';
import RecentlyViewedProducts from './RecentlyViewedProducts';
import PromotionSection from './Promotion/PromotionSection';
import IphoneSection from './PhoneSection/IphoneSection';



const MainContent = () => {
  return (
    <>
      <div>Main Content</div>
      <PromotionSection />
      <IphoneSection />
      <MainProduct />
      <SuggestSection />
      <RecentlyViewedProducts />
    </>

  )
}

export default MainContent