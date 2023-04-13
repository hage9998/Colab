export const genderTranslate = (gender: string): string => {
  switch (gender) {
    case "male":
      return "Masculino";
    case "female":
      return "Feminino";
    default:
      return "";
  }
};

export const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString("pt-br");
