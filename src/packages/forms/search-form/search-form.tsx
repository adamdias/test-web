import React, { useCallback, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { Button } from "@/packages/ui-kit/button";
import { Checkbox } from "@/packages/ui-kit/checkbox";
import { Input } from "@/packages/ui-kit/input";
import { Select } from "@/packages/ui-kit/select";
import { searchFormState } from "./atoms/search-form-state";
import {
  makeSearchFormValidate,
  makeRemoteServiceMake,
  makeRemoteServiceModel,
  makeRemoteServiceVersion,
  makeSearchFormSubmit,
} from "./factories";
import { SearchFormProps } from "./search-form.types";
import { selectKmMock, selectPriceMock, selectYearMock } from "./mocks";

import "./search-form.styles.scss";

const SearchForm = ({
  loadServiceMake,
  loadServiceModel,
  loadServiceVersion,
  loadServiceVehicles,
}: SearchFormProps) => {
  const resetSearchFormState = useResetRecoilState(searchFormState);
  const [state, setState] = useRecoilState(searchFormState);

  const handleValidate = useCallback(
    (field: string, errorIsVisible = false): void =>
      makeSearchFormValidate({ setState, state, field, errorIsVisible }),
    [state]
  );

  const handleLoadServiceMake = useCallback(
    () => makeRemoteServiceMake({ setState, loadServiceMake }),
    []
  );

  const handleLoadServiceModel = useCallback(
    () => makeRemoteServiceModel({ setState, state, loadServiceModel }),
    [state]
  );

  const handleLoadServiceVersion = useCallback(
    () => makeRemoteServiceVersion({ setState, state, loadServiceVersion }),
    [state]
  );

  const handleClearInputLocation = useCallback(() => {
    handleValidate("location", true);
    setState({
      ...state,
      location: { ...state.location, value: "" },
    });
  }, [state]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) =>
      makeSearchFormSubmit({
        event,
        state,
        validate: handleValidate,
        setState,
        loadServiceVehicles,
      }),
    [state]
  );

  useEffect(() => {
    resetSearchFormState();
    handleLoadServiceMake();
  }, []);

  useEffect(() => {
    if (state.make !== undefined) {
      handleLoadServiceModel();
    }
  }, [state.make]);

  useEffect(() => {
    if (state.model !== undefined) {
      handleLoadServiceVersion();
    }
  }, [state.model]);

  useEffect(() => handleValidate("location"), [state.location.value]);
  useEffect(() => handleValidate("km"), [state.km.value]);

  return (
    <form
      className="form-search"
      onSubmit={handleSubmit}
      onReset={() => {
        handleLoadServiceMake();
        resetSearchFormState();
      }}
    >
      <div className="form-search__checkbox mb--1">
        <div className="mr--3">
          <Checkbox
            label="Novos"
            name="newState"
            checked
            state={state}
            setState={setState}
          />
        </div>
        <Checkbox
          label="Usados"
          name="usedState"
          checked
          state={state}
          setState={setState}
        />
      </div>

      <div className="form-search__row mb--1">
        <div className="form-search__double-input form-search__w-50 pr--2">
          <div className="form-search__w-80">
            <Input
              label="Onde:"
              name="location"
              type="text"
              value={state.location.value}
              error={state.location.errorIsVisible && state.location.error}
              leftIcon={{
                name: "location-pin",
                color: "#c41333",
              }}
              rightIcon={{
                name: "close",
                color: "#acacac",
                cursorPointer: true,
                onClick: handleClearInputLocation,
              }}
              onBlur={() => handleValidate("location", true)}
              state={state}
              setState={setState}
              withoutBorderRadiusRight
            />
          </div>

          <div className="form-search__w-20">
            <Select
              label="Raio:"
              name="km"
              error={state.km.error}
              state={state}
              setState={setState}
              defaultValue={25}
              options={selectKmMock}
              withoutBorderRadiusLeft
            />
          </div>
        </div>

        <div className="form-search__w-50">
          <div className="form-search__w-50 pr--2">
            <Select
              label="Marca:"
              name="make"
              state={state}
              loading={state.serviceMake.isLoading}
              disabled={
                state.serviceMake.isLoading ||
                state.serviceMake.results.length <= 0
              }
              setState={setState}
              options={state.serviceMake.results.map(({ Name, ID }) => {
                return { label: Name, value: ID };
              })}
            />
          </div>

          <div className="form-search__w-50">
            <Select
              label="Modelo:"
              name="model"
              state={state}
              setState={setState}
              loading={state.serviceModel.isLoading}
              disabled={
                state.serviceModel.isLoading ||
                state.serviceModel.results.length <= 0
              }
              options={state.serviceModel.results.map(({ Name, ID }) => {
                return { label: Name, value: ID };
              })}
            />
          </div>
        </div>
      </div>

      <div className="form-search__row mb--1">
        <div className="form-search__w-50 pr--2">
          <div className="form-search__w-50 pr--2">
            <Select
              label="Ano:"
              name="year"
              state={state}
              setState={setState}
              defaultValue="all"
              options={selectYearMock}
            />
          </div>

          <div className="form-search__w-50">
            <Select
              label="Preço:"
              name="price"
              state={state}
              setState={setState}
              defaultValue="10000"
              options={selectPriceMock}
            />
          </div>
        </div>
        <div className="form-search__w-50">
          <Select
            label="Versão:"
            name="version"
            state={state}
            setState={setState}
            loading={state.serviceVersion.isLoading}
            disabled={
              state.serviceVersion.isLoading ||
              state.serviceVersion.results.length <= 0
            }
            options={state.serviceVersion.results.map(({ Name, ID }) => {
              return { label: Name, value: ID };
            })}
          />
        </div>
      </div>

      <div className="form-search__row mb--1">
        <div className="form-search__w-50 pt--1 pr--2">
          <span className="font--bold cl--red">{`> Busca avançada`}</span>
        </div>
        <div className="form-search__w-50">
          <div className="form-search__w-50">
            <Button title="Limpar filtros" type="reset" cssType="link" />
          </div>
          <div className="form-search__w-50">
            <Button title="VER OFERTAS" type="submit" cssType="primary" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default React.memo(SearchForm);
