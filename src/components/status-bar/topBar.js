import { AiOutlineClose } from "react-icons/ai";
import Grid from '@material-ui/core/Grid';
const TopBar = () => {
    return (
        <div>



            <Grid container >
                <Grid item xs={10} style={{ textAlign: 'end',   fontSize: '22px'}}>
                    <p> Shop From <font style={{ fontWeight: 'bold' }}>Your Local neighborhood Stores</font> / "Free Delivery Above 99 Rs."
            <font style={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'help' }}> SHOP NOW</font>

                    </p>

                </Grid>
                <Grid item xs={2}> 
                 <AiOutlineClose style={{marginTop:'29px'}} />
                 </Grid>

            </Grid>





          
            
        </div>
    );
};

export default TopBar;
