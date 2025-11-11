interface ImageMarqueeProps {
  images: string[];
  reverse?: boolean;
  offset?: number;
}

const ImageMarquee = ({ images, reverse = false, offset = 0 }: ImageMarqueeProps) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`flex flex-col gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDelay: `${offset}s` }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="w-full aspect-square rounded-2xl overflow-hidden bg-muted flex-shrink-0"
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
