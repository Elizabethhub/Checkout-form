import PropTypes from "prop-types";

const PaymentDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const formattedInputValue =
      e.target.name === "creditCard"
        ? e.target.value
            .replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim() // Add space after every 4 characters
            .slice(0, 19)
        : e.target.value.replace(/\s/g, "").slice(0, 3); // Limit to 19 characters (16 digits + 3 spaces)

    setFormData({ ...formData, [e.target.name]: formattedInputValue });
  };

  return (
    <div>
      <div className="row">
        <span className="required">*</span>
        <input
          type="text"
          name="creditCard"
          value={formData.creditCard}
          onChange={handleChange}
          placeholder="Credit Card (16 digits)"
          pattern="\d{4}(?: \d{4}){3}"
          required
        />
        <span className="required">*</span>
        <input
          type="text"
          name="cvv2"
          value={formData.cvv2}
          onChange={handleChange}
          placeholder="CVV2 Code (3 digits)"
          pattern="[0-9]{3}"
          required
        />
      </div>
      <span className="required">*</span>
      <div className="row">
        <label>
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
            required
          />
          I agree to the terms of use
        </label>
      </div>
    </div>
  );
};
PaymentDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default PaymentDetails;
