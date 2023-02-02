import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  setActiveTab: () => {},
  toggledTheme: () => {},
})

export default ThemeContext
