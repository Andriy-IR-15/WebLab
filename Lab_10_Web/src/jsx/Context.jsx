import React from 'react';

const CurrencyContext = React.createContext([]);

const useCurrency = () => React.useContext(CurrencyContext);

export { CurrencyContext, useCurrency };