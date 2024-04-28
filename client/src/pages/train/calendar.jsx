// import React from 'react';
// import { Calendar, theme } from 'antd';


// const onPanelChange = (value, mode) => {
//   console.log(value.format('YYYY-MM-DD'), mode);
// };
// const Calender1 = () => {
//   const { token } = theme.useToken();
//   const wrapperStyle = {
//     width: 300,
//     border: `1px solid ${token.colorBorderSecondary}`,
//     borderRadius: token.borderRadiusLG,
//   };
//   return (
//     <div style={wrapperStyle}>
//       <Calendar fullscreen={false} onPanelChange={onPanelChange} />
//     </div>
//   );
// };
// export default Calender1;


import React, { useState } from 'react';
import { Calendar, theme } from 'antd';

const Calender1 = ({ onSelect }) => {
  const { token } = theme.useToken();
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const onPanelChange = (value, mode) => {
    setSelectedDate(value);
    setVisible(false);
    onSelect(value); // Pass the selected date back to the parent component
  };

  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    cursor: 'pointer', // Add cursor pointer to indicate it's clickable
  };

  return (
    <div style={wrapperStyle} onClick={() => setVisible(true)}>
      <Calendar 
        fullscreen={false} 
        visible={visible} 
        onSelect={onPanelChange} 
        onPanelChange={onPanelChange} 
      />
    </div>
  );
};

export default Calender1;
