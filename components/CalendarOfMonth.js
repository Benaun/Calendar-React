export default function CalendarOfMonth ({ month, year }) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 0).getDay(); // Начинаем с "нулевого" дня т.к. в США первый день недели Воскресенье
    const weeksInMonth = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
  
    function renderMonth() {
      const month = [];
      let dayCounter = 1;
  
      for (let week = 0; week < weeksInMonth; week++) {
        const weekArr = [];
        for (let day = 0; day < 7; day++) {
          if ((week === 0 && day < firstDayOfMonth) || dayCounter > daysInMonth) {
            weekArr.push(<td className="bg-slate-300 p-5 border-2"  key={`${week}-${day}`}></td>);
          } else {
            weekArr.push(<td className="bg-slate-100 p-5 border-2" key={`${week}-${day}`}>{dayCounter}</td>);
            dayCounter++;
          }
        }
        month.push(<tr key={week}>{weekArr}</tr>);
      }
  
      return month;
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th className="p-5 border-x-2 rounded-t-lg bg-red-400">Пн</th>
            <th className="p-5 border-x-2 rounded-t-lg bg-red-400">Вт</th>
            <th className="p-5 border-x-2 rounded-t-lg bg-red-400">Ср</th>
            <th className="p-5 border-x-2 rounded-t-lg bg-red-400">Чт</th>
            <th className="p-5 border-x-2 rounded-t-lg bg-red-400">Пт</th>
            <th className="p-5 border-x-2 rounded-t-lg bg-red-400">Сб</th>
            <th className="p-5 border-x-2 rounded-t-lg bg-red-400">Вс</th>
          </tr>
        </thead>
        <tbody>{renderMonth()}</tbody>
      </table>
    );
  };