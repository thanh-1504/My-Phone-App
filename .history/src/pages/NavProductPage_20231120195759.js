import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetData } from "../reux-thunk/Slice/handler";
import { useParams } from "react-router-dom";

const NavProductPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  const { slug } = useParams();
  const { dataIp } = useSelector((state) => state.iPhone);
  console.log(dataIp);
  const { dataIpad } = useSelector((state) => state.iPad);
  const { dataMac } = useSelector((state) => state.mac);
  const { dataAirpod } = useSelector((state) => state.airpod);
  const { dataWatch } = useSelector((state) => state.watch);
  const { dataMainPage: dataiPhoneProduct } = dataIp;
  const { dataMainPage: dataiPadProduct } = dataIpad;
  const { dataMainPage: datamacProduct } = dataMac;
  const { dataMainPage: dataApProduct } = dataAirpod;
  const { dataMainPage: datawatchProduct } = dataWatch;
  const dataIphoneProduct = dataiPhoneProduct[0].sectionIphone;
  const dataIpadProduct = dataiPadProduct[1].sectionIpad;
  const dataMacProduct = datamacProduct[2].sectionMac;
  const dataAirpodProduct = dataApProduct[3].sectionAirpod;
  const dataWatchProduct = datawatchProduct[4].sectionWatch;
  return <div>
    {switch (slug) {
      case "iPhone": {
        return (
          <>
            {dataIphoneProduct.length > 0 &&
              dataIphoneProduct.map((dataItem) => (
                <ProductsItem data={dataItem}></ProductsItem>
              ))}
          </>
        );
      }}
  </div>;
};

export default NavProductPage;
