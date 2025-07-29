import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Master Phone Conversations with AI
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Practice calls, interviews, and small talk in real-time. No login needed.
      </p>
      <a href="tel:+1234567890">
        <Button variant="primary">
          📞 Call Now to Practice
        </Button>
      </a>
    </section>
  );
};

export default Hero;