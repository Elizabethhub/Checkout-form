# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Checkout Form Application

This application is a checkout form that collects personal, contact, and payment information from users. It is built using React and styled with CSS.

## Features

- Collects personal information such as first name, last name.
- Collects contact information including email, phone number, country, and address.
- Collects payment details such as credit card number and CVV2 code.
- Includes validation for email, phone number, credit card, and required fields.
- Resets form fields after submission.
- Styled for a clean and user-friendly interface.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server with `npm start`.

```bash
git clone https://github.com/Elizabethhub/Checkout-form.git
cd checkout-form
npm install
npm start
```

# Usage

1. Fill in the required fields in the form, including personal, contact, and payment information.
2. Submit the form by clicking the "Submit" button.
3. After submission, the form will reset, and you can fill it in again if needed.

## Dependencies

- React: JavaScript library for building user interfaces.
- React-Input-Mask: React input masking library for formatting input fields.
- React-Select: Select component for React applications.
- PropTypes: Runtime type checking for React props.

## File Structure

├── src/
│ ├── components/
│ │ ├── CheckoutForm.js
│ │ ├── ContactInformation.js
│ │ ├── PaymentDetails.js
│ │ ├── PersonalInformation.js
│ │ ├── PersonalInformationStyles.js
│ ├── utils/
│ │ └── countries-list.js
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ ├── index.js

- `CheckoutForm.js`: Main component for the checkout form.
- `ContactInformation.js`: Component for collecting contact information.
- `PaymentDetails.js`: Component for collecting payment details.
- `PersonalInformation.js`: Component for collecting personal information.
- `PersonalInformationStyles.js`: Styled components for personal information component.
- `countries-list.js`: Utility file containing country data.
- `App.css`, `App.js`, `index.css`, `index.js`: Files for setting up the React application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
