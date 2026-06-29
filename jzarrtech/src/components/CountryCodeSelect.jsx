import React, { useEffect, useId, useRef, useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { countryCodes } from "../data/countryCodes";
import "./CountryCodeSelect.css";

const getFlagEmoji = (isoCode) =>
  isoCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join("");

const CountryCodeSelect = ({
  value,
  onChange,
  triggerClassName = "",
  panelAlign = "left",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef(null);
  const searchRef = useRef(null);
  const listId = useId();

  const selectedCountry =
    countryCodes.find((country) => country.isoCode === value) ?? countryCodes[0];

  const filteredCountries = countryCodes.filter((country) => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return true;
    }

    return (
      country.name.toLowerCase().includes(normalizedQuery) ||
      country.dialCode.toLowerCase().includes(normalizedQuery) ||
      country.isoCode.toLowerCase().includes(normalizedQuery)
    );
  });

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      searchRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="country-code-select">
      <button
        type="button"
        className={`country-code-trigger ${triggerClassName}`.trim()}
        onClick={() => setIsOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
      >
        <span className="country-code-trigger-main">
          <span className="country-flag" aria-hidden="true">
            {getFlagEmoji(selectedCountry.isoCode)}
          </span>
          <span className="country-dial-code">{selectedCountry.dialCode}</span>
        </span>

        <FaChevronDown className={`country-code-chevron ${isOpen ? "is-open" : ""}`} />
      </button>

      {isOpen && (
        <div
          className={`country-code-panel country-code-panel-${panelAlign}`}
          role="dialog"
          aria-label="Select country code"
        >
          <div className="country-code-search">
            <FaSearch />
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search country or code"
            />
          </div>

          <div id={listId} className="country-code-list" role="listbox">
            {filteredCountries.map((country) => (
              <button
                key={`${country.isoCode}-${country.dialCode}`}
                type="button"
                className="country-code-option"
                onClick={() => {
                  onChange(country.isoCode);
                  setIsOpen(false);
                }}
                role="option"
                aria-selected={country.isoCode === selectedCountry.isoCode}
              >
                <span className="country-code-option-main">
                  <span className="country-flag" aria-hidden="true">
                    {getFlagEmoji(country.isoCode)}
                  </span>
                  <span className="country-name">{country.name}</span>
                </span>

                <span className="country-dial-code">{country.dialCode}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCodeSelect;
