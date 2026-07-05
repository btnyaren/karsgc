const komiteler = [
    {label: "Spor", value: "Spor"},
    {label: "Çevre", value: "Çevre"},
    {label: "Sağlık", value: "Sağlık"},
    {label: "Aile ve Sosyal Güvenlik", value: "Aile ve Sosyal Güvenlik"},
    {label: "Eğitim", value: "Eğitim"},
    {label: "Kriz: Kıbrıs Savaşı", value: "Kriz: Kıbrıs Savaşı"},
]

const CommitteeSelection = ({ values }) => {

    const {setKomite, disabled} = values

    return (
        <select disabled={disabled} onChange={(e) => setKomite(e.target.value)} className="text-black bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#500000] focus:ring-1 focus:ring-[#500000] transition-all disabled:bg-gray-100 disabled:text-gray-400 w-full min-w-[150px]">
            <option value="Seçilmedi">Seçilmedi</option>
            {komiteler.map(komite => (
                <option key={komite.value} value={komite.value}>
                    {komite.value}
                </option>
            ))}
        </select>
    )
}

export default CommitteeSelection;
