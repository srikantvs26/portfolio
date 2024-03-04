import { Puff} from "svg-loaders-react";

function Preloader(props) {
  if (props.load) {
    return (
      <>
        {/* <Oval   id="preloader" stroke="red" color="black"/> */}
        <div id="preloader">
          <Puff stroke="#b1f504" strokeOpacity=".125" width="140" height="140"/>
          
        </div>
      </>
    );
  }
  return <></>;
}

export default Preloader;
