import PropTypes from "prop-types";
import PersonalInfoContainer from "./PersonalInfoSyled";

const PersonalInformation = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PersonalInfoContainer>
      <div className="item">
        <span className="required">*</span>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      </div>
      <div className="item">
        <span className="required">*</span>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      </div>
    </PersonalInfoContainer>
  );
};

PersonalInformation.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default PersonalInformation;
