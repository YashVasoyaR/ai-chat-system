export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-2 bg-gray-800 rounded-xl w-fit">
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
    </div>
  );
}
