import React, { useState } from 'react';

interface AcademicData {
  school: string;
  fach: string;
  date: string;
}

interface AcademicDataFormProps {
  onChange: (data: AcademicData) => void;
}

const AcademicDataForm: React.FC<AcademicDataFormProps> = ({ onChange }) => {
  const [data, setData] = useState<AcademicData>({
    school: '',
    fach: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData = { ...data, [name]: value };
    setData(newData);
    onChange(newData);
  };

  return (
    <div className="academic-data-form">
      <h3>Akademische Daten</h3>
      <label htmlFor="school">Schule/Uni:</label>
      <input
        type="text"
        id="school"
        name="school"
        value={data.school}
        onChange={handleChange}
      />

      <label htmlFor="fach">Fach:</label>
      <input
        type="text"
        id="fach"
        name="fach"
        value={data.fach}
        onChange={handleChange}
      />

      <label htmlFor="date">Datum des Abschlusses:</label>
      <input
        type="text"
        id="date"
        name="date"
        value={data.date}
        onChange={handleChange}
      />
    </div>
  );
};

export default AcademicDataForm;
