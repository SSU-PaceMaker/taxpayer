import React,{useEffect,useState} from 'react'
import CardCollapse from '../../../components/Cards/Collapse'
import ChartPie from '../../../components/Charts/Pie'
import axios from 'axios';
import ChartBar from '../../../components/Charts/Bar'
import DataTable from '../../../components/DataTable'
const NationalTaxDetail=()=> {
  const [isLoading, setisLoading]=useState(false)
  const [data,setData]=useState({})
  useEffect(()=>{
    /*progress bar같은거 사용할 때 */
    axios.get('/api/nationaltax').then(res=>{console.log(res.data) })
    /* async 함수를 useEffect에서 직접 사용하면 안된다. */
  },[]);
  const revenue_pie_data = {
    labels: [
      '소득세',
      '부동산세',
      '자리세',
      '부가가치세',
      '인지세',
      '증권 거래세'
    ],
    datasets: [{
      data: [33, 20, 2, 3, 40, 10],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      hoverOffset: 2
    }],

  };
  const expenditure_pie_data = {
    labels: [
      '문화비',
      '교육비',
      '환경미화비'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 205, 86)',
        'rgb(153, 102, 255)',
      ],
      hoverOffset: 4
    }]
  };

  const finance_labels = [
    '3월',
    '4월',
    '5월',
    '6월',
    '8월',
    '9월',
    '10월',
    '11월',
  ];
  const finance_last_data = {
    labels: finance_labels,
    datasets: [{
      label: '세입',
      data: [5, 6, 3, 8, 5, 0, 0],
      backgroundColor:'rgba(201, 203, 207, 0.2)',
      borderColor: 'rgb(153, 102, 255)',
      borderWidth: 1
    }, {
      label: '세출',
      data: [10, 0, 3, 1, 10, 0, 0],
      backgroundColor: 
        'rgba(255, 159, 64, 0.2)',
      borderColor: 
        'rgb(255, 99, 132)',
     
      borderWidth: 1
    }
    ]
  };
  const datae = {
    labels: ["Direct", "Referral", "Social"],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  }
  return (
    
    <div>

      {/*<!--재정 상황 시작-->*/}
      <CardCollapse title="재정상황" area_id='재정상황'>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">보유세금</th>
                <th scope="col">국채</th>
                <th scope="col">세입</th>
                <th scope="col">세출</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1000미소</td>
                <td>980미소</td>
                <td>500미소</td>
                <td>200미소</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <ChartBar id='finance_last' title='재정상황' data={finance_last_data} />
        </div>
      </CardCollapse>
      {/*<!--재정 상황 끝-->*/}


      {/*<!--세입/세출 시작-->*/}
      <CardCollapse title="세입/세출 내역" area_id='세입세출내역'>
        <div className='row'>
          <div className='col-6'>
            <p className="h5 font-weight-bold "><a href='#revenue_detail'>세입내역</a></p>
            <div id='direct_tax'>
              <p className="h6 font-weight-bold ">직접세</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">(재산) 소득세 :</li>
                <li className="list-group-item">(재산) 부동산세 :</li>
                <li className="list-group-item">(임대) 자리세 : </li>
              </ul>
            </div>
            <div id='indirect_tax'>
              <p className="h6 font-weight-bold ">간접세</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">(재산) 부가가치세 :</li>
                <li className="list-group-item"> (재산) 인지세</li>
                <li className="list-group-item">(재산) 증권 거래세</li>
              </ul>
            </div>
            <div>
              <p className="h6 font-weight-bold ">벌금</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">총 벌금 :</li>
              </ul>
            </div>
          </div>
          <hr ></hr>
          <div className='col-6'>
            <p className="h5 font-weight-bold "><a href='#expenditure_detail'>세출내역</a></p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">문화비 :</li>
              <li className="list-group-item"> 교육비 :</li>
              <li className="list-group-item">환경미화비 :</li>
            </ul>

            <div className='row'>
              <div className='col'>
                <p className="h5 font-weight-bold ">한 줄 분석</p>
              </div>
              <div className='col'>
                <div className="border-1 bg-transparent">

                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col ml-1'>
                <input
                  type="text"
                  readOnly={true}
                  className="form-control"
                  id="evaluation"
                  placeholder=""
                  min="0"
                  max="100"
                  step="5"
                />
              </div>
            </div>
          </div>

        </div>
        <div className='row'>
          <div className='col-md-6'>
            <ChartPie id='revenue_pie' title='세입' data={revenue_pie_data} />
          </div>
          <div className='col-md-6'>
            <ChartPie id='expenditure_pie' title='세출' data={expenditure_pie_data} />
          </div>
        </div>
      </CardCollapse>
      {/*<!--세입/세출 끝-->*/}


      {/*<!--국채 발행 내역 시작-->*/}
      <CardCollapse title='국채 발행 내역' area_id='nationaldebt'>
      <DataTable id='test'/>
      </CardCollapse>
      {/*<!--국채 발행 내역 끝-->*/}


      {/*<!--세입 항목별 세부 내역 시작-->*/}
      <CardCollapse title='세입 항목별 세부 내역' area_id='revenue_detail'>
        <div className="table-responsive">
          <table className="table table-bordered" id="revenue_detail_tb" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>id</th>
                <th>날짜</th>
                <th>내용</th>
                <th>금액</th>
                <th>누적합계</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>id</th>
                <th>날짜</th>
                <th>내용</th>
                <th>금액</th>
                <th>누적합계</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>1</td>
                <td>2009/02/14</td>
                <td>San Francisco</td>
                <td>500원</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2020/02/14</td>
                <td>an Francisco</td>
                <td>500원</td>
                <td>$46</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardCollapse>
      {/*<!--세입 항목별 세부 내역 끝-->*/}


      {/*<!--세출 항목별 세부 내역 시작-->*/}
      <CardCollapse title='세출 항목별 세부 내역' area_id='expenditure_detail'>
        <div className="table-responsive">
          <table className="table table-bordered" id="expenditure_detail_tb" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>id</th>
                <th>날짜</th>
                <th>내용</th>
                <th>금액</th>
                <th>누적합계</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>id</th>
                <th>날짜</th>
                <th>내용</th>
                <th>금액</th>
                <th>누적합계</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>1</td>
                <td>2009/02/14</td>
                <td>San Francisco</td>
                <td>500원</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2020/02/14</td>
                <td>an Francisco</td>
                <td>500원</td>
                <td>$46</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardCollapse>
      {/*<!--세출 항목별 세부 내역 끝-->*/}

    </div>
  )
};

export default NationalTaxDetail
