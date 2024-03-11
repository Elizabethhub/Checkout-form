import { useState } from "react";
import InputMask from "react-input-mask";
import Select from "react-select";
import PropTypes from "prop-types";

import { checkEmailAvailability, getCountryOptions } from "./utils";

const ContactInformation = ({ formData, setFormData }) => {
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      // Validate email asynchronously
      const isAvailable = await checkEmailAvailability(value);
      if (!isAvailable) {
        setEmailError("Email is already in use");
      } else {
        setEmailError("");
      }
    }
  };
  const handlePhoneChange = (index) => (e) => {
    const { value } = e.target;
    const updatedPhoneNumbers = [...formData.phoneNumbers];
    updatedPhoneNumbers[index] = value;
    setFormData({ ...formData, phoneNumbers: updatedPhoneNumbers });
  };

  const addPhoneNumber = () => {
    if (formData.phoneNumbers.length < 3) {
      setFormData({ ...formData, phoneNumbers: [...formData.phoneNumbers, ""] });
    }
  };

  const removePhoneNumber = (index) => {
    const updatedPhoneNumbers = [...formData.phoneNumbers];
    updatedPhoneNumbers.splice(index, 1);
    setFormData({ ...formData, phoneNumbers: updatedPhoneNumbers });
  };
  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption ? selectedOption.value : null });
  };
  const customStyles = {
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

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleEmailChange}
        placeholder="Email for receipt"
        pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
        title="Enter a valid email address"
      />
      {emailError && <span className="error">{emailError}</span>}
      <span className="required">*</span>
      {formData.phoneNumbers.map((phoneNumber, index) => (
        <div key={index}>
          <InputMask
            mask="+38 (099) 999-9999"
            maskChar=""
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange(index)}
            placeholder="Phone Number"
            required
          />
          {index > 0 && (
            <button onClick={() => removePhoneNumber(index)} className="phone-button">
              Remove
            </button>
          )}
        </div>
      ))}
      {formData.phoneNumbers.length < 3 && (
        <button onClick={addPhoneNumber} className="phone-button">
          Add Phone Number
        </button>
      )}
      <span className="required">*</span>
      <div style={{ width: "200px" }}>
        <Select
          options={getCountryOptions()}
          value={getCountryOptions().find((option) => option.value === formData.country) || ""}
          onChange={handleCountryChange}
          placeholder="Select Country"
          isSearchable
          required
          styles={customStyles}
        />
      </div>
      <span className="required">*</span>
      <div style={{ flex: 1 }}>
        <input type="text" name="address" value={formData.address} onChange={handleAddressChange} placeholder="Address" required />
      </div>
    </div>
  );
};

ContactInformation.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default ContactInformation;
