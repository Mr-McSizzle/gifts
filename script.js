"use strict";

const { useState } = React;
const { motion } = window.FramerMotion;

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CuteCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] p-4">
      <div className="relative w-full max-w-md mx-auto">
        {/* Card container with perspective */}
        <div className="relative w-full aspect-[3/4] perspective-1000">
          {/* Card cover (front) */}
          <motion.div
            className={cn(
              "absolute inset-0 origin-bottom rounded-lg shadow-lg",
              "bg-gradient-to-br from-pink-200 to-pink-100",
              "flex flex-col items-center justify-center"
            )}
            initial={false}
            animate={{
              rotateX: isOpen ? -180 : 0,
              boxShadow: isOpen
                ? "0 -5px 20px rgba(0,0,0,0.1)"
                : "0 10px 30px rgba(0,0,0,0.15)",
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
          >
            {/* Card cover content */}
            <div
              className={cn(
                "absolute inset-0 backface-hidden p-8",
                "flex flex-col items-center justify-center"
              )}
            >
              {/* Decorative border */}
              <div className="absolute inset-4 border-2 border-pink-300 rounded-lg opacity-50"></div>

              {/* Heart button */}
              <button
                onClick={toggleCard}
                className="transform transition-all duration-300 hover:scale-110 focus:outline-none"
                aria-label="Open card"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-pink-500 fill-pink-300 filter drop-shadow-md"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>

              <p className="mt-6 text-pink-700 font-medium text-lg">
                Click the heart to open
              </p>

              {/* Decorative elements */}
              <div className="absolute top-6 left-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-400 fill-pink-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="absolute bottom-8 right-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-pink-400 fill-pink-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card inside (revealed when opened) */}
          <div className="absolute inset-0 rounded-lg bg-white shadow-inner overflow-hidden">
            {/* Inside decorative border */}
            <div className="absolute inset-3 border border-purple-100 rounded-lg"></div>

            {/* Inside content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-pink-500 fill-pink-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Your Special Message
              </h3>

              <p className="text-lg text-pink-600 mb-6">
                You are amazing and wonderful!
                <br />
                Never forget how special you are.
              </p>

              <button
                onClick={toggleCard}
                className="mt-4 px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
              >
                Close card
              </button>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-300 fill-purple-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="absolute bottom-10 left-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-300 fill-purple-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-r from-pink-50 to-purple-50">
      <CuteCard />
    </main>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));