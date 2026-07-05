import React from 'react';
import Link from "next/link";

const UnderDevelopment = () => {
    return (
        <div className="min-h-[100dvh] flex flex-col justify-center items-center">
            <p style={{textWrap: "balance"} as object} className="mx-1 font-semibold text-sm xsm:text-lg mb-3 px-3 text-center">Bu sayfa hala geliştirme aşamasında. Anlayışınız için teşekkürler.</p>
            <Link href="/" className="mx-3 bg-red-800 text-sm xsm:text-base text-white px-4 py-3 rounded-full font-medium">Ana sayfaya dön</Link>
        </div>
    );
};

export default UnderDevelopment;