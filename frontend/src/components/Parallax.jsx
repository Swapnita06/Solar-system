import "./styles.css";
import Plx from "react-plx";
import  bg from "../components/another3.jpg";
import  cave  from "../components/cave.png";


export default function Parallax() {
  return (
    <div style={{position:'relative',height:'100vh'}}>
      <div className="main border-2">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 2.6,
                property: "scale",
              },
              {
                startValue:1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <img style={{ width: "100%",height:'100vh'}} src= {cave} alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: 1,
                endValue: 1.5,
                property: "scale",
              },
              {
                startValue: 0.5,
                endValue: 0.1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          opacity: 1,
          left: 0,
          top:0,
          width: "100%",
    
        }}
      >
        <img className='w-[100%] h-[100vh]'src={bg} alt="background"  />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 2,
          top:'25%'
        }}
      >
        <h1 className="escape" style={{ fontFamily: "Poppins", color:'rgb(222, 225, 54)',fontSize:'60px'}}>Escape into the magic world</h1>
      </Plx>
      
      </div>
    </div>
  );
}