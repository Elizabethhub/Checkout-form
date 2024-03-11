import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import PaymentDetails from "./PaymentDetails";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumbers: [""],
    country: "",
    address: "",
    creditCard: "",
    cvv2: "",
    agreement: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent multiple submissions
    if (isSubmitting) return;
    // Set loading state
    setIsSubmitting(true);
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Log form values
    console.log("Form values:", formData);
    // Reset form data
    setFormData(initialFormData);
    // Reset loading state
    setIsSubmitting(false);
  };

  return (
    <div className="checkout-form-container">
      <h1>Checkout Form</h1>
      <p className="form-instructions required-info">* Indicates required fields</p>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <PersonalInformation formData={formData} setFormData={setFormData} />
        <h2>Contact Information</h2>
        <ContactInformation formData={formData} setFormData={setFormData} />
        <h2>Payment Details</h2>
        <PaymentDetails formData={formData} setFormData={setFormData} />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
