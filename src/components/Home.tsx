import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary mb-4">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-textPrimary mb-4">
            Kirthi Pandu.
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-textSecondary mb-8">
            I build things for the web.
          </h2>
          <p className="text-textSecondary max-w-2xl text-lg">
            I'm a software developer specializing in building exceptional
            digital experiences. Currently focused on building accessible,
            human-centered products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
