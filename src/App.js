import React from 'react';
import noviceImg from './resources/characters/novice.jpg';
import sorceressImg from './resources/characters/elfSorc.jpg';
import knightImg from './resources/characters/orcWarrior.jpg';
import styles from './styles.module.css';
import {Header} from './components/header/index';
import {Subheader} from './components/subheader/index';
import {Content} from './components/content/index';
import useLevelUpScreen from './hooks/useLevelUpScreen';
import { MdKeyboardTab } from 'react-icons/md'


import cx from 'classnames';

const App = () => {
  const {selected, onSelect, morphed, onMorph} = useLevelUpScreen ();
  const renderMorphButton = () => {
    if (selected.length > 0) {
      return (
        <div>
          <MdKeyboardTab className={styles.morphArrow}/>
          <button
            name="morph"
            type="button"
            className={styles.morph}
            onClick={onMorph}
          >
            Morph
          </button>
          <MdKeyboardTab className={styles.morphArrowFlipped}/>
        </div>
      );
    }
  };

  return (
    <div className={styles.root}>
      <Header>
        You are a <em>Novice</em>
      </Header>
      <Content>
        <div className={styles.characterBox} style={{width: 200, height: 150}}>
          <img alt="" src={noviceImg} />
        </div>
      </Content>
      <Subheader>Congratulations on reaching level 10!</Subheader>
      <div style={{margin: '25px auto'}}>
        <Header>Choose your destiny</Header>
        <Subheader>Choose one. Or all, if you know what I mean.</Subheader>
        <Content>
          <div
            //cx Usage:
            //cx renders classes depending on the value of the "selected.includes"(true/false)
            //it should be wrapped between brackets because we are using also css modules,
            //so styles.selectedBox its the reference to the proper css module and it serves as name of the object we pass to CX
            onClick={onSelect ('Sorceress')}
            className={cx (styles.characterBox, {
              [styles.selectedBox]: selected.includes ('Sorceress'),
            })}
          >
            <h2>Sorceress</h2>
            <img
              alt=""
              src={sorceressImg}
              className={cx (styles.tier2, {
                [styles.selected]: selected.includes ('Sorceress'),
              })}
            />
          </div>
          <div
            onClick={onSelect ('Knight')}
            className={cx (styles.characterBox, {
              [styles.selectedBox]: selected.includes ('Knight'),
            })}
          >
            <h2>Knight</h2>
            <img
              alt=""
              src={knightImg}
              className={cx (styles.tier2, {
                [styles.selected]: selected.includes ('Knight'),
              })}
            />
          </div>
        </Content>
      </div>
      <div className={styles.morph}>
        {renderMorphButton ()}
      </div>
    </div>
  );
};

export default App;
