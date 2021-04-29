import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
// import axios from 'axios';

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    button: {
      margin: theme.spacing(2),
      float: 'right',
      padding: '5px 30px 5px 30px'
    },
  }));
  
const BasicTable = () => {
    const classes = useStyles();
    const [user, setuser] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(responseJson => {
         setuser(responseJson)
         console.log(responseJson)
        })
        .catch(error => console.log(error));
      }, 8000);
    },[])

    return (
     <div class="container mx-auto">
       <div class="text-2xl font-serif text-center pt-5">User is on Page 1</div>
       <Button variant="contained" color="secondary" className={classes.button}>
       <Link to='/dawaniris/page2' style={{textDecoration:"none",color:"white"}}>
        Page 2
       </Link>
       </Button>
       <TableContainer component={Paper}>
       <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow class="bg-gray-300">
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">UserName</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone&nbsp;Number</TableCell>
            <TableCell align="center">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.length===0?<div class="text-xl font-serif text-center">Loading...</div>:
          (user.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.website}</TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
     </div>
    )
}

export default BasicTable
