import React from 'react';
import { Textfield, Grid, TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Controller as={TextField} control={control} fullWidth name={name} label={label} required/>           
        </Grid>
    );
};

export default FormInput;