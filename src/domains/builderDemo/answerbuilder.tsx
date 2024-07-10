import {
  Button,
  ButtonGroup,
  Content,
  ErrorSummary,
  Header,
  TextInput,
} from "@pa-digital/govuk-frontend-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IOptionsForm, optionSchema } from "./IQuestion";

export interface IAnswerBuilderProps {
  onSave?: (options: string[]) => void;
}

const AnswerBuilder = ({ onSave }: IAnswerBuilderProps) => {
  const [options, setOptions] = useState<string[]>([]);
  const {
    formState: { errors },
    control,
    setValue,
    handleSubmit,
  } = useForm<IOptionsForm>({
    resolver: yupResolver(optionSchema),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      option: "",
    },
  });

  const handleSave = () => {
    if (onSave) {
      onSave(options);
    }
  };

  const handleClear = () => {
    setOptions([]);
  };

  const onSubmit = (formData: IOptionsForm) => {
    const currentOptions = options;
    currentOptions.push(formData.option);
    setOptions(currentOptions);
    setValue("option", "");
    return false;
  };

  useEffect(() => {}, [options]);

  return (
    <>
      <Header as="h2">Answer options</Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <ErrorSummary identifier="error-summary" errors={errors} />
          <Controller
            control={control}
            name="option"
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <TextInput
                identifier="option"
                label="Option"
                error={error?.message}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Button type="submit" variant="secondary">
            Add
          </Button>
        </>
      </form>
      {options.length > 0 ? (
        <>
          <ul>
            {options.map((option, index) => {
              return (
                <li key={index}>
                  <Content>{option}</Content>
                </li>
              );
            })}
          </ul>
          <ButtonGroup>
            <Button onClick={() => handleSave()}>Save</Button>
            <Button onClick={() => handleClear()} variant="secondary">
              Clear
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default AnswerBuilder;
