import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { SignUpContainer } from "../../widgets/SignUpContainer"
import { InputForm } from "./Input"
import { SignUpButton } from "../../features/SignUpButton"
import { name_validation, password_validation } from "./utils"

const SignUp = () => {
  const methods = useForm();
  const onSubmitEvent = methods.handleSubmit(data => console.log('data', data))

  return (
    <SignUpContainer>
      <FormProvider {...methods} >
        <form onSubmit={e => e.preventDefault()} noValidate autoComplete="off">
          <InputForm {...name_validation} />
          <InputForm {...password_validation} />
          <SignUpButton onClick={onSubmitEvent} />
        </form>
      </FormProvider>
    </SignUpContainer>
  )
}
export default SignUp;