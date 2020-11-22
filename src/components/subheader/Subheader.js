
import { AiOutlineClose } from "react-icons/ai";
import Grid from '@material-ui/core/Grid';

import { GiPaperPlane } from "react-icons/gi";
const Subheader = () => {
  
  return (
    <div>




      <Grid container style={{
        background: '#145082',
        color: 'white'}} >
        <Grid item xs={10} style={{ textAlign: 'start', fontSize: '22px' }}>
          <p style={{ paddingLeft: '58px',
    fontSize: '17px'}}> ALL CATEGORIES  &nbsp;&nbsp;&nbsp;&nbsp;SEARCH VENDORS</p>
      

        </Grid>
        <Grid item xs={2}>
          <p style={{
            background: '#cccfcd',
            color: '#145082',
            width: '60%',
            fontWeight: 'bold',
            borderRadius: '15px'
          }}> <GiPaperPlane/> LOCATE ME</p>
        </Grid>

      </Grid>







    </div>
  );
};


export default Subheader;
