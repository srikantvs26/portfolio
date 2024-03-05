import { Puff} from "svg-loaders-react";

function Preloader(props) {
 
    return (
      <>
        {/* <Oval   id="preloader" stroke="red" color="black"/> */}
        <div id="preloader">
          <Puff stroke="#F1F1F2" strokeOpacity=".125" width="130" height="130"/>
          
        </div>
      </>
    );
  
  return <></>;
}

export default Preloader;
