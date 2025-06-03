
const TextField = ({ label, name, type = "text", checked, value, onChange, placeholder,required, className = "" }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-sm font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        value={type !== "checkbox" && type !== "radio" ? value : undefined}
        checked={type === "checkbox" || type === "radio" ? checked : undefined}
        onChange={onChange}
        placeholder={placeholder}
        required ={required}
        className={`px-3 py-2 border border-gray-300 rounded ${className}`}
      />
    </div>
  );
};

export default TextField;