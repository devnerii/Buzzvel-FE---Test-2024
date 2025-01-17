import { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import avatar1 from "../../../public/images/avatar-1.jpeg";
import avatar2 from "../../../public/images/avatar-2.jpeg";
import avatar3 from "../../../public/images/avatar-3.jpeg";
import avatar4 from "../../../public/images/avatar-4.jpeg";


interface TestimonialType {
  quote: string;
  author: string;
  position: string;
  image: string; // Caminho da imagem
}

const testimonials: TestimonialType[] = [
  {
    quote: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    author: "Jane Cooper",
    position: "10KWh",
    image: avatar1.src
  },
  {
    quote: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    author: "Ralph Edwards",
    position: "32KWh",
    image: avatar2.src
  },
  {
    quote: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    author: "Courtney Henry",
    position: "6KWh",
    image: avatar3.src
  },
  {
    quote: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    author: "Cameron Williamson",
    position: "12KWh",
    image: avatar4.src
  },
  {
    quote: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    author: "Cameron Williamson",
    position: "12KWh",
    image: avatar4.src
  },
 
];


const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const TestimonialCarousel: React.FC = () => {
  const size = useWindowSize();
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (size.width >= 1536) {
      setItemsPerView(4);
    } else if (size.width >= 1280) {
      setItemsPerView(3);
    } else if (size.width >= 1024) {
      setItemsPerView(3);
    } else if (size.width >= 768) {
      setItemsPerView(2);
    } else {
      setItemsPerView(1);
    }
  }, [size.width]);

  const totalItems = testimonials.length;

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + itemsPerView) % totalItems);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - itemsPerView + totalItems) % totalItems);
  };

  const getCurrentTestimonials = (): { testimonial: TestimonialType; index: number }[] => {
    const currentTestimonials: { testimonial: TestimonialType; index: number }[] = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (current + i) % totalItems;
      currentTestimonials.push({ testimonial: testimonials[index], index });
    }
    return currentTestimonials;
  };

  const currentTestimonials = getCurrentTestimonials();

  return (
    <section
      id="testimonials"
      className="py-20 bg-[#581C87] h-auto lg:h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Título e Descrição */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-sm font-bold text-[#FCD34D] mb-2">
              Join other Sun harvesters
            </h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white md:whitespace-nowrap">
              Make something awesome
            </h1>
            <p className="text-sm font-normal leading-relaxed text-white max-w-6xl mt-4">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
          </div>

          {/* Botão */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end space-x-4 mt-4 lg:mt-8">
            <Button text="Request a Quote" ariaLabel="Request a Quote" buttonType="button2" />
          </div>
        </div> 

        {/* Carrossel de Depoimentos */}
        <div className="mt-12 overflow-hidden relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`${current}-${direction}`}
              className={`flex gap-6 flex-nowrap`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", stiffness: 300, damping: 20 },
                opacity: { duration: 0.2 },
              }}
            >
              {currentTestimonials.map(({ testimonial, index }) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  image={testimonial.image}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botões de Navegação */}
        <div className="flex justify-center md:justify-start space-x-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="border border-[#FCD34D] hover:bg-[#e6b938] text-[#FCD34D] hover:text-[#FFFFFF] p-3 rounded-full focus:outline-none transition-colors duration-300"
            aria-label="Anterior"
          >
            <GoArrowLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="border border-[#FCD34D] hover:bg-[#e6b938] text-[#FCD34D] hover:text-[#FFFFFF] p-3 rounded-full focus:outline-none transition-colors duration-300"
            aria-label="Próximo"
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
