import React, { ReactNode, TextareaHTMLAttributes } from 'react';

type TextareaInputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: ReactNode
}

const TextareaInput = ({label, name, className, ...props}: TextareaInputProps) => {
    return (
        <div className="text-left mx-auto w-fit my-5">
            <label htmlFor={name}>{label}</label>
            <textarea className={"aspect-[16/9] resize-none text-center py-2 bg-[rgba(21,21,21,0.395731)] border-solid border-[4px] border-red-900 rounded-[14px] outline-0 disabled:border-gray-500 transition-colors duration-200 " + className} name={name} id={name} {...props}></textarea>
        </div>
    );
};

export default TextareaInput;