import whatsappImage from "@/assets/icons/whatsapp.png"

const WhatsAppButton = () => {
  const phoneNumber = "8788523391"; 
  const message = encodeURIComponent("Hello! I have a question about Kunamix.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-99999 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappImage} alt="whatsapp" />
    </a>
  );
};

export default WhatsAppButton;