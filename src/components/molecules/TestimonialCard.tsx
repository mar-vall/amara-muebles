import { StarRating } from '../atoms/StarRating';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-card p-10 border border-border flex flex-col justify-between">
      <div>
        <StarRating className="mb-6" />
        <p className="text-sm text-foreground italic mb-8 leading-relaxed">"{quote}"</p>
      </div>
      <p className="text-xs uppercase tracking-wider text-primary">{author}</p>
    </div>
  );
}
