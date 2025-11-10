"use client";

import Button from "@/app/components/atoms/Button";
import Input from "../molecules/Input";
import Textarea from "../molecules/Textarea";
import { useState } from "react";
import { sendEmail } from "@/services/sendEmail";
import { Toast } from "./Toast";
import AnimatedComponent from "../molecules/AnimatedComponent";

function validateName(name: string) {
  return name.trim().length < 3
    ? "O nome deve ter pelo menos 3 caracteres."
    : "";
}

function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !regex.test(email) ? "Por favor, insira um e-mail válido." : "";
}

// validatePhone("11987654321");         // ✅
// validatePhone("(11) 98765-4321");     // ✅
// validatePhone("+55 (11) 98765-4321"); // ✅
// validatePhone("5511987654321");       // ✅
function validatePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  const regex = /^(?:55)?(?:\d{2})9\d{8}$/;

  if (!regex.test(digits)) {
    return "Por favor, insira um número de telefone brasileiro válido.";
  }

  return "";
}

function validateMessage(message: string) {
  return message.trim().length < 4
    ? "A mensagem deve ter pelo menos 4 caracteres."
    : message.trim().length > 300
    ? "A mensagem deve ter no máximo 300 caracteres."
    : "";
}

export default function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputName = {
    id: "form-name",
    label: "Nome",
    placeholder: "Seu nome",
    required: true,
    value: name,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setName(value);
      setErrors((prev) => ({
        ...prev,
        name: validateName(value),
      }));
    },
  };

  const inputEmail = {
    id: "form-email",
    label: "E-mail",
    placeholder: "Seu e-mail",
    required: true,
    value: email,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value),
      }));
    },
  };

  const inputPhone = {
    id: "form-phone",
    label: "Telefone",
    placeholder: "Ex: (11) 98765-4321 ou 11987654321 ",
    required: true,
    value: phone,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPhone(value);
      setErrors((prev) => ({
        ...prev,
        phone: validatePhone(value),
      }));
    },
  };

  const inputMessage = {
    id: "form-message",
    label: "Mensagem",
    placeholder: "Sua mensagem",
    required: true,
    value: message,
    maxLength: 500,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setMessage(value);
      setErrors((prev) => ({
        ...prev,
        message: validateMessage(value),
      }));
    },
  };

  async function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const messageError = validateMessage(message);

    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
      message: messageError,
    });

    if (nameError || emailError || phoneError || messageError) return;

    setLoading(true);
    try {
      const result = await sendEmail({ name, email, phone, message });

      if (result.success) {
        Toast.success("Got it! We’ll get back to you soon.");

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        Toast.error("Uh-oh! That didn’t work. Try again?");
      }
    } catch (error) {
      Toast.error(
        error instanceof Error
          ? error.message
          : "Unexpected error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="w-full max-w-2xl mx-auto space-y-2 bg-darkTurquoise-100 rounded-lg p-4">
      <div>
        <Input {...inputName} />
        <p
          className={`text-red-400 text-sm mt-1 transition-opacity duration-200 min-h-5 ${
            errors.name ? "opacity-100" : "opacity-0"
          }`}
        >
          {errors.name || ""}
        </p>
      </div>

      <div>
        <Input {...inputEmail} />
        <p
          className={`text-red-400 text-sm mt-1 transition-opacity duration-200 min-h-5 ${
            errors.email ? "opacity-100" : "opacity-0"
          }`}
        >
          {errors.email || ""}
        </p>
      </div>

      <div>
        <Input {...inputPhone} />
        <p
          className={`text-red-400 text-sm mt-1 transition-opacity duration-200 min-h-5 ${
            errors.phone ? "opacity-100" : "opacity-0"
          }`}
        >
          {errors.phone || ""}
        </p>
      </div>

      <div className="relative">
        <div className="absolute flex justify-end items-center mb-2 right-0">
          <AnimatedComponent
            HTMLtag="span"
            className={`text-sm ${
              message.length > inputMessage.maxLength
                ? "text-red-400"
                : "text-gray-black"
            }`}
          >
            {message.length} / {inputMessage.maxLength}
          </AnimatedComponent>
        </div>

        <Textarea {...inputMessage} />

        <p
          className={`text-red-400 text-sm mt-1 transition-opacity duration-200 min-h-5 ${
            errors.message ? "opacity-100" : "opacity-0"
          }`}
        >
          {errors.message || ""}
        </p>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="secondary"
          className="sm:w-42 rounded-lg !w-full"
          onClick={(event) => handleOnClick(event)}
          isLoading={loading}
        >
          Enviar
        </Button>
      </div>
    </form>
  );
}
