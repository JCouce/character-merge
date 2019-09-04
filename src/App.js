import React from 'react';
//Character images
import noviceImg from './resources/characters/novice.jpg';
import sorceressImg from './resources/characters/elfSorc.jpg';
import samuraiImg from './resources/characters/samurai.jpg';
import knightImg from './resources/characters/orcWarrior.jpg';
//Styles
import styles from './styles.module.css';
//Components
import { Header } from './components/header/index';
import { Subheader } from './components/subheader/index';
import { Content } from './components/content/index';
import { RingLoader } from 'react-spinners'
import { MdKeyboardTab } from 'react-icons/md';
//Hooks
import useLevelUpScreen from './hooks/useLevelUpScreen';
//Libs
import scrollToComponent from 'react-scroll-to-component';
import cx from 'classnames';


const App = () => {
  //selected state display the actions
  //morphing state offers us a state where we can prepare stuff to recive the morphed state
  //morphed state ends the proccess offering the user his brand new class
  const {selected, onSelect, morphing, morphed, onMorph, ready} = useLevelUpScreen ();
  const morphedRef = React.createRef ();
  const morphRef = React.createRef ();

  //Scroll to component morph button
  React.useEffect (() => {
    if (selected && ready) {
      scrollToComponent (morphRef.current, {
        offset: 300,
        align: 'bottom',
        duration: 1000,
      });
    }
  });

  //Scroll to component new morphed class
  React.useEffect (() => {
      if (morphed) {
        scrollToComponent (morphedRef.current, {
          offset: 100,
          align: 'middle',
          duration: 1000,
        });
      }
    },[morphed, morphedRef]);

  const renderMorphButton = () => {
    if (selected.length > 0) {
      return (
        <div
          ref={morphRef}
          className={cx (styles.morph, {
            [styles.hidden]: !selected.length,
          })}
        >
          <MdKeyboardTab className={styles.morphArrow} />
          <button
            name="morph"
            type="button"
            className={styles.morph}
            onClick={onMorph}
          >
            {morphing ? 'Morphing...' : 'Morph'}
          </button>
          <MdKeyboardTab className={styles.morphArrowFlipped} />
        </div>
      );
    }
  };
  const renderMorphed = () => {
    if (morphed) {
      return (
        <div
          className={cx ({
            [styles.morphed]: morphed,
            [styles.hidden]: !morphed,
          })}
        >
          <Header>Yeah!</Header>
          <Content>
            <div ref={morphedRef} className={styles.characterBox}>
              <img alt="" src={samuraiImg} />
            </div>
          </Content>
          <Subheader>
            Has recibido la clase <em>Samurai</em>
          </Subheader>
        </div>
      );
    }
  };

  return (
    <div className={styles.root}>
      <Header>
        Eres un <em>Novato</em>
      </Header>
      <Content>
        <div className={styles.characterBox} style={{width: 200, height: 150}}>
          <img alt="" src={noviceImg} />
        </div>
      </Content>
      <Subheader>Has desbloqueado una nueva clase!</Subheader>
      <div style={{margin: '25px auto'}}>
        <Header>Elige tu puto destino</Header>
        <Subheader>Tus decisiones forjarán la persona que serás en el futuro!</Subheader>
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
            <h2>Hechicero</h2>
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
            <h2>Guerrero Orco</h2>
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
        <div
          className={cx(styles.next, {
          [styles.hidden]: ready})}
        >
          <div>
            <RingLoader size={60} color="rgb(213, 202, 255)" loading />
            <p>Loading...</p>
          </div>
        </div>
      </div>
      {renderMorphed ()}
      {morphed && <div style={{height: '30vh'}} />}
    </div>
  );
};

export default App;
