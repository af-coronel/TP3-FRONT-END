const FiltroSelect = ({ label, opciones, value, onChange }) => {
  return (
    <select
      className="filtro-select-json"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{label}</option>
      {opciones.map((op) => (
        <option key={op} value={op}>{op}</option>
      ))}
    </select>
  );
};

export default FiltroSelect;
