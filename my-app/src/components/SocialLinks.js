import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiGooglemeet } from "react-icons/si";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md hover:bg-blue-800',
        },
        {
            id: 2,
            child: (
            <>
            Whatsapp <FaWhatsappSquare size={30}/>
            </>
            ),
            href: 'https://chat.whatsapp.com/KHwagQxWaVUB6U0KPCJu8v',
            style: 'hover:bg-green-900',
        },
        {
            id: 3,
            child: (
            <>
            Mail <HiOutlineMail size={30}/>
            </>
            ),
            href: 'mailto:foo@gmail.com',
            style: 'hover:bg-gray-600',
        },
        {
            id: 5,
            child: (
            <>
            Facebook <FaFacebookSquare size={30}/>
            </>
            ),
            href: 'https://www.facebook.com/yourpage',
            style: 'hover:bg-blue-700',
        },
        {
            id: 6,
            child: (
            <>
            X <FaTwitter size={30}/>
            </>
            ),
            href: 'https://twitter.com/yourprofile',
            style: 'hover:bg-black',
        },
        {
            id: 7,
            child: (
            <>
            Instagram <FaInstagram size={30}/>
            </>
            ),
            href: 'https://www.instagram.com/yourprofile',
            style: 'hover:bg-pink-600',
        },
        {
            id: 8,
            child: (
            <>
            Google Meet <SiGooglemeet size={30}/>
            </>
            ),
            href: 'https://meet.google.com/vba-zdbt-gpw',
            style: 'hover:bg-green-500',
        },
    ];

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    <li 
                        key={id} 
                        className={
                            "flex justify-between items-center w-40 h-14 " +
                            "px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md " +
                            "duration-300 bg-black" + 
                            " " + 
                            style
                        }
                    >
                        <a 
                            href={href} 
                            className='flex justify-between items-center w-full text-white'
                            download={download}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
