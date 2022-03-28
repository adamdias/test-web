import faker from "faker";
import { RequiredFieldValidator } from "../../required-field-validator";

import { ValidatorBuilder as sut } from "../index";

describe("ValidatorBuilder", () => {
  test("Should return RequiredFieldValidation", () => {
    const field = faker.database.column();

    const validations = sut.field(field).required().build();

    expect(validations).toEqual([new RequiredFieldValidator(field)]);
  });

  test("Should return a list of validations", () => {
    const field = faker.database.column();

    const validations = sut.field(field).required().build();

    expect(validations).toEqual([new RequiredFieldValidator(field)]);
  });
});
