import Button from "../../components/ui/Button";

const StickyCallButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button
        variant="primary"
        size="lg"
        href="tel:+1234567890"
        className="shadow-lg"
      >
        Call Now
      </Button>
    </div>
  );
};

export default StickyCallButton;