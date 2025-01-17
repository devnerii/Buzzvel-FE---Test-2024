import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../../public/images/right.png";
import testmonial1 from "../../../public/images/testmonial-1.jpeg";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-start justify-between mx-auto h-[740px] sm:h-[650px] md:h-[680px] lg:h-[600px] xl:h-screen 2xl:h-screen bg-white text-black px-6 sm:px-6 md:px-10 lg:px-20 xl:px-20 2xl:px-20 max-w-screen-xl 2xl:max-w-screen-2xl 2xl:items-center"
    >
      {/* Esquerda: Texto */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full sm:w-full md:w-1/2 text-center sm:text-center md:text-left mt-64 sm:mt-64 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-[-80px]"
      >
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold text-[#0F172A] mb-4 leading-tight">
          Get the Sun to <br />
          Power Your Home
        </h1>
        <p className="text-base sm:text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mb-6 font-light text-[#0F172A]">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
        </p>

        {/* Alinhado o botão à esquerda */}
        <div className="flex justify-center md:justify-start 2xl:justify-start">
          <Button text="Request a Quote" ariaLabel="Request a Quote" />
        </div>

        {/* Testemunho */}
        <div className="mt-14 sm:mt-14 md:mt-14 lg:mt-14 xl:mt-20 2xl:mt-36 text-left">
          <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base font-light text-[#0F172A] mb-4">
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={testmonial1}
                alt="Image Testimonial"
                width={64}
                height={64}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div>
              <h1 className="text-sm font-light text-[#0F172A]">Rwanda Melflor</h1>
              <p className="text-sm font-light text-[#475569]">zerowaste.com</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Imagem: Posicionada à direita */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[-70px] sm:bottom-24 md:bottom-24 lg:bottom-24 xl:bottom-24 2xl:bottom-24 right-[-30px] lg:right-[-38px] xl:right-[-40px] 2xl:right-[-38px] w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[590px] 2xl:w-[600px] 2xl:top-30 2xl:left-auto"
      >
        <Image
          src={heroImage}
          alt="Imagem ilustrativa"
          layout="responsive"
          width={550}
          height={550}
          loading="eager"  // Isso desativa o lazy loading
        />
      </motion.div>
    </section>
  );
};

export default Hero;
