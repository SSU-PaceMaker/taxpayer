import React, { Component } from 'react';
import Sidebar from '../../../components/Navigation/Sidebar'
import Topbar from '../../../components/Navigation/Topbar';
import Footer from '../../../components/Footer'
import PageHeading from '../../../components/PageHeading';
import LogoutModal from '../../../components/Modal/Logout'
import ScrollToTop from '../../../components/Scroll';
<<<<<<< HEAD
=======
import DepositCloseModal from '../../../components/Modal/DepositCloseModal/depositCloseModal';
import Account from '../BankComponents/Account';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import Deposit from '../BankComponents/Deposit';
import DepositAdd from '../DepositAdd';
>>>>>>> 35e95af9b6f12f2605a5031e1747a3eb5500ac2b


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

 

    
function Bank () {

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

<<<<<<< HEAD
                                        </div>
                            

                                        <div>

                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="account-card shadow justify-content-center col-md-6 bg-white">
                                        <div className="text-center">

                                            <a className='nav-link collapsed' href="#" data-toggle="collapse" data-target="#collapse_bank_statics" aria-controls="collapseTwo">
                                                <i class="fas fa-chevron-down"></i>            <span>내정보 보기</span>
                                            </a>


                                            <div id="collapse_bank_statics" className='collapse' aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                                <div className="bg-white py-2 collapse-inner rounded">
                                                    <h1>1등급</h1>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
=======
                        <div className="row">
                            <div className="col-lg-6 justify-content-center">
                            <Account
                            user="홍길동"
                            balance="10000"/>
    
                            <Deposit 
                            balance="10000"
                            interest="0.1"/>
>>>>>>> 35e95af9b6f12f2605a5031e1747a3eb5500ac2b

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

    export default Bank;