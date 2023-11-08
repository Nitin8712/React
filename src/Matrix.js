import './Assert/Css/style1.css';
import {Activity,User,Contact,Award,Accessibility} from 'lucide-react';
import {Headphones,Battery,Plug,Computer,Pi,Diameter,Plus,Pencil,Pen} from 'lucide-react';
const Matrix= () =>
{
    return(
        <>
            <h1 style={{textAlign:'center'}}>Icon Table</h1>
        <table border={2} style={{justifyContent:'center',alignItems:'center'}}>
            <tr>
                <td><Activity size={80} color='red' strokeWidth={1}/></td>
                <td><User size={80} color='blue' strokeWidth={1}/></td>
                <td><Contact size={80} color='yellow' strokeWidth={1}/></td>
                <td><Award size={80} color='pink' strokeWidth={1}/></td>
            </tr>
            <tr>
                <td><Accessibility size={80} color='violet' strokeWidth={1}/></td>
                <td><Headphones size={80} color='black' strokeWidth={1}/></td>
                <td><Battery size={80} color='orange' strokeWidth={1}/></td>
                <td><Pi size={80} color='green' strokeWidth={1}/></td>
            </tr>
            <tr>
                <td><Plug size={80} color='purple' strokeWidth={1}/></td>
                <td><Computer size={80} color='red' strokeWidth={1}/></td>
                <td><Diameter size={80} color='yellow' strokeWidth={1}/></td>
                <td><Plus size={80} color='pink' strokeWidth={1}/></td>
            </tr>
            <tr>
                <td><Pencil size={80} color='orange' strokeWidth={1}/></td>
                <td><Pen size={80} color='black' strokeWidth={1}/></td>
                <td><Contact size={80} color='violet' strokeWidth={1}/></td>
                <td><Headphones size={80} color='green' strokeWidth={1}/></td>
            </tr>
        </table>
        </>
    )
}
export default Matrix;