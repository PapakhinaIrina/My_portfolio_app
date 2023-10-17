import React, { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { SignUpContainer } from "../../widgets/SignUpContainer"
import { InputForm } from "./Input"
import { SignUpButton } from "../../features/SignUpButton"
import { user_name_validation, login_name_validation } from "./utils"
import { PasswordInput } from "./PasswordInput"
import { Account } from "./Account"

const SignUp = () => {
  const methods = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitEvent = methods.handleSubmit(data => console.log('data', data))

  return (
    <>
      <SignUpContainer>
        <FormProvider {...methods} >
          <form onSubmit={e => e.preventDefault()} noValidate autoComplete="off">
            <InputForm {...login_name_validation} />
            <InputForm {...user_name_validation} />
            <PasswordInput setShowPassword={setShowPassword} showPassword={showPassword}/>
            <SignUpButton onClick={onSubmitEvent} />
          </form>
        </FormProvider>
      </SignUpContainer>
      <Account />
    </>

  )
}
export default SignUp;