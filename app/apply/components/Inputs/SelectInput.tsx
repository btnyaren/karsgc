import {SelectHTMLAttributes, ReactNode} from "react";

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label: ReactNode,
    options: {label: string, value: string}[],
}

const SelectInput = ({label, name, options, className, ...props}: SelectInputProps) => {
    return (
        <div className="mx-auto w-fit text-left my-5">
            <label htmlFor={name}>{label}</label>
            <select className={"text-center py-2 bg-[rgba(21,21,21,0.395731)] border-solid border-[4px] border-red-900 rounded-[14px] outline-0 disabled:border-gray-500 transition-colors duration-200 " + className} name={name} id={name} {...props}>
                <option value="" disabled selected>Seçilmedi</option>
                {options.map(o => (
                    <option className="py-2" key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;