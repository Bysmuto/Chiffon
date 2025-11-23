import { motion } from "framer-motion";
import { Instagram, Mail,Linkedin } from "lucide-react";
import { HandwrittenEffect } from "../funcs/Textfx";

const iconSize = 32;

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/chiffoncakecuritiba/",
    icon: <Instagram size={iconSize} />
  },
  {
    name: "Gmail",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=chiffon@gmail.com&su=work&body=i%20am%20interested%20in%20working%20with%20you",
    icon: <Mail size={iconSize} />
  },
  {
    name: "Outlook",
    url: "https://outlook.live.com/owa/?path=/mail/action/compose&to=email@example.com&subject=work&body=i%20am%20interested%20in%20working%20with%20you",
    icon: <Mail size={iconSize} />
  }
  ,
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/",
    icon: <Linkedin size={iconSize} />
  }

];

export default function Contact() {
  return (
    <div className="section  relative bg-main flex items-center justify-center px-6">
       <video
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.15] -z-50 "
          src="./bgs/bg5.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      <h1 className="text-7xl  tracking-wide font-anton">Contact us</h1>
      <h2 className="mb-5 text-3xl font-nycd"><HandwrittenEffect text={"And let's build something"}/> </h2>
      <div className="flex  flex-col items-center   gap-10">
        <div className="flex  gap-4">
       {socials.map((s, i) => (
  <motion.a
    initial={{ y:'30vh', opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      duration: 2.5,
      delay: 0.2 * i,
      ease: [0.22, 1, 0.36, 1]
    }}
    viewport={{ once: true, amount: 0.4 }}
    key={i}
    href={s.url}
    className="p-4 border-4 border-black bg-white rounded-md flex items-center gap-3 text-lg hover:bg-black hover:text-white transition-all"
    target="_blank"
    rel="noopener noreferrer"
  >
    {s.icon}
    {s.name}
  </motion.a>
))}
        </div>
      </div>
    </div>
  );
}
