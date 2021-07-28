import React, { useState } from 'react'
import './Form.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton';
import AttachFile from '@material-ui/icons/AttachFile';
import { useStateValue } from './StateProvider';
import { SET_CATEGORY, SET_DESCRIPTION, SET_IMPACT, SET_PRIORITY, SET_SUBCATEGORY, SET_SUBMIT, SET_URGENCY } from './reducer';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  input: {
    display: 'none',
  },
}));

const Form = () => {
    const classes = useStyles();
    const [_category, setCategory] = useState('')
    const [_subCategory, setSubCategory] = useState('')
    const [_urgency, setUrgency] = useState('')
    const [_impact, setImpact] = useState('')
    const [_priority, setPriority] = useState('')
    const [_description, setDescription] = useState('')

    const [{ category }, dispatch] = useStateValue()

    console.log(category)

    const handleClear = () => {
        setCategory('')
        setSubCategory('')
        setImpact('')
        setUrgency('')
        setPriority('')
        setDescription('')

        dispatch({
            type : SET_SUBMIT,
            submit : false
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // dispatch actions here
        dispatch({
            type : SET_CATEGORY,
            category : _category 
        })

        dispatch({
            type : SET_SUBCATEGORY,
            subCategory : _subCategory
        })

        dispatch({
            type : SET_URGENCY,
            urgency : _urgency
        })

        dispatch({
            type : SET_IMPACT,
            impact : _impact
        })

        dispatch({
            type : SET_PRIORITY,
            priority : _priority
        })

        dispatch({
            type : SET_DESCRIPTION,
            description : _description
        })

        if (_category === '' || _impact === '' || _subCategory === '' || _urgency === '' || _priority === '') {
            alert('Plz fill the form')
        } else {
            dispatch({
                type : SET_SUBMIT,
                submit : true
    
            })
        }
    }

    return (
        <form className='form' autoComplete="off" onSubmit={e => handleSubmit(e)}>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="">Category</InputLabel>
                <Select
                labelId=""
                id=""
                value={_category}
                onChange={e => setCategory(e.target.value)}
                label="Category"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='C1'>C1</MenuItem>
                    <MenuItem value='C2'>C2</MenuItem>
                    <MenuItem value='C3'>C3</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="">Subcategory</InputLabel>
                <Select
                labelId=""
                id=""
                value={_subCategory}
                onChange={e => setSubCategory(e.target.value)}
                label="Subcategory"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='S1'>S1</MenuItem>
                    <MenuItem value='S2'>S2</MenuItem>
                    <MenuItem value='S3'>S3</MenuItem>
                    <MenuItem value='S4'>S4</MenuItem>
                </Select>
            </FormControl>
            
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="">Urgency</InputLabel>
                <Select
                labelId=""
                id=""
                value={_urgency}
                onChange={e => setUrgency(e.target.value)}
                label="Urgency"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='High'>High</MenuItem>
                    <MenuItem value='Medium'>Medium</MenuItem>
                    <MenuItem value='Low'>Low</MenuItem>
                </Select>
            </FormControl>

            <br />

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="">Impact</InputLabel>
                <Select
                labelId=""
                id=""
                value={_impact}
                onChange={e => setImpact(e.target.value)}
                label="Impact"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='High'>High</MenuItem>
                    <MenuItem value='Medium'>Medium</MenuItem>
                    <MenuItem value='Low'>Low</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="">Priority</InputLabel>
                <Select
                labelId=""
                id=""
                value={_priority}
                onChange={e => setPriority(e.target.value)}
                label="Priority"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='P1'>P1</MenuItem>
                    <MenuItem value='P2'>P2</MenuItem>
                    <MenuItem value='P3'>P3</MenuItem>
                    <MenuItem value='P4'>P4</MenuItem>
                </Select>
            </FormControl>

            <br />
            
            <TextField 
            id="outlined-basic" 
            label="Description" 
            className='form__textField' 
            variant="outlined"
            value={_description}
            onChange={e => setDescription(e.target.value)}
            />

            <br />

            <div className='form__submit' >

            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> 
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <AttachFile />
                </IconButton>
            </label>

            <Button variant="outlined" color="primary" type='submit'>
                Submit
            </Button>

            <Button variant="outlined" color="primary" onClick={handleClear} >
                CLEAR
            </Button>

            </div>

            <br />
        </form>
    )
}

export default Form
