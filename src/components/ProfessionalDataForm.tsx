import React, { useState } from "react";

interface ProfessionalData {
  company: string;
  position: string;
  tasks: string;
  start: string;
  end: string;
}

interface ProfessionalDataFormProps {
  onChange: (data: ProfessionalData) => void;
}

const ProfessionalDataForm: React.FC<ProfessionalDataFormProps> = ({
  onChange,
}) => {
  const [data, setData] = useState<ProfessionalData>({
    company: "",
    position: "",
    tasks: "",
    start: "",
    end: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData = { ...data, [name]: value };
    setData(newData);
    onChange(newData);
  };

  return (
    <div className="professional-data-form">
      <h3>Berufliche Daten</h3>
      <label htmlFor="company">Firmenname:</label>
      <input
        type="text"
        id="company"
        name="company"
        value={data.company}
        onChange={handleChange}
      />

      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        value={data.position}
        onChange={handleChange}
      />

      <label htmlFor="tasks">Aufgaben:</label>
      <input
        type="text"
        id="tasks"
        name="tasks"
        value={data.tasks}
        onChange={handleChange}
      />

      <label htmlFor="start">Startdatum:</label>
      <input
        type="text"
        id="start"
        name="start"
        value={data.start}
        onChange={handleChange}
      />

      <label htmlFor="end">Enddatum:</label>
      <input
        type="text"
        id="end"
        name="end"
        value={data.end}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProfessionalDataForm;
