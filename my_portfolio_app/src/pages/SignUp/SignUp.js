import React, { useState } from "react"
import { useForm, useFormState } from 'react-hook-form'
import { useTranslation } from 'react-i18next';
import { SignUpContainer } from "../../widgets/SignUpContainer"
import { SignUpButton } from "../../features/SignUpButton"
import { PasswordInput } from "./PasswordInput"
import { Account } from "./Account"
import { FormInput } from "./form/formInput"
import {Checkbox, FormControlLabel, Box } from "@mui/material";
import { registration } from "../../shared/server/actions/actionUser"


const SignUp = () => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [formInputState, setFormInputState] = useState({ name: '', lastName: '', email: '', password: '', sex: false });
  const { register, handleSubmit, control, reset, pattern } = useForm({mode: "onBlur"});
  const { errors } = useFormState({control}); 

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setFormInputState({...formInputState, name: event.target.value});
        break;
      case 'lastName':
        setFormInputState({...formInputState, lastName: event.target.value});
        break;
      case 'sex':
          setFormInputState({...formInputState, sex: event.target.checked});
        break;
      case 'email':
        setFormInputState({...formInputState, email: event.target.value});
        break;
      case 'password':
        setFormInputState({...formInputState, password: event.target.value});
        break;
    
      default:
        break;
    }
  };

  const onSubmitEvent = (event) => {
    event.preventDefault();
    registration(formInputState)
    reset();
  }


  return (
    <>
      <SignUpContainer>
          <form noValidate autoComplete="off" onSubmit={(e) => onSubmitEvent(e)} >
            <FormInput 
              register={register} 
              value={formInputState}
              setValue={setFormInputState}
              pattern={pattern}
              onChange={(e) => handleInputChange(e)}
            />

            <PasswordInput 
              value={formInputState} 
              setShowPassword={setShowPassword} 
              showPassword={showPassword}
              register={register} 
              onChange={(e) => handleInputChange(e)}
              setValue={setFormInputState}
              />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                fontSize: "22px",
              }}>
                {t('sex')} :
              <FormControlLabel checked={formInputState.sex} onChange={handleInputChange} control={<Checkbox size='small'/>} label={t('male')} />
              <FormControlLabel  checked={formInputState.sex} onChange={handleInputChange} control={<Checkbox size='small'/>} label={t('female')} />
            </Box>
            <SignUpButton setShowPassword={setShowPassword} />
          </form>
      </SignUpContainer>
      <Account />
    </>

  )
}
export default SignUp;