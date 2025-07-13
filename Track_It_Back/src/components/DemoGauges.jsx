import { Gauge } from '@mui/x-charts/Gauge';


export default function Gauges(props){

    return(
        <div className='flex justify-around'>
            <div className='flex flex-col justify-center items-center'>
                <div id='GaugeWrapper'>
                    <Gauge
                        value={props.valueOne}
                        startAngle={-90}
                        endAngle={90}
                        innerRadius="80%"
                        outerRadius="100%"
                        width={300}
                    />
                </div>
                <h2>Dopamine Overload Score</h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div id='GaugeWrapper'>
                    <Gauge
                        value={props.valueTwo}
                        startAngle={-90}
                        endAngle={90}
                        innerRadius="80%"
                        outerRadius="100%"
                        width={300}
                    />
                </div>
                <h2>Healthy Dopamine Score</h2>
            </div>
        </div>
    )
}