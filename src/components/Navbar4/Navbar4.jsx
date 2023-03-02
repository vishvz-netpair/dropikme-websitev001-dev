import React from "react";
import Header4 from '../header4/Header4';

export default function Navbar4(props) {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  return (
    <div className={className}>
        <Header4 hclass={props.hclass} Logo={props.Logo} topbarNone={props.topbarNone}/>
    </div>
  ); 
}