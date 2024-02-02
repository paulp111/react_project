import React, { useState } from 'react';

interface PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

interface PersonalDataFormProps {
  onChange: (data: PersonalData) => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ onChange }) => {
  const [data, setData] = useState<PersonalData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData = { ...data, [name]: value };
    setData(newData);
    onChange(newData);
  };

  return (
    <div className="personal-data-form">
      <h3>Persönliche Daten</h3>
      <label htmlFor="firstName">Vorname:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={data.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Nachname:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={data.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">E-Mail:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />

      <label htmlFor="phone">Telefon:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      />

      <label htmlFor="address">Adresse:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={data.address}
        onChange={handleChange}
      />
    </div>
  );
};

export default PersonalDataForm;
