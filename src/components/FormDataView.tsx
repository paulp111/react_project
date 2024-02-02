import React from 'react';

interface FullFormData {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
  };
  academic: {
    school: string;
    fach: string;
    date: string;
  };
  professional: {
    company: string;
    position: string;
    tasks: string;
    start: string;
    end?: string;
  };
}

interface FormDataViewProps {
  formData: FullFormData;
}

const FormDataView: React.FC<FormDataViewProps> = ({ formData }) => {
  return (
    <div className="form-data-view">
      <h2>Eingegebene Daten</h2>
      
      <h3>Persönliche Daten</h3>
      <p>Vorname: {formData.personal.firstName}</p>
      <p>Nachname: {formData.personal.lastName}</p>
      <p>E-Mail: {formData.personal.email}</p>
      <p>Telefon: {formData.personal.phone}</p>
      <p>Adresse: {formData.personal.address}</p>

      <h3>Akademische Daten</h3>
      <p>Schule/Uni: {formData.academic.school}</p>
      <p>Fach: {formData.academic.fach}</p>
      <p>Datum des Abschlusses: {formData.academic.date}</p>

      <h3>Berufliche Daten</h3>
      <p>Firmenname: {formData.professional.company}</p>
      <p>Position: {formData.professional.position}</p>
      <p>Aufgaben: {formData.professional.tasks}</p>
      <p>Startdatum: {formData.professional.start}</p>
      {formData.professional.end && <p>Enddatum: {formData.professional.end}</p>}
    </div>
  );
};

export default FormDataView;
