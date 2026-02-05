import z from "zod";

export const moneySchema = z
  .string()
  .min(1, "Informe o valor")
  .transform((value) => {
    const normalized = value
      .replace(/\s/g, "")
      .replace("R$", "")
      .replace(".", "")
      .replace(",", ".");

    return Number(normalized);
  })
  .refine((value) => !isNaN(value), {
    message: "Valor inválido",
  })
  .refine((value) => value > 0, {
    message: "O valor deve ser maior que zero",
  });
