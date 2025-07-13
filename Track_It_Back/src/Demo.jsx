import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Gauges from "./components/DemoGauges"


export default function Demo(){
    return(
    <>
        <main>
            <Gauges valueOne = {0} valueTwo = {0}/>
        </main>
        <Footer />
    </>
    )
}