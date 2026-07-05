import {SelectHTMLAttributes} from "react";
import SelectInput from "@/app/apply/components/Inputs/SelectInput";

type CommitteeInputProps = {
    question: string
} & SelectHTMLAttributes<HTMLSelectElement>

const options: {label: string, value: string}[] = [
    {label: "Dışişleri", value: "Dışişleri"},
    {label: "İçişleri", value: "İçişleri"},
    {label: "Çevre", value: "Çevre"},
    {label: "Eğitim", value: "Eğitim"},
    {label: "Turizm", value: "Turizm"},
    {label: "Sağlık", value: "Sağlık"},
    {label: "Ekonomi", value: "Ekonomi"},
    {label: "Kriz: 93 Harbi", value: "93 Harbi"},
    {label: "Kriz: Amerikan Bağımsızlık Savaşı", value: "Amerikan Bağımsızlık Savaşı"},
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