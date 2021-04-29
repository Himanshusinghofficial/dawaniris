import React,{useState,useEffect} from 'react';
import { Chart } from "react-google-charts";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(2),
      float: 'right',
      padding: '5px 30px 5px 30px'
    },
    chart: {
      marginTop: theme.spacing(8)
    }

  }));

const Pie = () => {
    const classes = useStyles();
    const [display, setdisplay] = useState(true);

    useEffect(() => {
      setTimeout(() => {
         setdisplay(false)
      }, 8000);
    }, [])

    return (
     <div class="container mx-auto">
       <div class="text-2xl font-serif text-center pt-5">User is on Page 2</div>
       <Button variant="contained" color="secondary"  className={classes.button}>
       <Link to='/dawaniris/' style={{textDecoration:"none",color:"white"}} >
        Page 1
       </Link>
       </Button>
       {display?<div class="text-xl font-serif transform translate-y-20">Loading...</div>:
       <Chart
        width={'auto'}
        height={'500px'}
        chartType="PieChart"
        loader={
          <div class="text-xl font-serif"></div>
        }
        data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
        ]}
        options={{
            title: 'Daily Activities',
            is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
        className={classes.chart}
        />
      }
     </div>
    )
}

export default Pie
