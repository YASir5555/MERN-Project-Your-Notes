import React, { useState } from 'react';

const LangBtn = (props) => {
  const [language, setLanguage] = useState(true);
  const handleLanguageChange = () => {
    setLanguage((lang) => !lang);
  };

  if (!language) {
    document.dir = 'rtl';
  } else {
    document.dir = 'ltr';
  }
  return (
    <button onClick={handleLanguageChange} className={props.className}>
      {language ? 'Ar' : 'En'}
    </button>
  );
};

export default LangBtn;
