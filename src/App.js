import React from 'react'
import noviceImg from './resources/characters/novice.jpg'
import sorceressImg from './resources/characters/elfSorc.jpg'
import knightImg from './resources/characters/orcWarrior.jpg'
import styles from './styles.module.css'
import { Header } from './components/header/index';
import { Subheader } from './components/subheader/index';
import { Content } from './components/content/index';

const App = () => {
  const onSelect = (e) => {
    console.log("Don't mind me. I'm useless until I become useful")
  }

  return (
    <div className={styles.root}>
      <Header>
        You are a <em>Novice</em>
      </Header>
      <Content>
        <div
          className={styles.characterBox}
          style={{ width: 200, height: 150 }}
        >
          <img alt="" src={noviceImg} />
        </div>
      </Content>
      <Subheader>Congratulations on reaching level 10!</Subheader>
      <div style={{ margin: '25px auto' }}>
        <Header>Choose your destiny</Header>
        <Subheader>Choose one. Or all, if you know what I mean.</Subheader>
        <Content>
          <div onClick={onSelect} className={styles.characterBox}>
            <h2>Sorceress</h2>
            <img alt="" src={sorceressImg} />
          </div>
          <div onClick={onSelect} className={styles.characterBox}>
            <h2>Knight</h2>
            <img alt="" src={knightImg} />
          </div>
        </Content>
      </div>
    </div>
  )
}

export default App