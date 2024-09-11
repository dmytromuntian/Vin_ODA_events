import { useState, Fragment } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "Датою", href: "#", current: true },
  { name: "Населеним пунктом", href: "#", current: false },
];

const filters = [
  {
    id: "сommunity",
    name: "Громада",
    options: [
      { value: "Vinnytsia сommunity", label: "Вінницька громада" },
      { value: "Haisyn сommunity", label: "Гайсинська громада" },
      { value: "Nemiriv сommunity", label: "Немирівська громада" },
      { value: "Tulchyn сommunity", label: "Тульчинська громада" },
      {
        value: "Mohyliv-Podilskiy сommunity",
        label: "Могилів-Подільська громада",
      },
      { value: "Hmilnyk сommunity", label: "Хмільницька громада" },
    ],
  },
  {
    id: "settlement",
    name: "Населений пункт",
    options: [
      { value: "Vinnytsia", label: "Вінниця" },
      { value: "Haisyn", label: "Гайсин" },
      { value: "Nemiriv", label: "Немирів" },
      { value: "Tulchyn", label: "Тульчин" },
      { value: "Mohyliv-Podilskiy", label: "Могилів-Подільский" },
      { value: "Hmilnyk", label: "Хмільник" },
    ],
  },
  {
    id: "organisation",
    name: "Організація",
    options: [
      { value: "Vin OVA", label: "Вінницяька ОВА" },
      { value: "Kvadrat", label: "Квадрат" },
      { value: "Artynov", label: "Артинов" },
    ],
  },
];

const cards = [
  {
    title: "12 серпня - 21 серпня",
    subtitle: "18:00 - 20:00, Вівторок",
    content:
      "Аукціон! Продаж права оренди (річної орендної плати) земельної ділянки сільськогосподарського призначення площею 19,7487 да 17 травня 2024 року",
  },
  {
    title: "12 серпня - 21 серпня",
    subtitle: "18:00 - 20:00, Вівторок",
    content:
      "Аукціон! Продаж права оренди (річної орендної плати) земельної ділянки сільськогосподарського призначення площею 19,7487 да 17 травня 2024 року",
  },
  {
    title: "12 серпня - 21 серпня",
    subtitle: "18:00 - 20:00, Вівторок",
    content:
      "Аукціон! Продаж права оренди (річної орендної плати) земельної ділянки сільськогосподарського призначення площею 19,7487 да 17 травня 2024 року",
  },
];

type Filters = {
  [key: string]: string[];
};

export default function Filter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    community: [],
    settlement: [],
    organisation: [],
  });

  const handleFilterChange = (section: string, value: string) => {
    setSelectedFilters((prevState) => {
      const newFilterValues = prevState[section].includes(value)
        ? prevState[section].filter((item) => item !== value)
        : [...prevState[section], value];
      return { ...prevState, [section]: newFilterValues };
    });
  };

  const filteredCards = cards.filter((card) => {
    // Logic to filter cards based on selectedFilters
    // This is a placeholder logic and should be replaced with actual filtering logic
    return true;
  });

  return (
    <div className="bg-white">
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      value={option.value}
                                      type="checkbox"
                                      checked={
                                        selectedFilters[section.id]?.includes(
                                          option.value
                                        ) ?? false
                                      }
                                      onChange={() =>
                                        handleFilterChange(
                                          section.id,
                                          option.value
                                        )
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Події
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Сортувати
                    <ChevronDownIcon
                      className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <button
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => {
                                // Handle sorting here
                              }}
                            >
                              {option.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <form className="hidden lg:block">
                <h3 className="sr-only">Фільтри</h3>
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  value={option.value}
                                  type="checkbox"
                                  checked={
                                    selectedFilters[section.id]?.includes(
                                      option.value
                                    ) ?? false
                                  }
                                  onChange={() =>
                                    handleFilterChange(section.id, option.value)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />

                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              <div className="lg:col-span-3">
                <div className="space-y-4">
                  {filteredCards.map((card) => (
                    <div key={card.title} className="border p-4 rounded-lg">
                      <h3 className="text-lg font-bold">{card.title}</h3>
                      <p className="text-sm text-gray-500">{card.subtitle}</p>
                      <p className="mt-2 text-gray-700">{card.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
