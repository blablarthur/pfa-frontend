import React from 'react';
import Select from 'react-select';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const MultipleSelect = ({ handleChangeSelectCountry }) => {
  const jsonData = require('../../data-trimed-both-sex-final-minimum.json');
  const countriesArray = Array.from(new Set(jsonData.map(d => d.label)));
  const locations = countriesArray.map((data, index) => ({ label: data, value: index + 1 }));
  const regions = locations.slice(0, 7);
  const countries = locations.slice(7, locations.length);

  const groupedOptions = [
    {
      label: 'Regions',
      options: regions,
    },
    {
      label: 'Countries',
      options: countries,
    },
  ];

  return (
    <Select
      defaultValue={regions["World"]}
      name="country"
      isClearable={true}
      options={groupedOptions}
      onChange={handleChangeSelectCountry}
      closeMenuOnSelect={true}
      formatGroupLabel={formatGroupLabel}
    />
  );
};

export default MultipleSelect;
