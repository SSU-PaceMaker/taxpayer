import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div id="content">
                <div className="container-fluid">
                    {/* <!-- 404 Error Text --> */}
                    <div className="text-center">
                        <div className="error mx-auto" data-text="404">404</div>
                        <p className="lead text-gray-800 mb-5">Page Not Found</p>
                        <p className="text-gray-500 mb-0">잘못된 경로를 탐색하였습니다...</p>
                        <Link to="/">&larr; 메인으로 돌아가기</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NotFound);