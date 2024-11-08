import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Bem-vindo ao meu Portfólio!
      </motion.h1>
    </div>
  );
};

export default Home;
