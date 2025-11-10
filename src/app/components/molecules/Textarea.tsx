import AnimatedComponent from "./AnimatedComponent";

interface TextareaProps {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
  id,
  label,
  placeholder,
  required,
  value,
  onChange,
}: TextareaProps) {
  return (
    <AnimatedComponent HTMLtag="div">
      <label
        htmlFor={id}
        className="block mb-2 text-base font-medium text-black"
      >
        <span>{label}</span> {required && "*"}
      </label>
      <textarea
        id={id}
        name={id}
        rows={6}
        value={value}
        placeholder={placeholder}
        maxLength={501}
        onChange={onChange}
        className="w-full px-2 py-2 rounded-md bg-white text-black placeholder:text-[var(--color-foreground)]/40 resize-none  custom-scrollbar"
      ></textarea>
    </AnimatedComponent>
  );
}
