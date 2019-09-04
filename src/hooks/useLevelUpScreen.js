import React from 'react';

const useLevelUpScreen = () => {
  const [selected, setSelected] = React.useState ([]);
  const [morphing, setMorphing] = React.useState(false);
  const [morphed, setMorphed] = React.useState(false);
  const [ready, setReady] = React.useState(true);

  const onSelect = type => e => {
    setSelected (prevSelected => {
      if (prevSelected.includes (type)) {
        return prevSelected.filter (t => t !== type);
      }
      return [...prevSelected, type];
    });
  };
  const onMorph = () => {
    setMorphing(true);
    setReady(false);
    setTimeout (() => {
      setMorphed (true);
      setMorphing(false);
      setReady(true);
      setSelected([])
    }, 2000); // simulating a real server / api call response time
  };

  return {
    selected,
    onSelect,
    morphed,
    morphing,
    onMorph,
    ready,
  };
};

export default useLevelUpScreen;
