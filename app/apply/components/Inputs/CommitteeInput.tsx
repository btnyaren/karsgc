import {SelectHTMLAttributes} from "react";
import SelectInput from "@/app/apply/components/Inputs/SelectInput";

type CommitteeInputProps = {
    question: string
} & SelectHTMLAttributes<HTMLSelectElement>

const options: {label: string, value: string}[] = [
    {label: "Spor", value: "Spor"},
    {label: "Çevre", value: "Çevre"},
    {label: "Sağlık", value: "Sağlık"},
    {label: "Aile ve Sosyal Güvenlik", value: "Aile ve Sosyal Güvenlik"},
    {label: "Eğitim", value: "Eğitim"},
    {label: "Kriz: Kıbrıs Savaşı", value: "Kriz: Kıbrıs Savaşı"},
]

const CommitteeInput = ({question, ...props}: CommitteeInputProps) => {
    return (
        <SelectInput
            label={question}
            options={options}
            {...props}
        />
    );
};

export default CommitteeInput;