import React from 'react';

const Footer = (props) => {
  return (
    <footer className="al-footer clearfix">
        <div className="al-footer-right">{props.appName}</div>
        <div className="al-footer-main clearfix">
        <div className="al-copy">Coypright &copy; All Right Reserved - {(new Date().getFullYear())} </div>
        </div>
    </footer>
  );
};

export default Footer;