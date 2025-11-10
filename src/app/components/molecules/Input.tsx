import AnimatedComponent from "./AnimatedComponent";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  label,
  placeholder,
  required,
  value,
  onChange,
}: InputProps) {
  return (
    <AnimatedComponent HTMLtag="div">
      <label
        htmlFor={id}
        className="block mb-2 text-base font-medium text-black"
      >
        <span>{label}</span> {required && "*"}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-2 py-2 rounded-md bg-white text-black placeholder:text-[var(--color-foreground)]/40 focus:outline-none"
      />
    </AnimatedComponent>
  );
}
