import React from 'react';

const useLevelUpScreen = () => {
  const [selected, setSelected] = React.useState ([]);
  const [morphed, setMorphed] = React.useState(false)

  const onSelect = type => e => {
    setSelected (prevSelected => {
      if (prevSelected.includes (type)) {
        return prevSelected.filter (t => t !== type);
      }
      return [...prevSelected, type];
    });
  };
  const onMorph = () => {
    setTimeout (() => {
      setMorphed (true);
    }, 1500); // simulating a real server / api call response time
  };

  return {
    selected,
    onSelect,
    morphed,
    onMorph,
  };
};

export default useLevelUpScreen;
