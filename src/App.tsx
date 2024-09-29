import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { AnnouncementBar } from './components/Announcement_Bar';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner.tsx';
import { SectionTitle } from './components/Section_Title/SectionTitle.tsx';
import { ProductListing } from './components/Product_Listing/ProductListing.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { UtilitySection } from './components/Utility_Section/UtilitySection.tsx';
import { ProductCarousel } from './components/Product_Carousel/ProductCarousel.tsx';

const App: React.FC = () => {
  return (
      <Provider store={store}>
          <div className="app">
            <AnnouncementBar/>
            <Header/>
            <Banner/>
            <SectionTitle title='Just Dropped' subtitle='Brand New Jewelery!'/>
            <ProductCarousel/>
            
            <SectionTitle title='All Products' subtitle='Shop All Our Products'/>
            <ProductListing/>
            <UtilitySection/>
            <Footer/>

          </div>
      </Provider>
  );
};


export default App
