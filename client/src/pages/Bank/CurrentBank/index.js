import React, { Component, useState,useEffect } from 'react';
import axios from "axios";

import Sidebar from '../../../components/Navigation/Sidebar'
import Topbar from '../../../components/Navigation/Topbar';
import Footer from '../../../components/Footer'
import LogoutModal from '../../../components/Modal/Logout'
import ScrollToTop from '../../../components/Scroll';
import Account from '../BankComponents/Account';
import Deposit from '../BankComponents/Deposit';
import DepositAdd from '../DepositAdd';
import PageHeading from "../../../components/PageHeading";


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

 

    
export default function Bank () {

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          '/api/classes/:classId/bank'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  

const [modalIsOpen, setIsOpen] = React.useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal(props) {
    setIsOpen(false);
  }
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  
  

  return(

        <div>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">

            {/* <!-- Sidebar --> */}
            <Sidebar />
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Topbar --> */}
                    <Topbar />
                    {/* <!-- End of Topbar --> */}
                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <PageHeading title="은행"></PageHeading>

                        <div className="row">
                            <div className="col-lg-6 justify-content-center">

                              
                            <Account onClick={alert(users[0])}
                            user="홍길동"
                            balance="10000"
                            user_list={users}/>
    
                            <Deposit 
                            balance="10000"
                            interest="0.1"/>

                            <DepositAdd/>
                            </div>
                    
                    <div className="col-lg-6 justify-content-center py-3">
                        <div className="account-card shadow justify-content-center bg-white">
                <div className="text-center">


            </div>
            </div> 

           
</div>
        </div>

                        {/* <!-- Content Row --> */}
                    </div>
                    {/* <!-- /.container-fluid --> */}

                </div>
                {/* <!-- End of Main Content --> */}

                {/* <!-- Footer --> */}
                <Footer></Footer>
                {/* <!-- End of Footer --> */}

            </div>
            {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <ScrollToTop/>
        <LogoutModal/>

        </div>

  )

}

 
