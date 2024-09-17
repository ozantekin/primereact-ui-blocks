import React from "react";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { motion } from "framer-motion";
import { Divider } from "primereact/divider";
import { Toast } from "primereact/toast";
import { useClickOutside } from "primereact/hooks";

export default function FeedbackMotion() {
  const toast = React.useRef<Toast | null>(null);
  const feedbackRef = React.useRef<HTMLDivElement | null>(null);

  const [message, setMessage] = React.useState("");
  const [star, setStar] = React.useState(0);
  const [hoveredStar, setHoveredStar] = React.useState(0);

  const renderStars = (count: number) =>
    Array.from({ length: count }).map((_, index) => (
      <button
        type="button"
        key={index}
        onMouseEnter={() => setHoveredStar(index + 1)}
        onClick={() => setStar(index + 1)}
        onMouseLeave={() => setHoveredStar(0)}
      >
        <i
          className={`pi pi-star-fill text-lg mr-1  ${
            star > index || hoveredStar > index
              ? " text-yellow-400"
              : " text-slate-200"
          }`}
        />
      </button>
    ));

  const resetForm = () => {
    setMessage("");
    setStar(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isFeedbackComplete = star > 0 && message.trim();
    toast.current?.show({
      severity: isFeedbackComplete ? "success" : "warn",
      summary: isFeedbackComplete
        ? "Feedback Submitted"
        : "Incomplete Feedback",
      detail: isFeedbackComplete
        ? `Your feedback: "${message}" | Rating: ${star} star(s)`
        : "Please provide feedback and a star rating.",
      life: 3000,
    });
    isFeedbackComplete && resetForm();
  };

  useClickOutside(feedbackRef, resetForm);

  return (
    <div className="min-h-60 relative">
      <Toast ref={toast} position="bottom-right" className="!absolute" />
      <div
        ref={feedbackRef}
        className="inline-flex border items-center justify-center p-3 rounded-md"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <span className="font-medium text-slate-500 mr-2">
              Was this useful?
            </span>
            <div className="mr-3">{renderStars(5)}</div>
            <Button
              type="submit"
              label="Send"
              size="small"
              className="shrink-0"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16, display: "none" }}
            animate={{
              opacity: star > 0 ? 1 : 0,
              y: star > 0 ? 0 : 16,
              display: star > 0 ? "block" : "none",
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <Divider />
            <InputTextarea
              rows={4}
              className="w-full"
              placeholder="Please enter your feedback"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </motion.div>
        </form>
      </div>
    </div>
  );
}
