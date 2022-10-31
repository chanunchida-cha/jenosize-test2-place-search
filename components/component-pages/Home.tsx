import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../stores/store";
import { Place } from "../../models/interfaces/place";
import { searchStore } from "../../stores/searchStore";

const Home = observer(() => {
  useEffect(() => {
    const getApi = async () => {
      await store.getApiPlace();
    };
    getApi();
  }, []);
  console.log(store.places);

  const places = store.places;
  return (
    <div className="mt-40 mb-20 2xl:mt-48 mx-2  sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-20">
      {places
        .filter((place: Place) => {
          return (
            place.name.includes(searchStore.searchText) ||
            place.formatted_address.includes(searchStore.searchText)
          );
        })
        .map((place: Place) => {
          return (
            <div key={place.place_id} className="  rounded-xl bg-white mb-3">
              <div className="grid grid-cols-6 p-5 gap-y-2">
                {place.photos &&
                  place.photos.map((photo, index: number) => {
                    return (
                      <div
                        className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1"
                        key={index}
                      >
                        <img
                          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=250
           &photo_reference=${photo.photo_reference}&key=${process.env.NEXT_PUBLIC_KEY_PHOTO}`}
                          alt="food"
                          className="min-w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40 "
                        />
                      </div>
                    );
                  })}

                <div className=" col-start-3 col-span-4 sm:col-start-2 sm:col-span-5 md:col-start-2 md:col-span-4 lg:col-start-2 lg:col-span-4 xl:col-start-2 xl:col-span-4 ml-4">
                  <p className="text-sky-500 font-bold text-base sm:text-lg">
                    {place.name}
                  </p>
                  <p className="text-gray-600 font-semibold text-sm sm:text-base">
                    {place.formatted_address}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
});

export default Home;
