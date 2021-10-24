import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';

const AddressForm = ({SubmitNext, prevStep}) => {
    const methods = useForm();
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => SubmitNext(data)) }>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label='First name'/>
                        <FormInput required name="lastName" label='Last name'/>
                        <FormInput required name="email" label='Email'/>
                        <FormInput required name="address1" label='Address'/>
                        <FormInput required name="postalCode" label='Postal code'/>
                        <FormInput required name="phoneNumber" label='Phone number'/>
                    </Grid>
                    <br/>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button onClick={prevStep}variant='outlined'>Back to Cart</Button>
                        <Button type='submit'variant='outlined'>Next</Button>
                    </div>
                </form>
            </FormProvider>            
        </>
    )
}

export default AddressForm
