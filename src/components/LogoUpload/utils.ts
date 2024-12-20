export const handleDragEvents = (
  e: React.DragEvent,
  setDragActive: (active: boolean) => void
) => {
  e.preventDefault();
  e.stopPropagation();
  
  if (e.type === "dragenter" || e.type === "dragover") {
    setDragActive(true);
  } else if (e.type === "dragleave") {
    setDragActive(false);
  }
};