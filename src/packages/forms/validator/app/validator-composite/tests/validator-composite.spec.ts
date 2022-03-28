import faker from "faker";
import { ValidatorComposite } from "../index";
import { FieldValidatorSpy } from "../../../core/tests/field-validator.mocks";

type SutTypes = {
  sut: ValidatorComposite;
  fieldValidatorsSpy: FieldValidatorSpy[];
};

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidatorsSpy = [
    new FieldValidatorSpy(fieldName),
    new FieldValidatorSpy(fieldName),
  ];
  const sut = ValidatorComposite.build(fieldValidatorsSpy);
  return {
    sut,
    fieldValidatorsSpy,
  };
};

describe("ValidatorComposite", () => {
  test("Should return error if any validation fails", () => {
    const fieldName = faker.database.column();
    const { sut, fieldValidatorsSpy } = makeSut(fieldName);
    const errorMessage = faker.random.words();
    fieldValidatorsSpy[0].error = new Error(errorMessage);
    fieldValidatorsSpy[1].error = new Error(faker.random.words());

    const error = sut.validate(fieldName, { [fieldName]: faker.random.word() });

    expect(error).toBe(errorMessage);
  });

  test("Should not return error if any validation pass", () => {
    const fieldName = faker.database.column();
    const { sut } = makeSut(fieldName);

    const error = sut.validate(fieldName, { [fieldName]: faker.random.word() });

    expect(error).toBeFalsy();
  });
});
