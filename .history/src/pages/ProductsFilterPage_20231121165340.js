import React from 'react';
import LayoutPage from '../layouts/LayoutPage';
import Header from '../components/Header';

const ProductsFilterPage = () => {
    return (
        <LayoutPage>
        <Header></Header>
        <div className="pt-[80px] lg:px-[80px] mb:px-3">
          <HeaderProductNav slug={slug}></HeaderProductNav>
        </div>
        <div className="mb:px-[15px] lg:px-5">
          <div className="mb-8">
            <FilterProduct
              slug={slug}
              data={allData[0]?.filterBrandName}
            ></FilterProduct>
            <div className="mb:grid mb:grid-cols-2 mb:gap-x-2 lg:max-w-[1200px] lg:grid-cols-4 gap-x-0 lg:pl-[45px] lg:gap-y-3 lg:pb-10">
              {dataPageNav.map((dataItem) => (
                <ProductItemNav key={v4()} data={dataItem}></ProductItemNav>
              ))}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </LayoutPage>
    );
};

export default ProductsFilterPage;