import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
import { Image } from "primereact/image";

const REVIEWS = [
  {
    stars: 5,
    rating: 4.9,
    totalReviews: "22k",
    label: "Apple",
    icon: "pi pi-apple",
  },
  {
    stars: 4,
    rating: 4.4,
    totalReviews: "15k",
    label: "Google",
    icon: "pi pi-google",
  },
];

export default function ReviewAndImageSection() {
  const renderStars = (count: number) =>
    Array.from({ length: count }, (_, index) => (
      <i key={index} className="pi pi-star-fill" />
    ));

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lorem ipsum
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Lorem ipsum odor amet, consectetuer adipiscing elit.
        </p>

        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
          <Button label="Get started" />
          <Button label="Contact us" outlined />
        </div>

        <section className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-4">
          {REVIEWS.map((review, index) => (
            <div className="py-5" key={index}>
              <div className="flex space-x-1">{renderStars(review.stars)}</div>
              <p className="mt-3 text-sm">
                <span className="font-bold">{review.rating}</span> /5 - from{" "}
                {review.totalReviews} reviews
              </p>

              <Chip label={review.label} icon={review.icon} className="mt-4" />
            </div>
          ))}
        </section>
      </div>

      <Image
        src="https://fakeimg.pl/800x400?text=primereact/+blocks&font=bebas"
        alt="Image"
        width="800"
      />
    </div>
  );
}
