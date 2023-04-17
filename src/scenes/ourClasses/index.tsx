import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Weight training classes are designed to help you build strength and increase muscle tone. With expert guidance from our trainers, you'll learn proper lifting techniques and develop a personalized workout plan.",
    image:image1,
  },
  {
    name: "Yoga Classes",
    description:
      " yoga classes are a great way to reduce stress, increase flexibility, and improve overall body awareness. Our experienced instructors will guide you through each pose, helping you to find peace and tranquility in your practice.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "If you're looking to tone your abs and strengthen your core, our ab core classes are the perfect choice. With targeted exercises and expert instruction, you'll see results in no time.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Fitness classes offer a full-body workout, incorporating a variety of exercises to improve strength, cardio, and flexibility. Whether you're a beginner or an experienced athlete, our classes are suitable for all fitness levels.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Training classes are designed to help you reach your fitness goals, whether you're looking to lose weight, build muscle, or improve your overall health. With expert guidance and personalized support, you'll be on your way to a healthier, happier you.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Our classes are designed to challenge and inspire you, no matter
              your fitness level or experience. Whether you're looking for
              high-intensity cardio, strength training, yoga, or something in
              between, we have a variety of classes to choose from. Our expert
              instructors will guide you through each workout, providing
              modifications and encouragement to help you reach your full
              potential.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap ">
            {classes.map((item, index) => (
              <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
