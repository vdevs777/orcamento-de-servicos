export enum Ordering {
  NEWER = "newer",
  OLDEST = "oldest",
  HIGHEST_VALUE = "high_value",
  LOWEST_VALUE = "low_value",
}

export function getOrderingLabel(ordering: Ordering): string {
  switch (ordering) {
    case Ordering.NEWER:
      return "Mais recente";

    case Ordering.OLDEST:
      return "Mais antigo";

    case Ordering.HIGHEST_VALUE:
      return "Maior valor";

    case Ordering.LOWEST_VALUE:
      return "Menor valor";

    default:
      return "";
  }
}
