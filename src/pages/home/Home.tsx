import BarChartBox from '../../components/barChartBox/barCahrtBox';
import ChartBox from '../../components/chartBox/ChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import TopBox from '../../components/topBox/TopBox';
import { barChartBoxRevenue, barChartBoxVisit } from '../../data';
import './home.scss';
const Home = () => {
    return ( 
    <div className="home">
        <div className="box box1">
            <TopBox/>
        </div>
        <div className="box box2"><ChartBox/></div>
        <div className="box box3"><ChartBox/></div>
        <div className="box box4"><PieChartBox/></div>
        <div className="box box5"><ChartBox/></div>
        <div className="box box6">Box6</div>
        <div className="box box7">Box7</div>
        <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
        <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div> 
    );
};

export default Home;