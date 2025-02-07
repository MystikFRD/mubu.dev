import React from "react";
import Button from "../Button";
import yourData from "../../data/portfolio.json";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const Socials = ({ className }) => {
    return (
        <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
            {yourData.socials.map((social) => {
                const IconComponent = FaIcons[social.icon] || SiIcons[social.icon];
                return (
                    <Button key={social.id} onClick={() => window.open(social.link)}>
                        {IconComponent && <IconComponent size={20} />}
                        <span className="ml-2">{social.title}</span>
                    </Button>
                );
            })}
        </div>
    );
};

export default Socials;
