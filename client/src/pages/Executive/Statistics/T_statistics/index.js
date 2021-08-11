import React from 'react'
import Sidebar from '../../../../components/Navigation/Sidebar'
import Topbar from '../../../../components/Navigation/Topbar';
import Footer from '../../../../components/Footer'
import PageHeading from '../../../../components/PageHeading';
import NationStatsDetail from './NationStatsDetail'
import ScrollToTop from '../../../../components/Scroll';
function NationStats() {
  return (
    <div>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">

        {/* <!-- Sidebar --> */}
         
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

              <PageHeading title="반 숙제 현황" />

              {/* <!-- Content Row --> */}
              <NationStatsDetail></NationStatsDetail>
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
      <ScrollToTop />
    </div>

  )
}

export default NationStats
