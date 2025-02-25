import ChartPie from "../../../../../components/Charts/Pie";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Error from "../../../../../components/Error";
import Loading from "../../../../../components/Loading";
import axios from "axios";
function ChartArea() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let classData = useSelector((state) => state.classInfo.classData);
  const [expenditure, setexpenditure] = useState();
  const [elabel, setelabel] = useState();
  const [revenue, setrevenue] = useState();
  const [rlabel, setrlabel] = useState();
  const revenueto = {
    income: "소득세",
    realestate: "부동산세",
    stock: "증권 거래세",
    vat: "부가가치세",
    fine: "벌금"
  };
  const expendto = {
    culture: "문화비",
    education: "교육비",
    environment: "환경미화비",
    etc: "기타",
  };
  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const result = await axios.get("/api/budget/month", {
        params: { classId: classData.classId },
      });
      setexpenditure(Object.values(result.data.expenditure));
      setelabel(
        Object.keys(result.data.expenditure).map((v, i) => expendto[v])
      );
      setrevenue(Object.values(result.data.revenue));
      setrlabel(Object.keys(result.data.revenue).map((v, i) => revenueto[v]));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const pie_data = [
    {
      labels: rlabel,
      datasets: [
        {
          data: revenue,
          label: "세입",
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
          ],
          hoverOffset: 2,
        },
      ],
    },
    {
      labels: elabel,
      datasets: [
        {
          data: expenditure,
          label: "세출",
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 205, 86)",
            "rgb(153, 102, 255)",
          ],
          hoverOffset: 4,
        },
      ],
    },
  ];

  const pieChartField = React.useMemo(
    () => (
      <>
        {pie_data.map((v, i) => {
          return (
            <div key={i} className="col-md-6">
              <ChartPie
                key={i}
                id={`budget_pie_${i}`}
                title={v.datasets[0].label}
                data={v}
              />
            </div>
          );
        })}
      </>
    ),
    [elabel, rlabel, revenue, expenditure]
  );
  return (
    <>
      {isError && <Error></Error>}
      {isLoading ? <Loading /> : pieChartField}
    </>
  );
}

export default ChartArea;
