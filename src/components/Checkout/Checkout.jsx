import { Paper, Stepper, Step, StepLabel, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import useStyles from './styles';

const steps =['Shipping address', 'Payment details'];

const Checkout = ({cart}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({}); 
    const classes = useStyles();

    const Form = () => activeStep === 0 ? <AddressForm SubmitNext={SubmitNext} prevStep={prevStep}/> : <PaymentForm formData={formData} cart={cart}/>

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const Confirmation = () => {
        <div>Confirmation</div>
    };

    const SubmitNext = (data) => {
        setFormData(data);
        nextStep();
    }

    return (
        <>
        <div className={classes.toolbar}/> 
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={0} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation/> : <Form/>}
            </Paper>
        </main>
        </>
    )
}

export default Checkout
