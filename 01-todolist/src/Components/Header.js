export default function Header() {

    // Array com os nomes dos dias da semana
    const weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    // Array com os nomes dos meses
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    // Obter a data atual
    const currentDate = new Date();

    // Extrair o dia da semana, o dia do mês, o mês e o ano
    const dayOfWeek = weekDays[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const formattedDate = `${dayOfWeek} - ${dayOfMonth} de ${month} de ${year}`;

    return (
        
        <header className="header">
            <h1>Olá, vamos finalizar as tarefas</h1>
            <h2>{ formattedDate }</h2>
        </header>

    );
}