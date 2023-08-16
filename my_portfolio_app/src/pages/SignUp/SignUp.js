import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { SignUpContainer } from "../../widgets/SignUpContainer"
import { InputForm } from "./Input"
import { SignUpButton } from "../../features/SignUpButton"
import { name_validation, password_validation } from "./utils"

import "./style.scss"

const SignUp = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit(data => {
    console.log('data====>', data)
  })

  return (
    <SignUpContainer>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <InputForm {...name_validation}/>
          <InputForm {...password_validation}/>
          <SignUpButton type="submit" onClick={onSubmit}/>
        </form>
      </FormProvider>
    </SignUpContainer>
  )
}
export default SignUp;