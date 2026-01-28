import { colors } from "@/theme/colors";

export enum Status {
  SENT = "sent",
  DRAFT = "draft",
  APPROVED = "approved",
  REJECTED = "rejected",
}

export const STATUS_CONFIG: Record<
  Status,
  {
    label: string;
    background: string;
    foreground: string;
  }
> = {
  [Status.SENT]: {
    label: "Enviado",
    background: colors.info.light,
    foreground: colors.info.dark,
  },
  [Status.DRAFT]: {
    label: "Rascunho",
    background: colors.gray[200],
    foreground: colors.gray[500],
  },
  [Status.APPROVED]: {
    label: "Aprovado",
    background: colors.success.light,
    foreground: colors.success.dark,
  },
  [Status.REJECTED]: {
    label: "Recusado",
    background: colors.danger.light,
    foreground: colors.danger.dark,
  },
};
