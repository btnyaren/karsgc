
const PanelNavbar = ({active, setActive, secenekler}) => {
    const getTurkishName = (name) => {
        switch (name) {
            case "chair":
                return "Divan Başvuruları";
            case "delegate":
                return "Delege Başvuruları";
            case "press":
                return "Basın Başvuruları";
            case "admin":
                return "Gözlemci Başvuruları";
            default:
                return name;
        }
    };

    return (
        <div className="w-full max-w-5xl px-4 mb-8">
            <div className="flex flex-wrap gap-2 justify-center bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                {secenekler.map(secenek => (
                    <button
                        key={secenek.name}
                        onClick={() => setActive(secenek.name)}
                        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                            active === secenek.name
                                ? "bg-[#500000] text-white shadow-md shadow-red-900/10"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                    >
                        {getTurkishName(secenek.name)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PanelNavbar;
