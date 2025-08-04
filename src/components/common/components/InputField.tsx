import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import type { InputFieldProps } from "../../login/types/LoginTypes";

export  const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    value,
    onChange,
    placeholder,
    icon,
    error,
    showToggle,
    onToggle,
    isToggled,
    verified,
    focusColor
  }) => {
    return (
      <div>
        <label className="block text-gray-700 font-medium text-sm mb-2">
          {label}
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
            {icon}
          </span>
          <input
            type={showToggle && isToggled ? 'text' : type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full pl-12 ${showToggle ? 'pr-12' : verified ? 'pr-12' : 'pr-4'} py-3 border rounded-lg ${focusColor} outline-none transition-all duration-200 ${
              error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
          />
          {showToggle && (
            <button
              type="button"
              onClick={onToggle}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
                
              {isToggled ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </button>
          )}
          {verified && (
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-lg">
              ✅
            </span>
          )}
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-1 animate-bounce">
            {error}
          </p>
        )}
      </div>
    );
  };