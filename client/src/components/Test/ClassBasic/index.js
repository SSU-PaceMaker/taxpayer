import React, { useEffect, useState } from 'react'
import TableTheme from '../../Table/TableTheme'
import axios from 'axios';


import Sidebar from '../../Navigation/Sidebar'
import Topbar from '../../Navigation/Topbar';
import Footer from '../../Footer'
import PageHeading from '../../PageHeading';
import ScrollToTop from '../../Scroll';



import MaterialTable from 'material-table';
import { editLocal } from '../../Table/SetUp'
import ManageDialog from '../../../pages/Executive/Statistics/SetUp/ManageDialog';
import Error from '../../Error';


import { DataGrid } from '@material-ui/data-grid';


import { withStyles, makeStyles,lighten } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';



import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import PropTypes from 'prop-types';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'right',
      float: 'right',
      position: 'fixed',
      right: 0,
      height:'100%',
      
    },
    paper: {
      
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      padding: theme.spacing(6, 2, 3),
      backgroundColor:'#000000',
      
      
    },

    dataGridTest:{
    
        height: 400, 
        width: '100%'
    }
  }));
  

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { headerName: "숙제이름", field: "name", type: 'string' },
    { headerName: '자세한내용', field: 'detail', type: 'string' },
    { headerName: '최초생성날짜', field: 'date', type: 'date' },
    { headerName: '만료일', field: "expDate", type: 'date' },
 
  ];
  
  
 const test = [
 { id:1 ,name: "일기", detail:'매일일기쓰기',date :null,expDate:null },];
  


const ClassBasic = () => {

    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false)
    const [homeworks, sethomeworks] = useState([])
    const [isError, setIsError] = useState(false);

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    const handleClickOpen = (selectedData) => {
        setSelectedValue(selectedData)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedValue();
    };


    const testHomeworks
        =(homeworks.map((homework) => 
        
        {id=homework._id,name= homework.name, detail=homework.detail,date= homework.expDate,expDate=homework.expDate}
        
        ))  ;
      




    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios.get('/api/classes/:classId/homeworks');
                sethomeworks(result.data.data);
               
   

            } catch (error) {
                setIsError(true);

            }
            setIsLoading(false);

        };

        fetchData();
    }, []);


    return (
        <div>
            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">

                {/* <!-- Sidebar --> */}
                <Sidebar />
                {/* <!-- End of Sidebar --> */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* <!-- Main Content --> */}
                    <div id="content">
                        {/* <!-- Topbar --> */}
                        <Topbar />
                        {/* <!-- End of Topbar --> */}
                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">
                            {/* <!-- Page Heading --> */}
                            <PageHeading title="숙제 관리" />
                            {/* <!-- Content Row --> */}

                            <div className="col">
                                <div className="card shadow mb-4">
                                    {/*columns은 기본으로 줘야할듯 */}
                                    {isError && <Error></Error>}

                                    {isLoading ?
                                        <div>loading</div> : (
                                            <>
                                              
                                                <TableTheme>
                                                    <MaterialTable
                                                        title='숙제등록'
                                                        columns={[{ title: "숙제이름", field: "name", type: 'string' },
                                                        { title: '자세한내용', field: 'detail', type: 'string' },
                                                        { title: '최초생성날짜', field: 'date', type: 'date' },
                                                        { title: '만료일', field: "expDate", type: 'date' },]}
                                                        data={homeworks}

                                                        actions={[
                                                            {
                                                                icon: 'checklist',
                                                                tooltip: 'Save User',
                                                                onClick: (event, rowData) => handleClickOpen(rowData)
                                                            }]}
                                                        options={{
                                                            sorting: true, exportButton: true,
                                                            grouping: true,
                                                        }}
                                                        //editable
                                                        editable={{
                                                            onRowAdd: newData =>
                                                                new Promise((resolve, reject) => {
                                                                    //console.log(newData)
                                                                    setTimeout(() => {
                                                                        sethomeworks([...homeworks, newData]);
                                                                        //console.log('newdata!!!!!!!',newData.type)
                                                                        axios.post('/api/classes/:classId/homeworks', newData)
                                                                            .then(function (response) {
                                                                                console.log(response);
                                                                            })
                                                                            .catch(function (error) {
                                                                                console.log(error);
                                                                            });
                                                                        resolve();
                                                                    }, 1000)
                                                                }),
                                                          
                                                            onRowUpdate: (newData, oldData) =>
                                                                new Promise((resolve, reject) => {
                                                                    //console.log(newData,oldData)
                                                                    setTimeout(() => {
                                                                        const dataUpdate = [...homeworks];
                                                                        const index = oldData.tableData.id;
                                                                        dataUpdate[index] = newData;
                                                                        sethomeworks([...dataUpdate]);
                                                                        console.log('새로운 데이터', newData)
                                                                        axios.put('/api/classes/:classId/homeworks', newData)
                                                                            .then(function (response) {
                                                                                console.log(response);
                                                                            })
                                                                            .catch(function (error) {
                                                                                console.log(error);
                                                                            });
                                                                        resolve();
                                                                    }, 1000)
                                                                }),
                                                            onRowDelete: oldData =>
                                                                new Promise((resolve, reject) => {
                                                                    setTimeout(() => {
                                                                        //이 부분에 함수를 만들자!
                                                                        const dataDelete = [...homeworks];
                                                                        const index = oldData.tableData.id;
                                                                        dataDelete.splice(index, 1);
                                                                        sethomeworks([...dataDelete]);

                                                                        axios.delete('/api/classes/:classId/homeworks', { data: oldData })
                                                                            .then(function (response) {
                                                                                console.log(response);
                                                                            })
                                                                            .catch(function (error) {
                                                                                console.log(error);
                                                                            });
                                                                        resolve();
                                                                    }, 1000)
                                                                }),
                                                        }}
                                                        localization={editLocal}
                                                    ></MaterialTable>
                                                </TableTheme>
                                                {selectedValue &&
                                                    <ManageDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
                                                }
                                            </>)}
                                </div>


<div className="card shadow mb-4">

<div className={classes.dataGridTest}>
{isLoading && console.log("homework",homeworks)}

    

      <DataGrid
        rows={testHomeworks}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        autoPageSize	
      />
    </div>


</div>




                            </div>
                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <Footer></Footer>
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}

            {/* <!-- Scroll to Top Button--> */}
            <ScrollToTop />
        </div>

    )
}

export default ClassBasic
