import React from "react";

import { IconType } from "react-icons";

interface SkillsBlockProps {
  title: string;
  icon: IconType;
  careertag?: Array<string>;
}

function SkillsBlock({ title, icon }: SkillsBlockProps) {

  return (
    <div className="flex items-center justify-left rounded-md ring-2 ring-dark dark:ring-light p-4 m-4">
      {icon({ size: "5em" })}
      <div className="flex-1 justify-center text-center">
        <h2 className="text-4xl font-bold ml-2">{title}</h2>
      </div>
    </div>
  );
}

export default SkillsBlock;