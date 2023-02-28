import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { CardContent } from '@mui/material';


function DialogDetail(props) {
    const [open, setOpen] = React.useState(false);


    React.useEffect(()=>{
        console.log(props)
        if(!props.open){
            setOpen(false)
        }else{
            setOpen(true)
        }
        
       
    },[props.open ||open])

    const handleClose = (e) => {
        e.preventDefault()
        setOpen(false)
    };
    

    return (
        <div>
           
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        //ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                      {
                         props.content != undefined &&
                         props.type !== 'table' ?
                      
                     <List>
                        {
                           
                               
                               props.content.map(content=>{
                                console.log(content)
                                return(
                            <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemIcon>
                            {props.content.length > 1 &&
                             <FiberManualRecordIcon fontSize='small' />
                            }
                          
                         </ListItemIcon>
                         <ListItemText primary={content} />
                       </ListItemButton>
                     </ListItem>
                                )
                               }) 

                        }
                     
                  
                   </List>:
                    <Grid container spacing={8}>
                        <Grid item md={6}>
                           {props.content != undefined && props.content[0].title}
                            <br></br>
                            <List>
                            {props.content != undefined && props.content[0].content.map(value=>(<ListItem disablePadding>
                       <ListItemButton>
                         <ListItemIcon>
                          
                             <FiberManualRecordIcon fontSize='small' />
                          
                          
                         </ListItemIcon>
                         <ListItemText primary={value} />
                       </ListItemButton>
                     </ListItem>))}
                            </List>
                            
                        </Grid>
                        <Grid item md={6}>
                           {props.content != undefined && props.content[1].title}
                           <br></br>
                            <List>
                            {props.content != undefined && props.content[1].content.map(value=>(<ListItem disablePadding>
                       <ListItemButton>
                         <ListItemIcon>
                          
                             <FiberManualRecordIcon fontSize='small' />
                          
                          
                         </ListItemIcon>
                         <ListItemText primary={value} />
                       </ListItemButton>
                     </ListItem>))}
                            </List>
                        </Grid>
                        
                    </Grid>
                      }      
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e)=>handleClose(e)}>Aceptar</Button>
                    
                </DialogActions>
            </Dialog>
        </div>
    );

}

export default DialogDetail