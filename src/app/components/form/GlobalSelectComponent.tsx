  import React from 'react';
  import Select from 'react-select';
  import { GlobalSelectComponentProps } from '@/Types/index';

  const GlobalSelectComponent = ({ label, placeholder, options, onChange,value,noOptionsMessage}: GlobalSelectComponentProps) => {
    const customSelectStyles = {
      control: (provided: any) => ({
        ...provided,
        border: 'none',
        backgroundColor: 'transparent',
      }),
      placeholder: (provided: any) => ({
        ...provided,
        color: 'gray',
      }),
      singleValue: (provided: any) => ({
        ...provided,
        color: 'black',
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#EE9B8D' : '#EEE9DD',
        color: state.isSelected ? 'black' : 'black',
        paddingTop: '10px',
        paddingBottom: '10px',
        borderBottom: '1px solid gray',
        '&:hover': {
          backgroundColor: '#EE9B8D30', 
        },
      }),
      menu: (provided: any) => ({
        ...provided,
        backgroundColor: '#EEE9DD',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '16px',
        paddingTop: '16px',
      }),
    };
    

    return (
      <div className="flex flex-col space-y-2 w-full">
        <label className={`block text-black md:text-sm font-medium text-xs text-opacity-50 font-maison-neue`}>
          {label}
        </label>
        <Select
          isSearchable={true}
          components={{ IndicatorSeparator: () => null }}
          options={options}
          placeholder={placeholder}
          className="border-b border-gray-500"
          styles={customSelectStyles}
          onChange={onChange}
          value={value}
          noOptionsMessage={() => noOptionsMessage || 'No options available'} 
          />
      </div>
    );
  };

  export default GlobalSelectComponent;
