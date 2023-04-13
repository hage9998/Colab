import { genderTranslate } from "../../../utils";

describe("Translate gender from english to portuguese", () => {
  test("translate to Masculino when input is male", () => {
    const userGender = "male";
    const expectedResult = "Masculino";
    const translatedGender = genderTranslate(userGender);

    expect(translatedGender).toBe(expectedResult);
  });
  test("translate to Feminino when input is female", () => {
    const userGender = "female";
    const expectedResult = "Feminino";
    const translatedGender = genderTranslate(userGender);

    expect(translatedGender).toBe(expectedResult);
  });
  test("Return empty string when gender does not match", () => {
    const userGender = "random";
    const expectedResult = "";
    const translatedGender = genderTranslate(userGender);

    expect(translatedGender).toBe(expectedResult);
  });
});
