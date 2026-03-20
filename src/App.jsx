import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [jetons, setJetons] = useState(1000);
  const [mise, setMise] = useState(0);
  const [gainTotal, setGainTotal] = useState(0);
  const [X, _setX] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]);
  const [Y, _setY] = useState([0,1,2,3,4,5]);
  const [X2, _setX2] = useState([0,1,2,3,4]);
  const [X3, _setX3] = useState([0,1,2,3,4,5]);

  const [map, _setMap] = useState({ '0-0': '3', '0-1': '2-3', '0-2': '2', '0-3': '1-2', '0-4': '1', '0-5': '1-2-3', '1-0': '3-6', '1-1': '2-3-5-6', '1-2': '2-5', '1-3': '1-2-4-5', '1-4': '1-4', '1-5': '1-2-3-4-5-6', '2-0': '6', '2-1': '5-6', '2-2': '5', '2-3': '4-5', '2-4': '4', '2-5': '4-5-6', '3-0': '6-9', '3-1': '5-6-8-9', '3-2': '8-9', '3-3': '4-5-7-8', '3-4': '7-8', '3-5': '4-5-6-7-8-9', '4-0': '9', '4-1': '8-9', '4-2': '8', '4-3': '7-8', '4-4': '7', '4-5': '7-8-9', '5-0': '9-12', '5-1': '8-9-11-12', '5-2': '8-11', '5-3': '7-8-10-11', '5-4': '7-10', '5-5': '7-8-9-10-11-12', '6-0': '12', '6-1': '11-12', '6-2': '11', '6-3': '10-11', '6-4': '10', '6-5': '10-11-12', '7-0': '12-15', '7-1': '11-12-14-15', '7-2': '11-14', '7-3': '10-11-13-14', '7-4': '10-13', '7-5': '10-11-12-13-14-15', '8-0': '15', '8-1': '14-15', '8-2': '14', '8-3': '13-14', '8-4': '13', '8-5': '13-14-15', '9-0': '15-18', '9-1': '14-15-17-18', '9-2': '14-17', '9-3': '13-14-16-17', '9-4': '13-16', '9-5': '14-15-16-17-18', '10-0': '18', '10-1': '17-18', '10-2': '17', '10-3': '16-17', '10-4': '16', '10-5': '16-17-18', '11-0': '18-21', '11-1': '17-18-20-21', '11-2': '17-20', '11-3': '16-17-19-20', '11-4': '16-19', '11-5': '16-17-18-19-20-21', '12-0': '21', '12-1': '20-21', '12-2': '20', '12-3': '19-20', '12-4': '19', '12-5': '19-20-21', '13-0': '21-24', '13-1': '20-21-23-24', '13-2': '20-23', '13-3': '19-20-22-23', '13-4': '19-22', '13-5': '19-20-21-22-23-24', '14-0': '24', '14-1': '23-24', '14-2': '23', '14-3': '22-23', '14-4': '22', '14-5': '22-23-24', '15-0': '24-27', '15-1': '23-24-26-27', '15-2': '23-26', '15-3': '22-23-25-26', '15-4': '22-25', '15-5': '22-23-24-25-26-27', '16-0': '27', '16-1': '26-27', '16-2': '26', '16-3': '25-26', '16-4': '25', '16-5': '25-26-27', '17-0': '27-30', '17-1': '26-27-29-30', '17-2': '26-29', '17-3': '25-26-28-29', '17-4': '25-28', '17-5': '25-26-27-28-29-30', '18-0': '30', '18-1': '29-30', '18-2': '29', '18-3': '28-29', '18-4': '28', '18-5': '28-29-30', '19-0': '30-33', '19-1': '29-30-32-33', '19-2': '29-32', '19-3': '28-29-31-32', '19-4': '28-31', '19-5': '28-29-30-31-32-33', '20-0': '33', '20-1': '32-33', '20-2': '32', '20-3': '31-32', '20-4': '31', '20-5': '31-32-33', '21-0': '33-36', '21-1': '32-33-35-36', '21-2': '32-25', '21-3': '31-32-34-35', '21-4': '31-34', '21-5': '31-32-33-34-35-36', '22-0': '36', '22-1': '35-36', '22-2': '35', '22-3': '34-35', '22-4': '34', '22-5': '34-35-36', '23-0': '3-6-9-12-15-18-21-24-27-30-33-36', '23-1': '3-6-9-12-15-18-21-24-27-30-33-36-2-5-8-11-24-17-20-23-26-29-32-35', '23-2': '2-5-8-11-24-17-20-23-26-29-32-35', '23-3': '2-5-8-11-24-17-20-23-26-29-32-35-1-4-7-10-13-16-19-22-25-28-31-34', '23-4': '1-4-7-10-13-16-19-22-25-28-31-34', });
  const [map2, _setMap2] = useState({ '0': '1-12', '1': '1-24', '2': '13-24', '3': '13-36', '4': '25-36' });
  const [map3, _setMap3] = useState({ '0': '1-18', '1': '2-4-6-8-10-12-14-16-18-20-22-24-26-28-30-32-34-36', '2': '1-3-5-7-9-12-14-16-18-19-21-23-25-27-30-32-34-36', '3': '2-4-6-8-10-11-13-15-17-20-22-24-26-28-29-31-33-35', '4': '1-3-5-7-9-11-13-15-17-19-21-23-25-27-29-31-33-35', '5': '19-36' });

  const nb = [14,31,9,22,18,29,7,28,12,35,3,26,0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20];
  const res = [];

  const [mises, setMises] = useState([]);
  const [isBet, setIsBet] = useState([]);
  const [isBet2, setIsBet2] = useState([]);
  const [isBet3, setIsBet3] = useState([]);

  useEffect(() => {
    if (isBet.length == 0 && isBet2.length == 0 && isBet3.length == 0) {
      for (let i = 0; i < X.length * Y.length; i++) {
        isBet.push(false);
        mises.push("/");
      }
      for (let i = 0; i < X2.length; i++) {
        isBet2.push(false);
        mises.push("/");
      }
      for (let i = 0; i < X3.length; i++) {
        isBet3.push(false);
        mises.push("/");
      }
      setIsBet(isBet);
      setMises(mises);
      setIsBet2(isBet2);
      setIsBet3(isBet3);
    }
  }, []);

  const setBets = (x, y) => {
    for (const key in map) {
      const [x2, y2] = key.split('-');
      if (x == x2 && y == y2) {
        mises[x*Y.length+y] = map[key]+"/"+mise;
        isBet[x*Y.length+y] = true;
        setIsBet(isBet);
        setMises(mises);
        setJetons(prev => prev - mise);
      }
    }
  }
  
  const setBets2 = (x) => {
    for (const key in map2) {
      if (x == key) {
        mises[x+X.length*Y.length] = map2[x]+"/"+mise;
        isBet2[x] = true;
        setIsBet2(isBet2);
        setMises(mises);
        setJetons(prev => prev - mise);
      }
    }
  }

  const setBets3 = (x) => {
    for (const key in map3) {
      if (x == key) {
        mises[x+X.length*Y.length+X2.length] = map3[x]+"/"+mise;
        isBet3[x] = true;
        setIsBet3(isBet3);
        setMises(mises);
        setJetons(prev => prev - mise);
      }
    }
  }

  const formAngle = () => {
      let i = 0.0;
      for (const n of nb) {
          const o = {nb: n, angle: 360.0 - i*360.0/37.0}
          res.push(o);
          i++;
      }
  }
  formAngle();

  const modulo = (angle, mod) => {
      if (angle >= 0) {
          return angle % mod;
      } else {
          return (angle+mod) % mod;
      }
  }

  const btn = (nbres, gain) => {
      const b = document.querySelector(".bille");
      const c = document.querySelector(".nombres");
      let angle = 0.0;
      let a = angle;
      let radius = 255;
      let ral = 1;
      let angleB;
      let angleCylindre = 0;

      const arreter = () => {
          radius += 5;
          const x = 145 + radius * Math.cos(angleB*Math.PI/180.0);
          const y = -515 - radius * Math.sin(angleB*Math.PI/180.0);
          b.style.marginLeft = x+"px";
          b.style.marginTop = y+"px";

          const cible = res.find(r => r.nb == nbres);
          const angleCible = cible ? (cible.angle - 205) : 0;
          const ac = modulo(angleCible, 360);
          angleCylindre += ac/259;
          c.style.transform = `rotate(${angleCylindre}deg)`;

          if (radius <= 130) {
              requestAnimationFrame(arreter);
          } else {
            setGainTotal(prev => prev + gain);
            setJetons(prev => prev + gain);
            setMises(prev => prev.map(mise => "/"));
            setIsBet(prev => prev.map(isBet => false));
            setIsBet2(prev => prev.map(isBet2 => false));
            setIsBet3(prev => prev.map(isBet3 => false));
            alert("Resultat : "+nbres+", Gain : "+gain+", Jetons : "+(jetons+gain));
          }
      };
      function ralentir() {

          const progress = Math.min(1 - radius/255, 1);
          angleB = angle + progress * 225;
          const x = 145 + radius * Math.cos(angleB * Math.PI/180);
          const y = -515 - radius * Math.sin(angleB * Math.PI/180);
          b.style.marginLeft = x + "px";
          b.style.marginTop = y + "px";

          // --- Cylindre (doit finir sur la case choisie) ---
          const cible = res.find(r => r.nb == nbres);
          const angleCible = cible ? (cible.angle - 205) : 0;
          const ac = modulo(angleCible, 360);
          angleCylindre += ac/259;
          c.style.transform = `rotate(${angleCylindre}deg)`;

          if (radius > 20) {
              radius -= 1;
              requestAnimationFrame(ralentir);
          } else {
              arreter();
          }
      }
      const animate = () => {
          const x = 145 + radius * Math.cos(angle*Math.PI/180.0);
          const y = -515 - radius * Math.sin(angle*Math.PI/180.0);
          b.style.marginTop = y+"px";
          b.style.marginLeft = x+"px";
          c.style.transform = `rotate(${angle}deg)`;
          angle = (angle+3) % 360;
          a += 3;
          if (a < 1080) {
              requestAnimationFrame(animate);
          } else {
              ralentir();
          }
      }
      animate();
  };

  useEffect(() => {
    const fctn = async () => {
      const response = await fetch("/mises?mises=10", { method: "GET" });
      const data = await response.json();
      const misesElement = document.querySelector("#mises");
      if (misesElement) {
        misesElement.innerHTML = data;
      }
    }
    fctn();
  }, []);

  useEffect(() => {
    const plus = document.getElementById("misePlus");
    const minus = document.getElementById("miseMinus");
    
    if (plus && minus) {
      const handlePlusClick = () => {
        if (jetons > 0) {
          setMise(prev => prev + 5);
        }
      };
      
      const handleMinusClick = () => {
        if (mise > 0) {
          setMise(prev => prev - 5);
        }
      };
      
      plus.addEventListener("click", handlePlusClick);
      minus.addEventListener("click", handleMinusClick);
      
      return () => {
        plus.removeEventListener("click", handlePlusClick);
        minus.removeEventListener("click", handleMinusClick);
      };
    }
  }, [jetons, mise]);

  async function submitForm(e) {
      e.preventDefault();
      try {
          const query1 = mises.map(mise => mise.split("/")[0]).join(",");
          const query2 = mises.map(mise => mise.split("/")[1]).join(",");
          const response = await fetch(`http://141.94.34.48:8080/generate?cases=${query1}&mises=${query2}`, {
            method: "GET",
          });
          let json;
          if (response.ok) {
            json = await response.json();
            console.log(json);
            setMise(0);
            btn(json.nb, json.gain);
          } else {
            console.error("Something went wrong: ", response);
          }
      } catch (err) {
          console.error(err);
      }
  }

  const [length, setLength] = useState(0);

  return (
    <>
      <h1>Roulette ++</h1>
      <div className="main">
          <div className="top">
              <div className="menu">
                  <span>Règles du jeu</span>
                  <span>|</span>
                  <span>Mises</span>
              </div>
              <span>|</span>
              <div className="help">
                  <a>Besoin d'aide ?</a>
              </div>
          </div>
          <div className="body">
              <div className="roulette">
                  <img className="cylindre" src="/cylindre.PNG" alt="cylindre" width="1400" height="1000" /> 
                  <img className="nombres" src="/nombres.png" alt="nombres" width="324" height="318"/>
                  <img className="table" src="/table.png" alt="table" width="833" height="414"/>
              </div>
              <div className="bille"></div>
              <div id="mises"></div>
              <div style={{ position: 'absolute', zIndex: 5, marginLeft: '575px', marginTop: '-625px' }}>
              {X.map((x) =>
                  Y.map((y) => (
                      <div key={`${x}-${y}`} onClick={() => setBets(x, y)} style={{ borderRadius: '48px', width: '25px', height: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', marginLeft: `${x*28.5}px`, zIndex: 5, marginTop: `${y*39}px`, position: 'absolute', backgroundColor: isBet[x*Y.length+y] ? 'blue' : 'transparent', border: isBet[x*Y.length+y] ? 'none' : '0.5px solid black' }}>{isBet[x*Y.length+y] ? mises[x*Y.length+y].split("/")[1] : ''}</div>
                  ))
              )}
              </div>
              <div style={{ position: 'absolute', zIndex: 5, marginLeft: '660px', marginTop: '-925px' }}>
                {X2.map((x) => (
                  <div key={`${x}`} onClick={() => setBets2(x)} style={{ borderRadius: '48px', width: '25px', height: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', marginLeft: `${x*113}px`, zIndex: 5, marginTop: `525px`, position: 'absolute', backgroundColor: isBet2[x] ? 'blue' : 'transparent', border: isBet2[x] ? 'none' : '0.5px solid black' }}>{isBet2[x] ? mises[x+X.length*Y.length].split("/")[1] : ''}</div>
                ))}
              </div>
              <div style={{ position: 'absolute', zIndex: 5, marginLeft: '600px', marginTop: '-925px' }}>
                {X3.map((x) => (
                  <div key={`${x}`} onClick={() => setBets3(x)} style={{ borderRadius: '48px', width: '25px', height: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', marginLeft: `${x*115}px`, zIndex: 5, marginTop: `575px`, position: 'absolute', backgroundColor: isBet3[x] ? 'blue' : 'transparent', border: isBet3[x] ? 'none' : '0.5px solid black' }}>{isBet3[x] ? mises[x+X.length*Y.length+X2.length].split("/")[1] : ''}</div>
                ))}
              </div>
              <form action="#" onSubmit={(e) => submitForm(e)}>
                  <div className="misesJ">
                      <div>Jetons : <span>{jetons}</span></div>
                      <div className="misesM">Mise : <span>{mise}</span><button id="misePlus" type="button">+</button><button id="miseMinus" type="button">-</button></div>
                  </div>
                  <button className="launch" type="submit">Lancer</button>
              </form>
              Gain total: <span>{gainTotal}</span>
          </div>
      </div>
    </>
  )
}

export default App
