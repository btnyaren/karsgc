const AuthSent = () => {
    return (
        <div className="flex flex-col items-center bg-[rgba(21,21,21,0.395731)] backdrop-blur-[10px] px-5 py-7 rounded-[15px]">
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="m734-140-66-66 56-57H567v-94h157l-56-57 66-66 170 170-170 170ZM157-263q-38.75 0-66.375-27.625T63-357v-406q0-38.75 27.625-66.375T157-857h526q38.75 0 66.375 27.625T777-763v201q-11.5-3-23.5-4t-23.5-1q-12 0-23.5 1.5T683-562v-138L416-511 157-699v342h320q-3 14-3.5 23.5t-.5 20.75q0 11.25 1 24t4 25.75H157Zm72-500 187 136 191-136H229Zm-72 406v-406 406Z"/></svg>
            <p className="max-w-[400px] text-base sm:text-lg font-medium mt-3 text-center">Doğrulama linki email adresinize gönderildi! Linke tıklayarak oturum açabilir ve başvuru yapabilirsiniz.</p>
        </div>
    );
};

export default AuthSent;