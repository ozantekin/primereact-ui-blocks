import React from "react";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { InputTextarea } from "primereact/inputtextarea";
import { motion } from "framer-motion";
import { Divider } from "primereact/divider";
import { Toast } from "primereact/toast";

export default function FeedbackMotionWithPopover() {
  const op = React.useRef<OverlayPanel | null>(null);
  const toast = React.useRef<Toast | null>(null);

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
          className={`pi pi-star-fill text-lg ${
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
    op.current?.hide();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isfeedbackComplete = star > 0 && message.trim();
    toast.current?.show({
      severity: isfeedbackComplete ? "success" : "warn",
      summary: isfeedbackComplete
        ? "Feedback Submitted"
        : "Incomplete Feedback",
      detail: isfeedbackComplete
        ? `Your feedback: "${message}" | Rating: ${star} star(s)`
        : "Please provide feedback and a star rating.",
      life: 3000,
    });

    isfeedbackComplete && resetForm();
  };

  return (
    <div className="min-h-72 relative">
      <Toast ref={toast} position="bottom-right" className="!absolute" />
      <Button
        label="Feedback"
        size="small"
        onClick={(e) => op.current?.toggle(e)}
      />
      <OverlayPanel
        ref={op}
        unstyled
        className="bg-white border rounded-md mt-2 p-4"
        onHide={resetForm}
      >
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 16, display: "none" }}
            animate={{
              opacity: star > 0 ? 1 : 0,
              y: star > 0 ? 0 : 16,
              display: star > 0 ? "block" : "none",
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <InputTextarea
              rows={4}
              className="w-full"
              placeholder="Please enter your feedback"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Divider />
          </motion.div>

          <div className="flex items-center">
            <span className="font-medium text-slate-500 mr-2">
              Was this useful?
            </span>
            <div className="flex gap-1 mr-4">{renderStars(5)}</div>
            <Button type="submit" label="Send" size="small" />
          </div>
        </form>
      </OverlayPanel>
    </div>
  );
}
