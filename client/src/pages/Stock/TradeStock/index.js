import React, { useEffect, useState } from "react";
import axios from "axios";
import Error from "../../../components/Error";
import PageHeading from "../../../components/PageHeading";
import TradeSection from "./sections/TradeSection";
import StockList from "./sections/StockList";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import InfoBalance from "./sections/InfoBalance";
import BuyStockStat from "./sections/BuyStockStat";
import PageFrame from "../../PageFrame";
export default function TradeStock() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stocks, setstocks] = useState([]);
  let classData = useSelector((state) => state.classInfo.classData);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get("/api/stocks", {
          params: { classId: classData.classId },
        }); //클래스에서 사용하는 stock가져와야함
        setstocks(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
    return () => { };
  }, [classData.classId]);
  return (
    <PageFrame>
      <PageHeading title="주식거래창" />
      <h4 className="pt-2">오늘의 주식</h4>
      {isError && <Error></Error>}
      {isLoading ? <Loading /> : <StockList data={stocks} />}
      <h4 className="pt-4">지난주 통계</h4>
      <div className="account-card shadow bg-white">
        <BuyStockStat />
        <InfoBalance />
      </div>
      <h4 className="pt-4">주식 매수 창</h4>
      <div
        className="account-card shadow bg-white"
        style={{ minHeight: "30vh" }}
      >
        {isError && <Error></Error>}
        {isLoading ? <Loading /> : <TradeSection stocks={stocks} />}
      </div>
    </PageFrame>
  );
}
