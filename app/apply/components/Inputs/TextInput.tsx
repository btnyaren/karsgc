import {InputHTMLAttributes, ReactNode} from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: ReactNode
}

const TextInput = ({label, name, className, ...props}: TextInputProps) => {
    return (
        <div className="w-fit mx-auto text-left my-5">
            <label className="block" htmlFor={name}>{label}</label>
            <input className={className + " py-2 bg-[rgba(21,21,21,0.395731)] border-solid border-[4px] border-red-900 rounded-[14px] outline-0 disabled:border-gray-500 transition-colors duration-200"} name={name} id={name} {...props} />
        </div>
    );
};

export default TextInput;