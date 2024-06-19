import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useCallback, ChangeEvent } from "react";

interface Country {
  country: string;
}

const Autocomplete: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");   
  const [countries, setCountries] = useState<Country[]>([]);

  const debounce = (cb: Function, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>;

    return (...args: any[]) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const fetchCountries = useCallback(debounce((query: string, signal: AbortSignal) => {
    if (query) {
      fetch(`http://localhost:3000/api/countries?q=${query}`, { signal })
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => {
          if (err.name !== 'AbortError') {
            console.error(err);
          }
        });
    } else {
      setCountries([]);
    }
  }, 500), []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetchCountries(inputValue, signal);

    return () => controller.abort();
  }, [inputValue, fetchCountries]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value || '');
  };

  return (
    <div className="autocomplete">
      <div className="bg-white w-full rounded-xl py-3.5 shadow-3xl flex items-center gap-2">
        <FaSearch className="w-6 h-6" style={{ color: '#1d4ed8' }} />
        <input
          className="ml-1.5 bg-transparent border-none h-full w-full focus:outline-none"
          placeholder="Type To Search...."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {countries.length > 0 && (
        <ul className="suggestions-list">
          {countries.map((country, index) => (
            <li key={index}>{country.country}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
