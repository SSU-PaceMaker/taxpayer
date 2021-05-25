import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickMenuOpen } from '../../../redux/_actions';

class Sidebar extends Component {
  // componentDidMount() {
  //   document.getElementById('body').className = 'page-top';
  // }
  // state = {
  //   sidebarToggled: false,
  // }

  // handleSideBarToggle() {
  //   if (this.sidebarToogled === true) {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top sidebar-toggled';
  //   } else {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top';
  //   }

  // }

  render() {
    const { clickMenuOpen, toggled } = this.props;
    return (
      <ul className={toggled ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled' : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'} id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href='/Classes'>
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-piggy-bank"></i>
          </div>
          <div className="sidebar-brand-text mx-3">TAX MATE</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/Classes/:classId">
            <i className="fas fa-home"></i>
            <span>학급 메인</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className='nav-link collapsed' href="#" data-toggle="collapse" data-target="#collapse_class_setting" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>클래스 설정</span>
          </a>
          <div id="collapse_class_setting" className='collapse' aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="buttons.html">학생관리</a>
              <Link className="collapse-item" to="/cards">학급관리</Link>
            </div>
          </div>
        </li>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a className='nav-link collapsed' href="#" data-toggle="collapse" data-target="#collapse_bank" aria-controls="collapseTwo">
            <i className="fas fa-university"></i>
            <span>은행</span>
          </a>
          <div id="collapse_bank" className='collapse' aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">중앙은행</h6>
              <Link className="collapse-item" to="/bank_statics">통계</Link>
              <Link className="collapse-item" to="/bank_setting">설정</Link>
              <h6 className="collapse-header">증권거래소</h6>
              <Link className="collapse-item" to="/stock_DOM">호가창</Link>
              <Link className="collapse-item" to="/stock_setting">설정</Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse_market" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-store"></i>
            <span>시장</span>
          </a>
          <div id="collapse_market" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/real_estate_setting">부동산</Link>
              <Link className="collapse-item" to="/market">매점</Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          행정부
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a className='nav-link collapsed' href="#" data-toggle="collapse" data-target="#collapse_revenue" aria-controls="collapseTwo">
            <i className="fas fa-coins"></i>
            <span>국세청</span>
          </a>
          <div id="collapse_revenue" className='collapse' aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/Classes/:classId/Tax/National">나라 통계</Link>
              <h6 className="collapse-header">학생</h6>
              <Link className="collapse-item" to="/Classes/:classId/Tax/My">나의 세금</Link>
              <h6 className="collapse-header">선생님</h6>
              <Link className="collapse-item" to="/Classes/:classId/Tax/Setting">세금 설정</Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-chart-line"></i>
            <span>통계청</span>
          </a>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">학생</h6>
              <a className="collapse-item" href="utilities-color.html">T_statistics</a>
              <a className="collapse-item" href="utilities-border.html">Borders</a>
              <a className="collapse-item" href="utilities-animation.html">Animations</a>
              <a className="collapse-item" href="utilities-other.html">Other</a>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          입법부
        </div>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/law">
            <i className="fas fa-balance-scale"></i>
            <span>법률</span></Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
        <Link className="nav-link" to="/charts">
            <i className="fas fa-vote-yea"></i>
            <span>국회</span></Link>
        </li>

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          사법부
        </div>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-gavel"></i>
            <span>벌금</span></a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button onClick={() => { clickMenuOpen() }} className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      </ul>)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickMenuOpen }, dispatch);

const mapStateToProps = store => ({
  toggled: store.menuState.menuOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);