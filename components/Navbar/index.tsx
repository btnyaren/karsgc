import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.webp";
import NavbarLink from "@/components/Navbar/NavbarLink";

const routes = [
    {name: "Ana Sayfa", path: "/", icon: <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M135-189v-377q0-22.25 9.375-42T172-641l251-189q24.68-19 56.84-19Q512-849 537-830l251 189q18.25 13.25 28.125 33T826-566v377q0 39.75-27.625 66.875T731-95H613q-19.75 0-33.375-13.625T566-142v-217q0-19.75-13.625-33.375T519-406h-78q-19.75 0-33.375 13.625T394-359v217q0 19.75-13.625 33.375T347-95H229q-39.75 0-66.875-27.125T135-189Z"/></svg>},
    {name: "Başvuru", path: "/apply", icon: <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M355-248h251q14.9 0 24.95-10.57Q641-269.14 641-284.07T630.95-309Q620.9-319 606-319H354q-14.9 0-24.95 10.07-10.05 10.07-10.05 25t10.55 25.43Q340.1-248 355-248Zm0-170h251q14.9 0 24.95-10.57Q641-439.14 641-454.07T630.95-479Q620.9-489 606-489H354q-14.9 0-24.95 10.07-10.05 10.07-10.05 25t10.55 25.43Q340.1-418 355-418ZM229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h323q19.311 0 37.156 8Q607-890 620-877l177 177q13 13 21 30.844 8 17.845 8 37.156v483q0 39.05-27.769 66.525Q770.463-55 731-55H229Zm313-617q0 19.75 13.625 33.375T589-625h142L542-811v139Z"/></svg>},
    {name: "Komiteler", path: "/committees", icon: <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M859-314v-238L525-372q-22 12-46 11.5T434-373L95-559q-12-7-18.5-18.025-6.5-11.025-6.5-23T76.5-623Q83-634 95-641l339-185q9.868-6 21.618-9.5Q467.368-839 479-839q11.632 0 23.382 3.5Q514.132-832 525-826l392 212q10.619 5.857 17.81 17.186Q942-585.486 942-572v259q0 17.75-12.175 29.375-12.176 11.625-29 11.625Q883-272 871-284.125T859-314ZM434-134 228-246q-23-13-36-35.25T179-329v-143l255 140q20.655 12 44.828 12Q503-320 525-332l255-140v143q0 25.5-13.5 47.75T731-246L525-134q-10.868 6-22.618 9-11.75 3-23.382 3-11.632 0-23.382-3-11.75-3-21.618-9Z"/></svg>},
]

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 w-full px-4 sm:px-8 py-3 bg-white/95 backdrop-blur-md border-b border-gray-200 flex justify-between items-center z-[99]">
            <Link href="/" className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-100 bg-white">
                    <Image src={Logo} alt="KARSGÇ Logo" fill className="object-contain p-1" />
                </div>
                <span className="font-bold text-lg text-[#500000] tracking-wider hidden xsm:inline-block">KARSGÇ III</span>
            </Link>
            <div className="flex items-center bg-[#F0F0F0] p-1.5 sm:p-2 rounded-full">
                {routes.map(route => (
                    <NavbarLink key={route.path} path={route.path} icon={route.icon}>
                        {route.name}
                    </NavbarLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;