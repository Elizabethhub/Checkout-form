import { countries } from "../../node_modules/countries-list";

export const checkEmailAvailability = async (email) => {
  // Simulate async validation by resolving a promise after 1 second
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock logic to check if email is available
      const isAvailable = email !== "test@example.com"; // Example email
      resolve(isAvailable);
    }, 1000); // Resolve after 1 second
  });
};

export const getCountryOptions = () => {
  const countryOptions = Object.keys(countries).map((countryCode) => ({
    value: countryCode,
    label: countries[countryCode].name,
  }));
  return countryOptions;
};

export const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#212529" : "#black",
    fontSize: "12px",
    textAlign: "left",
  }),
  control: (defaultStyles) => ({
    ...defaultStyles,
    fontSize: "14px",
    textAlign: "left",
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles }),
};
