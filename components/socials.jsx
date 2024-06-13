import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, link: 'https://github.com/Asante-05'},
    {icon: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/owusu-kofi-13094a22a/'},
    {icon: <FaTwitter/>, link: 'https://x.com/___asante___'},
]

function Socials({containerStyle, iconStyle}) {
  return (
    <div className={containerStyle}>
        {socials.map((item, index)=>(
            <Link href={item.link} key={index} className={iconStyle}>{item.icon}</Link>
        ))}
    </div>
  )
}

export default Socials