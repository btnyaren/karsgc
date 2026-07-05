import Image from "next/image";
import Logo from "@/public/logo-white.webp"

const ApplicationHeader = () => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="relative">
                <Image fill src={Logo} alt="logo" />
                <h1></h1>
            </div>
        </div>
    );
};

export default ApplicationHeader;