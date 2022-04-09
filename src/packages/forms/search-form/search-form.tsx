import React, { useCallback, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { Checkbox } from "@/packages/ui-kit/checkbox";
import { Input } from "@/packages/ui-kit/input";
import { Select } from "@/packages/ui-kit/select";

import { Button } from "@/packages/ui-kit/button";
import { searchFormState } from "./search-form.states";
import { makeSearchFormValidator } from "./search-form.factories";

import "./search-form.styles.scss";
import { SearchFormProps } from "./search-form.types";

const SearchForm = ({
  loadServiceMake,
  loadServiceModel,
  loadServiceVersion,
  loadServiceVehicles,
}: SearchFormProps) => {
  const validator = makeSearchFormValidator();
  const resetSearchFormState = useResetRecoilState(searchFormState);
  const [state, setState] = useRecoilState(searchFormState);

  const validate = useCallback(
    (field: string, onSubmit = false): void => {
      const { location, km } = state;
      const formData = { location, km };

      const fieldError = validator.validate(field, formData);

      setState(old => ({
        ...old,
        [`${field}Error`]: onSubmit
          ? fieldError
          : state[field] !== undefined
          ? fieldError
          : undefined,
        [`${field}ErrorOnLoad`]: fieldError,
      }));

      setState(old => ({
        ...old,
        isFormInvalid: !!old.locationErrorOnLoad || !!old.kmErrorOnLoad,
      }));
    },
    [state]
  );

  const handleLoadServiceMake = useCallback(async () => {
    try {
      setState(old => ({
        ...old,
        serviceMake: {
          isLoading: true,
          results: [],
        },
      }));

      const results = await loadServiceMake.loadAll();

      setState(old => ({
        ...old,
        serviceMake: {
          isLoading: false,
          results,
        },
        make: String(results[0].ID),
      }));
    } catch (err) {
      setState(old => ({
        ...old,
        serviceMake: {
          ...old.serviceMake,
          isLoading: false,
        },
      }));
    }
  }, []);

  const handleLoadServiceModel = useCallback(async () => {
    try {
      setState(old => ({
        ...old,
        serviceModel: {
          isLoading: true,
          results: [],
        },
      }));

      const results = await loadServiceModel.loadAll({
        MakeID: Number(state.make),
      });

      setState(old => ({
        ...old,
        serviceModel: {
          isLoading: false,
          results,
        },
        model: String(results[0].ID),
      }));
    } catch (err) {
      setState(old => ({
        ...old,
        serviceModel: {
          ...old.serviceModel,
          isLoading: false,
        },
      }));
    }
  }, [state.make]);

  const handleLoadServiceVersion = useCallback(async () => {
    try {
      setState(old => ({
        ...old,
        serviceVersion: {
          isLoading: true,
          results: [],
        },
      }));

      const results = await loadServiceVersion.loadAll({
        ModelID: Number(state.model),
      });

      setState(old => ({
        ...old,
        serviceVersion: {
          isLoading: false,
          results,
        },
        version: String(results[0].ID),
      }));
    } catch (err) {
      setState(old => ({
        ...old,
        serviceVersion: {
          ...old.serviceVersion,
          isLoading: false,
        },
        version: undefined,
      }));
    }
  }, [state.model]);

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

  useEffect(() => validate("location"), [state.location]);
  useEffect(() => validate("km"), [state.km]);

  const handleSubmit = useCallback(
    async event => {
      try {
        event.preventDefault();

        validate("location", true);
        validate("km", true);

        if (state.isFormInvalid) {
          return;
        }

        setState(old => ({
          ...old,
          serviceVehicles: {
            isLoading: true,
            results: [],
          },
        }));

        const results = await loadServiceVehicles.loadAll({ Page: 1 });

        setState(old => ({
          ...old,
          serviceVehicles: {
            isLoading: false,
            results,
          },
        }));
      } catch (err) {
        setState(old => ({
          ...old,
          mainError: "Aconteceu um erro inesperado, tente novamente mais tarde",
        }));
      }
    },
    [state]
  );

  return (
    <form
      className="form-search"
      onSubmit={event => {
        handleSubmit(event);
      }}
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
            state={state}
            setState={setState}
          />
        </div>
        <Checkbox
          label="Usados"
          name="usedState"
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
              error={state.locationError}
              leftIcon={{
                name: "location-pin",
                color: "#c41333",
              }}
              rightIcon={{
                name: "close",
                color: "#acacac",
              }}
              state={state}
              setState={setState}
            />
          </div>

          <div className="form-search__w-20">
            <Select
              label="Raio:"
              name="km"
              error={state.kmError}
              state={state}
              setState={setState}
              defaultValue={25}
              options={[
                {
                  label: "10km",
                  value: 10,
                },
                {
                  label: "25km",
                  value: 25,
                },
                {
                  label: "50km",
                  value: 50,
                },
                {
                  label: "100km",
                  value: 100,
                },
              ]}
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
              disabled={state.serviceMake.results.length <= 0}
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
              disabled={state.serviceModel.results.length <= 0}
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
              options={[
                {
                  label: "Todos",
                  value: "all",
                },
                {
                  label: "2010",
                  value: 2010,
                },
                {
                  label: "2011",
                  value: 2011,
                },
                {
                  label: "2012",
                  value: 2012,
                },
                {
                  label: "2013",
                  value: 2013,
                },
              ]}
            />
          </div>

          <div className="form-search__w-50">
            <Select
              label="Preço:"
              name="price"
              state={state}
              setState={setState}
              defaultValue="10000"
              options={[
                {
                  label: "R$0,00 até R$5.000,00",
                  value: 5000,
                },
                {
                  label: "R$5.000,00 até R$10.000,00",
                  value: 10000,
                },
                {
                  label: "R$10.000,00 até R$25.000,00",
                  value: 25000,
                },
                {
                  label: "R$25.000,00+",
                  value: 300000,
                },
              ]}
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
            disabled={state.serviceVersion.results.length <= 0}
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
