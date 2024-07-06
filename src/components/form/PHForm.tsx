import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

interface IProps {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
}

const PhForm = ({ onSubmit, children }: IProps) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default PhForm