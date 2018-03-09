import React from 'react';
import InfoPanel from '../Elements/InfoPanel';

let AppDashboardPage = () => (
  <div>  
    <div className="content-top clearfix">
        <h1 className="al-title">Dashboard</h1>
    </div>
    <div className="row pie-charts">
        <div className="pie-chart-item-container">
            <InfoPanel />
        </div>
    </div>
    <div className="panel panel-blur light-text">
        <div className="panel-body">This is dashboard page</div>
    </div>
 </div>   
);

export default AppDashboardPage;