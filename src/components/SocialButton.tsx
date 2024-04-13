import React from "react";

type SocialButtonProps = {
  logo: string;
  text: string;
  url: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ text, url }) => {
  return (
    <a href={url} target="_blank" className="select-none text-xl cursor-pointer outline-white outline outline-2 outline-offset-2 rounded-lg px-2 hover:bg-white hover:text-accent-dark transition-all">
      {text}
    </a>
  );
};

export default SocialButton;
