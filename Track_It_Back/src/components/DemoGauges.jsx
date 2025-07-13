import { Gauge } from '@mui/x-charts/Gauge';


export default function Gauges(props){

    return(
        <div className='flex justify-around mt-12'>
            <div className='flex flex-col justify-center items-center'>
                <Gauge
                value={props.valueOne}
                startAngle={-90}
                endAngle={90}
                innerRadius="80%"
                outerRadius="100%"
                width={500}
                />
                <h2 className='mt-4 text-lg'>Dopamine Overload Score</h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <Gauge
                        value={props.valueTwo}
                        startAngle={-90}
                        endAngle={90}
                        innerRadius="80%"
                        outerRadius="100%"
                        width={500}
                    />
                </div>
                <h2 className='mt-4 text-lg'>Healthy Dopamine Score</h2>
            </div>
        </div>
    )
}