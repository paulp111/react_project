import React, { useState } from 'react';
import './PersonalList.css'; 
import PersonalDataForm from './PersonalDataForm';
import AcademicDataForm from './AcademicDataForm';
import ProfessionalDataForm from './ProfessionalDataForm';
import FormDataView from './FormDataView';

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

const initialFormData = {
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  },
  academic: {
    school: '',
    fach: '',
    date: '',
  },
  professional: {
    company: '',
    position: '',
    tasks: '',
    start: '',
    end: '',
  },
};

const PersonalList: React.FC = () => {
  const [formData, setFormData] = useState<FullFormData>(initialFormData);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [showFormData, setShowFormData] = useState(false);

  const handlePersonalChange = (data: FullFormData['personal']) => {
    setFormData({ ...formData, personal: data });
  };

  const handleAcademicChange = (data: FullFormData['academic']) => {
    setFormData({ ...formData, academic: data });
  };

  const handleProfessionalChange = (data: FullFormData['professional']) => {
    setFormData({ ...formData, professional: data });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFormData(true); //Save - Show
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setShowFormData(false); // Delete - Hide
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="personal-list">
      <button onClick={toggleFormVisibility}>
        {isFormVisible ? 'Formular Einklappen' : 'Formular Ausklappen'}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="form-section">
          <PersonalDataForm onChange={handlePersonalChange} />
          <AcademicDataForm onChange={handleAcademicChange} />
          <ProfessionalDataForm onChange={handleProfessionalChange} />
          <button type="submit">Speichern</button>
          <button type="button" onClick={handleReset}>
            Daten Löschen
          </button>
        </form>
      )}
      {showFormData && <FormDataView formData={formData} />}
    </div>
  );
};

export default PersonalList;
