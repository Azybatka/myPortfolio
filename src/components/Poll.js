import { useState, useEffect } from "react";

const initialVotes = {
  aiRise: 0,
  greenReform: 0,
  techSplit: 0,
  chaos: 0,
};

const Poll = () => {
  const [votes, setVotes] = useState(() => {
    const saved = localStorage.getItem("pollVotes");
    return saved ? JSON.parse(saved) : initialVotes;
  });

  const [voted, setVoted] = useState(() => {
    return localStorage.getItem("hasVoted") === "true";
  });

  const [selected, setSelected] = useState("");

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const handleVote = (e) => {
    e.preventDefault();
    if (!selected) return;

    const newVotes = { ...votes, [selected]: votes[selected] + 1 };
    setVotes(newVotes);
    localStorage.setItem("pollVotes", JSON.stringify(newVotes));
    localStorage.setItem("hasVoted", "true");
    setVoted(true);
  };

  const getPercent = (count) =>
    totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-2xl">
      <h2 className="text-xl font-bold mb-4">
        🌍 Что, по-твоему, будет с человечеством в ближайшие 10 лет?
      </h2>

      {!voted ? (
        <form onSubmit={handleVote} className="space-y-3">
          {Object.entries({
            aiRise: "ИИ всё захватит, мы станем зрителями перемен.",
            greenReform: "Люди одумаются, экология и этика победят.",
            techSplit: "Мир разделится на техно-элиту и остальных.",
            chaos: "Нас ждёт хаос и борьба за ресурсы.",
          }).map(([key, label]) => (
            <label key={key} className="flex items-center space-x-2">
              <input
                type="radio"
                name="poll"
                value={key}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span>{label}</span>
            </label>
          ))}

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Проголосовать
          </button>
        </form>
      ) : (
        <div className="space-y-3">
          {Object.entries({
            aiRise: "ИИ всё захватит",
            greenReform: "Экология победит",
            techSplit: "Разделение мира",
            chaos: "Хаос и борьба",
          }).map(([key, label]) => (
            <div key={key} className="w-full">
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>{label}</span>
                <span>{getPercent(votes[key])}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-2"
                  style={{ width: `${getPercent(votes[key])}%` }}
                ></div>
              </div>
            </div>
          ))}

          <p className="text-sm text-gray-500 pt-2">
            Всего голосов: {totalVotes}
          </p>
        </div>
      )}
    </div>
  );
};

export default Poll;
