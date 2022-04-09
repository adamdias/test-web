import { makeRemoteServiceMake } from "@/packages/api-online-challenge/service-make";
import { makeRemoteServiceModel } from "@/packages/api-online-challenge/service-model";
import { makeRemoteServiceVehicles } from "@/packages/api-online-challenge/service-vehicles";
import { makeRemoteServiceVersion } from "@/packages/api-online-challenge/service-version";
import { SearchForm, searchFormState } from "@/packages/forms/search-form";
import { CarItem } from "@/packages/ui-kit/car-item";
import { Tab } from "@/packages/ui-kit/tab";
import React from "react";
import { useRecoilState } from "recoil";
import logoBase64 from "./logo-base64";

import "./app.styles.scss";

const App: React.FC = () => {
  const [state] = useRecoilState(searchFormState);

  return (
    <>
      <div className="py--3 px--3">
        <img src={logoBase64} />
      </div>
      <div className="py--3 px--3">
        <Tab
          options={[
            {
              title: "COMPRAR",
              subtitle: "CARROS",
              icon: {
                name: "car",
                color: "#c41333",
              },
              active: true,
              onClick: () => console.log("click tab"),
            },
            {
              title: "COMPRAR",
              subtitle: "MOTOS",
              icon: {
                name: "car",
                color: "#c41333",
              },
              active: false,
              onClick: () => console.log("click tab"),
            },
          ]}
        />
        <div className="py--3 px--3 bg--white">
          <SearchForm
            loadServiceMake={makeRemoteServiceMake(process.env.API_URL)}
            loadServiceModel={makeRemoteServiceModel(process.env.API_URL)}
            loadServiceVersion={makeRemoteServiceVersion(process.env.API_URL)}
            loadServiceVehicles={makeRemoteServiceVehicles(process.env.API_URL)}
          />
        </div>
      </div>

      <div
        className="py--3 px--3"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {state.serviceVehicles.isLoading && (
          <p className="animate--pulse">Carregando...</p>
        )}

        {!state.serviceVehicles.isLoading &&
          state.serviceVehicles.results.map(vehicle => (
            <div key={vehicle.ID} className="app__car-list-box">
              <CarItem
                model={`${vehicle.Make} ${vehicle.Model}`}
                imageUrl={vehicle.Image}
                color={vehicle.Color}
                km={vehicle.KM}
                price={Number(vehicle.Price.replace(",", "."))}
                version={vehicle.Version}
                yearFab={vehicle.YearFab}
                yearModel={vehicle.YearModel}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
