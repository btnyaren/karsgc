import SelectInput from "@/app/apply/components/Inputs/SelectInput"
import {SelectHTMLAttributes} from "react"

type GradeInputProps = {
    question: string,
} & SelectHTMLAttributes<HTMLSelectElement>

const options = [
    {label: "Hazırlık", value: "Hazırlık"},
    {label: "9", value: "9"},
    {label: "10", value: "10"},
    {label: "11", value: "11"},
    {label: "12", value: "12"},
    {label: "Üniversite", value: "Üniversite"},
{label: "Mezun", value: "Mezun"},
]

const GradeInput = ({question, ...props}: GradeInputProps) => {
    return (
        <SelectInput
            label={question}
            options={options}
            {...props}
        />
    );
};

export default GradeInput;
