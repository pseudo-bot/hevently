import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
  { name: "Select" },
  { name: "Wedding Banquet" },
  { name: "Hotel/Restaurant" },
  { name: "Other" },
];

export default function VenueTypeDropdown() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="">
      <label
        htmlFor="dropdown"
        className="leading-7 capitalize text-sm text-gray-600"
      >
        Venue Type
      </label>
      <Listbox value={selected} onChange={setSelected}>
        <div
          id="dropdown
        "
          className="relative mt-1"
        >
          <Listbox.Button className="w-full bg-white rounded border text-left border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            <span>{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute w-full py-1 mt-1 bg-[#fff] rounded-md shadow-lg ring-1 focus:outline-none text-sm" >
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `${active ? "text-blue-800 bg-gray-100" : "text-gray-700"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={person}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-blue-600" : "text-blue-600"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
