import React from "react";
import Button from '@mui/material/Button';
import { users } from '../resources/Users.ts';
import { Container, Grid, Divider, Paper,  Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography} from '@mui/material';
import { NavLink } from "react-router-dom";

function UsersScreen() {
    return(
        <Container maxWidth="xl"> 
            <Grid container spacing={2} marginTop={2}>
                <Grid container>
                    <Grid item lg={3} md={2} sm={1} xs={0}></Grid>
                    <Grid item lg={6} md={8} sm={10} xs={12}>
                        <Typography variant="h4">
                            Lista de empleados:
                        </Typography>
                    </Grid>
                </Grid>
                    <Divider color="black"/>
                <Grid container>
                    <Grid lg={3} md={2} sm={1} xs={0}></Grid>
                    <Grid item lg={6} md={8} sm={10} xs={12}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell align="right">ID</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">Address</TableCell>
                                        <TableCell align="right">Role</TableCell>
                                        <TableCell align="right">Salary</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {users.map(({id, name, address, role, salary}) => (
                                        <TableRow
                                        key={id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="right">{id}</TableCell>
                                        <TableCell component="th" scope="row">
                                            {name}
                                        </TableCell >
                                        <TableCell align="right">{address}</TableCell>
                                        <TableCell align="right">{role}</TableCell>
                                        <TableCell align="right">{salary}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="info">
                                                <NavLink to={`/users/${id}`} className="btn btn-info">Edit</NavLink>
                                            </Button>    
                                        </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default UsersScreen;