import React from "react";
import ReactDOM from 'react-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { users } from '../resources/Users.ts';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Grid, Divider, Paper,  Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography} from '@mui/material';
import { NavLink, useParams, useSearchParams } from "react-router-dom";



function EditUser() {

    const {id} = useParams();
    const user = users.find(user => user.id.toString() === id);

    if(!user){
        return (
            <div className="container">
                <h1>User not found</h1>
            </div>
        );
    }

    const { name, role, address, salary } = user;
    return(

        <Container maxWidth="xl"> 
        <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12} md={12}>
                <Typography variant="h4">
                    Seleccione los nuevos datos para empleado #{id}, nombre: {name}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <h4>Introduzca Id, Actual:({id})</h4>
                <TextField id="ids" label="id" variant="outlined"/>
            </Grid>
            <Grid item xs={4}>
                <h4>Introduzca Nombre, Actual:({name})</h4>
                <TextField id="name" label="name" variant="outlined"/>
            </Grid>
            <Grid item xs={4}>
                <h4>Introduzca Rol, Actual:({role})</h4>
                <TextField id="role" label="role" variant="outlined"/>
            </Grid>
            <Grid item xs={4}>
                <h4>Introduzca Dirección, Actual:({address})</h4>
                <TextField id="address" label="address" variant="outlined"/>
            </Grid>
            <Grid item xs={4}>
                <h4>Introduzca Salario, Actual:({salary}):</h4>
                <TextField id="salary" label="salary" variant="outlined"/>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="info">
                    <NavLink to={`/`} className='btn btn-success' >Aceptar</NavLink>
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" color="error">
                    <NavLink to={ '/users'} className="btn btn-danger">Regresar</NavLink>
                </Button> 
            </Grid>
        </Grid>
        </Container>
    )
}
export default EditUser